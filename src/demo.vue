<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getClassInfo">获取学生信息</button>
  </div>
</template>

<script>
  import {getClassInfomation,getEmployeeProfiles} from '@/mock/response/process'
  import axios from 'axios'

  export default {
    methods: {
      getClassInfo() {
        axios.post("/getEmployeeProfiles").then(response => {
          if (response.data) {
            console.log(response.data)
          }
        })
      }
    }
  }
</script>

<style>

</style>
