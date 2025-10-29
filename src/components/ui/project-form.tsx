"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ChevronLeft, ChevronRight, Save, Trash2, Send, Info } from "lucide-react"
import * as countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
import { ConfirmationModal } from "./confirmation-modal"
import { InfoModal } from "./info-modal"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

interface FormData {
  title: string
  stage: string
  description: string
  strategy: string
  country: string
  address: string
  funds: string
  name: string
  email: string
  phone: string
  telegram: string
  referralSource: string
  referrerName: string
  referrerEmail: string
  reference1Name: string
  reference1Email: string
  reference2Name: string
  reference2Email: string
  reference3Name: string
  reference3Email: string
  lastSaved: string
  currentStep: number
}

export function ProjectForm() {
  const [title, setTitle] = useState("")
  const [stage, setStage] = useState("")
  const [description, setDescription] = useState("")
  const [strategy, setStrategy] = useState("")
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [addressError, setAddressError] = useState("")
  const [funds, setFunds] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [telegram, setTelegram] = useState("")
  const [referralSource, setReferralSource] = useState("")
  const [referrerName, setReferrerName] = useState("")
  const [referrerEmail, setReferrerEmail] = useState("")
  const [reference1Name, setReference1Name] = useState("")
  const [reference1Email, setReference1Email] = useState("")
  const [reference2Name, setReference2Name] = useState("")
  const [reference2Email, setReference2Email] = useState("")
  const [reference3Name, setReference3Name] = useState("")
  const [reference3Email, setReference3Email] = useState("")
  const [buttonText, setButtonText] = useState("Submit")

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)
  const [showSaveMessage, setShowSaveMessage] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [errorMessages, setErrorMessages] = useState<{
    title?: string;
    stage?: string;
    description?: string;
    strategy?: string;
    country?: string;
    funds?: string;
    name?: string;
    email?: string;
    phone?: string;
    telegram?: string;
    address?: string;
    referralSource?: string;
    referrerName?: string;
    referrerEmail?: string;
    reference1Name?: string;
    reference1Email?: string;
    reference2Name?: string;
    reference2Email?: string;
    reference3Name?: string;
    reference3Email?: string;
  }>({})

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
    reference1Name: false,
    reference1Email: false,
    reference2Name: false,
    reference2Email: false,
    reference3Name: false,
    reference3Email: false,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [savedData, setSavedData] = useState<FormData | null>(null)
  const totalSteps = 4

  const [errorMessage, setErrorMessage] = useState("")
  const [errorStep, setErrorStep] = useState<number | null>(null)
  const [isGeneratingToken, setIsGeneratingToken] = useState(false)
  
  const { executeRecaptcha } = useGoogleReCaptcha()

  // Initialize countries
  countries.registerLocale(enLocale)
  const obj = countries.getNames("en", { select: "official" })
  const arr = Object.entries(obj).map(([key, value]) => ({
    label: value,
    value: key,
  }))

  const projectStages = [
    { value: "concept", label: "Concept" },
    { value: "preclinical_in_silico", label: "Preclinical (in silico)" },
    { value: "preclinical_in_vitro", label: "Preclinical (in vitro)" },
    { value: "preclinical_in_vivo", label: "Preclinical (in vivo)" },
    { value: "clinical", label: "Clinical" },
  ]

  const referralSources = [
    { value: "twitter", label: "X/Twitter" },
    { value: "discord", label: "Discord" },
    { value: "telegram", label: "Telegram" },
    { value: "search", label: "Search Engine (Google)" },
    { value: "reference", label: "Reference Person" },
  ]

  const handleErrors = (tempErrors: typeof errors) => {
    setErrors({ ...tempErrors })
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
        reference1Name: false,
        reference1Email: false,
        reference2Name: false,
        reference2Email: false,
        reference3Name: false,
        reference3Email: false,
      })
      setErrorMessages({}) // Also clear error messages
    }, 30000) // 30 seconds instead of 12
  }

  const isValidEthereumAddress = (address: string) => {
    if (!address) return true // Address is optional
    const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/
    return ethereumAddressRegex.test(address)
  }

  const handleValidation = () => {
    console.log('[VALIDATION] Starting handleValidation()');
    console.log('[VALIDATION] Form values:');
    console.log('  title:', title, '(length:', title.length, ')');
    console.log('  stage:', stage, '(length:', stage.length, ')');
    console.log('  description:', description, '(length:', description.length, ')');
    console.log('  strategy:', strategy, '(length:', strategy.length, ')');
    console.log('  country:', country, '(length:', country.length, ')');
    console.log('  funds:', funds, '(parsed:', Number(funds), ')');
    console.log('  name:', name, '(length:', name.length, ')');
    console.log('  email:', email, '(includes @:', email.includes("@"), ')');
    console.log('  phone:', phone, '(length:', phone.length, ')');
    console.log('  telegram:', telegram, '(length:', telegram.length, ')');
    console.log('  address:', address || 'empty');
    console.log('  referralSource:', referralSource, '(length:', referralSource.length, ')');
    console.log('  referrerName:', referrerName, '(length:', referrerName.length, ')');
    console.log('  referrerEmail:', referrerEmail, '(length:', referrerEmail.length, ')');
    console.log('  reference1Name:', reference1Name, '(length:', reference1Name.length, ')');
    console.log('  reference1Email:', reference1Email, '(includes @:', reference1Email.includes("@"), ')');
    console.log('  reference2Name:', reference2Name, '(length:', reference2Name.length, ')');
    console.log('  reference2Email:', reference2Email, '(includes @:', reference2Email.includes("@"), ')');
    console.log('  reference3Name:', reference3Name, '(length:', reference3Name.length, ')');
    console.log('  reference3Email:', reference3Email, '(includes @:', reference3Email.includes("@"), ')');
    
    const tempErrors = {
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
      reference1Name: false,
      reference1Email: false,
      reference2Name: false,
      reference2Email: false,
      reference3Name: false,
      reference3Email: false,
    }
    const tempErrorMessages: typeof errorMessages = {};
    let isValid = true
    const failedFields: string[] = [];

    if (title.length <= 0) {
      tempErrors.title = true
      tempErrorMessages.title = "This field is required"
      isValid = false
      failedFields.push('title (empty)');
    }
    if (stage.length <= 0) {
      tempErrors.stage = true
      tempErrorMessages.stage = "Please select a project stage"
      isValid = false
      failedFields.push('stage (empty)');
    }
    if (description.length <= 0) {
      tempErrors.description = true
      tempErrorMessages.description = "This field is required"
      isValid = false
      failedFields.push('description (empty)');
    }
    if (strategy.length <= 0) {
      tempErrors.strategy = true
      tempErrorMessages.strategy = "This field is required"
      isValid = false
      failedFields.push('strategy (empty)');
    }
    if (country.length <= 0) {
      tempErrors.country = true
      tempErrorMessages.country = "Please select a country"
      isValid = false
      failedFields.push('country (empty)');
    }
    if (funds.length <= 0 || Number(funds) <= 0) {
      tempErrors.funds = true
      tempErrorMessages.funds = "Amount must be greater than 0"
      isValid = false
      failedFields.push(`funds (value: "${funds}")`);
    }
    if (name.length <= 0) {
      tempErrors.name = true
      tempErrorMessages.name = "This field is required"
      isValid = false
      failedFields.push('name (empty)');
    }
    // Improved email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length <= 0 || !emailRegex.test(email)) {
      tempErrors.email = true
      tempErrorMessages.email = "Please enter a valid email address (e.g., name@example.com)"
      isValid = false
      failedFields.push(`email (value: "${email}" - must be valid email)`);
    }
    if (phone.length <= 0) {
      tempErrors.phone = true
      tempErrorMessages.phone = "This field is required"
      isValid = false
      failedFields.push('phone (empty)');
    }
    if (telegram.length <= 0) {
      tempErrors.telegram = true
      tempErrorMessages.telegram = "This field is required"
      isValid = false
      failedFields.push('telegram (empty)');
    }
    if (address && !isValidEthereumAddress(address)) {
      tempErrors.address = true
      tempErrorMessages.address = "Please enter a valid Ethereum address (0x...)"
      isValid = false
      failedFields.push(`address (invalid: "${address}")`);
    }
    if (referralSource.length <= 0) {
      tempErrors.referralSource = true
      tempErrorMessages.referralSource = "Please select how you heard about us"
      isValid = false
      failedFields.push('referralSource (empty)');
    }
    if (referralSource === "reference") {
      if (referrerName.length <= 0) {
        tempErrors.referrerName = true
        tempErrorMessages.referrerName = "This field is required"
        isValid = false
        failedFields.push('referrerName (empty)');
      }
      if (referrerEmail.length <= 0 || !emailRegex.test(referrerEmail)) {
        tempErrors.referrerEmail = true
        tempErrorMessages.referrerEmail = "Please enter a valid email address (e.g., name@example.com)"
        isValid = false
        failedFields.push(`referrerEmail (value: "${referrerEmail}" - must be valid email)`);
      }
    }
    if (reference1Name.length <= 0) {
      tempErrors.reference1Name = true
      tempErrorMessages.reference1Name = "This field is required"
      isValid = false
      failedFields.push('reference1Name (empty)');
    }
    if (reference1Email.length <= 0 || !emailRegex.test(reference1Email)) {
      tempErrors.reference1Email = true
      tempErrorMessages.reference1Email = "Please enter a valid email address (e.g., name@example.com)"
      isValid = false
      failedFields.push(`reference1Email (value: "${reference1Email}" - must be valid email)`);
    }
    if (reference2Name.length <= 0) {
      tempErrors.reference2Name = true
      tempErrorMessages.reference2Name = "This field is required"
      isValid = false
      failedFields.push('reference2Name (empty)');
    }
    if (reference2Email.length <= 0 || !emailRegex.test(reference2Email)) {
      tempErrors.reference2Email = true
      tempErrorMessages.reference2Email = "Please enter a valid email address (e.g., name@example.com)"
      isValid = false
      failedFields.push(`reference2Email (value: "${reference2Email}" - must be valid email)`);
    }
    if (reference3Name.length <= 0) {
      tempErrors.reference3Name = true
      tempErrorMessages.reference3Name = "This field is required"
      isValid = false
      failedFields.push('reference3Name (empty)');
    }
    if (reference3Email.length <= 0 || !emailRegex.test(reference3Email)) {
      tempErrors.reference3Email = true
      tempErrorMessages.reference3Email = "Please enter a valid email address (e.g., name@example.com)"
      isValid = false
      failedFields.push(`reference3Email (value: "${reference3Email}" - must be valid email)`);
    }

    console.log('[VALIDATION] Validation complete. isValid:', isValid);
    if (!isValid) {
      console.error('[VALIDATION] ❌ Failed fields:', failedFields);
    } else {
      console.log('[VALIDATION] ✅ All fields valid');
    }

    setErrorMessages(tempErrorMessages)
    handleErrors(tempErrors)
    return isValid
  }

  const validateEthereumAddress = (value: string) => {
    if (!value) {
      setAddressError("")
      return
    }
    if (!value.startsWith("0x")) {
      setAddressError("Address must start with 0x")
      return
    }
    if (value.length < 42) {
      setAddressError("Address is too short")
      return
    }
    if (value.length > 42) {
      setAddressError("Address is too long")
      return
    }
    if (!/^0x[a-fA-F0-9]{40}$/.test(value)) {
      setAddressError("Address must contain only hexadecimal characters")
      return
    }
    setAddressError("")
  }

  const validateStep = (step: number) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true
    switch (step) {
      case 1:
        if (
          !name ||
          !email ||
          !emailRegex.test(email) ||
          !phone ||
          !telegram ||
          !referralSource ||
          (referralSource === "reference" && (!referrerName || !referrerEmail || !emailRegex.test(referrerEmail)))
        ) {
          isValid = false
        }
        break
      case 2:
        if (!title || !stage || !description || !strategy) {
          isValid = false
        }
        break
      case 3:
        if (
          !funds ||
          Number(funds) <= 0 ||
          !country ||
          !reference1Name ||
          !reference1Email ||
          !emailRegex.test(reference1Email) ||
          !reference2Name ||
          !reference2Email ||
          !emailRegex.test(reference2Email) ||
          !reference3Name ||
          !reference3Email ||
          !emailRegex.test(reference3Email)
        ) {
          isValid = false
        }
        break
      case 4:
        if (address && !isValidEthereumAddress(address)) {
          isValid = false
        }
        break
    }
    return isValid
  }

  const findFirstErrorStep = () => {
    for (let i = 1; i <= totalSteps; i++) {
      if (!validateStep(i)) {
        return i
      }
    }
    return null
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    console.log('========================================');
    console.log('[FORM] Submit button clicked');
    console.log('[FORM] Current step:', currentStep, '/ Total steps:', totalSteps);
    
    e.preventDefault()

    // Safeguard to ensure this only runs on the last step
    if (currentStep !== totalSteps) {
      console.log('[FORM] ❌ Not on last step, ignoring submit');
      return
    }
    
    console.log('[FORM] ✅ On last step, proceeding with validation');
    console.log('[FORM] Checking for errors in all steps...');

    const firstErrorStep = findFirstErrorStep()
    if (firstErrorStep) {
      console.log('[FORM] ❌ Validation failed at step:', firstErrorStep);
      handleValidation() // Trigger validation to highlight fields and set error messages
      setErrorStep(firstErrorStep)
      setErrorMessage(`Please complete all required fields in step ${firstErrorStep}`)
      setCurrentStep(firstErrorStep) // Navigate to the error step
      scrollToTop()
      // Scroll to first error field after a brief delay
      setTimeout(() => scrollToFirstError(), 300)
      return
    }
    
    console.log('[FORM] ✅ All steps validated successfully');
    console.log('[FORM] Running final form validation...');

    const isValidForm = handleValidation()
    console.log('[FORM] Final validation result:', isValidForm);
    
    if (isValidForm) {
      console.log('[FORM] ✅ Form is valid, opening confirmation modal');
      setIsModalOpen(true)
    } else {
      console.log('[FORM] ❌ Form validation failed');
      // Find which step has the error and navigate there
      const errorStepNum = findFirstErrorStep()
      if (errorStepNum) {
        setCurrentStep(errorStepNum)
        setErrorStep(errorStepNum)
        setErrorMessage(`Please fix the errors in step ${errorStepNum} and try again`)
        scrollToTop()
        // Scroll to first error field after a brief delay
        setTimeout(() => scrollToFirstError(), 300)
      }
    }
    console.log('========================================');
  }

  const scrollToTop = () => {
    const formElement = document.querySelector("form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scrollToFirstError = () => {
    console.log('[SCROLL] Looking for first error field...');
    const errorField = document.querySelector('.border-red-500')
    if (errorField) {
      console.log('[SCROLL] Found error field, scrolling to it');
      errorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
      // Focus the field if it's an input
      if (errorField instanceof HTMLInputElement || 
          errorField instanceof HTMLTextAreaElement || 
          errorField instanceof HTMLSelectElement) {
        errorField.focus()
        console.log('[SCROLL] Focused error field');
      }
    } else {
      console.log('[SCROLL] No error field found');
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      const newStep = currentStep + 1
      setCurrentStep(newStep)
      if (newStep === errorStep) {
        setErrorMessage("")
        setErrorStep(null)
      }
      scrollToTop()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      const newStep = currentStep - 1
      setCurrentStep(newStep)
      if (newStep === errorStep) {
        setErrorMessage("")
        setErrorStep(null)
      }
      scrollToTop()
    }
  }

  const goToErrorStep = () => {
    if (errorStep) {
      setCurrentStep(errorStep)
      setErrorMessage("")
      setErrorStep(null)
      scrollToTop()
    }
  }

  // Generate reCAPTCHA token for project submission
  const generateRecaptchaToken = async (): Promise<string | null> => {
    if (!executeRecaptcha) {
      console.warn('[ProjectForm] reCAPTCHA not yet available');
      return null;
    }

    setIsGeneratingToken(true);
    try {
      console.log('[ProjectForm] Generating reCAPTCHA token for project submission');
      const token = await executeRecaptcha('submit_project');
      console.log('[ProjectForm] reCAPTCHA token generated');
      return token;
    } catch (error) {
      console.error('[ProjectForm] Error generating reCAPTCHA token:', error);
      return null;
    } finally {
      setIsGeneratingToken(false);
    }
  };

  useEffect(() => {
    if (currentStep === errorStep) {
      setErrorMessage("")
      setErrorStep(null)
    }
  }, [currentStep, errorStep])

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false)
    // Reset form fields
    setTitle("")
    setStage("")
    setDescription("")
    setStrategy("")
    setCountry("")
    setAddress("")
    setFunds("")
    setName("")
    setEmail("")
    setPhone("")
    setTelegram("")
    setReferralSource("")
    setReferrerName("")
    setReferrerEmail("")
    setReference1Name("")
    setReference1Email("")
    setReference2Name("")
    setReference2Email("")
    setReference3Name("")
    setReference3Email("")

    // Reset to first step after successful submission
    setCurrentStep(1)

    // Clear localStorage
    localStorage.removeItem("projectFormData")
    setSavedData(null)
  }

  async function upload() {
    console.log('========================================');
    console.log('[FORM-UPLOAD] Upload function called from confirmation modal');
    console.log('[FORM-UPLOAD] Running final validation...');
    
    const isValidForm = handleValidation()
    console.log('[FORM-UPLOAD] Validation result:', isValidForm);

    if (isValidForm) {
      try {
        setIsSubmitting(true)
        setButtonText("Verifying...")
        setShowFailureMessage(false)
        console.log("[FORM-UPLOAD] Starting submission process...");
        console.log("[FORM-UPLOAD] Form data summary:");
        console.log("  - Title:", title);
        console.log("  - Stage:", stage);
        console.log("  - Name:", name);
        console.log("  - Email:", email);
        console.log("  - Funds:", funds);
        console.log("  - References:", reference1Name, reference2Name, reference3Name);

        // Generate reCAPTCHA token
        console.log("[FORM-UPLOAD] Generating reCAPTCHA token...");
        const captchaToken = await generateRecaptchaToken()
        console.log("[FORM-UPLOAD] reCAPTCHA token received:", !!captchaToken);
        
        if (!captchaToken) {
          console.error("[FORM-UPLOAD] ❌ Failed to generate captcha token")
          setShowFailureMessage(true)
          setButtonText("Submit")
          setIsModalOpen(false)
          setIsSubmitting(false)
          return
        }

        setButtonText("Submitting...")
        console.log("[FORM-UPLOAD] ✅ Captcha verified, preparing API call...")

        // Get the label for the selected stage
        const selectedStage = projectStages.find((s) => s.value === stage)
        const stageLabel = selectedStage ? selectedStage.label : stage

        // Get the label for the selected referral source
        const selectedSource = referralSources.find((s) => s.value === referralSource)
        const sourceLabel = selectedSource ? selectedSource.label : referralSource

        const payload = {
          txId: "N/A",
          title,
          stage: stageLabel,
          description,
          strategy,
          country,
          address,
          funds,
          name,
          email,
          phone,
          telegram,
          referralSource: sourceLabel,
          referrerName,
          referrerEmail,
          reference1Name,
          reference1Email,
          reference2Name,
          reference2Email,
          reference3Name,
          reference3Email,
          captchaToken,
        }

        console.log("[FORM-UPLOAD] Payload prepared:", JSON.stringify(payload, null, 2));
        console.log("[FORM-UPLOAD] Making fetch request to /api/project...");

        const res = await fetch("/api/project", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        console.log("[FORM-UPLOAD] Fetch completed. Status:", res.status, res.statusText);
        console.log("[FORM-UPLOAD] Parsing JSON response...");
        
        const data = await res.json()
        console.log("[FORM-UPLOAD] Response data:", JSON.stringify(data, null, 2))

        if (!res.ok) {
          console.error("[FORM-UPLOAD] ❌ Response not OK. Status:", res.status);
          console.error("[FORM-UPLOAD] Error data:", data);
          throw new Error(data.error || data.details || "Project submission failed")
        }

        console.log("[FORM-UPLOAD] ✅ Submission successful!");
        console.log("[FORM-UPLOAD] Inserted record ID:", data.id);
        console.log("[FORM-UPLOAD] Closing modal and showing success message");
        console.log('========================================');
        
        setIsModalOpen(false)
        setIsSuccessModalOpen(true)
        setShowFailureMessage(false)
        setButtonText("Submit")
        setIsSubmitting(false)
      } catch (error) {
        console.error('========================================');
        console.error("[FORM-UPLOAD] ❌ ERROR during submission");
        console.error("[FORM-UPLOAD] Error type:", error instanceof Error ? error.constructor.name : typeof error);
        console.error("[FORM-UPLOAD] Error message:", error instanceof Error ? error.message : 'Unknown');
        console.error("[FORM-UPLOAD] Full error:", error);
        console.error('========================================');
        
        setIsModalOpen(false)
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Submit")
        setIsSubmitting(false)
      }
    } else {
      console.error('========================================');
      console.error("[FORM-UPLOAD] ❌ Form validation failed in upload()");
      console.error('========================================');
      
      setIsModalOpen(false)
      setShowFailureMessage(true)
      setIsSubmitting(false)
    }
  }

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("projectFormData")
    if (saved) {
      const parsedData = JSON.parse(saved)
      setSavedData(parsedData)
      // Populate form with saved data
      setTitle(parsedData.title || "")
      setStage(parsedData.stage || "")
      setDescription(parsedData.description || "")
      setStrategy(parsedData.strategy || "")
      setCountry(parsedData.country || "")
      setAddress(parsedData.address || "")
      setFunds(parsedData.funds || "")
      setName(parsedData.name || "")
      setEmail(parsedData.email || "")
      setPhone(parsedData.phone || "")
      setTelegram(parsedData.telegram || "")
      setReferralSource(parsedData.referralSource || "")
      setReferrerName(parsedData.referrerName || "")
      setReferrerEmail(parsedData.referrerEmail || "")
      setReference1Name(parsedData.reference1Name || "")
      setReference1Email(parsedData.reference1Email || "")
      setReference2Name(parsedData.reference2Name || "")
      setReference2Email(parsedData.reference2Email || "")
      setReference3Name(parsedData.reference3Name || "")
      setReference3Email(parsedData.reference3Email || "")
      setCurrentStep(parsedData.currentStep || 1)
    }
  }, [])

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
      reference1Name,
      reference1Email,
      reference2Name,
      reference2Email,
      reference3Name,
      reference3Email,
      lastSaved: new Date().toISOString(),
      currentStep,
    }
    localStorage.setItem("projectFormData", JSON.stringify(formData))
    setSavedData(formData)
    setShowSaveMessage(true)
    setTimeout(() => setShowSaveMessage(false), 3000)
  }

  const handleDiscard = () => {
    if (window.confirm("Are you sure you want to discard all changes? This cannot be undone.")) {
      localStorage.removeItem("projectFormData")
      setSavedData(null)
      // Reset all form fields
      setTitle("")
      setStage("")
      setDescription("")
      setStrategy("")
      setCountry("")
      setAddress("")
      setFunds("")
      setName("")
      setEmail("")
      setPhone("")
      setTelegram("")
      setReferralSource("")
      setReferrerName("")
      setReferrerEmail("")
      setReference1Name("")
      setReference1Email("")
      setReference2Name("")
      setReference2Email("")
      setReference3Name("")
      setReference3Email("")
      setCurrentStep(1)
    }
  }

  const renderProgressBar = () => {
    const stepTitles = ["Contact Info", "Project Details", "Funding", "Address"]
    return (
      <div className="mb-8 w-full">
        <div className="flex w-full items-start">
          {stepTitles.map((title, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center">
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
                    index + 1 <= currentStep ? "bg-white text-[#010737]" : "bg-white/20 text-white/50"
                  }`}
                >
                  {index + 1}
                </div>
                <p className="mt-2 w-16 text-center text-xs text-white/70 sm:w-24 sm:text-sm">{title}</p>
              </div>

              {index < stepTitles.length - 1 && (
                <div className="mx-1 mt-3.5 h-1 w-full flex-grow sm:mx-2">
                  <div
                    className={`h-full w-full transition-colors duration-300 ${
                      index + 1 < currentStep ? "bg-white" : "bg-white/20"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  }

  const InfoTooltip = ({ message }: { message: string }) => (
    <div className="group relative inline-block">
      <Info className="h-4 w-4 text-white/70 cursor-help" />
      <div className="invisible group-hover:visible absolute z-10 w-64 p-2 mt-1 text-sm text-white bg-black/80 rounded-lg shadow-lg -left-32">
        {message}
      </div>
    </div>
  )

  const renderFormStep = () => {
    switch (currentStep) {
      case 1: // Contact Information
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-2xl font-semibold">Contact Information</p>
              <p className="text-sm text-gray-500">
                Please provide your contact information.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                    errors.name ? "border-red-500" : "border-white/20"
                  } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                />
                {errors.name && errorMessages.name && (
                  <p className="text-red-400 text-sm mt-1">{errorMessages.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onBlur={() => {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if (email && !emailRegex.test(email)) {
                      setErrors(prev => ({ ...prev, email: true }))
                      setErrorMessages(prev => ({ 
                        ...prev, 
                        email: "Please enter a valid email address (e.g., name@example.com)" 
                      }))
                    } else if (email && emailRegex.test(email)) {
                      setErrors(prev => ({ ...prev, email: false }))
                      setErrorMessages(prev => ({ ...prev, email: undefined }))
                    }
                  }}
                  className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                    errors.email ? "border-red-500" : "border-white/20"
                  } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                />
                {errors.email && errorMessages.email && (
                  <p className="text-red-400 text-sm mt-1">{errorMessages.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone *</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                    errors.phone ? "border-red-500" : "border-white/20"
                  } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                />
                {errors.phone && errorMessages.phone && (
                  <p className="text-red-400 text-sm mt-1">{errorMessages.phone}</p>
                )}
              </div>
              <div>
                <label htmlFor="telegram" className="block text-sm font-medium mb-1">Telegram *</label>
                <input
                  id="telegram"
                  type="text"
                  placeholder="Your Telegram username"
                  value={telegram}
                  onChange={e => setTelegram(e.target.value)}
                  className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                    errors.telegram ? "border-red-500" : "border-white/20"
                  } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                />
                {errors.telegram && errorMessages.telegram && (
                  <p className="text-red-400 text-sm mt-1">{errorMessages.telegram}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="referralSource" className="block text-sm font-medium mb-1">How did you hear about us? *</label>
              <select
                id="referralSource"
                value={referralSource}
                onChange={e => setReferralSource(e.target.value)}
                className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                  errors.referralSource ? "border-red-500" : "border-white/20"
                } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
              >
                <option value="" disabled>Select an option</option>
                {referralSources.map(source => (
                  <option key={source.value} value={source.value} className="bg-[#010737]">{source.label}</option>
                ))}
              </select>
              {errors.referralSource && errorMessages.referralSource && (
                <p className="text-red-400 text-sm mt-1">{errorMessages.referralSource}</p>
              )}
            </div>
            {referralSource === "reference" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="referrerName" className="block text-sm font-medium mb-1">Reference Person's Name *</label>
                  <input
                    id="referrerName"
                    type="text"
                    placeholder="Reference person's name"
                    value={referrerName}
                    onChange={e => setReferrerName(e.target.value)}
                    className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                      errors.referrerName ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                  />
                  {errors.referrerName && errorMessages.referrerName && (
                    <p className="text-red-400 text-sm mt-1">{errorMessages.referrerName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="referrerEmail" className="block text-sm font-medium mb-1">Reference Person's Email *</label>
                  <input
                    id="referrerEmail"
                    type="email"
                    placeholder="Reference person's email"
                    value={referrerEmail}
                    onChange={e => setReferrerEmail(e.target.value)}
                    onBlur={() => {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                      if (referrerEmail && !emailRegex.test(referrerEmail)) {
                        setErrors(prev => ({ ...prev, referrerEmail: true }))
                        setErrorMessages(prev => ({ 
                          ...prev, 
                          referrerEmail: "Please enter a valid email address (e.g., name@example.com)" 
                        }))
                      } else if (referrerEmail && emailRegex.test(referrerEmail)) {
                        setErrors(prev => ({ ...prev, referrerEmail: false }))
                        setErrorMessages(prev => ({ ...prev, referrerEmail: undefined }))
                      }
                    }}
                    className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                      errors.referrerEmail ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                  />
                  {errors.referrerEmail && errorMessages.referrerEmail && (
                    <p className="text-red-400 text-sm mt-1">{errorMessages.referrerEmail}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )
      case 2: // Project Details
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-2xl font-semibold">Project Details</p>
              <p className="text-sm text-gray-500">
                Tell us more about your project.
              </p>
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">Project Title *</label>
              <input
                id="title"
                type="text"
                placeholder="Project title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                  errors.title ? "border-red-500" : "border-white/20"
                } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
              />
              {errors.title && errorMessages.title && (
                <p className="text-red-400 text-sm mt-1">{errorMessages.title}</p>
              )}
            </div>
            <div>
              <label htmlFor="stage" className="block text-sm font-medium mb-1">Project Stage *</label>
              <select
                id="stage"
                value={stage}
                onChange={e => setStage(e.target.value)}
                className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                  errors.stage ? "border-red-500" : "border-white/20"
                } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
              >
                <option value="" disabled>Select a stage</option>
                {projectStages.map(stage => (
                  <option key={stage.value} value={stage.value} className="bg-[#010737]">{stage.label}</option>
                ))}
              </select>
              {errors.stage && errorMessages.stage && (
                <p className="text-red-400 text-sm mt-1">{errorMessages.stage}</p>
              )}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">Project Description *</label>
              <textarea
                id="description"
                placeholder="A brief description of your project"
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={5}
                className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                  errors.description ? "border-red-500" : "border-white/20"
                } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
              />
              {errors.description && errorMessages.description && (
                <p className="text-red-400 text-sm mt-1">{errorMessages.description}</p>
              )}
            </div>
            <div>
              <label htmlFor="strategy" className="block text-sm font-medium mb-1">Commercialization Strategy *</label>
              <textarea
                id="strategy"
                placeholder="Your commercialization strategy. Specify your go-to-market strategy: to generate and potentially commercialize assets such as data and intellectual property from the conducted research."
                value={strategy}
                onChange={e => setStrategy(e.target.value)}
                rows={5}
                className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                  errors.strategy ? "border-red-500" : "border-white/20"
                } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
              />
              {errors.strategy && errorMessages.strategy && (
                <p className="text-red-400 text-sm mt-1">{errorMessages.strategy}</p>
              )}
            </div>
          </div>
        )
      case 3: // Funding
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-2xl font-semibold">Funding, Location, and References</p>
              <p className="text-sm text-gray-500">
                Provide funding and location details.
              </p>
            </div>
            <div>
              <label htmlFor="funds" className="block text-sm font-medium mb-1">Requested Funds (USD) *</label>
              <input
                id="funds"
                type="number"
                placeholder="Amount in USD"
                value={funds}
                onChange={e => setFunds(e.target.value)}
                className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                  errors.funds ? "border-red-500" : "border-white/20"
                } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
              />
              {errors.funds && errorMessages.funds && (
                <p className="text-red-400 text-sm mt-1">{errorMessages.funds}</p>
              )}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium mb-1">Country *</label>
              <select
                id="country"
                value={country}
                onChange={e => setCountry(e.target.value)}
                className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                  errors.country ? "border-red-500" : "border-white/20"
                } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
              >
                <option value="" disabled>Select a country</option>
                {arr.map(c => (
                  <option key={c.value} value={c.value} className="bg-[#010737]">{c.label}</option>
                ))}
              </select>
              {errors.country && errorMessages.country && (
                <p className="text-red-400 text-sm mt-1">{errorMessages.country}</p>
              )}
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Professional References *</h3>
              <p className="text-sm text-gray-400 mb-4">Please provide 3 professional references who can vouch for your work.</p>
              
              {/* Reference 1 */}
              <div className="space-y-4 mb-6 p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-medium text-white/90">Reference 1</h4>
                <div>
                  <label htmlFor="reference1Name" className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    id="reference1Name"
                    type="text"
                    placeholder="Reference name"
                    value={reference1Name}
                    onChange={e => setReference1Name(e.target.value)}
                    className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                      errors.reference1Name ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                  />
                  {errors.reference1Name && errorMessages.reference1Name && (
                    <p className="text-red-400 text-sm mt-1">{errorMessages.reference1Name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="reference1Email" className="block text-sm font-medium mb-1">Email Address *</label>
                  <input
                    id="reference1Email"
                    type="email"
                    placeholder="reference@email.com"
                    value={reference1Email}
                    onChange={e => setReference1Email(e.target.value)}
                    onBlur={() => {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                      if (reference1Email && !emailRegex.test(reference1Email)) {
                        setErrors(prev => ({ ...prev, reference1Email: true }))
                        setErrorMessages(prev => ({ 
                          ...prev, 
                          reference1Email: "Please enter a valid email address (e.g., name@example.com)" 
                        }))
                      } else if (reference1Email && emailRegex.test(reference1Email)) {
                        setErrors(prev => ({ ...prev, reference1Email: false }))
                        setErrorMessages(prev => ({ ...prev, reference1Email: undefined }))
                      }
                    }}
                    className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                      errors.reference1Email ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                  />
                  {errors.reference1Email && errorMessages.reference1Email && (
                    <p className="text-red-400 text-sm mt-1">{errorMessages.reference1Email}</p>
                  )}
                </div>
              </div>

              {/* Reference 2 */}
              <div className="space-y-4 mb-6 p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-medium text-white/90">Reference 2</h4>
                <div>
                  <label htmlFor="reference2Name" className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    id="reference2Name"
                    type="text"
                    placeholder="Reference name"
                    value={reference2Name}
                    onChange={e => setReference2Name(e.target.value)}
                    className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                      errors.reference2Name ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                  />
                  {errors.reference2Name && errorMessages.reference2Name && (
                    <p className="text-red-400 text-sm mt-1">{errorMessages.reference2Name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="reference2Email" className="block text-sm font-medium mb-1">Email Address *</label>
                  <input
                    id="reference2Email"
                    type="email"
                    placeholder="reference@email.com"
                    value={reference2Email}
                    onChange={e => setReference2Email(e.target.value)}
                    onBlur={() => {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                      if (reference2Email && !emailRegex.test(reference2Email)) {
                        setErrors(prev => ({ ...prev, reference2Email: true }))
                        setErrorMessages(prev => ({ 
                          ...prev, 
                          reference2Email: "Please enter a valid email address (e.g., name@example.com)" 
                        }))
                      } else if (reference2Email && emailRegex.test(reference2Email)) {
                        setErrors(prev => ({ ...prev, reference2Email: false }))
                        setErrorMessages(prev => ({ ...prev, reference2Email: undefined }))
                      }
                    }}
                    className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                      errors.reference2Email ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                  />
                  {errors.reference2Email && errorMessages.reference2Email && (
                    <p className="text-red-400 text-sm mt-1">{errorMessages.reference2Email}</p>
                  )}
                </div>
              </div>

              {/* Reference 3 */}
              <div className="space-y-4 mb-6 p-4 bg-white/5 rounded-lg">
                <h4 className="text-sm font-medium text-white/90">Reference 3</h4>
                <div>
                  <label htmlFor="reference3Name" className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    id="reference3Name"
                    type="text"
                    placeholder="Reference name"
                    value={reference3Name}
                    onChange={e => setReference3Name(e.target.value)}
                    className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                      errors.reference3Name ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                  />
                  {errors.reference3Name && errorMessages.reference3Name && (
                    <p className="text-red-400 text-sm mt-1">{errorMessages.reference3Name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="reference3Email" className="block text-sm font-medium mb-1">Email Address *</label>
                  <input
                    id="reference3Email"
                    type="email"
                    placeholder="reference@email.com"
                    value={reference3Email}
                    onChange={e => setReference3Email(e.target.value)}
                    onBlur={() => {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                      if (reference3Email && !emailRegex.test(reference3Email)) {
                        setErrors(prev => ({ ...prev, reference3Email: true }))
                        setErrorMessages(prev => ({ 
                          ...prev, 
                          reference3Email: "Please enter a valid email address (e.g., name@example.com)" 
                        }))
                      } else if (reference3Email && emailRegex.test(reference3Email)) {
                        setErrors(prev => ({ ...prev, reference3Email: false }))
                        setErrorMessages(prev => ({ ...prev, reference3Email: undefined }))
                      }
                    }}
                    className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                      errors.reference3Email ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
                  />
                  {errors.reference3Email && errorMessages.reference3Email && (
                    <p className="text-red-400 text-sm mt-1">{errorMessages.reference3Email}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      case 4: // Address
        return (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-2xl font-semibold">Ethereum Address</p>
              <p className="text-sm text-gray-500">
                Provide your Ethereum address for receiving funds.
              </p>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                Your Ethereum wallet address (optional)&nbsp;
                <InfoTooltip message="Provide the Ethereum address of the wallet you want to receive the funds to." />
              </label>
              <input
                id="address"
                type="text"
                placeholder="0x..."
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                  validateEthereumAddress(e.target.value);
                }}
                className={`w-full p-3 rounded-lg bg-white/10 border transition-all duration-300 ${
                  errors.address || addressError ? "border-red-500" : "border-white/20"
                } focus:outline-none focus:ring-2 focus:ring-[#78DFEC]`}
              />
              {addressError && <p className="text-red-400 text-sm mt-1">{addressError}</p>}
              {errors.address && errorMessages.address && !addressError && (
                <p className="text-red-400 text-sm mt-1">{errorMessages.address}</p>
              )}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <AnimatedSection className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Personalized Medicine Project Funded</h1>
          <p className="text-xl text-white/80">
          In four easy steps, share your project in personalized medicine. Research that tailors treatments to each person’s unique biology using genes, biomarkers, and data to predict what works best.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <form className="space-y-8" noValidate>
            {renderProgressBar()}

            {renderFormStep()}

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/20">
              <div className="flex gap-4">
                <Button
                  type="button"
                  onClick={handleSave}
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Progress
                </Button>
                <Button
                  type="button"
                  onClick={handleDiscard}
                  variant="outline"
                  className="border-red-400/50 text-red-400 hover:bg-red-400/10"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Discard
                </Button>
              </div>

              <div className="flex gap-4">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={prevStep}
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}
                {currentStep < totalSteps ? (
                  <Button type="button" onClick={nextStep} className="bg-white text-[#010737] hover:bg-white/90">
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={(e) => {
                      console.log('[BUTTON] Submit button clicked - event triggered');
                      console.log('[BUTTON] Button text:', buttonText);
                      console.log('[BUTTON] Is generating token:', isGeneratingToken);
                      console.log('[BUTTON] Current step:', currentStep);
                      handleSubmit(e);
                    }}
                    disabled={isGeneratingToken}
                    className="bg-white text-[#010737] hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {buttonText}
                  </Button>
                )}
              </div>
            </div>

            {errorMessage && (
              <div className="flex flex-col items-center gap-4 rounded-lg border border-red-400/50 bg-red-400/10 p-4">
                <p className="text-center text-red-400">{errorMessage}</p>
                <Button type="button" onClick={goToErrorStep} className="bg-white text-[#010737] hover:bg-white/90">
                  Go to Step {errorStep}
                </Button>
              </div>
            )}

            {showSaveMessage && <p className="text-center text-green-400">Progress saved successfully!</p>}
            {showSuccessMessage && (
              <div className="text-center">
                <p className="text-green-400 text-lg font-semibold mb-2">
                  Your project has been submitted successfully!
                </p>
                <p className="text-white/80">
                  Thank you for your submission. Our team will review your project and get back to you soon.
                </p>
              </div>
            )}
            {showFailureMessage && <p className="text-center text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </AnimatedSection>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => !isSubmitting && setIsModalOpen(false)}
        onConfirm={upload}
        title="Confirm Submission"
        message="Are you sure you want to submit your project? This action cannot be undone."
        confirmText={isSubmitting ? buttonText : "Submit Project"}
      />
      <InfoModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
        title="Project Submitted!"
        message="Thank you for your submission. Our team will review your project and get back to you soon."
        buttonText="Done"
      />
    </div>
  )
}
