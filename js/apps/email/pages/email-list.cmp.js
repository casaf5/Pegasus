import emailPreview from '../cmps/email-preview.cmp.js';
import listTools from '../cmps/list-tools.cmp.js';
import { eventBus } from '../../../services/event-bus.service.js';

export default {
	name:'email-list',
	props: ['emailsToShow'],
	template: `
    <section class="email-list" v-if="emailsToShow">
        <list-tools @clear="clearChecks" :checkedEmails="checkedEmails" :emailsAmount="emailsToShow.length"/>
        <email-preview v-for="(email,idx) in emailsToShow" :email="email" :idx="idx" @checkBox="emailInCheckedList" :key="idx"/>
        <h1 v-if="emailsToShow.length===0" class="email-preview no-emails">No Emails To Show</h1>
    </section>
    `,
	data() {
		return {
			checkedEmails: [],
		};
	},
	created(){
		eventBus.$on('getCurrList',()=>{
			eventBus.$emit('currListSent',this.emailsToShow)
		});
	},
	methods: {
		emailInCheckedList(action, email) {
			const checkedEmails = this.checkedEmails;
			if (action === 'add') checkedEmails.push(email);
			else if (action === 'remove') {
				const id = checkedEmails.findIndex((emailIn) => emailIn.id === email.id);
				checkedEmails.splice(id, 1);
			}
		},
		clearChecks() {
			this.checkedEmails = [];
			eventBus.$emit('clearChecks');
		},
	},
	components: {
		emailPreview,
		listTools,
	},
};
