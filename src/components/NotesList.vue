<template>
    <div id="notes-list">
        <div id="list-header">
          <h2>Notes | hahaha</h2>
          <div class="btn-group btn-group-justified">
            <!-- all -->
              <div class="btn-group">
                <button class="btn btn-default" v-on:click="toggleShow('all')" v-bind:class="{active: show === 'all'}">
                  Favourites
                </button>
              </div>

              <!-- favourites -->
              <div class="btn-group">
                <button class="btn btn-default" v-on:click="toggleShow('favourite')" v-bind:class="{active: show === 'favourite'}">
                  Favourites
                </button>
              </div>
          </div>
        </div>
        <!-- 渲染笔记列表 -->
          <div class="container">
              <div class="list-group">
                  <a href="#" v-for='note in filteredNotes' class='list-group-item' v-bind:class="{active: activeNote === 'note'}" v-on:click='updateActive(note)'>
                    <h4 class="list-group-item-heading">
                      {{note.title.trim().substring(0,30)}}
                    </h4>
                  </a>
              </div>
          </div>
    </div>
</template>

<script>
import { updateActiveNote, updateShow } from '../vuex/actions'
import { show, filteredNotes,activeNote } from '../vuex/getters'

export default {
  vuex: {
    getters:{
      show,
      filteredNotes,
      activeNote
    },
    actions: {
      updateActiveNote,
      updateShow
    }
  },
  method: {
    toggleShow(show) {
      this.updateShow(show)
    }
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
