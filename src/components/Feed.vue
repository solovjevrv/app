<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Something bad happend</div>
    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <div class="article meta">
          <router-link
            :to="{name: 'userProfile', params: {slug: article.author.username}}"
          >
            <img :src="article.author.image" alt="" />
          </router-link>
          <div class="info">
            <router-link
              class="author"
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
            >
              {{ article.author.username }}
            </router-link>
          </div>
          <span class="date">{{ article.createdAt }}</span>
        </div>
        <div class="pull-xs-right">ADD TO FAVORITES</div>
        <router-link
          class="preview-link"
          :to="{name: 'article', params: {slug: article.slug}}"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          TAG LIST
        </router-link>
      </div>
      <McvPagination
        :total="total"
        :limit="limit"
        :current-page="currentPage"
        :url="url"
      ></McvPagination
      >{{ pages }}
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/store/modules/feed';
import {mapState} from 'vuex';
import McvPagination from '@/components/Pagination.vue';
export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  components: {
    McvPagination,
  },
  data() {
    return {
      total: 500,
      limit: 10,
      currentPage: 5,
      url: '/',
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl});
  },
};
</script>