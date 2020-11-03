export default {
    template:`
    <header class="app-header">
        <nav class="app-nav flex space-between clean-list">
            <div class="logo flex justify-end">
                <i class="far fa-pegasus fa-2x"></i>
                <h1>Pegasus</h1>
            </div>
            <button class="open-menue" @click="toggleMenue"><i class="fa fa-bars"></i></button>
            <section :class="{hidden}" class="nav-links flex" ref="navLink">
                <router-link tag="li" @click.native="toggleMenue" to="/">Home</router-link>  
                <router-link tag="li" @click.native="toggleMenue" to="/books/" >Books</router-link>  
                <router-link tag="li" @click.native="toggleMenue" to="/email/" >Email</router-link>  
                <router-link tag="li" @click.native="toggleMenue" to="/notes">Notes</router-link>  
                <router-link tag="li" @click.native="toggleMenue" to="/about">About</router-link>  
            </section>
        </nav>
    </header>
    `,
    data(){
        return{
            hidden:true
        }
    },
    methods:{
        toggleMenue(){
            this.hidden = !this.hidden
        }
    }
}

