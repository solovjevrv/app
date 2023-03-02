<template>
  <div>
    <McvLoading v-if="isLoading"></McvLoading>
    <McvErrorMessage v-if="error"></McvErrorMessage>
    <div class="sidebar">
      <p>Popular tags</p>
      <div class="tag-list">
        <router-link
          :to="{name: 'tag', params: {slug: popularTag}}"
          class="tag-default tag-pill"
          v-for="popularTag in popularTags"
          :key="popularTag"
          >{{ popularTag }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/popularTags';
import {mapState} from 'vuex';
import McvLoading from '@/components/Loading.vue';
import McvErrorMessage from '@/components/ErrorMessage.vue';
export default {
  name: 'McvPopularTags',
  components: {
    McvLoading,
    McvErrorMessage,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      popularTags: (state) => state.popularTags.data,
      error: (state) => state.popularTags.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags);
  },
};
</script>
