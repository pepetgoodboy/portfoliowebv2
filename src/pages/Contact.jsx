import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlertSuccess();
  };

  function setAlertSuccess() {
    Swal.fire({
      title: "Success",
      text: "Thank you for contacting me.",
      icon: "success",
      type: "success",
      iconColor: "#c9356c"
    }).then(function () {
      location.reload();
    });
  }

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="h-auto bg-parallax4 bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply">
      <Helmet>
        <title>Contact Me - PepetGoodboy</title>
      </Helmet>
      <div className="pl-4 pt-24 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16" data-aos="fade-down">
              <h4 className="font-bold text-2xl md:text-4xl text-primary mb-2 font-barlow">
                Contact <span className="text-secondary">Me</span>
              </h4>
              <p className="font-medium text-md text-secondary md:text-lg font-montserrat">
                Please contact us in the form below.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} data-aos="zoom-in">
            <div className="w-full lg:w-1/2 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label className="text-base font-bold text-primary">Name</label>
                <input
                  type="text"
                  name="name"
                  value={inputs.name || ""}
                  onChange={handleChange}
                  required
                  className="w-full font-montserrat font-medium text-primary bg-secondary p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></input>
              </div>
              <div className="w-full px-4 mb-8">
                <label className="text-base font-bold text-primary">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={inputs.email || ""}
                  onChange={handleChange}
                  required
                  className="w-full font-montserrat font-medium text-primary bg-secondary p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></input>
              </div>
              <div className="w-full px-4 mb-8">
                <label className="text-base font-bold text-primary">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={inputs.message || ""}
                  onChange={handleChange}
                  required
                  className="w-full font-montserrat font-medium text-primary bg-secondary p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button
                  className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
