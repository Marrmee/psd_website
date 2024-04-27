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
    console.log('errors', errors);
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

      console.log(res);
      const { error1 } = await res.json();
      if (error1) {
        console.log(error1);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Subscribe');

        setName('');
        setEmail('');
        return;
      }
      console.log(resLead);
      const { error2 } = await resLead.json();
      if (error2) {
        console.log(error2);
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
      // Reset form fields
      setName('');
      setEmail('');
    }
    console.log(name, email);
  };
  return (
    <form
      onSubmit={sendEmail}
      className="
        flex 
        w-full 
        flex-col 
        rounded-3xl
        bg-seaBlue-700
        p-8
        shadow-xl
        "
    >
      <h1 className="text-4xl font-bold text-[#FDFDFD]">Stay up to date</h1>
      <p className="py-4 text-[#FDFDFD]">
        Want to know more about what PoSciDonDAO 🔱 is doing? Sign up
        for our monthly newsletter for DAO news, personalized
        medicine updates and more!
      </p>
      <label htmlFor="name" className="mt-4 font-light text-[#FDFDFD]">
        Name<span className="text-red-500">*</span>
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="John Doe"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="border-b bg-transparent py-2 text-[#FDFDFD] ring-tropicalBlue focus:rounded-md focus:outline-none focus:ring-1"
      />
      {errors?.name && <p className="text-red-500">Name cannot be empty.</p>}

      <label htmlFor="email" className="mt-4 font-light text-[#FDFDFD]">
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="johndoe@domain.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="
          border-b 
          bg-transparent 
          py-2 
          text-slate-200 
          ring-tropicalBlue 
          focus:rounded-md 
          focus:outline-none 
          focus:ring-1
          "
      />
      {errors?.email && <p className="text-red-500">Email cannot be empty.</p>}
      <div className="my-6 flex flex-row items-center justify-start">
        <Button
          link={false}
          type={'submit'}
          target={'_blank'}
          onClick={null}
          text={buttonText}
          href={''}
          style={styles.secondary}
          icon={
            <FontAwesomeIcon
              icon={faEnvelope}
              className="pl-2"
              style={{ color: '#0b1dee' }}
            />
          }
        />
      </div>
      <div className="text-left">
        {showSuccessMessage && (
          <p className="text-xl font-semibold text-aquaBlue">
            Subscribed successfully, thank you!
          </p>
        )}
        {showFailureMessage && (
          <p className="text-fieryRed text-xl font-semibold">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
    </form>
  );
}
