"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-4">
        Graduated with a{" "}
        <span className="font-bold">
          Bachelor&apos;s degree in Software Engineering
        </span>
        , I&apos;ve embarked on a fulfilling journey to follow my passion for
        software development. I thrive in{" "}
        <span className="font-bold">system architecture</span> and
        {" "}<span className="font-bold">problem-solving</span>, and I&apos;m
        particularly intrigued by{" "}
        <span className="font-bold">AI development and research</span>.
      </p>
      <p className="mb-4">
        Eager to stay ahead in the dynamic tech landscape, I am always open to
        learning new technologies. Currently on the lookout for a{" "}
        <span className="font-bold">
          full-time position as a software developer
        </span>
        , I bring a blend of skills, enthusiasm, and a commitment to continuous
        growth.
      </p>
      <p className="mb-4">
        My programming expertise extends across various aspects, with a core
        focus on{" "}
        <span className="font-bold">
          ReactJS/Next.js, Spring Boot, .NET Core, MongoDB, and SQL databases.
        </span>
      </p>
      <p>
        Outside the coding realm, I indulge in reading, leveraging E-learning
        platforms, and exploring the world through documentary movies.
      </p>
    </motion.section>
  );
};

export default About;
