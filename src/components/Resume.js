import { Progress } from "antd";
import React from "react";
import MailIcon from "../assets/icons/MailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import GitIcon from "../assets/icons/GitIcon";
import Frame1 from "../assets/images/Frame1.png";
import Frame2 from "../assets/images/Frame2.png";
import HeadingCommon from "./HeadingCommon";
import ProgresBars from "./ProgresBars";
import { ResumeObj } from "../utils/Resumedata";

export default function Resume() {
  const { profile, hobbies, skills, languages, education, projects } =
    ResumeObj;
  return (
    <div className="flex justify-center w-full h-full relative">
      <div
        className="relative border border-gray-200"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          paddingBottom: "80px",
        }}
      >
        <img
          src={Frame1}
          style={{
            position: "absolute",
            top: 0,
            zIndex: -1,
            width: "900px",
            height: "350px",
          }}
          alt="Frame1"
        />
        <img
          src={Frame2}
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: -1,
            width: "900px",
          }}
          alt="Frame2"
        />
        <div className=" w-[900px] flex gap-5 align-top">
          <div className=" w-[900px] flex">
            <div className="w-full my-6 mx-6">
              <img
                src={profile.profile_image}
                alt="fsdaasd"
                width={"100%"}
                className="rounded-br-[90px] h-[250px]"
              />
            </div>
            <div className="w-full mb-5 text-[#fff] my-5">
              <div className="flex  flex-col mr-3 mb-4 ">
                <p className="text-3xl font-semibold tracking-widest text-end mb-2">
                  {profile.firstName}
                </p>
                <p className="text-2xl tracking-widest italic text-end">
                  {profile.designation}
                </p>
              </div>
              <hr
                style={{
                  border: 0,
                  height: "1.5px",
                  backgroundColor: "gray",
                  margin: 0,
                }}
              />
              <div className="flex items-end justify-end flex-col mt-3 mr-3 text-sm gap-1">
                <p className="flex gap-2 items-center">
                  {profile.email} <MailIcon />
                </p>
                <p className="flex gap-2 items-center">
                  {profile.phone} <PhoneIcon />
                </p>
                <p className="flex gap-2 items-center">
                  {profile.location} <LocationIcon />
                </p>
                <p className="flex gap-2 items-center">
                  {profile.githubLink} <GitIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[900px] px-2 flex gap-5 ">
          <div className="w-full">
            <div className="mb-3">
              <HeadingCommon heading="Profile" />
              <div className="text-sm tracking-wide	text-justify mt-2">
                {profile.bio}
              </div>
            </div>
            <div className="mb-3">
              <HeadingCommon heading="Education" />

              <div className="mt-2">
                {education?.map((item, index) => (
                  <div className="flex gap-3 items-start mb-2 ">
                    <p className="text-[#CE6CAA]">{item.year}</p>
                    <div className="text-sm mt-[-2px]">
                      <p className="my-1">{item.degree}</p>
                      <p className="my-1">{item.university}</p>
                      <p className="my-1">GPA Score : {item.cgpa}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <HeadingCommon heading="Projects" />

              <div className="mt-2">
                {projects?.map((item, index) => (
                  <div className="flex gap-3 mb-3">
                    <p className="text-[#CE6CAA] whitespace-nowrap	">
                      {item.year}
                    </p>
                    <div>
                      <div className="text-base mb-1">
                        <p className="">{item.title}</p>
                        <p className="">{item.director}</p>
                      </div>
                      <ul className="list-none text-sm">
                        {item.points?.map((item, index) => (
                          <li className="mb-1 relative before:inline-block before:w-1.5 before:h-1.5 before:bg-[#CE6CAA] before:mr-1 before:rounded-full before:content-['']">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-3">
              <HeadingCommon heading="Skills" />
              <div className="mt-2">
                {skills?.map((item, index) => (
                  <div className="flex flex-col">
                    {item.title}
                    <Progress
                      percent={item.percent}
                      strokeColor={"#CE6CAA"}
                      style={{
                        borderRadius: 0,
                        margin: 0,
                        padding: 0,
                        width: "80%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <HeadingCommon heading="Achievements" />
              <div className="mt-2">
                {profile?.achivements?.map((item, index) => (
                  <p className="text-sm tracking-wide	text-justify mb-3">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <HeadingCommon heading="Hobbies" />
              <div className="grid grid-cols-2 gap-2 mt-2">
                {hobbies?.map((item, index) => {
                  return (
                    <div className="flex items-center gap-1">
                      {item.icon} {item.title}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              <HeadingCommon heading="Languages" />
              <div className="flex items-center gap-5 mt-4">
                {languages.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center gap-2"
                  >
                    <ProgresBars
                      type={"circle"}
                      percent={item.percent}
                      strokeColor={"#CE6CAA"}
                      storkeWidth={10}
                      width={75}
                    />
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
