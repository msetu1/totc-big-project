import { useState } from "react";
import "../css/coursesBgImg.css";
import { useEffect } from "react";
import OfferCourse from "./OfferCourse";
import Creators from "./Creators";
import Course from "./Course";
import SubjectDropdown from "../../components/dropdown/SubjectDropdown";
import PartnerDropdown from "../../components/dropdown/PartnerDropdown";
import ProgramDropdown from "../../components/dropdown/ProgramDropdown";
import LanguageDropdown from "../../components/dropdown/LanguageDropdown";
import AbaliabilityDrop from "../../components/dropdown/AbaliabilityDrop";
import LearningTypeDrop from "../../components/dropdown/LearningTypeDrop";

const Courses = () => {
  const [courses, SetCourses] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => SetCourses(data));
  }, []);

  return (
    <div className="">
      {/* courses banner  */}
      <div className="courses-bg-img ">
        <div className="text-center pt-16 mb-20">
          <div className="relative">
            <input
              className="bg-[#FFFFFF] border lg:w-[60%] w-[90%] md:w-[80%] p-5 rounded-2xl
"
              type="search"
              name=""
              id=""
              placeholder="Search your favourite course"
            />
            <div className="absolute lg:end-[330px] end-[30px] md:end-[90px] top-2">
              <button className="px-8 py-3 rounded-xl text-xl font-bold text-white bg-[#49BBBD]">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8 px-3 md:px-10 lg:px-0 max-w-7xl mx-auto">
          {/* dropdown btn 1  */}
          <div className="">
            <SubjectDropdown></SubjectDropdown>
          </div>
          <div className="">
            <PartnerDropdown></PartnerDropdown>
          </div>
          <div className="">
            <ProgramDropdown></ProgramDropdown>
          </div>
          <div className="">
            <LanguageDropdown></LanguageDropdown>
          </div>
          <div className="">
            <AbaliabilityDrop></AbaliabilityDrop>
          </div>
          <div className="">
            <LearningTypeDrop></LearningTypeDrop>
          </div>
        </div>
      </div>
      {/* courses map section  */}
      <div
        className="mx-12  mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 
"
      >
        {courses.map((course) => (
          <Course course={course} key={course._id}></Course>
        ))}
      </div>
      {/* Know about learning learning platform section  */}
      <div className="lg:mx-12 md:mx-12  lg:my-20 my-20">
        <div
          className="flex flex-col lg:flex-row  lg:py-10 bg-[#e0f2fe]
 items-center lg:gap-32 rounded-3xl"
        >
          <div className="w-full lg:w-[40%] mt-5 lg:mt-0 flex items-center justify-center">
            <div className="">
              <h2 className="text-[30px] font-bold mb-7 ">
                Know about learning <br /> learning platform
              </h2>
              <div className="flex items-center gap-3">
                <button
                  className="bg-[#55EFC4] p-3 rounded-full
"
                ></button>
                <h2 className="text-[18px] font-semibold text-gray-500">
                  Free E-book, video & consolation
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-[#55EFC4] p-3 rounded-full
"
                ></button>
                <h2 className="text-[18px] font-semibold text-gray-500 py-3">
                  Top instructors from around world
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="bg-[#55EFC4] p-3 rounded-full
"
                ></button>
                <h2 className="text-[18px] font-semibold text-gray-500">
                  Top courses from your team
                </h2>
              </div>
              <button
                className="px-5 py-3 text-xl font-bold text-white mt-10 rounded-xl bg-[#49BBBD]
"
              >
                Start learning now
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:w-[50%] ">
            <img
              className="w-[650px] mt-10"
              src="https://i.ibb.co.com/Hh0VX58/Group-71.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Classes tought by real creators section  */}
      <div className="mb-20  lg:mt-24">
        <Creators></Creators>
      </div>
      {/* Top Education offers and deals are listed here */}
      <div className="lg:mx-12 md:mx-12 mx-4  lg:my-20 my-20">
        <OfferCourse></OfferCourse>
      </div>
    </div>
  );
};

export default Courses;
