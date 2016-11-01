<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'
import NotesList from './components/NotesList'
import Editor from './components/Editor'
import store from './components/store'
import { initStore } from './vuex/actions'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor
  },
  store,
  vuex: {
    actions: {
      initStore
    }
  },
  ready() {
    //调用了 actions 里面的 initStore 来初始化我们的 store 里面的 state
    this.initStore()
  }
}
</script>

<style>
html, #app {
    height: 100%;
  }

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
</style>
