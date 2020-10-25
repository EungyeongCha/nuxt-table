<template>
  <div>
    <h1>Add a user</h1>
    <form @submit="onSubmit">
      <input type="text" v-model="name" />
      <input type="submit" value="제출" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddUser',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    ...mapActions(['addUser']),
    onSubmit(e) {
      e.preventDefault()
      this.addUser(this.name)
    },
  },
}
</script>

<style></style>
