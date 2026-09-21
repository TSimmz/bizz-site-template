import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { STORYBLOK_COMPONENTS } from "./components";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: process.env.STORYBLOK_REGION,
  },
  components: { 
    ...STORYBLOK_COMPONENTS 
  },
});