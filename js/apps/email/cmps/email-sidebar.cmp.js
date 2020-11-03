
export default {
    name:'email-sidebar',
    props: ['allEmails'],
    template:`
    <section class="side-bar flex col space-between">
        <div class="sidebar-links">
            <router-link class="side-link" to="/email/compose/new"><i class="link-icon fas fa-file"></i><span>Compose</span></router-link>
            <router-link class="side-link" to="/email"><i class="link-icon fas fa-inbox-in"></i><span>Inbox</span></router-link>
            <router-link class="side-link" to="/email/sent"><i class="link-icon fas fa-inbox-out"></i><span>Sent</span></router-link>
            <router-link class="side-link" to="/email/stared"><i class="link-icon fas fa-star"></i><span>Stared</span></router-link>
            <router-link class="side-link" to="/email/drafts"><i class="link-icon fab fa-firstdraft"></i><span>Drafts</span></router-link>
            <router-link class="side-link" to="/email/deleted"><i class="link-icon fas fa-trash"></i><span>Deleted</span></router-link>
        </div>
    </section>
    `,
}