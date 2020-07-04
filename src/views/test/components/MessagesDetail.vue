<template>
  <div class="messagesdetail">
    <p>ID: {{$route.params.id}}</p>
    <ul>
      <li>id:{{messagesDetail.id}}</li>
      <li>title:{{messagesDetail.title}}</li>
      <li>content:{{messagesDetail.content}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      messagesDetail: {}
    }
  },
  mounted () {
    setTimeout(() => {
      const allMessagesDetail = [
        {
          id: '1',
          title: 'message001',
          content: 'message001  content......'
        },
        {
          id: '2',
          title: 'message002',
          content: 'message002  content......'
        },
        {
          id: '3',
          title: 'message003',
          content: 'message003  content......'
        }
      ]
      this.allMessagesDetail = allMessagesDetail
      const id = this.$route.params.id * 1
      console.log('a' + id)
      this.messagesDetail = allMessagesDetail.find(MessagesDetail => this.MessagesDetail.id === id)
      console.log(this.messagesDetail.id)
    }, 100)
  },
  watch: {
    $route: function (value) { // 路由路径(param)发生改变
      const id = value.params.id * 1
      console.log('b' + id)
      this.messagesDetail = this.allMessagesDetail.find(MessagesDetail => this.MessagesDetail.id === id)
      console.log(this.messagesDetail.id)
    }
  }
}
</script>
