'use client';

import { useState, useEffect } from 'react';
import Button from '../components/Button';
import styles from '../components/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSave, faTrash, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import InfoToolTip from './InfoToolTip';

interface FormData {
  title: string;
  stage: string;
  description: string;
  strategy: string;
  country: string;
  address: string;
  funds: string;
  name: string;
  email: string;
  phone: string;
  telegram: string;
  referralSource: string;
  referrerName: string;
  referrerEmail: string;
  lastSaved: string;
  currentStep: number;
}

export default function ProjectForm() {
  const [title, setTitle] = useState('');
  const [stage, setStage] = useState('');
  const [description, setDescription] = useState('');
  const [strategy, setStrategy] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [funds, setFunds] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');
  const [referralSource, setReferralSource] = useState('');
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const [errors, setErrors] = useState({
    title: false,
    stage: false,
    description: false,
    strategy: false,
    country: false,
    funds: false,
    name: false,
    email: false,
    phone: false,
    telegram: false,
    address: false,
    referralSource: false,
    referrerName: false,
    referrerEmail: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [savedData, setSavedData] = useState<FormData | null>(null);
  const totalSteps = 4;

  const [stepErrors, setStepErrors] = useState({
    1: false,
    2: false,
    3: false,
    4: false
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [errorStep, setErrorStep] = useState<number | null>(null);

  countries.registerLocale(enLocale);

  const obj = countries.getNames('en', { select: 'official' });
  const arr = Object.entries(obj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const projectStages = [
    { value: 'concept', label: 'Concept' },
    { value: 'preclinical_in_silico', label: 'Preclinical (in silico)' },
    { value: 'preclinical_in_vitro', label: 'Preclinical (in vitro)' },
    { value: 'preclinical_in_vivo', label: 'Preclinical (in vivo)' },
    { value: 'clinical', label: 'Clinical' },
  ];

  const referralSources = [
    { value: 'twitter', label: 'X/Twitter' },
    { value: 'discord', label: 'Discord' },
    { value: 'telegram', label: 'Telegram' },
    { value: 'search', label: 'Search Engine (Google)' },
    { value: 'reference', label: 'Reference Person' },
  ];

  const handleErrors = ({ tempErrors }) => {
    setErrors({ ...tempErrors });
    setTimeout(() => {
      setErrors({
        title: false,
        stage: false,
        description: false,
        strategy: false,
        country: false,
        funds: false,
        name: false,
        email: false,
        phone: false,
        telegram: false,
        address: false,
        referralSource: false,
        referrerName: false,
        referrerEmail: false,
      });
    }, 12000);
  };

  const isValidEthereumAddress = (address: string) => {
    if (!address) return true; // Address is optional
    const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    return ethereumAddressRegex.test(address);
  };

  const handleValidation = () => {
    let tempErrors = {
      title: false,
      stage: false,
      description: false,
      strategy: false,
      country: false,
      funds: false,
      name: false,
      email: false,
      phone: false,
      telegram: false,
      address: false,
      referralSource: false,
      referrerName: false,
      referrerEmail: false,
    };
    let isValid = true;

    if (title.length <= 0) {
      tempErrors.title = true;
      isValid = false;
    }
    if (stage.length <= 0) {
      tempErrors.stage = true;
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
    if (funds.length <= 0 || Number(funds) <= 0) {
      tempErrors.funds = true;
      isValid = false;
    }
    if (name.length <= 0) {
      tempErrors.name = true;
      isValid = false;
    }
    if (email.length <= 0 || !email.includes('@')) {
      tempErrors.email = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors.phone = true;
      isValid = false;
    }
    if (telegram.length <= 0) {
      tempErrors.telegram = true;
      isValid = false;
    }
    if (address && !isValidEthereumAddress(address)) {
      tempErrors.address = true;
      isValid = false;
    }
    if (referralSource.length <= 0) {
      tempErrors.referralSource = true;
      isValid = false;
    }
    if (referralSource === 'reference') {
      if (referrerName.length <= 0) {
        tempErrors.referrerName = true;
        isValid = false;
      }
      if (referrerEmail.length <= 0 || !referrerEmail.includes('@')) {
        tempErrors.referrerEmail = true;
        isValid = false;
      }
    }

    handleErrors({ tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const validateEthereumAddress = (value: string) => {
    if (!value) {
      setAddressError('');
      return;
    }
    if (!value.startsWith('0x')) {
      setAddressError('Address must start with 0x');
      return;
    }
    if (value.length < 42) {
      setAddressError('Address is too short');
      return;
    }
    if (value.length > 42) {
      setAddressError('Address is too long');
      return;
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(value)) {
      setAddressError('Address must contain only hexadecimal characters');
      return;
    }
    setAddressError('');
  };

  const validateStep = (step: number) => {
    let isValid = true;
    switch (step) {
      case 1:
        if (!name || !email || !phone || !telegram || !referralSource || 
            (referralSource === 'reference' && (!referrerName || !referrerEmail))) {
          isValid = false;
        }
        break;
      case 2:
        if (!title || !stage || !description || !country) {
          isValid = false;
        }
        break;
      case 3:
        if (!strategy || !funds || Number(funds) <= 0) {
          isValid = false;
        }
        break;
      case 4:
        if (address && !isValidEthereumAddress(address)) {
          isValid = false;
        }
        break;
    }
    return isValid;
  };

  const findFirstErrorStep = () => {
    for (let i = 1; i <= totalSteps; i++) {
      if (!validateStep(i)) {
        return i;
      }
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === totalSteps) {
      const firstErrorStep = findFirstErrorStep();
      if (firstErrorStep) {
        setErrorStep(firstErrorStep);
        setErrorMessage(`Please complete all required fields in step ${firstErrorStep}`);
        return;
      }

      let isValidForm = handleValidation();
      if (isValidForm && window.confirm('Are you sure you want to submit your project?')) {
        upload(e);
      }
    }
  };

  const scrollToTop = () => {
    // Find the form element and scroll to it
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      // Clear error if we've reached the error step
      if (newStep === errorStep) {
        setErrorMessage('');
        setErrorStep(null);
      }
      scrollToTop();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      // Clear error if we've reached the error step
      if (newStep === errorStep) {
        setErrorMessage('');
        setErrorStep(null);
      }
      scrollToTop();
    }
  };

  const goToErrorStep = () => {
    if (errorStep) {
      setCurrentStep(errorStep);
      setErrorMessage('');
      setErrorStep(null);
      scrollToTop();
    }
  };

  // Add effect to clear error when reaching the error step
  useEffect(() => {
    if (currentStep === errorStep) {
      setErrorMessage('');
      setErrorStep(null);
    }
  }, [currentStep, errorStep]);

  async function upload(e) {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      try {
        setButtonText('Submitting...');
        
        // Get the label for the selected stage
        const selectedStage = projectStages.find(s => s.value === stage);
        const stageLabel = selectedStage ? selectedStage.label : stage;
        
        // Get the label for the selected referral source
        const selectedSource = referralSources.find(s => s.value === referralSource);
        const sourceLabel = selectedSource ? selectedSource.label : referralSource;

        const res1 = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title,
            stage: stageLabel, // Send the human-readable label
            description,
            strategy,
            country,
            address,
            funds,
            name,
            email,
            phone,
            telegram,
            referralSource: sourceLabel, // Send the human-readable label
            referrerName,
            referrerEmail,
          }),
        });

        if (!res1.ok) {
          throw new Error('Upload failed');
        }

        const response = await res1.json();
        
        const res2 = await fetch('/api/project', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            txId: response.txId,
            title: response.title,
            stage: stageLabel, // Send the human-readable label
            description: response.description,
            strategy: response.strategy,
            country: response.country,
            address: response.address,
            funds: response.funds,
            name,
            email,
            phone,
            telegram,
            referralSource: sourceLabel, // Send the human-readable label
            referrerName,
            referrerEmail,
          }),
        });

        if (!res2.ok) {
          throw new Error('Project submission failed');
        }

        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText('Submit');

        // Reset form fields
        setTitle('');
        setStage('');
        setDescription('');
        setStrategy('');
        setCountry('');
        setAddress('');
        setFunds('');
        setName('');
        setEmail('');
        setPhone('');
        setTelegram('');
        setReferralSource('');
        setReferrerName('');
        setReferrerEmail('');
        
        // Reset to first step after successful submission
        setCurrentStep(1);
      } catch (error) {
        console.error('Error:', error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Submit');
      }
    }
  }

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('projectFormData');
    if (saved) {
      const parsedData = JSON.parse(saved);
      setSavedData(parsedData);
      // Populate form with saved data
      setTitle(parsedData.title || '');
      setStage(parsedData.stage || '');
      setDescription(parsedData.description || '');
      setStrategy(parsedData.strategy || '');
      setCountry(parsedData.country || '');
      setAddress(parsedData.address || '');
      setFunds(parsedData.funds || '');
      setName(parsedData.name || '');
      setEmail(parsedData.email || '');
      setPhone(parsedData.phone || '');
      setTelegram(parsedData.telegram || '');
      setReferralSource(parsedData.referralSource || '');
      setReferrerName(parsedData.referrerName || '');
      setReferrerEmail(parsedData.referrerEmail || '');
    }
  }, []);

  const handleSave = () => {
    const formData: FormData = {
      title,
      stage,
      description,
      strategy,
      country,
      address,
      funds,
      name,
      email,
      phone,
      telegram,
      referralSource,
      referrerName,
      referrerEmail,
      lastSaved: new Date().toISOString(),
      currentStep,
    };
    localStorage.setItem('projectFormData', JSON.stringify(formData));
    setSavedData(formData);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleDiscard = () => {
    if (window.confirm('Are you sure you want to discard all changes? This cannot be undone.')) {
      localStorage.removeItem('projectFormData');
      setSavedData(null);
      // Reset all form fields
      setTitle('');
      setStage('');
      setDescription('');
      setStrategy('');
      setCountry('');
      setAddress('');
      setFunds('');
      setName('');
      setEmail('');
      setPhone('');
      setTelegram('');
      setReferralSource('');
      setReferrerName('');
      setReferrerEmail('');
      setCurrentStep(1);
    }
  };

  const renderProgressBar = () => {
    return (
      <div className="mb-8 w-full px-4 sm:px-0">
        <div className="flex justify-between">
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index < totalSteps - 1 ? 'w-full' : ''
              }`}
            >
              <div
                className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full ${
                  index + 1 <= currentStep
                    ? 'bg-aquaBlue text-white'
                    : 'bg-gray-300 text-gray-500'
                } flex items-center justify-center text-sm sm:text-base font-bold`}
              >
                {index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`h-1 w-full ${
                    index + 1 < currentStep ? 'bg-aquaBlue' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs sm:text-sm">
          <span>Contact Info</span>
          <span>Project Details</span>
          <span>Strategy</span>
          <span>Technical</span>
        </div>
      </div>
    );
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1: // Contact Information
        return (
          <>
            <section className="flex flex-col py-2">
              <label htmlFor="name" className="my-4 font-proximaSemiBold text-gray-300">
                Project Leader Full Name<span className="py-2 text-highlightRed">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                name="name"
                className="rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
              />
              {errors?.name && (
                <p className="py-2 text-highlightRed">Name cannot be empty.</p>
              )}
            </section>

            <section className="flex flex-col py-2">
              <label htmlFor="email" className="my-4 font-proximaSemiBold text-gray-300">
                Email Address<span className="py-2 text-highlightRed">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                name="email"
                className="rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
              />
              {errors?.email && (
                <p className="py-2 text-highlightRed">Please enter a valid email address.</p>
              )}
            </section>

            <section className="flex flex-col py-2">
              <label htmlFor="phone" className="my-4 font-proximaSemiBold text-gray-300">
                Phone Number<span className="py-2 text-highlightRed">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1234567890"
                name="phone"
                className="rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
              />
              {errors?.phone && (
                <p className="py-2 text-highlightRed">Phone number cannot be empty.</p>
              )}
            </section>

            <section className="flex flex-col py-2">
              <label htmlFor="telegram" className="my-4 font-proximaSemiBold text-gray-300">
                Telegram Handle<span className="py-2 text-highlightRed">*</span>
              </label>
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="@yourtelegramhandle"
                name="telegram"
                className="rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
              />
              {errors?.telegram && (
                <p className="py-2 text-highlightRed">Telegram handle cannot be empty.</p>
              )}
            </section>

            <section className="flex flex-col py-2">
              <label htmlFor="referralSource" className="my-4 font-proximaSemiBold text-gray-300">
                How did you hear about us?<span className="py-2 text-highlightRed">*</span>
              </label>
              <select
                value={referralSource}
                onChange={(e) => {
                  setReferralSource(e.target.value);
                  if (e.target.value !== 'reference') {
                    setReferrerName('');
                    setReferrerEmail('');
                  }
                }}
                name="referralSource"
                className={`
                  rounded-lg 
                  bg-slate-300
                  p-4 
                  shadow 
                  ring-tropicalBlue 
                  focus:outline-none
                  focus:ring-2
                  ${referralSource.length > 0 ? 'text-black' : 'text-gray-400'}
                `}
              >
                <option value="" hidden>Select Source...</option>
                {referralSources.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {errors?.referralSource && (
                <p className="py-2 text-highlightRed">Please select how you heard about us.</p>
              )}
            </section>

            {referralSource === 'reference' && (
              <>
                <section className="flex flex-col py-2">
                  <label htmlFor="referrerName" className="my-4 font-proximaSemiBold text-gray-300">
                    Reference Person's Name<span className="py-2 text-highlightRed">*</span>
                  </label>
                  <input
                    type="text"
                    value={referrerName}
                    onChange={(e) => setReferrerName(e.target.value)}
                    placeholder="Enter the name of the person who referred you"
                    name="referrerName"
                    className="rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
                  />
                  {errors?.referrerName && (
                    <p className="py-2 text-highlightRed">Reference person's name cannot be empty.</p>
                  )}
                </section>

                <section className="flex flex-col py-2">
                  <label htmlFor="referrerEmail" className="my-4 font-proximaSemiBold text-gray-300">
                    Reference Person's Email<span className="py-2 text-highlightRed">*</span>
                  </label>
                  <input
                    type="email"
                    value={referrerEmail}
                    onChange={(e) => setReferrerEmail(e.target.value)}
                    placeholder="Enter the email of the person who referred you"
                    name="referrerEmail"
                    className="rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
                  />
                  {errors?.referrerEmail && (
                    <p className="py-2 text-highlightRed">Please enter a valid email address for the reference person.</p>
                  )}
                </section>
              </>
            )}

            <div className="mb-6 mt-2 rounded-lg border border-highlightRed bg-highlightRed/10 p-4 text-sm text-highlightRed">
              <p className="font-proximaSemiBold">Important Notice:</p>
              <p>Please ensure all contact information is accurate and up-to-date. We will use these details to communicate about your project. If we are unable to contact you through the provided information, your project cannot be considered for funding.</p>
            </div>
          </>
        );

      case 2: // Project Details
        return (
          <>
            <section className="flex flex-col py-2">
              <label htmlFor="title" className="my-4 font-proximaSemiBold text-gray-300">
                Project Title<span className="py-2 text-highlightRed">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Your project title"
                name="title"
                className="rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
              />
              {errors?.title && (
                <p className="py-2 text-highlightRed">Title cannot be empty.</p>
              )}
            </section>

            <section className="flex flex-col py-2">
              <label htmlFor="stage" className="my-4 font-proximaSemiBold text-gray-300">
                Project Stage<span className="py-2 text-highlightRed">*</span>
              </label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                name="stage"
                className={`
                  rounded-lg 
                  bg-slate-300
                  p-4 
                  shadow 
                  ring-tropicalBlue 
                  focus:outline-none
                  focus:ring-2
                  ${stage.length > 0 ? 'text-black' : 'text-gray-400'}
                `}
              >
                <option value="" hidden>Select Project Stage...</option>
                {projectStages.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {errors?.stage && (
                <p className="py-2 text-highlightRed">Please select a project stage.</p>
              )}
            </section>

            <section className="flex flex-col py-2">
              <label htmlFor="description" className="my-4 font-proximaSemiBold text-gray-300">
                Project Description<span className="py-2 text-highlightRed">*</span>
                <p className="mt-1 text-sm font-normal text-gray-400">
                  Please include: (1) Scientific foundation and background, (2) Detailed methodology/approach,
                  (3) Key milestones and deliverables, and (4) Expected impact on personalized medicine.
                </p>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Example: Our project addresses the challenge of chemotherapy resistance in renal carcinoma.

Scientific Foundation:
- Recent studies show 40% of patients develop resistance
- Genetic markers (ABCB1, ABCG2) strongly correlate with treatment outcomes
- Preliminary data suggests personalized dosing could improve response rates

Methodology:
- Patient cohort analysis (n=200) using next-generation sequencing
- Machine learning model development for treatment response prediction
- Validation studies in patient-derived cell lines

Key Milestones:
1. Month 3: Complete genetic profiling of patient cohort
2. Month 6: Develop preliminary prediction algorithm
3. Month 9: Validate in vitro model
4. Month 12: Clinical validation study

Expected Impact:
Develop a genetic screening tool to predict optimal chemotherapy dosing, potentially improving treatment success rates by 30%."
                name="description"
                className="h-96 rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
              />
              {errors?.description && (
                <p className="py-2 text-highlightRed">Description cannot be empty.</p>
              )}
            </section>

            <section className="flex flex-col py-2">
              <label htmlFor="country" className="my-4 font-proximaSemiBold text-gray-300">
                Research country<span className="py-2 text-highlightRed">*</span>
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                name="country"
                className={`
                  rounded-lg 
                  bg-slate-300
                  p-4 
                  shadow 
                  ring-tropicalBlue 
                  focus:outline-none
                  focus:ring-2
                  ${country.length > 0 ? 'text-black' : 'text-gray-400'}
                `}
              >
                <option value="" hidden>Select Country...</option>
                {arr.map(({ label, value }) => (
                  <option key={value} value={label}>
                    {label}
                  </option>
                ))}
              </select>
              {errors?.country && (
                <p className="py-2 text-highlightRed">A country must be selected.</p>
              )}
            </section>
          </>
        );

      case 3: // Strategy
        return (
          <>
            <section className="flex flex-col py-2">
              <label htmlFor="strategy" className="my-4 font-proximaSemiBold text-gray-300">
                Commercialization strategy<span className="py-2 text-highlightRed">*</span>
              </label>
              <textarea
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
                placeholder="Describe here how you expect to generate assets such as data and intellectual property and how to commercialize them. It does not have to be final."
                name="strategy"
                className="h-40 rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
              />
              {errors?.strategy && (
                <p className="py-2 text-highlightRed">Strategy cannot be empty.</p>
              )}
            </section>

            <section className="flex flex-col py-2">
              <label htmlFor="funds" className="my-4 font-proximaSemiBold text-gray-300">
                Proposed funding amount (in USD)<span className="py-2 text-highlightRed">*</span>
              </label>
              <input
                type="number"
                value={funds}
                onChange={(e) => {
                  const value = Math.max(0, Number(e.target.value));
                  setFunds(value.toString());
                }}
                min="0"
                step="1"
                placeholder="Fill in the amount of USD you need to fund your project..."
                name="funds"
                className="rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2"
              />
              {errors?.funds && (
                <p className="py-2 text-highlightRed">
                  {funds === '' 
                    ? 'Funding amount cannot be empty.'
                    : 'Funding amount must be greater than 0.'}
                </p>
              )}
            </section>
          </>
        );

      case 4: // Technical
        return (
          <>
            <section className="flex flex-col py-2">
              <label htmlFor="address" className="my-4 flex items-center gap-2 font-proximaSemiBold text-gray-300">
                Ethereum address (optional)
                <InfoToolTip message={`Once your project has been accepted, your funds will be sent to this Ethereum blockchain address.

Using blockchain technology we can ensure transparency, decentralization and reduced bias in the funding process. 
You can create a digital wallet at https://app.safe.global or at https://metamask.io

It is not yet required to have a wallet at this point. 
Our Due Diligence crew will help you setup a wallet.`} />
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => {
                  const value = e.target.value;
                  setAddress(value);
                  validateEthereumAddress(value);
                }}
                placeholder="0x0000000000000000000000000000000000000000"
                name="address"
                className={`rounded-lg bg-slate-300 p-4 shadow ring-tropicalBlue focus:outline-none focus:ring-2 ${
                  addressError ? 'border-2 border-highlightRed' : ''
                }`}
              />
              {(errors?.address || addressError) && (
                <p className="py-2 text-highlightRed">
                  {addressError || 'Please enter a valid Ethereum address.'}
                </p>
              )}
            </section>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <main
      className="
        flex
        w-full 
        max-w-full
        flex-col
        items-center
        justify-center
        px-4
        sm:px-6
        lg:px-8
        pt-8 
        sm:pt-12
        "
    >
      <header
        className="
        flex 
        flex-col 
        items-center 
        justify-center 
        w-full
        max-w-4xl
        mx-auto
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
          text-2xl
          sm:text-3xl
          lg:text-5xl
          text-gray-300 
          px-4
          sm:px-0
          `}
        >
          Get Your Personalized Medicine Project Funded
        </h1>
        <p
          className="
            mx-auto
            flex 
            w-full
            sm:w-[80%] 
            items-center 
            justify-center
            pt-4
            sm:pt-8
            text-center
            text-sm
            sm:text-base
            px-4
            sm:px-0
          "
        >
          In four easy steps, provide information about your project and specify how to generate and
          potentially commercialize assets such as data and intellectual
          property from the conducted research.
        </p>
      </header>
      <section
        className="        
            my-4
            w-full
            max-w-4xl
            mx-auto
            "
      >
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col text-seaBlue-1050"
          noValidate
        >
          {renderProgressBar()}
          
          <div className="px-4 sm:px-0">
            {renderFormStep()}
          </div>

          <div className="mt-8 px-4 sm:px-0 flex w-full flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:w-auto">
              <Button
                target=""
                link={false}
                type="button"
                text="Save"
                onClick={handleSave}
                icon={
                  <FontAwesomeIcon
                    icon={faSave}
                    className="pr-2"
                    style={{ color: '#FDFDFD' }}
                  />
                }
                style={styles.primary}
                href=""
              />
              <Button
                target=""
                link={false}
                type="button"
                text="Discard Changes"
                onClick={handleDiscard}
                icon={
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="pr-2"
                    style={{ color: '#000000' }}
                  />
                }
                style={styles.error}
                href=""
              />
            </div>
            <div className="flex w-full flex-col-reverse gap-4 sm:flex-row sm:w-auto">
              {currentStep > 1 && (
                <Button
                  target=""
                  link={false}
                  type="button"
                  text="Previous"
                  onClick={prevStep}
                  icon={
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="pr-2"
                      style={{ color: '#FDFDFD' }}
                    />
                  }
                  style={styles.primary}
                  href=""
                />
              )}
              {currentStep < totalSteps ? (
                <Button
                  target=""
                  link={false}
                  type="button"
                  text="Next"
                  onClick={nextStep}
                  icon={
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="pr-2"
                      style={{ color: '#FDFDFD' }}
                    />
                  }
                  style={styles.primary}
                  href=""
                />
              ) : (
                <Button
                  target=""
                  link={false}
                  type="submit"
                  text={buttonText}
                  icon={
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="pr-2"
                      style={{ color: '#FDFDFD' }}
                    />
                  }
                  style={styles.primary}
                  href=""
                />
              )}
            </div>
          </div>

          {errorMessage && (
            <div className="mt-4 mx-4 sm:mx-0 flex flex-col items-center gap-4 rounded-lg border border-highlightRed bg-highlightRed/10 p-4">
              <p className="text-center text-highlightRed">{errorMessage}</p>
              <Button
                target=""
                link={false}
                type="button"
                text="Go to Step"
                onClick={goToErrorStep}
                style={styles.primary}
                href=""
              />
            </div>
          )}

          {showSuccessMessage && (
            <p className="mt-4 mx-4 sm:mx-0 text-aquaBlue">Progress saved successfully!</p>
          )}
          {showFailureMessage && (
            <p className="mt-4 mx-4 sm:mx-0 text-highlightRed">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
