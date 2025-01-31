import React, { useState, useEffect } from 'react';
import Button from './Button';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false });
  const [buttonText, setButtonText] = useState('Subscribe');
  const [statusMessage, setStatusMessage] = useState({
    success: false,
    message: '',
  });

  useEffect(() => {
    // Load reCAPTCHA v3
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleValidation = () => {
    const tempErrors = {
      name: !name.trim(),
      email: !email.trim(),
    };
    setErrors(tempErrors);
    return !tempErrors.name && !tempErrors.email;
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!handleValidation()) {
      setStatusMessage({
        success: false,
        message: 'Please fill in all fields',
      });
      return;
    }

    setButtonText('Subscribing...');

    try {
      // Get reCAPTCHA token once
      const captchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '',
        { action: 'submit' }
      );

      if (!captchaToken) {
        setStatusMessage({
          success: false,
          message: 'Security check failed, please try again',
        });
        return;
      }

      // Send both emails from a single API endpoint
      const res = await fetch('/api/sendgrid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, captchaToken }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (res.ok) {
        setStatusMessage({
          success: true,
          message: 'Subscribed successfully, thank you!',
        });
        setName('');
        setEmail('');
      }
    } catch (error) {
      console.error(error);
      setStatusMessage({
        success: false,
        message: 'Oops! Something went wrong, please try again.',
      });
    } finally {
      setButtonText('Subscribe');
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex w-full flex-col items-center rounded-lg bg-seaBlue-1000 p-6 text-gray-200 sm:mx-auto sm:w-[90%] sm:p-12"
    >
      <h2 className="mb-8 text-left text-4xl text-gray-200">
        Stay Up To Date!
      </h2>
      <p className="mb-8 text-center text-base text-gray-200 sm:text-lg">
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
            className="w-full border-b border-seaBlue-700 bg-transparent py-2 text-sm text-gray-200 focus:border-tropicalBlue focus:outline-none sm:text-base"
          />
          {errors.name && (
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
            className="w-full border-b border-seaBlue-700 bg-transparent py-2 text-sm text-gray-200 focus:border-tropicalBlue focus:outline-none sm:text-base"
          />
          {errors.email && (
            <p className="text-xs text-red-500">Email cannot be empty.</p>
          )}
        </div>
      </div>
      <div className="sm:mt-8 mt-4 text-center">
        <Button
          target=""
          link={false}
          type="submit"
          onClick={null}
          text={buttonText}
          href=""
          style={`${styles.primary} hover:bg-seaBlue-500 bg-seaBlueBlue-950`}
          icon={<FontAwesomeIcon icon={faEnvelope} className="pr-2" />}
        />
      </div>
      <div className="mt-4 text-center">
        {statusMessage.message && (
          <p
            className={`text-sm ${
              statusMessage.success ? 'text-green-400' : 'text-red-500'
            }`}
          >
            {statusMessage.message}
          </p>
        )}
      </div>
    </form>
  );
}
