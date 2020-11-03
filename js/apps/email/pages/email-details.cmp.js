import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus.service.js';

export default {
	name: 'email-details',
	template: `
    <section v-if="emailToShow" class="email-details flex col">
        <div class="details-btns flex space-between">
            <div class="details-tools">
				<i class="fas fa-arrow-left" @click="backTolist" title="Back to List"></i>
                <i class="fas fa-trash" @click="deleteEmail" title="Delete"></i>
				<i class="fas fa-reply" @click="reply" title="Reply"></i>
                <i :class="envelopeIcon" @click="toggleTag('isRead')" @mouseover="closedEnvelope" @mouseout="openEnvelope" title="Mark as Unred"></i>
                <i :class="starType" @click="toggleTag('isStared')" :title="starTitle"></i>
                <i class="fas fa-edit" @click="saveAsNote" title="Save as Note"></i>
                <i class="fas fa-tag"></i>
            </div>
            <div class="">
                <i class="fas fa-chevron-left"></i>
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
		<div class="info-box">	
			<div class="email-subject">
				{{emailToShow.subject}}
			</div>
			<div class="sent-from-details flex space-between">
				<div>
					<span class="from-name">{{fromName}} -</span><span class="from-adress">{{emailToShow.from}}</span>
				</div>
				<span class="full-date">{{fullDate}}</span>
			</div>
		</div>
        <div class="email-body grow" v-html="emailToShow.body">
        </div>
    </section>
    `,
	data() {
		return {
			emailToShow: null,
			envelopeIcon: 'fas fa-envelope-open-text',
		};
	},
	created() {
		emailService.getById(this.$route.params.id).then((book) => {
			this.emailToShow = book;
			this.emailToShow.tags.isRead = true;
			this.updateEmail();
        });
	},
	computed: {
		starType() {
			return this.emailToShow.tags.isStared ? 'fas fa-star' : 'far fa-star';
		},
		starTitle() {
			return this.starType === 'far fa-star'
				? 'Add To Stared'
				: 'Remove From Stared';
		},
		fullDate() {
			return new Date(this.emailToShow.sentAt).toLocaleString();
		},
		fromName() {
			return this.emailToShow.from.substring(
				0,
				this.emailToShow.from.indexOf('@')
			);
		},
	},
	methods: {
		toggleTag(tag) {
			this.emailToShow.tags[tag] = !this.emailToShow.tags[tag];
			this.updateEmail();
			if (tag === 'isRead') this.backTolist(); //this.$router.push('/email/')
		},
		closedEnvelope() {
			this.envelopeIcon = 'fas fa-envelope';
		},
		openEnvelope() {
			this.envelopeIcon = 'fas fa-envelope-open-text';
		},
		updateEmail() {
			eventBus.$emit('updateEmail', this.emailToShow.id,this.emailToShow.tags);
		},
		backTolist() {
			this.$router.go(-1);
		},
		deleteEmail() {
			eventBus.$emit('deleteEmail', [this.emailToShow]);
			this.$router.go(-1);
		},
		saveAsNote(){
			this.$router.push(`/notes?body=${this.emailToShow.body}&subject=${this.emailToShow.subject}`)
		},
		reply(){
			const subject = 'Re: ' + this.emailToShow.subject 
			this.$router.push(`/email/compose/new?type=reply&subject=${subject}`)
		}
	},
};
