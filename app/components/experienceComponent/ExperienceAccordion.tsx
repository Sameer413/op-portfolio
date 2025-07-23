"use client";
import Image from "next/image";
import React, { useState } from "react";
import DegreeIcon from "../../../public/readingImg.png";
import { experienceData } from "@/app/data";

const ExperienceAccordion = () => {
  const [open, setOpen] = useState<number | null>();

  const toggleAccordion = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <div className="hover:shadow-3xl hover:shadow-light-accentColor">
      <div className="border-[0.1px] cursor-pointer rounded-[5px] border-[hsla(0,0%,83%,.397)] transition-all duration-1000 ease-in">
        {experienceData.map((section, idx) => (
          <div key={idx}>
            <div
              onClick={() => toggleAccordion(idx)}
              className="flex justify-between items-center dark:bg-dark-projectCard py-4 px-5"
            >
              <div className="capitalize font-semibold text-lg">
                {section.title}
              </div>
              <span className="text-2xl text-light-text dark:text-dark-text">
                {open === idx ? "-" : "+"}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                open === idx ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              {open === idx && (
                <div className="px-5 py-3 space-y-4">
                  {section.experiences.length > 1 && section.experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="border-light-accentColor border p-4 rounded-[5px] flex lg:flex-row flex-col justify-center"
                    >
                      <div className="lg:w-[20%] p-3 flex justify-center">
                        <Image
                          className="h-20 w-auto rotate-180"
                          src={DegreeIcon}
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex lg:justify-between justify-center flex-col lg:flex-row">
                          <div className="flex lg:flex-row !flex-col">
                            <div className="text-[17px] font-bold">
                              {exp.title}
                            </div>
                            <div className="text-base lg:font-bold font dark:text-dark-secondaryText text-light-secondaryText">
                              {exp.company}
                            </div>
                          </div>
                          <div className="flex lg:flex-row !flex-col">
                            <div className="text-base font-medium dark:text-dark-secondaryText text-light-secondaryText">
                              {exp.duration}
                            </div>
                            <div className="text-base font-medium dark:text-dark-secondaryText text-light-secondaryText">
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {exp.description && (
                          <ul className="mt-2 text-justify text-base">
                            {exp.description.map(
                              (desc: string, idx: number) => (
                                <li key={idx}>{desc}</li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceAccordion;
