import { type ReactNode } from "react";
import { getStoryblokApi } from "@/lib/storyblok";

type StoryblokProviderProps = {
  children: ReactNode
}

const StoryblokProvider = ({ children }: StoryblokProviderProps) => {
  getStoryblokApi();
  return children;
}

export default StoryblokProvider