<template>
  <div class="list-container">
    <div class="list">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SimpleList extends Vue {
  private fields = [
      { key: "last_name", sortable: true },
      { key: "first_name", sortable: false },
      { key: "age", label: "Person age", sortable: true, variant: "danger" },
    ];
  private items = [
      { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
      { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
    ];
}
</script>

<style scoped>
.list-container {
  margin: 30px auto;
  padding-left: 20px;
  padding-right: 20px;
}
.list {
  width: 100%;
  float: left;
}
</style>
