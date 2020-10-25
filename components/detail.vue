<template>
  <div>
    <b-card>
      <h1>User page</h1>
      <p>{{ items.id }}</p>
      <p>{{ items.name }}</p>
      <p>{{ items.username }}</p>
      <p>{{ items.email }}</p>
      <b-button @click="deleteItem(items.id)">삭제</b-button>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [],
    }
  },
  created() {},
  async mounted() {
    const userId = Number(this.$route.params.id)
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => (this.items = res.data))
  },
  methods: {
    deleteItem(id) {
      //   console.log(id)
      this.$emit('delete-item', id)
      this.$router.push({
        path: `/board/`,
      })
    },
  },
}
</script>

<style></style>
