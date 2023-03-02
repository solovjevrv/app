<template>
  <div class="home-page">
    <McvBanner></McvBanner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <McvFeedToogler :tag-name="tagName"></McvFeedToogler>
          <McvFeed :api-url="apiUrl"></McvFeed>
        </div>
        <div class="col-md-3">
          <McvPopularTags></McvPopularTags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '@/components/Feed.vue';
import McvPopularTags from '@/components/PopularTags.vue';
import McvBanner from '@/components/Banner.vue';
export default {
  name: 'McvYourFeed',
  components: {
    McvFeed,
    McvPopularTags,
    McvBanner,
  },
  computed: {
    apiUrl() {
      const tagName = this.$route.params.slug;
      return `/articles?tag=${tagName}`;
    },
  },
};
</script>
