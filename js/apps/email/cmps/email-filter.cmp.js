export default {
    name:'email-filter',
    template:`
    <section class="email-filter flex align-center">
        <input type="search" placeholder="Search your emails" v-model="filterBy.txt" @input="onFilter"/>
            <select class="filter-opt" v-model="filterBy.type" @change="onFilter">
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
            </select>   
    </section>
    `,
    data(){
        return {
            filterBy:{
                txt:'',
                type:'all'
            }
        };
    },
    methods:{
        onFilter(){
            this.$emit('filter',this.filterBy)
        }
    },
}