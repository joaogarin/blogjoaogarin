import Link from 'next/link';
import Image from 'next/image';

import ProsCard from '@/components/ProsCard';
import ConsCard from '@/components/ConsCard';
import Gumroad from '@/components/metrics/Gumroad';
import Unsplash from '@/components/metrics/Unsplash';
import Analytics from '@/components/metrics/Analytics';
import YouTube from '@/components/metrics/Youtube';
import Step from '@/components/Step';
import ImageWithTheme from '@/components/ImageWithTheme';
import Quote from '@/components/Quote';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link legacyBehavior href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  ImageWithTheme,
  a: CustomLink,
  Analytics,
  ConsCard,
  Gumroad,
  ProsCard,
  Step,
  Unsplash,
  YouTube,
  Quote
};

export default MDXComponents;
