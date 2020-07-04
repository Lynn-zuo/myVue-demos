
<template>
  <div class="message">
    <h1>{{ msg }}</h1>
    <div class="message-a">
      <table class="table">
        <tr>
          <th>时间</th>
          <th>发件人</th>
          <th>内容</th>
        </tr>
        <tr>
          <td>1.12</td>
          <td>Griffin</td>
          <td>小张已完成工作任务。</td>
        </tr>
        <tr>
          <td>2.26</td>
          <td>Lois</td>
          <td>xiaozhang小张已完成工作任务。</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messsage',
  data () {
    return {
      msg: '消息列表'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-a {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  margin-top: 30px;
}
.table{
  margin: auto;
}
table {
  border-collapse: collapse;
}
table, td, th {
  border: 1px solid black;
}
td
{
  text-align: center;
}
</style>
