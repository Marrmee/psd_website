import { Metadata } from 'next';
import Community from '../components/Community';

const url = new URL('https://www.poscidondao.com/community');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Get Involved',
  description: `Become a member or contributor for PoSciDonDAO.
  `,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function CommunityPage() {
  return (
    <main>
      <Community />
    </main>
  );
}
