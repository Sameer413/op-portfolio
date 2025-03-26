"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EducationImg from "../components/education/EducationImg";
import EducationCard from "../components/education/EducationCard";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  // const [loading, setLoading] = useState<boolean>(true);

  // // Simulate loading delay with useEffect
  // useEffect(() => {
  //     const timeout = setTimeout(() => {
  //         setLoading(false);
  //     }, 1000); // Simulating 2 seconds loading time
  //     return () => clearTimeout(timeout);
  // }, []);

  return (
    // loading ? (
    //     <div>loading....</div>
    // ) : (
    <div>
      <Header />

      <div className="w-full mt-8">
        <div className="mx-auto w-[90%] max-w-[1370px]">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="lg:flex mb-12">
              {/* Education SVG */}
              <div className="flex-1 w-full h-auto">
                <EducationImg />
              </div>

              {/* Education Intro */}
              <div className="flex-1 text-center">
                <h1 className="text-5xl lg:text-[56px] font-SansRegular font-semibold lg:font-bold mt-14 lg:mt-20 mb-9 leading-[1.1]">
                  Education
                </h1>
                <h3 className="text-2xl lg:text-3xl font-SansRegular my-7 font-medium text-light-text dark:text-dark-text">
                  Basic Qualification and Certifications
                </h3>
                <p className="text-base lg:text-lg leading-5 lg:leading-[30px] font-medium text-light-secondaryText dark:text-dark-secondaryText">
                  I actively participate in hackathons and other tech-related
                  activities. Below are some of my major certifications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Cards */}
          <EducationCard />
        </div>
      </div>

      <Footer />
    </div>
  );

  // )
};

export default Page;
