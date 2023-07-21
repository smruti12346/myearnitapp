"use client";
import { api_url } from "@/Auth";
import { useState } from "react";
import axios from "axios";
function Forms() {
  const [contact, setContact] = useState(false);
  const [btnClass, setBtnClass] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    setMessage("");
    e.preventDefault();
    setContact(true);
    let data = new FormData();
    data.append("f_name", formData.f_name);
    data.append("l_name", formData.l_name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    data.append("phone", formData.phone);
    axios
      .post(
        `https://myearnitapp.com/blog/wp-json/contact-form-7/v1/contact-forms/191/feedback`,
        data
      )
      .then((res) => {
        setContact(false);
        console.log(res);
        if (res.status === 200) {
          res.data.status === "mail_sent"
            ? setBtnClass("text-success")
            : setBtnClass("text-danger");
          setFormData((prev) => ({
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          }));
          setMessage(res.data.message);
        }
      });

    console.log(formData);
  };
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Get in touch</h3>
                <p>
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <div className="single-info">
                  <h5>Headquaters</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    442 Belle Terre St Floor 7,
                    <br /> San Francisco, AV 4206
                  </p>
                </div>
                <div className="single-info">
                  <h5>Phone</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    +(642) 342 762 44
                  </p>
                </div>
                <div className="single-info">
                  <h5>Support</h5>
                  <p>
                    <i className="fal fa-envelope"></i>
                    support@earnit.com
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <a
                    className="fac"
                    href="#"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  
                </div>
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="contact-form">
                <h4>Let&apos;s Connect</h4>
                <p>
                  We&apos;re here to help and love suggestions and feedback!.
                </p>
                <form
                  action="#"
                  method="post"
                  className="row"
                >
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="f_name"
                      placeholder="First Name"
                      onChange={handleChange}
                      value={formData?.f_name}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="l_name"
                      placeholder="Last Name"
                      onChange={handleChange}
                      value={formData?.l_name}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={handleChange}
                      value={formData?.email}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={handleChange}
                      value={formData?.phone}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      onChange={handleChange}
                      value={formData?.subject}
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="How can we help?"
                      onChange={handleChange}
                      value={formData?.message}
                    ></textarea>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="condition-check">
                      <input
                        id="terms-conditions"
                        type="checkbox"
                        onChange={handleChange}
                      />
                      <label htmlFor="terms-conditions">
                        I agree to the <a href="#">Terms & Conditions</a>
                      </label>
                    </div>
                  </div> */}
                  <div className="col-md-12 text-center">
                    <p className={` my-3 ${btnClass}`}>
                      <b>{message}</b>
                    </p>
                    <button
                      name="submit"
                      type="submit"
                      className="main-btn"
                      onClick={onSubmit}
                    >
                      {contact ? (
                        <span className="spinner-border spinner-border-sm mr-2"></span>
                      ) : (
                        ""
                      )}
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forms;
