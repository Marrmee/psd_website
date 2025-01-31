import { Metadata } from 'next';
import ProjectsContent from '../components/ProjectsContent';

const url = new URL('https://www.poscidondao.com/projects');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Research Projects',
  description: `Explore projects funded or established by PoSciDonDAO`,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function ProjectFunding() {
  return <ProjectsContent />;
}
