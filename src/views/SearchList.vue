<template>
  <div class="list-container">
    <div class="search-condition">
      <span class="search-item">
        <b-form-datepicker v-model="dateValue" locale="ja"></b-form-datepicker>
      </span>
      <span class="search-item">
        <b-form-group>
          <b-form-radio-group id="radio-group-2" v-model="selectValue" name="radio-sub-component">
            <b-form-radio value="A">TypeA</b-form-radio>
            <b-form-radio value="B" disabled>TypeB</b-form-radio>
            <b-form-radio value="C">TypeC</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </span>
      <span class="search-item">
        <b-form-input v-model="inputValue" placeholder="Enter your name"></b-form-input>
      </span>
    </div>

    <div class="list">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchList extends Vue {
  private fields = [
      { key: "last_name", sortable: true },
      { key: "first_name", sortable: false },
      { key: "age", label: "Person age", sortable: true, variant: "danger" },
      { key: "type", label: "Person Type", sortable: true },
      { key: "created_at", label: "Created At", sortable: true },
      { key: "updated_at", label: "Updated At", sortable: true },
    ];
  private items = [
      { isActive: true, age: 40, first_name: "Dickerson", last_name: "Macdonald", type: "A", created_at: "2020/01/01", updated_at: "2020/01/01" },
      { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw", type: "B", created_at: "2020/01/01", updated_at: "2020/01/01" },
      { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson", type: "C", created_at: "2020/01/01", updated_at: "2020/01/01" },
      { isActive: true, age: 38, first_name: "Jami", last_name: "Carney", type: "A", created_at: "2020/01/01", updated_at: "2020/01/01" },
    ];

  private dateValue: string = "";
  private selectValue: string = "";
  private inputValue: string = "";
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
.search-condition {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.search-item {
  margin: 10px;
}
</style>
