import SectionHeader from "../../shared/SectionHeader/SectionHeader";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
// template_ppeap4f

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_me9qvzg",
        "template_ppeap4f",
        form.current,
        "yir1l3NsvIrwzr2Nv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700 w-full relative"
      id="contact"
    >
      <div className="flex flex-col h-full items-center bg-slate-800 mx-10 ml-12 lg:mx-20 pb-[65px]">
        <SectionHeader
          title={`Contact`}
        //   details={`Find me here`}
        ></SectionHeader>
        <form
        data-aos="slide-up"
          className="w-full flex flex-col gap-4 m-4 lg:m-10 p-4 lg:px-60"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            placeholder="name"
            className="p-4 rounded-md border-2 text-white text-xl font-semibold bg-transparent"
            type="text"
            name="from_name"
          />
          <input
            placeholder="email"
            className="p-4 rounded-md border-2 text-white text-xl font-semibold bg-transparent"
            type="email"
            name="from_email"
          />
          <textarea
            placeholder="message..."
            className="p-4 rounded-md border-2 text-white text-xl font-semibold bg-transparent"
            name="message"
          />
          <input className="btn btn-warning" type="submit" value="Send" />
        </form>
        <div className="w-[80%] h-[1px] mb-8 bg-yellow-400"></div>
        <div className="flex gap-4">
          <a href="https://facebook.com/ayat.jkr/" target="_blank">
            <FaFacebook className="text-3xl lg:text-4xl text-yellow-400" />
          </a>
          <a href="https://www.linkedin.com/in/thisisayat/" target="_blank">
            <FaLinkedin className="text-3xl lg:text-4xl text-yellow-400" />
          </a>
          <a href="https://github.com/ayat1041" target="_blank">
            <FaGithub className="text-3xl lg:text-4xl text-yellow-400" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="text-white">ayat.dihan6593@gmail.com</p>
          <p className="text-white">+8801784065359</p>
          <p className="text-white">Uttara, Dhaka 1230, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
