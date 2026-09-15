import { defineSchema } from '@storyblok/schema';
import type { Schema as InferSchema, Story as InferStory } from '@storyblok/schema';
import type { BlockContent, MapiStory as InferStoryMapi } from '@storyblok/schema';

import { articleBlock } from './blocks/article';
import { globalContactInfoBlock } from './blocks/global-contact-info';
import { globalHeaderBlock } from './blocks/global-header';
import { globalSocialLinksBlock } from './blocks/global-social-links';
import { itemActionBlock } from './blocks/item-action';
import { itemCardBlock } from './blocks/item-card';
import { itemContactMethodBlock } from './blocks/item-contact-method';
import { itemFaqBlock } from './blocks/item-faq';
import { itemFeatureBlock } from './blocks/item-feature';
import { itemGalleryImageBlock } from './blocks/item-gallery-image';
import { itemLogoBlock } from './blocks/item-logo';
import { itemNavigationLinkBlock } from './blocks/item-navigation-link';
import { itemProcessStepBlock } from './blocks/item-process-step';
import { itemResourceBlock } from './blocks/item-resource';
import { itemSocialLinkBlock } from './blocks/item-social-link';
import { itemStatBlock } from './blocks/item-stat';
import { itemTestimonialBlock } from './blocks/item-testimonial';
import { itemTimelineEventBlock } from './blocks/item-timeline-event';
import { navigationBlock } from './blocks/navigation';
import { pageBlock } from './blocks/page';
import { personBlock } from './blocks/person';
import { sectionAnnouncementBlock } from './blocks/section-announcement';
import { sectionCardGridBlock } from './blocks/section-card-grid';
import { sectionFaqBlock } from './blocks/section-faq';
import { sectionFeatureListBlock } from './blocks/section-feature-list';
import { sectionGalleryBlock } from './blocks/section-gallery';
import { sectionHeroBlock } from './blocks/section-hero';
import { sectionPageIntroBlock } from './blocks/section-page-intro';
import { sectionProcessBlock } from './blocks/section-process';
import { sectionRichTextBlock } from './blocks/section-rich-text';
import { sectionSplitContentBlock } from './blocks/section-split-content';
import { sectionStatsBlock } from './blocks/section-stats';
import { sectionTeamBlock } from './blocks/section-team';
import { sectionTestimonialsBlock } from './blocks/section-testimonials';
import { sectionTimelineBlock } from './blocks/section-timeline';
import { serviceBlock } from './blocks/service';
import { siteSettingsBlock } from './blocks/site-settings';
import { utilitySeoBlock } from './blocks/utility-seo';
import { themeDatasource } from './datasources/theme';
import { socialPlatformsDatasource } from './datasources/social-platforms';
import { mediaStyleDatasource } from './datasources/media-style';
import { widthDatasource } from './datasources/width';
import { resourceTypeDatasource } from './datasources/resource-type';

export const schema = defineSchema({
  blocks: {
    articleBlock,
    globalContactInfoBlock,
    globalHeaderBlock,
    globalSocialLinksBlock,
    itemActionBlock,
    itemCardBlock,
    itemContactMethodBlock,
    itemFaqBlock,
    itemFeatureBlock,
    itemGalleryImageBlock,
    itemLogoBlock,
    itemNavigationLinkBlock,
    itemProcessStepBlock,
    itemResourceBlock,
    itemSocialLinkBlock,
    itemStatBlock,
    itemTestimonialBlock,
    itemTimelineEventBlock,
    navigationBlock,
    pageBlock,
    personBlock,
    sectionAnnouncementBlock,
    sectionCardGridBlock,
    sectionFaqBlock,
    sectionFeatureListBlock,
    sectionGalleryBlock,
    sectionHeroBlock,
    sectionPageIntroBlock,
    sectionProcessBlock,
    sectionRichTextBlock,
    sectionSplitContentBlock,
    sectionStatsBlock,
    sectionTeamBlock,
    sectionTestimonialsBlock,
    sectionTimelineBlock,
    serviceBlock,
    siteSettingsBlock,
    utilitySeoBlock,
  },
  datasources: {
    themeDatasource,
    socialPlatformsDatasource,
    mediaStyleDatasource,
    widthDatasource,
    resourceTypeDatasource,
  },
});

export type Schema = InferSchema<typeof schema>;
export type Blocks = Schema['blocks'];
export type FieldPlugins = Schema['fieldPlugins'];
export type Story = InferStory<Blocks, FieldPlugins>;
export type StoryMapi = InferStoryMapi<Blocks, FieldPlugins>;

// Type a component's props by block name: `Block<"hero">`.
export type Block<TName extends Blocks['name']> = BlockContent<
  Extract<Blocks, { name: TName }>,
  Blocks,
  FieldPlugins
>;

// Loose union of every block's content, for a dynamic component dispatcher.
export type AnyBlock = BlockContent<Blocks, Blocks, FieldPlugins>;
