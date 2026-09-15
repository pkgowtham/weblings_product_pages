'use client';

import React, { useState } from "react";
import { useStyle } from "./style";
import contactData from "../../data/contact.json";
import { getSrc } from "../../utils/getSrc";
import gowthamFounderImg from "../../assets/images/about/gowtham_founder.jpg";
import MailIcon from "../../assets/icons_component/MailIcon";

const Contact: React.FC = () => {
  const classes = useStyle();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    painpoint: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.painpoint) {
      return;
    }
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      painpoint: "",
    });
    setIsSubmitted(false);
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
                  . I don't employ an offshore support desk or a team of quota-driven sales reps.
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
          </div>

          {/* Right Column: The Form */}
          <div className={classes.formCard}>
            {isSubmitted ? (
              <div className={classes.successBox}>
                <div className={classes.successIcon}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className={classes.successTitle}>
                  Note Sent Directly to Gowtham
                </h3>
                <p className={classes.successMessage}>
                  Thanks {formData.name}. Your note has been delivered to Gowtham's personal inbox. He reviews every founder note and will write back to <strong>{formData.email}</strong> by the end of the day.
                </p>
                <button
                  type="button"
                  className={classes.resetBtn}
                  onClick={handleReset}
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <>
                <h2 className={classes.formTitle}>
                  {contactData.form.title}
                </h2>
                <p className={classes.formSubtitle}>
                  {contactData.form.subtitle}
                </p>

                <form onSubmit={handleSubmit} className={classes.form}>
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
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
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
                    <span>
                      {isSubmitting ? "Sending..." : contactData.form.buttonText}
                    </span>
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
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
