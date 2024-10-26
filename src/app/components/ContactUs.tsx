import React, { useState } from 'react';
import Button from './Button';
import styles from './Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false });
  const [buttonText, setButtonText] = useState('Subscribe');
  const [statusMessage, setStatusMessage] = useState({
    success: false,
    message: '',
  });

  const handleValidation = () => {
    const tempErrors = {
      name: !name.trim(),
      email: !email.trim(),
    };
    setErrors(tempErrors);
    return !tempErrors.name && !tempErrors.email;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setButtonText('Subscribing...');

    try {
      const [res, resLead] = await Promise.all([
        fetch('/api/sendgrid', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name }),
        }),
        fetch('/api/sendgrid-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, name }),
        }),
      ]);

      const data1 = await res.json();
      const data2 = await resLead.json();

      if (data1.error || data2.error) {
        throw new Error('Failed to send email');
      }
      if (res.ok && resLead.ok) {
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
      className="flex w-full flex-col items-center rounded-lg text-gray-200 sm:mx-auto sm:w-[90%] sm:p-12 p-6 bg-seaBlue-1000"
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
       <Button
          target={'_blank'}
          link={false}
          type="submit"
          onClick={null}
          text={buttonText}
          href=""
          style={`${styles.primary}  hover:bg-seaBlue-500 bg-seaBlueBlue-950`}
          icon={<FontAwesomeIcon icon={faEnvelope} className="pr-2" />}
        />
      </div>
      <div className="mt-4 text-center">
        {statusMessage.message && (
          <p
            className={`text-sm ${statusMessage.success ? 'text-green-400' : 'text-red-500'}`}
          >
            {statusMessage.message}
          </p>
        )}
      </div>
    </form>
  );
}
