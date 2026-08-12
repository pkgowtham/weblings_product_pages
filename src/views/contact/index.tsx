'use client';
import React, { useState } from "react";
import "./contact.css";
import { useStyle } from "./style";
import Typography from "../../components/typography/component";
import InputField from "../../components/input/main";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import SvgMail from "../../components/svg/Mail";
import SvgPhone from "../../components/svg/Phone";
import SvgArrowDropDown from "../../components/svg/ArrowDropDown";
import contactData from "../../data/contact.json";

const Contact = () => {
  const classes = useStyle();
  const [formData, setFormData] = useState({
    subject: "",
    category: "",
    priority: contactData.enquireForm.fields.priority.default || "Medium",
    message: "",
    attachments: null as FileList | null,
  });

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategorySelect = (category: string) => {
    setFormData((prev) => ({ ...prev, category }));
    setIsCategoryOpen(false);
  };

  const handlePrioritySelect = (priority: string) => {
    setFormData((prev) => ({ ...prev, priority }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, attachments: e.target.files }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({
      subject: "",
      category: "",
      priority: "Medium",
      message: "",
      attachments: null,
    });
  };

  return (
    <div className={classes.mainSec}>
      <div className={classes.contSec}>
        {/* Top Header */}
        <div className={classes.contHeadMain}>
          <div className={classes.contHead}>
            <Typography variant="HS" component={"h1"}>
              {contactData.header.title}
            </Typography>
            <Typography variant="BM">
              {contactData.header.subtitle}
            </Typography>
          </div>
        </div>

        {/* 1. TOP SECTION: Enquire Form Card */}
        <div className={classes.enquireCard}>
          <div className={classes.enquireHeader}>
            <Typography variant="HM" component={"h2"} className={classes.enquireTitle}>
              {contactData.enquireForm.title}
            </Typography>
            <Typography variant="BM" className={classes.enquireSubtitle}>
              {contactData.enquireForm.subtitle}
            </Typography>
          </div>

          <form onSubmit={handleSubmit} className={classes.enquireForm}>
            {/* Subject */}
            <InputField>
              <Input
                label={contactData.enquireForm.fields.subject.label}
                name="subject"
                placeholder={contactData.enquireForm.fields.subject.placeholder}
                value={formData.subject}
                onChange={handleInputChange}
              />
            </InputField>

            {/* Category & Priority Row */}
            <div className={classes.categoryPriorityRow}>
              {/* Category Dropdown */}
              <div className={classes.categoryWrapper}>
                <label className={classes.fieldLabel}>
                  {contactData.enquireForm.fields.category.label}
                </label>
                <div
                  className={classes.selectTrigger}
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <span
                    className={
                      formData.category
                        ? classes.selectedCategoryText
                        : classes.placeholderCategoryText
                    }
                  >
                    {formData.category ||
                      contactData.enquireForm.fields.category.placeholder}
                  </span>
                  <SvgArrowDropDown />
                </div>
                {isCategoryOpen && (
                  <div className={classes.dropdownMenu}>
                    {contactData.enquireForm.fields.category.options.map(
                      (opt) => (
                        <div
                          key={opt}
                          className={classes.dropdownItem}
                          onClick={() => handleCategorySelect(opt)}
                        >
                          {opt}
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Priority Level Selector */}
              <div className={classes.priorityWrapper}>
                <label className={classes.fieldLabel}>
                  {contactData.enquireForm.fields.priority.label}
                </label>
                <div className={classes.priorityGroup}>
                  {contactData.enquireForm.fields.priority.options.map(
                    (p) => (
                      <button
                        type="button"
                        key={p}
                        className={`${classes.priorityBtn} ${
                          formData.priority === p ? classes.priorityActive : ""
                        }`}
                        onClick={() => handlePrioritySelect(p)}
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Message */}
            <div className={classes.textareaWrapper}>
              <label className={classes.fieldLabel}>
                {contactData.enquireForm.fields.message.label}
              </label>
              <textarea
                name="message"
                className={classes.textareaInput}
                placeholder={
                  contactData.enquireForm.fields.message.placeholder
                }
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
              />
            </div>

            {/* Attachments */}
            <div className={classes.attachmentsWrapper}>
              <label className={classes.fieldLabel}>
                {contactData.enquireForm.fields.attachments.label}
              </label>
              <label className={classes.dropzone}>
                <input
                  type="file"
                  multiple
                  className={classes.fileInputHidden}
                  onChange={handleFileChange}
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={classes.uploadIcon}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </label>
            </div>

            {/* Form Divider & Actions */}
            <div className={classes.cardDivider} />
            <div className={classes.formActions}>
              <Button
                element="button"
                brand
                type="submit"
                className={classes.submitBtn}
              >
                {contactData.enquireForm.buttons.submit}
              </Button>
              <button
                type="button"
                className={classes.cancelBtn}
                onClick={handleCancel}
              >
                {contactData.enquireForm.buttons.cancel}
              </button>
            </div>
          </form>
        </div>

        {/* 2. MIDDLE SECTION: Our Office Details & Quick Contact */}
        <div className={classes.officeSection}>
          <Typography variant="HM" component={"h2"} className={classes.sectionHeading}>
            {contactData.office.title}
          </Typography>

          <div className={classes.officeGrid}>
            {/* Address Card */}
            <div className={classes.officeCard}>
              <Typography variant="LM" className={classes.officeCardTitle}>
                {contactData.office.address.title}
              </Typography>
              <div className={classes.officeDetails}>
                <Typography variant="BM">{contactData.office.address.company}</Typography>
                <Typography variant="BM">{contactData.office.address.doorNo}</Typography>
                <Typography variant="BM">{contactData.office.address.street}</Typography>
                <Typography variant="BM">{contactData.office.address.cityState}</Typography>
                <Typography variant="BM">{contactData.office.address.country}</Typography>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className={classes.officeCard}>
              <div className={classes.quickContactHeader}>
                <SvgMail />
                <Typography variant="LM" className={classes.officeCardTitle}>
                  {contactData.quickContact[0].title}
                </Typography>
              </div>
              <a
                href={contactData.quickContact[0].link}
                className={classes.quickContactLink}
              >
                {contactData.quickContact[0].value}
              </a>
            </div>

            {/* Phone Support Card */}
            <div className={classes.officeCard}>
              <div className={classes.quickContactHeader}>
                <SvgPhone />
                <Typography variant="LM" className={classes.officeCardTitle}>
                  {contactData.quickContact[1].title}
                </Typography>
              </div>
              <a
                href={contactData.quickContact[1].link}
                className={classes.quickContactLink}
              >
                {contactData.quickContact[1].value}
              </a>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: Full-Size Location Map */}
        <div className={classes.mapSection}>
          <Typography variant="HM" component={"h2"} className={classes.sectionHeading}>
            {contactData.office.map.title}
          </Typography>
          <div className={classes.fullMapWrapper}>
            <iframe
              src={contactData.office.map.iframeSrc}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location Map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
