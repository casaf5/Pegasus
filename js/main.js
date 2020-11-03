import { myRouter } from './routes.js';
import appHeader from './cmp/app-header.cmp.js';
import appFooter from './cmp/app-footer.cmp.js';
import generalMsg from './cmp/app-msg.cmp.js';
// import userMsg from './cmps/user-msg.cmp.js';


new Vue({
    el: '#App',
    router: myRouter,
    template: `
        <main class="page-container flex col">
            <app-header/> 
            <router-view class="main-page"/>
            <app-footer/>
            <general-msg/>
        </main>
    `,
    components: {
        appHeader,
        appFooter,
        generalMsg,
    }
});
