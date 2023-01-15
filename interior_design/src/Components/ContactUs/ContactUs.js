import react, { useEffect } from "react";
import {
  ContactUsContainer,
  ContactUsHeader,
  ContactUsBody,
  ContactUsFirstRow,
  ContactUsInput,
  ContactUsSecondRow,
  ContactUsTextArea,
  ContactUsSubmit,
} from "./ContactUsElements";
import Aos from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
      }, []);

  return (
    <ContactUsContainer>
      <ContactUsHeader data-Aos="fade-right">Contact Us</ContactUsHeader>
      <ContactUsBody>
        <ContactUsFirstRow>
          <ContactUsInput>
            <input data-Aos="fade-left" className="input" type="text" placeholder="Your name" />
          </ContactUsInput>
          <ContactUsInput>
            <input data-Aos="fade-left" className="input" type="text" placeholder="Your Email" />
          </ContactUsInput>
          <ContactUsInput>
            <input data-Aos="fade-left" className="input" type="text" placeholder="Your Phone" />
          </ContactUsInput>
        </ContactUsFirstRow>
        <ContactUsFirstRow>
          <ContactUsInput>
            <input data-Aos="fade-left" className="input" type="text" placeholder="Date" />
          </ContactUsInput>
          <ContactUsInput>
            <input data-Aos="fade-left" className="input" type="text" placeholder="Time" />
          </ContactUsInput>
          <ContactUsInput>
            <input data-Aos="fade-left" className="input" type="text" placeholder="Category" />
          </ContactUsInput>
        </ContactUsFirstRow>
        <ContactUsSecondRow>
          <ContactUsTextArea data-Aos="flip-up">
            <textarea
              name=""
              id=""
              cols="170"
              rows="10"
              className="textarea"
              placeholder="Message"
            ></textarea>
          </ContactUsTextArea>
        </ContactUsSecondRow>
        <ContactUsSubmit data-Aos="zoom-in">
          <button type="submit" className="submit">
            Send
          </button>
        </ContactUsSubmit>
      </ContactUsBody>
    </ContactUsContainer>
  );
};

export default ContactUs;