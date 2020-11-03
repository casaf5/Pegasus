export default {
    name:'email-status',
    props:['allEmails'],
    template:`
    <section class="email-status" v-if="allEmails">
        <span>{{emailsCount}} Emails</span>
        <span>{{unreadCount}} Unread</span>
    </section>
    `,
    computed:{
        emailsCount(){
            return this.allEmails.length
        },
        unreadCount(){
            return this.allEmails.filter(email=> email.tags.isRead===false).length
        }
    },
}