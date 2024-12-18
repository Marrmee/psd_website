import ProjectForm from '../components/ProjectForm';
import { Metadata } from 'next';

const url = new URL('https://www.poscidondao.com/submit-project');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Submit Your Research Project',
  description: `Fill in this form to obtain funding for your personalized medicine research project
  `,
  viewport: "width=device-width, initial-scale=1.0",
  alternates: {
    canonical: url,
  },
  robots: "index, follow",
};

export default function ProjectSubmission() {
  return (
    <div className="p-8 text-fieryRed">Project submissions will be opened soon!</div>
  );
}
