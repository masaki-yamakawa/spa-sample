<template>
  <div class="list-container">
    <div class="search-condition">
      <span class="search-item">
        <b-form-datepicker v-model="dateValue" locale="ja"></b-form-datepicker>
      </span>
      <span class="search-item">
        <b-form-group>
          <b-form-radio-group id="radio-group-2" v-model="selectValue" name="radio-sub-component">
            <b-form-radio value="all">All</b-form-radio>
            <b-form-radio value="A">TypeA</b-form-radio>
            <b-form-radio value="B" disabled>TypeB</b-form-radio>
            <b-form-radio value="C">TypeC</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
      </span>
      <span class="search-item">
        <b-form-input v-model="inputValue" placeholder="Enter your name" @keyup.enter="search()"></b-form-input>
      </span>
      <span class="search-item">
        <b-button variant="success" v-on:click="search()">Search</b-button>
      </span>
    </div>

    <div class="download-csv">
      <download-csv :data="items">
        <b-link href="#">Download CSV</b-link>
      </download-csv>
    </div>

    <div class="list">
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Logger } from "../loggers/logger";
import { RepositoryFactory } from "../repositories/repositoryFactory";
import { IUserRepository } from "../repositories/userRepository";
import DownloadCsv from "vue-json-csv";

@Component({
  components: {
    DownloadCsv,
  },
})
export default class CommonSearchList extends Vue {
  @Prop()
  private fields!: any[];

  private items = [];

  private dateValue: string = "";
  private selectValue: string = "all";
  private inputValue: string = "";

  private async search() {
    Logger.getLogger().info(`call search API: date=${this.dateValue}, type=${this.selectValue}, name=${this.inputValue}`);

    try {
      const repos: IUserRepository = RepositoryFactory.get("User") as IUserRepository;
      const res = await repos.find("User", { type: this.selectValue, name: this.inputValue, updatedAt: this.dateValue });
      this.items = res.data;
    } catch (err) {
      const status = err.response ? err.response.status : "";
      this.$notify({
        title: `ERROR:${status}`,
        type: "error",
        text: "Search failed",
        duration: 5000,
      });
      Logger.getLogger().error(`${status}: Search failed: ${err}`);
    }
  }
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
.download-csv {
  text-align: right;
}
</style>
