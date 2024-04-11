<template>
  <the-navigation @set-page="setActivePage"></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      activePage: 'teams-list',
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'QA', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Mike Rose', role: 'Engineer' },
        { id: 'u2', fullName: 'John Doe', role: 'Engineer' },
        { id: 'u3', fullName: 'Tex Vil', role: 'QA' },
        { id: 'u4', fullName: 'George Doe', role: 'Engineer' },
        { id: 'u5', fullName: 'Ann Smith', role: 'QA' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    setActivePage(page) {
      this.activePage = page;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>