import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const url = new URL('https://www.poscidondao.com/blog-article/introducing-poscidondao');

export const metadata: Metadata = {
  metadataBase: url,
  title: 'PoSciDonDAO | Introduction Blog',
  description: `PoSciDonDAO innovates healthcare by decentralizing the funding procedure of personalized medicine research. DAO members own the IP and equity assets.`,
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: url,
  },
  robots: 'index, follow',
};

export default function IntroBlog() {
  // const [blog, setBlog] = useState(<></>);

  // useEffect(() => {
  //   fetchBlog();
  // });
  // //https://gateway.irys.xyz/N4Q_V85h-sRijY30dvUzcCAu5c8SmjKrviALUAywkfs
  // async function fetchBlog() {
  //   // const res = await fetch(
  //   //   'https://arweave.net/D5l5YXYIUqx6mRqjTf60YME_2bALg_NHt-97PRFgp5o'
  //   // );
  //   // const res = await fetch(
  //   //   'https://gateway.irys.xyz/_XhnEPm1WrRKGbqzkCPdcMf48DvFZeHkefr5VBS8-ZE'
  //   // );
  //   const res = await fetch(
  //     'https://gateway.irys.xyz/mmmKUWAj7478hTmZcPCH7582snGH5qafCDlYZdzugeo'
  //   );

  //   // await res.blob(
  //   setBlog(<>{await res.text()}</>);
  // }

  return (
    <main className="mx-auto flex xl:w-[70%] sm:w-[85%] w-[95%] flex-col items-center justify-center">
      <div className="pb-4 text-steelBlue">
        {'< '}
        <Link href={'/blog'} className=" underline">
          Return to blogs
        </Link>
      </div>
      {/* <body
      dangerouslySetInnerHTML={{
        __html: `${blog}`
      }}
      
      /> */}
      <div className="blog animate-fadeUp ">
        <section>
          <h1 className="header">
            Introducing PoSciDonDAO: The first community-owned collective
            funding personalized medicine research for life-altering diseases
          </h1>
          <span className="text">
            In 2020, there were approximately 19.3 million new cancer cases
            globally (<a href="#">Sung, Hyuna. et al., 2021</a>)
          </span>
          <br></br>
          <br></br>
          <span className="text">
            By 2050, 152 million people worldwide will have Alzheimer's disease
            or some other form of dementia (Nichols, Emma, et al., 2022).
          </span>
          <br></br>
          <br></br>
          <p className="text">
            These life-altering diseases are too familiar for many people
            nowadays. The older we get, the more people will be affected by
            these diseases. Unfortunately, these diseases have limited treatment
            options and new drugs have a high failure rate in clinical trials
            (Sun, Duxin, et al., 2022).
          </p>
        </section>
        <section className="paragraph">
          <h2 className="header">
            Personalized medicine: the future of research and health care
          </h2>
          <p className="text">
            The only way to find a cure for these diseases is to perform
            ‘personalized medicine research’. Personalized medicine research
            focuses on identifying patient subpopulations based on their genetic
            background and many other patient characteristics (Goetz et al.,
            2018). For example, cancer drugs called Imatinib and Dasatinib
            seemed to be only effective in chronic myeloid leukemia (CML)
            patients that have a specific genetic mutation (Carlson, 2008).
            These drugs have saved thousands of patients with CML. This shows
            that personalized medicine research is the key to improving
            patients' lives.
          </p>
        </section>
        <section className="paragraph">
          <h2 className="header">
            Getting funding for personalized medicine research - a worldwide
            issue
          </h2>
          <p className="text">
            Unfortunately, obtaining funding for personalized medicine research
            can be a daunting task, as the traditional funding process is often
            considered slow, time-consuming and requires substantial resources
            (Pew Research Center, 2009). In addition, a lot of personal and
            institutional bias infiltrates the funding process, making it even
            more difficult for researchers to obtain funding for their research.
            Another issue is the high retention of donated funds by fundraisers,
            resulting in only 40-60% of the funds going to charities and even
            lower amounts reaching the scientific community (James, 2022). This
            phenomenon heavily reduces the amount of personalized medicine
            research that can be done and limits societal innovation and
            progress.
          </p>
        </section>
        <section className="paragraph">
          <h2 className="header">The Solution: PoSciDonDAO</h2>
          <p className="text">
            We are PoSciDonDAO, and we are a decentralized autonomous
            organization (DAO) with one goal:{' '}
            <span className="font-proximaSemiBold">
              democratizing and streamlining the funding and commercialization
              process of personalized medicine research.
            </span>
          </p>
          <p className="text">
            PoSciDonDAO democratizes and streamlines the funding process by
            leveraging blockchain technology. This technology allows us to
            reduce bias and limit the middlemen in the funding process which
            leads to more funds used for personalized medicine research.
          </p>
        </section>
        <section className="image">
          <Image
            alt="PoSciDonDAO's ecosystem streamlining personalized medicine research
            funding"
            className="w-[30rem] py-4"
            src="/blog-images/ecosystem.webp"
            width={1000}
            height={1000}
          />
          <span className="description">PoSciDonDAO’s ecosystem overview</span>
        </section>
        <section className="paragraph">
          <h2 className="header">
            Your chance to become part of the solution that science needs
          </h2>
          <p className="text">
            A key aspect of PoSciDonDAO is our governance token called SCI.
            Anyone can buy and hold the SCI token, which allows you to vote on
            proposals regarding DAO operations and regarding who becomes part of
            the Due Diligence crew or not. The Due Diligence crew is a network
            of personalized medicine research experts that source research
            projects and evaluate which projects should get funding.
          </p>
        </section>
        <section className="image">
          <Image
            alt="PoSciDonDAO's governance token SCI"
            src="/blog-images/sci-token.webp"
            width={300}
            height={300}
          />{' '}
          <span className="description">
            Schematic representation of the SCI token
          </span>
        </section>
        <section className="paragraph">
          <h2 className="header">
            Intellectual property in the hands of our community
          </h2>
          <p className="text">
            Through PoSciDonDAO, we fund personalized medicine research projects
            that aim to commercialize their research output in the form of data
            and intellectual property assets. We also fund startups in return
            for equity. As a sovereign and decentralized entity, PoSciDonDAO
            holds all these assets and the SCI holders determine what should be
            done with these assets. Our end-goal: community-driven pricing and
            maximum accessibility of life-saving therapies.
          </p>{' '}
        </section>
        <section className="paragraph">
          <h2 className="header">Getting involved and why you should too</h2>
          <p className="text">
            At PoSciDonDAO, we welcome everyone to join the community.
            Regardless of if you’re an expert in oncology or a PhD candidate, we
            welcome anyone focusing on personalized medicine research to submit
            proposals or even join the DAO as a community member and join a
            crew. As well, if anyone wants to contribute, anyone with any
            discipline is invited to share their perspectives. We believe
            everyone has a voice and can contribute.
          </p>
          <p className="text">
            We keep our social media and website up to date, but where the most
            thinking and action happens in our Discord. You can even check our
            Whitepaper for the real nitty-gritty details.{' '}
          </p>
          <p className="text">
            Since this is a community-driven collective, our members are the key
            players in voting on IP licensing and more. You can have a say in
            shaping not only PoSciDonDAO but also the future of scientific
            funding and research.
          </p>
          <p className="text">
            <span className="reference">
              Learn more about us by reading the whitepaper:{' '}
              <a
                target="_blank"
                className="ref"
                href="https://poscidondao.com/Whitepaper.pdf"
              >
                https://poscidondao.com/Whitepaper.pdf
              </a>
            </span>
            <br></br>
            <span className="reference">
              Join the revolution of research funding:{' '}
              <a
                target="_blank"
                className="ref"
                href="https://discord.gg/ZZ5yyTMTH6"
              >
                https://discord.gg/ZZ5yyTMTH6
              </a>{' '}
            </span>
            <br></br>
            <span className="reference">
              Stay up to date by following us on X/Twitter:{' '}
              <a
                target="_blank"
                className="ref"
                href="https://twitter.com/PoSciDonDAO"
              >
                https://twitter.com/PoSciDonDAO
              </a>
            </span>
          </p>
        </section>
        <section className="paragraph">
          <h2 className="header">References</h2>
          <cite>
            <span className="reference">
              Funding Scientific Research.” Pew Research Center - U.S. Politics
              & Policy, Pew Research Center, 9 July 2009,
              <a
                className="ref"
                href="https://www.pewresearch.org/politics/2009/07/09/section-3-funding-scientific-research/"
              >
                https://www.pewresearch.org/politics/2009/07/09/section-3-funding-scientific-research/.
              </a>
            </span>
          </cite>
          <br></br>
          <br></br>
          <cite>
            <span className="reference">
              Sun, Duxin, et al. “Why 90% of clinical drug development fails and
              how to improve it?” Acta Pharmaceutica Sinica B, vol. 12, no. 7,
              2022, pp. 3049–3062,{' '}
              <a
                className="ref"
                href="https://doi.org/10.1016/j.apsb.2022.02.002"
              >
                https://doi.org/10.1016/j.apsb.2022.02.002.
              </a>
            </span>
          </cite>
          <br></br>
          <br></br>
          <cite>
            <span className="reference">
              Goetz, Laura H., and Nicholas J. Schork. “Personalized medicine:
              Motivation, challenges, and progress.” Fertility and Sterility,
              vol. 109, no. 6, 2018, pp. 952–963,{' '}
              <a
                className="ref"
                href="https://doi.org/10.1016/j.fertnstert.2018.05.006"
              >
                https://doi.org/10.1016/j.fertnstert.2018.05.006.
              </a>
            </span>
          </cite>
          <br></br>
          <br></br>
          <cite>
            <span className="reference">
              Carlson, Bob. &ldquo;What the Devil Is Personalized
              Medicine?&rdquo; Biotechnology Healthcare, U.S. National Library
              of Medicine, May 2008,{' '}
              <a
                className="ref"
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2651699/&amp;sa=D&amp;source=editors&amp;ust=1699912150110519&amp;usg=AOvVaw3wqW_y32cIg9A042LexFCF"
              >
                www.ncbi.nlm.nih.gov/pmc/articles/PMC2651699/
              </a>
            </span>
          </cite>
          <br></br>
          <br></br>
          <cite>
            <span className="reference">
              James, Letitia. “Pennies for Charity.” November 2022,{' '}
              <a
                className="ref"
                href="https://ag.ny.gov/sites/default/files/2022-pennies-for-charities-report.pdf"
              >
                https://ag.ny.gov/sites/default/files/2022-pennies-for-charities-report.pdf
              </a>
            </span>
          </cite>
          <br></br>
          <br></br>
          <cite>
            <span className="reference">
              Sung, Hyuna, et al. "Global cancer statistics 2020: GLOBOCAN
              estimates of incidence and mortality worldwide for 36 cancers in
              185 countries." CA: a cancer journal for clinicians 71.3 (2021):
              209-249.
              <a className="ref" href="https://doi.org/10.3322/caac.21660">
                https://doi.org/10.3322/caac.21660
              </a>
            </span>
          </cite>
          <br></br>
          <br></br>
          <cite>
            <span className="reference">
              Nichols, Emma, et al. "Estimation of the global prevalence of
              dementia in 2019 and forecasted prevalence in 2050: an analysis
              for the Global Burden of Disease Study 2019." The Lancet Public
              Health 7.2 (2022): e105-e125.{' '}
              <a
                className="ref"
                href="https://doi.org/10.1016/S2468-2667(21)00249-8"
              >
                https://doi.org/10.1016/S2468-2667(21)00249-8.
              </a>
            </span>
          </cite>
          <br></br>
        </section>
      </div>
      <div className="pb-4 text-steelBlue">
        {'< '}
        <Link href={'/blog'} className=" underline">
          Return to blogs
        </Link>
      </div>
    </main>
  );
}
