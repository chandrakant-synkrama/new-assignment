import { Progress } from "antd";
import React from "react";
import TravelIcon from "../assets/icons/TravelIcon";
import Reading from "../assets/icons/Reading";
import GamesIcon from "../assets/icons/GamesIcon";
import CycleIcon from "../assets/icons/CycleIcon";
import MailIcon from "../assets/icons/MailIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import GitIcon from "../assets/icons/GitIcon";

export default function Resume() {
  return (
    <div className="flex items-center justify-center  my-10">
      <div className=" w-[50vw] flex gap-5">
        <div className="w-full  ">
          <div className="flex items-center justify-center mb-3">
            <img
              src="https://cdn.pixabay.com/photo/2023/10/27/16/15/honey-bee-8345726_640.jpg"
              alt="fsdaasd"
              width={"90%"}
              height={"100px"}
              className="rounded-br-[90px]	"
            />
          </div>
          <div className="mb-3">
            <div className="text-xl font-medium text-[#CE6CAA]">Profile</div>
            <hr
              className="text-[#CE6CAA]"
              style={{
                border: 0,
                height: "1.5px",
                backgroundColor: "#CE6CAA",
                margin: 0,
              }}
            />
            <div className="text-sm tracking-wide	text-justify	">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
            </div>
          </div>
          <div className="mb-3">
            <div className="text-xl font-medium text-[#CE6CAA]">Education</div>
            <hr
              className="text-[#CE6CAA]"
              style={{
                border: 0,
                height: "1.5px",
                backgroundColor: "#CE6CAA",
                margin: 0,
              }}
            />
            <div className="mt-2">
              <div className="flex gap-3 items-start mb-2">
                <div className="text-[#CE6CAA]">2012-2016</div>
                <div className="text-sm">
                  Bachelor's Degree in Graphic <br />
                  Designing University of Delhi <br />
                  GPA Score : 7.0
                </div>
              </div>
              <div className="flex gap-3 items-start mb-2">
                <div className="text-[#CE6CAA]">2012-2016</div>
                <div className="text-sm ">
                  Bachelor's Degree in Graphic <br />
                  Designing University of Delhi <br />
                  GPA Score : 7.0
                </div>
              </div>
              <div className="flex gap-3 items-start mb-2">
                <div className="text-[#CE6CAA]">2012-2016</div>
                <div className="text-sm">
                  Bachelor's Degree in Graphic <br />
                  Designing University of Delhi <br />
                  GPA Score : 7.0
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xl font-medium text-[#CE6CAA]">Projects</div>
            <hr
              style={{
                border: 0,
                height: "1.5px",
                backgroundColor: "#CE6CAA",
                margin: 0,
              }}
            />
            <div>
              <div className="flex gap-3 items-start mb-2">
                <div className="text-[#CE6CAA]">2020-2019</div>
                <div className="text-sm">
                  <div>Project Title</div>
                  <div>Creative Director</div>
                  <div className="container">
                    <ul className="list-none ">
                      <li className="relative before:inline-block before:w-1.5 before:h-1.5 before:bg-[#CE6CAA] before:mr-1 before:rounded-full before:content-['']">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        velit. elit.
                      </li>
                      <li className="relative before:inline-block before:w-1.5 before:h-1.5 before:bg-[#CE6CAA] before:mr-1 before:rounded-full before:content-['']">
                        Praesent erat elit, lacinia vitae hendrerit sed, gravida
                        nec eros. Hobbies
                      </li>
                      <li className="relative before:inline-block before:w-1.5 before:h-1.5 before:bg-[#CE6CAA] before:mr-1 before:rounded-full before:content-['']">
                        Maecenas quis odio sollicitudin, aliquet risus eget,
                        luctus nisi.
                      </li>
                      {/* Add more items as needed */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="mb-5">
            <div className="flex items-end justify-end flex-col">
              <p className="text-4xl font-semibold mr-3">Chandrakant Deore</p>
              <p className="text-2xl mr-3">Graphic Designer</p>
            </div>
            <hr
              style={{
                border: 0,
                height: "1.5px",
                backgroundColor: "gray",
                margin: 0,
              }}
            />
            <div className="flex items-end justify-end flex-col mt-3">
              <p className="flex gap-2 items-center">
                cab@gmail.com <MailIcon />
              </p>
              <p className="flex gap-2 items-center">
                +91 9284714963 <PhoneIcon />
              </p>
              <p className="flex gap-2 items-center">
                Pune, India <LocationIcon />
              </p>
              <p className="flex gap-2 items-center">
                https://github.com/chandrakant-synkrama <GitIcon />
              </p>
            </div>
          </div>
          <div className="mb-3">
            <div className="text-xl font-medium text-[#CE6CAA]">Skills</div>
            <hr
              style={{
                border: 0,
                height: "1.5px",
                backgroundColor: "#CE6CAA",
                margin: 0,
              }}
            />
            <div>
              <div className="">
                Photoshop
                <Progress
                  percent={30}
                  strokeColor={"#CE6CAA"}
                  style={{
                    borderRadius: 0,
                    margin: 0,
                    padding: 0,
                    width: "80%",
                  }}
                />
              </div>
              <div className="">
                Creative Writing
                <Progress
                  percent={30}
                  strokeColor={"#CE6CAA"}
                  style={{
                    borderRadius: 0,
                    margin: 0,
                    padding: 0,
                    width: "80%",
                  }}
                />
              </div>{" "}
              <div className="">
                Web Designing
                <Progress
                  percent={30}
                  strokeColor={"#CE6CAA"}
                  style={{
                    borderRadius: 0,
                    margin: 0,
                    padding: 0,
                    width: "80%",
                  }}
                />
              </div>{" "}
              <div className=" flex flex-col">
                Illustrator
                <Progress
                  percent={30}
                  strokeColor={"#CE6CAA"}
                  style={{
                    borderRadius: 0,
                    margin: 0,
                    padding: 0,
                    width: "80%",
                  }}
                />
              </div>{" "}
            </div>
          </div>
          <div className="mb-3">
            <div className="text-xl font-medium text-[#CE6CAA]">
              Achievements
            </div>
            <hr
              style={{
                border: 0,
                height: "1.5px",
                backgroundColor: "#CE6CAA",
                margin: 0,
              }}
            />
            <div>
              <p className="text-sm tracking-wide	text-justify mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-sm tracking-wide	text-justify	">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions
              </p>
            </div>
          </div>
          <div className="mb-3">
            <div className="text-xl font-medium text-[#CE6CAA]">Hobbies</div>
            <hr
              style={{
                border: 0,
                height: "1.5px",
                backgroundColor: "#CE6CAA",
                margin: 0,
              }}
            />
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex items-center gap-1">
                <TravelIcon /> Travel
              </div>
              <div className="flex items-center gap-1">
                <Reading /> Reading
              </div>
              <div className="flex items-center gap-1">
                <GamesIcon /> Video games
              </div>
              <div className="flex items-center gap-1">
                <CycleIcon /> Cycling
              </div>
            </div>
          </div>
          <div>
            <div className="text-xl font-medium text-[#CE6CAA]">Languages</div>
            <hr
              style={{
                border: 0,
                height: "1.5px",
                backgroundColor: "#CE6CAA",
                margin: 0,
              }}
            />
            <div className="flex items-center gap-8 mt-4 ml-4">
              <div>
                <Progress
                  type="circle"
                  percent={75}
                  strokeColor={"#CE6CAA"}
                  width={75}
                  strokeWidth={10}
                />
              </div>
              <div>
                <Progress
                  type="circle"
                  percent={75}
                  strokeColor={"#CE6CAA"}
                  width={75}
                  strokeWidth={10}
                />
              </div>
              <div>
                <Progress
                  type="circle"
                  percent={75}
                  strokeColor={"#CE6CAA"}
                  width={75}
                  strokeWidth={10}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
