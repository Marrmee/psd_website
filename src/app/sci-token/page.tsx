import { Metadata } from 'next';
import SciTokenPage from '../components/SciTokenPage';

const url = new URL('https://www.poscidondao.com/sci-token');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | SCI Token',
  description: `Get the SCI token, PoSciDonDAO's governance token,
   and have a say in the funding of personalized medicine research projects and DAO operations.
   Revenue is used to buy-back and burn SCI tokens. 
  `,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function Tokens() {
  return (
    <>
      <SciTokenPage />
    </>
  );
}
