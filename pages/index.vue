<template>
  <div class="container">
    <h1>Test</h1>
    <AddUser />
    <div class="users">
      <div v-for="user in allUsers" :key="user.id" class="user">
        {{ user.id }} {{ user.name }} {{ user.username }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddUser from '@/components/AddUser.vue'
export default {
  components: {
    AddUser,
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
  computed: mapGetters(['allUsers']),
  created() {
    this.fetchUsers()
  },
}
</script>

<style></style>
