import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList },
        { path: '/teams/:teamId', component: TeamMembers }
    ],
    linkActiveClass: 'active-link'
});

const app = createApp(App);
app.use(router)
app.mount('#app')
