import React, { useState } from "react";
import "./contact.css";
import { useStyle } from "./style.ts";
import Typography from "../../components/typography/component.tsx";
import InputField from "../../components/input/main.tsx";
import Input from "../../components/input/input.tsx";

const Contact = () => {
  const classes = useStyle();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactTime: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className={classes.mainSec}>
      <div className={classes.contSec}>
        {/* Top Title & Subtitle */}
        <div className={classes.contHeadMain}>
          <div className={classes.contHead}>
            <Typography variant="HS" component={"h1"}>
              Get in Touch
            </Typography>
            <Typography variant="BM">
              Whether you have a question, need assistance, or want to schedule a demo, our team is here to help.
            </Typography>
          </div>
        </div>

        {/* Content Details: Left = Office & Map, Right = Call Back Form */}
        <div className={classes.contDetailMain}>
          {/* Office & Map */}
          <div className={classes.contDetailAddress}>
            <Typography variant="LM" component={"h5"}>
              Our Office
            </Typography>
            <div className={classes.contDetail}>
              <div>
                <Typography variant="BM">Address:</Typography>
                <Typography variant="BM">Weblings</Typography>
                <Typography variant="BM">Door No:8, K.M Nagar,</Typography>
                <Typography variant="BM">3rd Street, Velliyankadu,</Typography>
                <Typography variant="BM">Tirupur, Tamilnadu, 641604.</Typography>
                <Typography variant="BM">India</Typography>
              </div>
              <div>
                <Typography variant="BM">Phone:</Typography>
                <Typography variant="BM">97895 13198</Typography>
              </div>
              <div>
                <Typography variant="BM">Email:</Typography>
                <Typography variant="BM">pkgowthamit@gmail.com</Typography>
              </div>
            </div>

            <div className={classes.contDetHeadImg}>
              <Typography variant="LM" component={"h5"}>
                Location Map
              </Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1030.6618979390794!2d77.35222260239145!3d11.08118816408997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727780601175!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className={classes.contDetailInput}>
            <Typography variant="LM" component={"h5"}>
              Request a Call Back
            </Typography>
            <Typography variant="BM">
              Fill out the form below, and we'll get back to you as soon as possible.
            </Typography>

            <form onSubmit={handleSubmit} className={classes.labInpMain}>
              <InputField>
                <Input
                  label="Name"
                  name="name"
                  placeholder="Text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </InputField>

              <InputField>
                <Input
                  label="Email Address"
                  name="email"
                  placeholder="Text"
                  value={formData.email}
                  onChange={handleChange}
                />
              </InputField>

              <InputField>
                <Input
                  label="Phone Number"
                  name="phone"
                  placeholder="Text"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </InputField>

              <InputField>
                <Input
                  label="Prefered Contact Time"
                  name="contactTime"
                  placeholder="choose time"
                  value={formData.contactTime}
                  onChange={handleChange}
                />
              </InputField>

              <InputField>
                <Input
                  label="Message"
                  name="message"
                  placeholder="Text"
                  value={formData.message}
                  onChange={handleChange}
                />
              </InputField>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
