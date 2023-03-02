import axios from '@/api/axios';
const getPopularTags = async () => {
  return axios.get('/tags').then((response) => response.data.tags);
};

export default {
  getPopularTags,
};
