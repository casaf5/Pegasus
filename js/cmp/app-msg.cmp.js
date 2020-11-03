import {eventBus} from '../services/event-bus.service.js'

export default {
    template: `
    <div class="app-message" :class="msgClass" v-show="message">
        <h3>{{message}}</h3>
    </div>
    `,
    data() {
        return {
            message: '',
            timeoutMsg:null,
            msgClass:'',
        }
    },
  
    created() {
        eventBus.$on('message', (msg,msgClass) => {
            this.message = msg
            this.msgClass=msgClass
            this.timeoutMsg=setTimeout(()=>{
                this.message=''
            },3000)
        })
    },
    destroyed(){
        clearTimeout(this.timeoutMsg)
    }

}