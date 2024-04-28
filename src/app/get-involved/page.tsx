import { Metadata } from 'next';
import Community from '../components/GetInvolved';

const url = new URL('https://www.poscidondao.com/research');

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

export default function GetInvolved() {
  return (
    <main>
      <Community />
    </main>
  );
}
