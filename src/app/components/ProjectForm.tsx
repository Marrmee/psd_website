'use client';

import { useState } from 'react';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import Link from 'next/link';
import InfoToolTip from './InfoToolTip';

export default function ProjectForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [strategy, setStrategy] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [funds, setFunds] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const [errors, setErrors] = useState({
    title: false,
    description: false,
    strategy: false,
    country: false,
    funds: false,
  });

  countries.registerLocale(enLocale);

  const obj = countries.getNames('en', { select: 'official' });
  const arr = Object.entries(obj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const handleErrors = ({ tempErrors }) => {
    setErrors({ ...tempErrors });
    setTimeout(() => {
      setErrors({
        title: false,
        description: false,
        strategy: false,
        country: false,
        funds: false,
      });
    }, 12000);
  };

  const handleValidation = () => {
    let tempErrors = {
      title: false,
      description: false,
      strategy: false,
      country: false,
      funds: false,
    };
    let isValid = true;

    if (title.length <= 0) {
      tempErrors.title = true;
      isValid = false;
    }
    if (description.length <= 0) {
      tempErrors.description = true;
      isValid = false;
    }
    if (strategy.length <= 0) {
      tempErrors.strategy = true;
      isValid = false;
    }
    if (country.length <= 0) {
      tempErrors.country = true;
      isValid = false;
    }
    if (funds.length <= 0) {
      tempErrors.funds = true;
      isValid = false;
    }

    handleErrors({ tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  async function upload(e) {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Submitting...');
      const res1 = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          description: description,
          strategy: strategy,
          country: country,
          address: address,
          funds: funds,
        }),
      });
      const response = await res1.json();
      const res2 = await fetch('/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          txId: response.txId,
          title: response.title,
          description: response.description,
          strategy: response.strategy,
          country: response.country,
          address: response.address,
          funds: response.funds,
        }),
      });
      const { errorUpload } = response;
      if (errorUpload) {
        console.log(errorUpload);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Submit');

        setTitle('');
        setDescription('');
        setStrategy('');
        setCountry('');
        setAddress('');
        setFunds('');
        return;
      }
      const { errorSending } = await res2.json();
      if (errorSending) {
        console.log(errorSending);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Submit');

        setTitle('');
        setDescription('');
        setStrategy('');
        setCountry('');
        setAddress('');
        setFunds('');
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Submit');
      // Reset form fields
      setTitle('');
      setDescription('');
      setStrategy('');
      setCountry('');
      setAddress('');
      setFunds('');
    }
  }

  return (
    <main
      className="
        flex
        w-full 
        max-w-full
        flex-col
        items-center
        justify-center
        pt-12 
        xl:w-[65%] 
        "
    >
      <header
        className="
        flex 
        flex-col 
        items-center 
        justify-center 
        px-8
        "
      >
        <h1
          className={`
          flex 
          max-w-full
          items-center
          justify-center
          text-center
          font-proximaSemiBold
          text-3xl
          uppercase
          text-seaBlue-700 dark:text-gray-300 
          sm:text-5xl
          lg:text-6xl
          `}
        >
          Get Your Personalized Medicine Project Funded
        </h1>
        <p
          className="
            flex
            items-center 
            justify-center 
            pt-8 
            text-center 
            text-base
            sm:text-lg
          "
        >
          Provide information about your project and specify how to generate and
          potentially commercialize assets such as data and intellectual
          property.
        </p>
      </header>
      {/* <hr className="border-b-[1px] w-full border-gray-200 dark:border-slate-700"></hr> */}
      <section
        className="        
            my-4 w-full px-8
            "
      >
        <form onSubmit={upload} className="flex flex-col">
          <section className="flex flex-col py-2">
            <label
              htmlFor="title"
              className="my-4 font-proximaSemiBold text-seaBlue-700 dark:text-gray-300"
            >
              Project Title<span className="py-2 text-fieryRed">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder={`Identifying genes related to sensitivity to chemotherapy in renal carcinoma organoids`}
              name="title"
              className="
                    rounded-3xl 
                    p-4
                    shadow 
                    ring-tropicalBlue 
                    focus:outline-none 
                    focus:ring-2
                    dark:bg-slate-300
                    "
            />
            {errors?.title && (
              <p className="py-2 text-fieryRed">Title cannot be empty.</p>
            )}
          </section>
          <section className="flex flex-col py-2">
            <label
              htmlFor="description"
              className="my-4 font-proximaSemiBold text-seaBlue-700 dark:text-gray-300"
            >
              Project Description<span className="py-2 text-fieryRed">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder={`Every renal carcinoma patient responds differently to chemotherapies. Identification of responding patient groups based on genetic background is key to...`}
              name="description"
              className="
                h-40
                rounded-3xl 
                p-4
                shadow 
                ring-tropicalBlue 
                focus:outline-none 
                focus:ring-2
                dark:bg-slate-300
                "
            />
            {errors?.description && (
              <p className="py-2 text-fieryRed">Description cannot be empty.</p>
            )}
          </section>
          <section className="flex flex-col py-2">
            <label
              htmlFor="strategy"
              className="my-4 font-proximaSemiBold text-seaBlue-700 dark:text-gray-300"
            >
              Commercialization strategy
              <span className="py-2 text-fieryRed">*</span>
            </label>
            <textarea
              value={strategy}
              onChange={(e) => {
                setStrategy(e.target.value);
              }}
              placeholder={`Describe here how you expect to generate assets such as data and intellectual property and how to commercialize them. It does not have to be final.`}
              name="strategy"
              className="
                h-40
                rounded-3xl 
                p-4
                shadow 
                ring-tropicalBlue 
                focus:outline-none 
                focus:ring-2
                dark:bg-slate-300
                "
            />
            {errors?.strategy && (
              <p className="py-2 text-fieryRed">
                Commercialization strategy cannot be empty.
              </p>
            )}
          </section>
          <section className="flex flex-col py-2">
            <label
              htmlFor="description"
              className="my-4 font-proximaSemiBold text-seaBlue-700 dark:text-gray-300"
            >
              Research country<span className="py-2 text-fieryRed">*</span>
            </label>
            <select
              className={`
                rounded-3xl 
                p-4
                shadow 
                ring-tropicalBlue  
                focus:outline-none 
                focus:ring-2
                dark:bg-slate-300
                ${country.length > 0 ? 'text-black' : 'text-gray-400'}
                `}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option hidden>Select Country...</option>
              {arr.map(({ label, value }) => (
                <option key={value} value={label}>
                  {label}
                </option>
              ))}
            </select>
            {errors?.country && (
              <p className="py-2 text-fieryRed">A country must be selected.</p>
            )}
          </section>
          <section className="flex flex-col py-2">
            <label
              htmlFor="funds"
              className="my-4 font-proximaSemiBold text-seaBlue-700 dark:text-gray-300"
            >
              Proposed funding amount (in USD)
              <span className="py-2 text-fieryRed">*</span>
            </label>
            <input
              type="number"
              value={funds}
              onChange={(e) => {
                setFunds(e.target.value);
              }}
              placeholder={`Fill in the amount of USD you need to fund your project...`}
              name="funds"
              className="
                rounded-3xl 
                p-4
                shadow 
                ring-tropicalBlue 
                focus:outline-none 
                focus:ring-2
                dark:bg-slate-300
                "
            />
            {errors?.funds && (
              <p className="py-2 text-fieryRed">
                Funding amount cannot be empty.
              </p>
            )}
          </section>
          <section className="flex flex-col py-2">
            <label
              htmlFor="address"
              className="
              my-4
              flex
              items-start 
              gap-2 
              font-proximaSemiBold 
              text-seaBlue-700 dark:text-gray-300"
            >
              Ethereum address (optional)
              <InfoToolTip
                message={`Once your project has been accepted, 
              your funds will be sent to this Ethereum blockchain address.

              Using blockchain technology we can ensure transparency, decentralization and reduced bias in the funding process. 
              You can create a digital wallet at https://app.safe.global or at https://metamask.io

              It is not yet required to have a wallet at this point. 
              Our Due Diligence crew will help you setup a wallet. 
              `}
              />
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              placeholder={`Starts with 0x...`}
              name="address"
              className="
                rounded-3xl 
                p-4
                shadow 
                ring-tropicalBlue 
                focus:outline-none 
                focus:ring-2
                dark:bg-slate-300
                "
            />
          </section>
          <div className="my-8 flex w-full items-center justify-center">
            <Button
              target={''}
              link={false}
              type={'submit'}
              onClick={''}
              text={`${buttonText}`}
              href={''}
              icon={
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="pr-2"
                  style={{ color: '#FDFDFD' }}
                />
              }
              style={styles.primary}
            />
          </div>
          <div className="text-left text-lg">
            {showSuccessMessage && (
              <p className="mb-6 py-4 font-semibold text-aquaBlue">
                Thank you! Your project has been submitted and will be reviewed
                shortly. <br></br>
                <Link
                  className="text-seaBlue-700 underline dark:text-gray-300"
                  href="https://discord.gg/TXZZV5KXmn"
                  target="_blank"
                >
                  Join our discord
                </Link>{' '}
                to stay up to date with your submission progress.
              </p>
            )}
            {showFailureMessage && (
              <p className="mb-6 py-4 font-semibold text-fieryRed">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
