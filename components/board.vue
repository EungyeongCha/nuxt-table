<template>
  <div>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
      @row-clicked="rowClick"
    ></b-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Board',
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: 'No.',
        },
        {
          key: 'name',
          label: '이름',
        },
        {
          key: 'username',
          label: 'ID',
        },
        {
          key: 'email',
          label: '이메일',
        },
      ],
      items: [],
    }
  },
  async created() {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => (this.items = res.data))
  },
  methods: {
    rowClick(item, index, e) {
      this.$router.push({
        path: `/board/detail/${item.id}`,
      })
    },
    deleteItem(id) {
      console.log(id)
      //   axios
      //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      //     .then(
      //       (res) => (this.items = this.items.filter((item) => item.id !== id))
      //     )
      //     .catch((err) => console.log(err))
    },
  },
}
</script>

<style></style>
