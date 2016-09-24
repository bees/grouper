<template>
  <div class="vc-page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Add New Interests</span>
    </header-bar>
    <search-bar :focus.sync="focus" placeholder="Search"></search-bar>
    <content>
      <overlay v-if="focus"></overlay>
      <list>
        <item-cell v-for="result in results">
          <item-title>{{ result.name }}</item-title>
          <item-title-after>
           <icon-button icon="add" color="green" fill></icon-button>
          </item-title-after>
        </item-cell>
      </list>
      <float-button @click="interestCreate" color="blue" fixed></float-button>
      <modal title="Create an Interest" msg="test" :show.sync="interestCreateModal">
        <form-list>
          <text-field label="Interest Name" placeholder="e.g. CLCV 115" :value.sync="newInterest.name"></text-field>
          <checkbox v-for="item in newInterest.options" name="Options" :model.sync="newInterest.optionsModel" :value="item" :label="item"></checkbox>
        </form-list>
        <button slot="footer" text="Create Interest" @click="createNewInterest"></button>
      </modal>
    </content>
  </div>
</template>

<script>
import { db, getInterestsOnce, Interests, createInterest } from '../services/firebase'

export default {
  data () {
    return {
      focus: false,
      interestCreateModal: false,
      newInterest: {
        name: '',
        options: ['Private'],
        optionsModel: []
      },
      results: [
        {
          name: 'CS 431'
        },
        {
          name: 'CS 498'
        }
      ]
    }
  },
  methods: {
    back: function () {
      window.history.back()
    },
    interestCreate () {
      this.interestCreateModal = true 
    },
    createNewInterest () {
      createInterest(this.newInterest.name, false)
    }
  }
}
</script>

<style>
</style>
