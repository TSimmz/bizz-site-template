import type {
  AssetFieldValue,
} from '@storyblok/schema';

export const getStoryblokAssetAlt = (
  asset: AssetFieldValue,
  fallback = '',
) => {
  return (
    asset.alt ||
    asset.meta_data?.alt ||
    fallback
  ) as string;
}