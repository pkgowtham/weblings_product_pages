'use client';

import React, { useState } from "react";
import { useStyle } from "./style";
import contactData from "../../data/contact.json";
import { getSrc } from "../../utils/getSrc";
import gowthamFounderImg from "../../assets/images/about/gowtham_founder.jpg";
import MailIcon from "../../assets/icons_component/MailIcon";
import StatusModal, { StatusModalType } from "../../components/statusModal";

// Email regex: ensures proper structure, exactly one period after @, and at least 2 letters after the period
const EMAIL_REGEX = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

const Contact: React.FC = () => {
  const classes = useStyle();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    painpoint: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: StatusModalType;
    badge?: string;
    title: string;
    message: React.ReactNode;
    primaryBtnText?: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.painpoint.trim()) {
      setModalState({
        isOpen: true,
        type: "warning",
        badge: "MISSING INFO",
        title: "Please Complete All Fields",
        message: "Please enter your name and describe your question or requirements before sending.",
        primaryBtnText: "Got It",
      });
      return;
    }

    const trimmedEmail = formData.email.trim();
    if (!trimmedEmail) {
      setModalState({
        isOpen: true,
        type: "warning",
        badge: "EMAIL REQUIRED",
        title: "Email Address Required",
        message: "Email address is mandatory. Please enter your email address.",
        primaryBtnText: "Got It",
      });
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setModalState({
        isOpen: true,
        type: "warning",
        badge: "INVALID EMAIL",
        title: "Invalid Email Address",
        message: "Please enter a valid email address so Gowtham can reply back to you.",
        primaryBtnText: "Got It",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare multipart/form-data payload with name, email, description
      const payload = new FormData();
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append("description", formData.painpoint.trim());

      const response = await fetch(
        "https://weblings-migration-dev.weblingsdev.workers.dev/V1/enquireDetails",
        {
          method: "POST",
          body: payload,
        }
      );

      if (!response.ok) {
        let errorText = "Unable to send your note right now. Please try again or reach out to founders@weblings.com directly.";
        try {
          const data = await response.json();
          if (data?.message) {
            errorText = data.message;
          } else if (data?.error) {
            errorText = data.error;
          }
        } catch {
          if (response.status === 404) {
            errorText = "Endpoint unavailable (404). Please try again or reach out directly to founders@weblings.com.";
          } else {
            errorText = `Submission failed (${response.status}). Please try again or contact founders@weblings.com.`;
          }
        }
        setModalState({
          isOpen: true,
          type: "error",
          badge: "SUBMISSION NOTICE",
          title: "Submission Notice",
          message: errorText,
          primaryBtnText: "Close",
        });
      } else {
        const submittedName = formData.name.trim();
        const submittedEmail = formData.email.trim();
        setFormData({
          name: "",
          email: "",
          painpoint: "",
        });
        setModalState({
          isOpen: true,
          type: "success",
          badge: "QUESTION SUBMITTED",
          title: "Your Question Has Been Submitted!",
          message: (
            <>
              Thanks <strong>{submittedName}</strong>! Your note has been delivered straight to Gowtham's personal inbox. He reviews every founder note and will reply back to <strong>{submittedEmail}</strong> shortly.
            </>
          ),
          primaryBtnText: "Done",
        });
      }
    } catch (err: any) {
      setModalState({
        isOpen: true,
        type: "error",
        badge: "SUBMISSION NOTICE",
        title: "Submission Notice",
        message:
          err?.message || "Network error. Please check your connection and try again.",
        primaryBtnText: "Close",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.pageWrapper}>
      {/* Animated Ambient Light Background */}
      <div className={classes.ambientCanvas} aria-hidden="true">
        <div className={classes.dotGridOverlay} />
        <div className={classes.ambientBlob1} />
        <div className={classes.ambientBlob2} />
        <div className={classes.ambientBlob3} />
      </div>

      <div className={classes.contentContainer}>
        {/* Top Hero Section */}
        <div className={classes.badge}>
          <span className={classes.badgePulseDot} />
          <span>{contactData.badge}</span>
        </div>

        <h1 className={classes.heroTitle}>
          Skip the sales reps.<br />
          Talk directly to the builders.
        </h1>

        <p className={classes.heroSubtitle}>
          {contactData.header.subtitle}
        </p>

        {/* 2-Column Main Content */}
        <div className={classes.mainGrid}>
          {/* Left Column: The Founder Promise */}
          <div className={classes.founderColumn}>
            {/* Direct Line Card */}
            <div className={classes.founderCard}>
              <div className={classes.mailIconBox}>
                <MailIcon width={22} height={22} />
              </div>

              <h2 className={classes.founderCardTitle}>
                {contactData.directLine.title}
              </h2>

              <div className={classes.quoteContainer}>
                <div className={classes.quoteMark}>"</div>
                <p className={classes.quoteText}>
                  Email me directly at{" "}
                  <a
                    href={`mailto:${contactData.directLine.email}`}
                    className={classes.emailLink}
                  >
                    {contactData.directLine.email}
                  </a>

                  {" "}I don't employ an offshore support desk or a team of quota-driven sales reps.
                </p>
                <p className={classes.quoteText}>
                  When you email this address, you get direct access to the engineers actually writing the code. I check this inbox twice a day, and I will personally write you back.
                </p>
              </div>

              <div className={classes.founderFooter}>
                <img
                  src={getSrc(gowthamFounderImg)}
                  alt="Gowtham - Founder & Architect"
                  className={classes.founderAvatar}
                />
                <div>
                  <div className={classes.founderName}>
                    {contactData.directLine.founder.name}
                  </div>
                  <div className={classes.founderRole}>
                    {contactData.directLine.founder.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Guarantees */}
            <div className={classes.guaranteesCard}>
              {contactData.directLine.guarantees.map((guarantee, idx) => (
                <div key={idx} className={classes.guaranteeRow}>
                  <div className={classes.checkBadge}>✓</div>
                  <span className={classes.guaranteeText}>{guarantee}</span>
                </div>
              ))}
            </div>
          </div>          {/* Right Column: The Form */}
          <div className={classes.formCard}>
            <h2 className={classes.formTitle}>
              {contactData.form.title}
            </h2>
            <p className={classes.formSubtitle}>
              {contactData.form.subtitle}
            </p>

            <form noValidate onSubmit={handleSubmit} className={classes.form}>
              <div className={classes.formRow}>
                {/* Name Field */}
                <div className={classes.fieldGroup}>
                  <label htmlFor="contact-name" className={classes.fieldLabel}>
                    {contactData.form.fields.name.label}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder={contactData.form.fields.name.placeholder}
                    value={formData.name}
                    onChange={handleInputChange}
                    className={classes.input}
                  />
                </div>

                {/* Email Field */}
                <div className={classes.fieldGroup}>
                  <label htmlFor="contact-email" className={classes.fieldLabel}>
                    {contactData.form.fields.email.label}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder={contactData.form.fields.email.placeholder}
                    value={formData.email}
                    onChange={handleInputChange}
                    className={classes.input}
                  />
                </div>
              </div>

              {/* Painpoint / Headache Field */}
              <div className={classes.fieldGroup}>
                <label htmlFor="contact-painpoint" className={classes.painpointLabel}>
                  {contactData.form.fields.painpoint.label}
                </label>
                <textarea
                  id="contact-painpoint"
                  name="painpoint"
                  required
                  rows={5}
                  placeholder={contactData.form.fields.painpoint.placeholder}
                  value={formData.painpoint}
                  onChange={handleInputChange}
                  className={classes.textarea}
                />
                <div className={classes.fieldHint}>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{contactData.form.fields.painpoint.hint}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={classes.submitButton}
              >
                {isSubmitting ? (
                  <>
                    <span className={classes.spinner} />
                    <span>Sending to Founder...</span>
                  </>
                ) : (
                  <>
                    <span>{contactData.form.buttonText}</span>
                    <span className={classes.submitArrow}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Centered Status Popup Modal */}
      <StatusModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        badge={modalState.badge}
        title={modalState.title}
        message={modalState.message}
        primaryBtnText={modalState.primaryBtnText}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default Contact;
