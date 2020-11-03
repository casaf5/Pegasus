import {eventBus} from '../../../services/event-bus.service.js'

export default {
    name:'email-preview',
    props:['email'],
    template:`
    <div class="email-preview">
        <div class="preview-opt">
            <label class="check-container">
                <input v-model="checked" @change.stop="toggleInCheckedList(email)" type="checkbox" title="Tick">
                <span class="checkmark"></span>
            </label>
            <!-- <input v-model="checked" @change.stop="toggleInCheckedList(email)" type="checkbox" title="Tick"> -->
            <i :class="envelopeType" @click.stop="toggleTag('isRead')" :title="envelopeTitle"></i>
            <i :class="starType" @click.stop="toggleTag('isStared')" :title="starTitle"></i>
        </div>
            <span class="from-prev" :class="textBold" :title="email.from" @click="showEmailDetails">{{fromName}}</span>
            <div class="subject-body-preview" :class="textBold" @click="showEmailDetails">
                <span class="subject-prev" :title="email.subject">{{subject}}</span>
                <span class="body-prev">{{body}}</span>
            </div>
            <span class="date-prev" :title="fullDate" @click="showEmailDetails">{{date}}</span>
        </div>
    </div>
    `,
    data(){
        return{
            checked:false,
        }
    },
    created(){
        eventBus.$on('clearChecks',()=> this.checked=false)
        eventBus.$on('checkAll',(action)=>{
            if (action) this.checked =true
            else this.checked=false
            this.toggleInCheckedList(this.email)
        })
    },
    computed:{
        tags(){
            return this.email.tags
        },
        fromName(){
            let from = this.email.from.substring(0,this.email.from.indexOf('@'))
            return (from.length>15)? from.substring(0,15)+'...': from
        },
        subject(){
            const subject = this.email.subject
            return (subject.length>15)? subject.substring(0,15)+'... -': subject+' -'
        },
        body(){
            const body = this.email.body
            return (body&&body.length>100)? body.substring(0,100)+'...': body
        },
        starType(){
            return (this.tags.isStared)? 'fas fa-star': 'far fa-star'
        },
        starTitle(){
            return (this.starType==='far fa-star')? 'Add To Stared' : 'Remove From Stared'
        },
        envelopeType(){
            return (this.tags.isRead)? 'fas fa-envelope-open-text': 'fas fa-envelope'
        },
        envelopeTitle(){
            return (this.envelopeType==='fas fa-envelope')? 'Mark as Read' : 'Mark as Unred'
        },
        textBold(){
            return (this.tags.isRead)? '': 'bold'
        },
        fullDate(){
            return new Date(this.email.sentAt).toLocaleString()
        },
        date(){
            return new Date(this.email.sentAt).toLocaleDateString()
        },
    },
    methods:{
        toggleTag(tag){
            this.tags[tag] = !this.tags[tag]
            eventBus.$emit('updateEmail',this.email.id,this.tags)
        },
        toggleInCheckedList(email){
            if (this.checked) this.$emit('checkBox','add',email)
            else this.$emit('checkBox','remove',email)
        },
        showEmailDetails(){
            this.$router.push('/email/details/' + this.email.id)
        },
    },
}