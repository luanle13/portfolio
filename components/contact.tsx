"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-white/80 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:thanhluan130201@gmail.com" className="underline">
          thanhluan130201@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={100}
          className="h-14 px-4 rounded-lg borderBlack outline-none bg-white bg-opacity-80 focus:bg-opacity-100 transition-all"
          placeholder="Your email"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack outline-none p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all"
          placeholder="Your message"
          required
          maxLength={1000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
export default Contact;
