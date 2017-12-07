<template>
  <el-container class="app-wrapper" direction="vertical">
    <navbar></navbar>
    <el-container class="todolist-main" direction="horizontal ">
      <todos-list></todos-list>
      <records-list></records-list>
    </el-container>
  </el-container>
</template>

<script>
import { Navbar, TodosList, RecordsList } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    Navbar,
    TodosList,
    RecordsList
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #5db9ff;;
}
</style>