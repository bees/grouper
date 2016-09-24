<template>
<div id="app">
  <router-view transition="slide" keep-alive></router-view>
  <nav-drawer :show.sync="navShow">
  <div slot="header" class="nav-icon-logo">
  </div>
  <div slot="header" class="nav-demo-title">
  Grouper
  </div>
  <div slot="header" class="nav-demo-sub-title">
  You know, like the fish
  </div>
  <nav-menu-header></nav-menu-header>
  <nav-menu @click="closeNav()" icon="home" v-link="{name: 'home'}" title="Home"></nav-menu>
  <nav-menu @click="closeNav()" icon="chat" v-link="{name: 'home'}" title="Recent Messages"></nav-menu>
  <nav-menu @click="closeNav()" icon="search" v-link="{name: 'search'}" title="Search Channels"></nav-menu>
  <nav-divider></nav-divider>
  <nav-menu @click="closeNav()" icon="account_box" v-link="{name: 'home'}" title="View Account"></nav-menu>
  <nav-menu @click="closeNav()" icon="info_outline" v-link="{name: 'home'}"  title="About"></nav-menu>
  </nav-drawer>
</div>
</template>

<script>
import { db, getInterestsOnce, Interests, createInterest } from './services/firebase'
export default {
  data () {
    return {
      navShow: false
    }
  },
  methods: {
    closeNav () {
      this.navShow = false
    }
  },
  events: {
    'menu-show': function () {
      this.navShow = true
    }
  },
  ready () {
    getInterestsOnce()
  }
}
</script>

<style>
.slide-transition {
  transition-duration: .3s;
  width: 100%;
}

.slide-enter, .slide-leave {
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
}
.app-transition {
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
}
.app-enter, .app-leave {
  opacity: 0;
}
</style>
