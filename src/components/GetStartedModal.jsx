"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Modal } from "./ui/Modal";
import { Toast } from "./ui/Toast";
import SendIcon from "@/app/assets/contactUsPageIcons/Send.svg";
import { emailConfig } from "@/config/emailConfig";
import "./GetStartedModal.scss";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  country: "",
  phone: "",
  userCount: "",
  siemStatus: "",
  siemStatusOther: "",
};

const INITIAL_STATUS = {
  loading: false,
  success: false,
  error: false,
  message: "",
};

export function GetStartedModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormState);
  const [formStatus, setFormStatus] = useState(INITIAL_STATUS);

  useEffect(() => {
    emailjs.init(emailConfig.publicKey);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        title: formData.company,
        message: `
Get Started Request:

Contact Information:
- First Name: ${formData.firstName}
- Last Name: ${formData.lastName}
- Email: ${formData.email}
- Company: ${formData.company}
- Country: ${formData.country}
- Phone: ${formData.phone}

Additional Information:
- User/Asset Count: ${formData.userCount || "Not provided"}
- Current Security Infrastructure: ${
          formData.siemStatus === "other"
            ? formData.siemStatusOther
            : formData.siemStatus || "Not provided"
        }
        `,
        to_email: "support@helxon.com",
      };

      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
      );

      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message:
          "Thank you! Your request has been submitted successfully. We'll get back to you soon.",
      });

      setFormData(initialFormState);

      setTimeout(() => {
        setFormStatus(INITIAL_STATUS);
        onClose?.();
      }, 3000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message:
          "Sorry, something went wrong. Please try again or contact us directly at support@helxon.com",
      });

      setTimeout(() => {
        setFormStatus(INITIAL_STATUS);
      }, 5000);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseToast = () => {
    setFormStatus(INITIAL_STATUS);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="get-started-modal">
          <motion.div
            className="get-started-modal__header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="get-started-modal__title">Get Started with Helxon</h2>
            <p className="get-started-modal__subtitle">
              Fill out the form below and our team will reach out to you shortly
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="get-started-modal__form">
            <div className="get-started-modal__form-row">
              <motion.div
                className="get-started-modal__form-field"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label className="get-started-modal__form-label">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="get-started-modal__form-input"
                  placeholder="John"
                />
              </motion.div>

              <motion.div
                className="get-started-modal__form-field"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label className="get-started-modal__form-label">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="get-started-modal__form-input"
                  placeholder="Doe"
                />
              </motion.div>
            </div>

            <div className="get-started-modal__form-row">
              <motion.div
                className="get-started-modal__form-field"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="get-started-modal__form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="get-started-modal__form-input"
                  placeholder="john@company.com"
                />
              </motion.div>

              <motion.div
                className="get-started-modal__form-field"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label className="get-started-modal__form-label">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="get-started-modal__form-input"
                  placeholder="Acme Inc"
                />
              </motion.div>
            </div>

            <div className="get-started-modal__form-row">
              <motion.div
                className="get-started-modal__form-field"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="get-started-modal__form-label">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="get-started-modal__form-input"
                  placeholder="United States"
                />
              </motion.div>

              <motion.div
                className="get-started-modal__form-field"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="get-started-modal__form-label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="get-started-modal__form-input"
                  placeholder="+1 (123) 456-7890"
                />
              </motion.div>
            </div>

            <motion.div
              className="get-started-modal__divider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <span>Optional Information</span>
            </motion.div>

            <motion.div
              className="get-started-modal__form-field"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <label className="get-started-modal__form-label">
                How many users or assets do you have?
              </label>
              <div className="get-started-modal__radio-group">
                <label className="get-started-modal__radio-label">
                  <input
                    type="radio"
                    name="userCount"
                    value="Less than 50 users/assets"
                    checked={
                      formData.userCount === "Less than 50 users/assets"
                    }
                    onChange={handleChange}
                    className="get-started-modal__radio-input"
                  />
                  <span className="get-started-modal__radio-text">
                    Less than 50 Users/Assets
                  </span>
                </label>
                <label className="get-started-modal__radio-label">
                  <input
                    type="radio"
                    name="userCount"
                    value="50+ Users/Assets"
                    checked={formData.userCount === "50+ Users/Assets"}
                    onChange={handleChange}
                    className="get-started-modal__radio-input"
                  />
                  <span className="get-started-modal__radio-text">
                    50+ Users/Assets
                  </span>
                </label>
              </div>
            </motion.div>

            <motion.div
              className="get-started-modal__form-field"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <label className="get-started-modal__form-label">
                What is your current security infrastructure?
              </label>
              <div className="get-started-modal__radio-group get-started-modal__radio-group--vertical">
                {[
                  "Starting Fresh – No existing security tools",
                  "Have SIEM – Need expert monitoring team",
                  "Have EDR – Need centralized management",
                  "Have both SIEM & EDR – Need 24/7 support",
                  "Have internal team – Need additional support",
                  "Switching providers – Looking for better service",
                ].map((option) => (
                  <label key={option} className="get-started-modal__radio-label">
                    <input
                      type="radio"
                      name="siemStatus"
                      value={option}
                      checked={formData.siemStatus === option}
                      onChange={handleChange}
                      className="get-started-modal__radio-input"
                    />
                    <span className="get-started-modal__radio-text">
                      {option}
                    </span>
                  </label>
                ))}
                <label className="get-started-modal__radio-label">
                  <input
                    type="radio"
                    name="siemStatus"
                    value="other"
                    checked={formData.siemStatus === "other"}
                    onChange={handleChange}
                    className="get-started-modal__radio-input"
                  />
                  <span className="get-started-modal__radio-text">Other</span>
                </label>
              </div>
              {formData.siemStatus === "other" ? (
                <motion.input
                  type="text"
                  name="siemStatusOther"
                  value={formData.siemStatusOther}
                  onChange={handleChange}
                  className="get-started-modal__form-input get-started-modal__form-input--other"
                  placeholder="Please specify..."
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                />
              ) : null}
            </motion.div>

            <motion.button
              type="submit"
              className="get-started-modal__form-submit"
              disabled={formStatus.loading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formStatus.loading ? (
                <>
                  <span className="get-started-modal__spinner" />
                  Submitting...
                </>
              ) : (
                <>
                  <Image
                    src={SendIcon}
                    alt=""
                    className="get-started-modal__send-icon"
                    width={24}
                    height={24}
                    priority={false}
                  />
                  <span>Submit Request</span>
                </>
              )}
            </motion.button>
          </form>
        </div>
      </Modal>

      <Toast
        message={formStatus.message}
        type={formStatus.success ? "success" : "error"}
        isVisible={formStatus.success || formStatus.error}
        onClose={handleCloseToast}
        duration={formStatus.success ? 3000 : 5000}
      />
    </>
  );
}

