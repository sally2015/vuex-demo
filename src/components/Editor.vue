<template>
    <div id="notes-editor">
      <div class="form-group">
        <input @input="updateNote" v-model="current.title" type="text" name="title" class="title form-control" placeholder="请输入标题">
        <textarea @input="updateNote" v-model="currentNote.content" name="content" class="form-control"></textarea>
      </div>
    </div>
</template>

<script>
import { editNote } from '../vuex/actions'
import { activeNote } from '../vuex/getters'

export default {
  vuex: {
    getters:{
      activeNote
    },
    actions: {
      editNote
    }
  },
  computed:{
    currentNote:activeNote
  },
  method: {
    // 为什么这么做？ 因为在严格模式中不允许直接在模板层面去修改 state 中的值
    updateNote() {
      this.editNote(this.currentNote)
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
