import Image from 'next/image';
import Link from 'next/link';
import {
  storyblokEditable,
} from '@storyblok/react/rsc';

import {
  getStoryblokAssetAlt,
} from '@/lib/storyblok/resolve-asset';

import {
  resolveStoryblokLink,
} from '@/lib/storyblok/resolve-link';

import type {
  Block,
} from '../../../../.storyblok/schema/schema';

type ItemLogoProps = {
  blok: Block<'item_logo'>;
};

export const ItemLogo = ({
  blok,
}: ItemLogoProps) => {
  const logo = (
    <div className="relative h-12 w-40">
      <Image
        src={blok.image.filename}
        alt={getStoryblokAssetAlt(blok.image)}
        fill
        sizes="160px"
        className="object-contain"
      />
    </div>
  );

  if (!blok.link) {
    return (
      <div {...storyblokEditable(blok)}>
        {logo}
      </div>
    );
  }

  const {
    href,
    external,
    target,
  } = resolveStoryblokLink(blok.link);

  const targetProps =
    target === '_blank'
      ? {
          target: '_blank' as const,
          rel: 'noopener noreferrer',
        }
      : {};

  return (
    <div {...storyblokEditable(blok)}>
      {external ? (
        <a
          href={href}
          {...targetProps}
          className="inline-block"
        >
          {logo}
        </a>
      ) : (
        <Link
          href={href}
          {...targetProps}
          className="inline-block"
        >
          {logo}
        </Link>
      )}
    </div>
  );
}