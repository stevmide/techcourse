import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our focus",
  desc: "With many people looking to start a career in tech and finding the learning paths and easy to understand courses, we've prepared courses and put together invaluable resources to get you through your journey",
  image: benefitOneImg,
  bullets: [
    {
      title: "Beginner Friendly",
      desc: "All course are broken down into small simple to understand units",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Community Driven",
      desc: "Collaborative based learning - all students are in a community",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Mentorship",
      desc: "We offer mentorship throughout your learning journey",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Why you should join us",
  desc: "We don't just want to provide you with only courses, we have a range of other value to offer you on or before completion of your course of choice",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Resume Review",
      desc: "We help review your resume to stand out in the job market",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Interviews",
      desc: "We offer coaching and provide interview tips to nail job interviews.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Consultation",
      desc: "We offer advice on career path that suit you",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
