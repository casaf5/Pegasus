import {eventBus} from '../../../services/event-bus.service.js'

export default {
    name:'list-tools',
    props: ['checkedEmails','emailsAmount'],
    template:`
    <section class="list-tools flex space-between align-start">
        <div class="flex align-start">
            <label class="check-container" v-show="emailsAmount>0">
                <input v-model="checkAll"  ref="checkBox" @change.stop="toggleCheckAll" type="checkbox" title="Check All">
                <span class="checkmark"></span>
            </label>
            <i :class="envelopeType" v-if="showTools" @click.stop="toggleAllTags('isRead')" :title="envelopeTitle"></i>
            <i :class="starType" v-if="showTools" @click.stop="toggleAllTags('isStared')" :title="starTitle"></i>
            <i class="fas fa-trash" v-if="showTools" @click.stop="deleteCheckedEmails" title="Delete"></i>
            <i class="fas fa-tag" v-if="showTools"></i>
        </div>
        <span>{{emailsAmount}} in this list</span>
    </section>
    `,
    data(){
        return{
            checkAll: false,
            showTools:false
        }
    },
    created(){
    },
    computed:{
        envelopeType(){
            return (this.checkedEmails.every(email => email.tags.isRead))? 'fas fa-envelope':'fas fa-envelope-open-text'
        },
        envelopeTitle(){
            return (this.checkedEmails.every(email => email.tags.isRead))? 'Mark as Unred':'Mark as Read'
        },
        starType(){
            return (this.checkedEmails.every(email => email.tags.isStared))? 'far fa-star': 'fas fa-star'
        },
        starTitle(){
            return (this.starType==='far fa-star')? 'Remove From Stared' : 'Add To Stared'
        },
    },
    methods:{
        toggleCheckAll(){
            const set = (this.checkedEmails.length===0)? true: false
            eventBus.$emit('checkAll',set)
        },
        clearChecked(){
            this.$emit('clear')
        },
        toggleAllTags(tag){
            const state = (this.checkedEmails.every(email => email.tags[tag]))? false: true
            eventBus.$emit('changeTags',tag,state,this.checkedEmails.map(email=> email.id))
            this.clearChecked()
        },
        deleteCheckedEmails(){
            eventBus.$emit('deleteEmail', this.checkedEmails)
            this.clearChecked()
        },
    },
    watch:{
        checkedEmails(newChecked){
            this.checkAll = (newChecked.length>0)? true: false
            this.showTools = (newChecked.length>0)? true : false
        },
        '$route.params'(){
            this.clearChecked()
        }, 
    },
}