<template>
  <div id="toolbar">
    <i class="glyphicon logo"><img src="../assets/logo.png" width="30" height="30"></i>
    <i v-on:click='newNote' class="glyphicon glyphicon-plus"></i>
    <i v-on:click='toggleFavourite' v-bind:class="{starred: activeNote.favourite}" class="glyphicon glyphicon-star"></i>
     <i v-on:click='deleteNote' class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { newNote, deleteNote, toggleFavourite } from '../vuex/actions'
import { activeNote } from '../vuex/getters'

export default {
  vuex: {
    getters:{
      activeNote
    },
    actions: {
      newNote,
      deleteNote,
      toggleFavourite
    }
  },
  ready() {
    //调用了 actions 里面的 initStore 来初始化我们的 store 里面的 state
    this.initStore()
  }
}
</script>

<style lang="scss" scoped>
  #toolbar{
    float: left;
    width: 80px;
    height: 100%;
    background-color: #30414D;
    color: #767676;
    padding: 35px 25px 25px 25px;

    .starred {
      color: #F7AE4F;
    }

    i{
      font-size: 30px;
      margin-bottom: 35px;
      cursor: pointer;
      opacity: 0.8;
      transition: opacity 0.5s ease;

      &:hover{
        opacity: 1;
      }
    }
  }
</style>
