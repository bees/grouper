<template>
  <div class="vc-page" transition="app">
    <header-bar class="header-bar-demo">
    <icon-button @click="openNav" slot="left" icon="menu"></icon-button>
    <span>Grouper</span>
    </header-bar>
    <content>
      <content-title>
        Your Channels
      </content-title>
      <list>
        <item-cell>
          <item-title>ECE 445</item-title>
          <item-title-after>
            <badge value="23"></badge>
          </item-title-after>
        </item-cell>
        <item-cell>
          <item-title>CS 473</item-title>
          <item-title-after>
            <badge value="23"></badge>
          </item-title-after>
        </item-cell>
      </list>
      <float-button v-link="{name: 'search'}" fixed></float-button>
    </content>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    openNav: function () {
      this.$dispatch('menu-show')
    }
  }
}
</script>

<style scoped>
</style>
