<template>
  <common-search-list :fields="fields"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Logger } from "../loggers/logger";
import { RepositoryFactory } from "../repositories/repositoryFactory";
import { IUserRepository } from "../repositories/userRepository";
import CommonSearchList from "../components/CommonSearchList.vue";

@Component({
  components: {
    CommonSearchList,
  },
})
export default class UseCommonComponent extends Vue {
  private fields = [
      { key: "last_name", sortable: false },
      { key: "first_name", sortable: true },
      { key: "age", label: "Age", sortable: false },
      { key: "type", label: "Type", sortable: false },
      { key: "created_at", label: "Created DateTime", sortable: false },
      { key: "updated_at", label: "Updated DateTime", sortable: true },
    ];
}
</script>
