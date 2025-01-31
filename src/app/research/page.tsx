import { Metadata } from 'next';
import ProjectFundingContent from '../components/ProjectFundingContent';

const url = new URL('https://www.poscidondao.com/research');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Fund Your Research Project',
  description: `Fast, unbiased and decentralized funding for your personalized medicine research project
  `,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function ProjectFunding() {
  return <ProjectFundingContent />;
}
