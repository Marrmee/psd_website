'use client';

import React, { useState } from 'react';
import Button from './Button';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [errors, setErrors] = useState({
    name: false,
    email: false,
  });

  const [buttonText, setButtonText] = useState('Subscribe');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {
      name: false,
      email: false,
    };
    let isValid = true;

    if (name.length <= 0) {
      tempErrors.name = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors.email = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Subscribing...');
      const res = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name,
        }),
      });
      const resLead = await fetch('/api/sendgrid-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          name: name,
        }),
      });

      const { error1 } = await res.json();
      const { error2 } = await resLead.json();

      if (error1 || error2) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Subscribe');
        setName('');
        setEmail('');
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Subscribe');
      setName('');
      setEmail('');
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex w-full flex-col items-center rounded-lg text-gray-200 sm:mx-auto sm:w-[90%] sm:p-4"
    >
      <h2 className="mb-8 text-left text-4xl font-semibold text-gray-200">
        Stay Up To Date!
      </h2>
      <p className="mb-8 text-center text-sm text-gray-200 sm:text-base">
        Want to know more about what PoSciDonDAO 🔱 is doing? Sign up for our
        monthly newsletter for DAO news, personalized medicine updates and more!
      </p>
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-3 flex-1 sm:mb-0 sm:mr-2">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-seaBlue-700 bg-transparent py-2 text-sm focus:border-tropicalBlue focus:outline-none text-gray-200 sm:text-base"
          />
          {errors?.name && (
            <p className="text-xs text-red-500">Name cannot be empty.</p>
          )}
        </div>
        <div className="mb-3 flex-1 sm:mb-0 sm:mr-2">
          <label htmlFor="email" className="sr-only">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="johndoe@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-seaBlue-700 bg-transparent py-2 text-sm focus:border-tropicalBlue focus:outline-none text-gray-200 sm:text-base"
          />
          {errors?.email && (
            <p className="text-xs text-red-500">Email cannot be empty.</p>
          )}
        </div>
        <Button
          target={'_blank'}
          link={false}
          type="submit"
          onClick={null}
          text={buttonText}
          href=""
          style={`${styles.secondary}  hover:bg-seaBlue-500 bg-seaBlueBlue-950`}
          icon={<FontAwesomeIcon icon={faEnvelope} className="pr-2" />}
        />
      </div>
      <div className="mt-4 text-center">
        {showSuccessMessage && (
          <p className="text-sm text-green-400">
            Subscribed successfully, thank you!
          </p>
        )}
        {showFailureMessage && (
          <p className="text-sm text-red-500">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </form>
  );
}
