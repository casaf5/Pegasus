export default {
  template: `
    <section class="app-home ">
            <h1>Welcome To Pegasus</h1>
            <h3>Where Design and Productivity Combine</h3>
            <div class="apps flex space-around wrap">
                <section class="product col-layout" @click="goto('books')">
                    <h3 class="app-title">Books</h3>
                    <i class="far fa-book fa-4x"></i></i>
                    <p>Search,view and buy your favorite books</p>
                </section>
                <section class="product col-layout" @click="goto('email')">
                    <h3 class="app-title">Email</h3>
                    <i class="far fa-envelope fa-4x"></i></i>
                    <p>Organize your mails in our brand new ,fresh looking email design</p>
                </section>
                <section class="product col-layout" @click="goto('notes')">
                     <h3 class="app-title">Notes</h3>
                     <i class="far fa-sticky-note fa-4x"></i>
                     <p>Kepp track of the things your need to remember</p>
                </section>
            </div>
    </section>
    `,
    methods:{
        goto(location){
            this.$router.push(`/${location}`);
        }
    }
};

