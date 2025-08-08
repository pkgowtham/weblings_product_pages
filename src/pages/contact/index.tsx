import React from "react";
import "./contact.css";
import { useStyle } from "./style.ts";
import Typography from "../../components/typography/component.tsx";
import InputField from "../../components/input/main.tsx";
import Input from "../../components/input/input.tsx";

const Contact = () => {

const classes = useStyle()

  return (
    <div>
      <div className={classes.mainSec}>
        <div className={classes.contSec}>
          <div className={classes.contHeadMain}>
            <div className={classes.contHead}>
              <Typography variant="TM" component={"h1"}>Get In Touch</Typography>
              <Typography variant="BM">
                {" "}
                Whether you have a question, need assistance, or want to
                schedule a demo, our team is here to help.
              </Typography>
            </div>
          </div>
          <div className={classes.contDetailMain}>
            <div className={classes.contDetailAddress}>
              <Typography variant="LM">Our Office</Typography>
              <div className={classes.contDetail}>
                <div className="cont-detail-info">
                  <Typography variant="BM">
                    Address: <br /> Weblings{" "}
                  </Typography>
                  <Typography variant="BM">
                    Door No:8, K.M Nagar, <br /> 3rd Street, Velliyankadu,
                  </Typography>
                  <Typography variant="BM">Tirupur, Tamilnadu, 641604.</Typography>
                  <Typography variant="BM">India</Typography>
                </div>
                <div>
                  <Typography variant="BM">
                    Phone: <br /> 97895 13198
                  </Typography>
                </div>
                <div>
                  <Typography variant="BM">
                    Email: <br /> pkgowthamit@gmail.com
                  </Typography>
                </div>
              </div>
              <div className={classes.contDetHeadImg}>
                <Typography variant="LM">Location Map</Typography>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1030.6618979390794!2d77.35222260239145!3d11.08118816408997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727780601175!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{border:0}}
                  allowFullScreen
                  loading="lazy"
                  title="map"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className={classes.contDetailInput}>
              <Typography variant="LM" component={"h6"}>Request a Call Back</Typography>
              <Typography variant="BM">
                Fill out the form below, and we'll get back to you as soon as
                possible.
              </Typography>
              <div className={classes.labInpMain}>
                <InputField>
                  <Input label="Name"/>
                </InputField>
                <InputField>
                  <Input label="Name"/>
                </InputField>
                <InputField>
                  <Input label="Name"/>
                </InputField>
                <InputField>
                  <Input label="Name"/>
                </InputField>
                <InputField>
                  <Input label="Name"/>
                </InputField>
               
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Contact;
