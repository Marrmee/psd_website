import { Metadata } from 'next';
import BlogContent from '../components/BlogContent';

const url = new URL('https://www.poscidondao.com/blog');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Blog',
  description: `All of PoSciDonDAO's blog articles on decentralized science, tokenomics, personalized medicine, research funding and more`,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function Blog() {
  return <BlogContent />;
}
