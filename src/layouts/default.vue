<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="./">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Jump to ...</em>
            </template>
            <b-dropdown-item href="./simple-list">Simple List</b-dropdown-item>
            <b-dropdown-item href="./search-list">Search List</b-dropdown-item>
            <b-dropdown-item href="./call-search-api-list">Call Search API List</b-dropdown-item>
            <b-dropdown-item href="./call-search-api-list-and-csv">Call Search API List(CSV)</b-dropdown-item>
            <b-dropdown-item href="./use-common-component">Use Common Conponent</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="./Login" right>Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../stores";

@Component
export default class Layout extends Vue {
  private logout() {
    this.$store.commit("doLogout");
  }
}
</script>
