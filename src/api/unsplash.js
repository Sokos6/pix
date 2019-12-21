import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 27510fc89b72a0f5c87ccb97cf6f42a480489301d8b4373f261bebca5b90b50e'
  }
});