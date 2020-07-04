<template>
  <div class="messages">
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/test/components/Messages/MessagesDetail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    // 模仿ajax请求从后台获取信息
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: 'message001'
        },
        {
          id: 2,
          title: 'message002'
        },
        {
          id: 3,
          title: 'message003'
        }
      ]
      this.messages = messages
    }, 100)
  },
  methods: {
    pushShow (id) {
      this.$router.push(`/test/components/Messages/MessagesDetail/${id}`)
    },
    replaceShow (id) {
      this.$router.replace(`/test/components/Messages/MessagesDetail/${id}`)
    }
  }
}
</script>
