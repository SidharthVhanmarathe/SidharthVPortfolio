import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAngular,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiSpringboot,
  SiSpring,
  SiPhp,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// counter
import CountUp from 'react-countup';
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaAngular/>,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
      {
        title:"Back End",
        icons:[<FaJava/> ,<SiMysql/>,<SiNodedotjs/>,<SiSpring/>,<SiPhp/>, <SiPostgresql/>]
      }
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2019 - 2020",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "SDE  - CORECO Technologies",
        stage: "2023 - present",
      },
      {
        title: "Lead Technology - Opethic Software services",
        stage: "2022 - 2023",
      },
      {
        title: "Full-Stack Developer - Opulent Software service",
        stage: "2021 - 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BE-CS - Sanjay Ghodawat University",
        stage: "2019",
      },
      {
        title: "Diploma - SPM Polytechnic",
        stage: "2016",
      },
    ],
  },
];

const About = () => {
  const [index, SetIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full
       flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className='flex-1 flex flex-col justify-center '>
         
          <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
          >Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          > 3 years ago ,I began as developer .Since then,I've done remote work form agencies,
            counsulted for startups, and collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counter*/}
           <motion.div 
           variants={fadeIn("right", 0.6)}
           initial="hidden"
           animate="show"
           exit="hidden"
           className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 md-8">
            <div className=" flex flex-1 xl:gap-x-6" >
{/* experience */}
<div className="relative flex-1 after:w-[1px] after:h-full
after:bg-white/10 after:absolute after:top-0 after:right-0">
<div className="text-2xl xl:text-4xl font-extrabold
 text-accent mb-2">
  <CountUp start={0} end={5} duration={5} />+
  </div>
  <div className="text-xs uppercase tracking-[1px] 
  leading-[1.4] max-w-[100px]">
    Year of Experience
    </div>
</div>
{/* CLIENTS */}
<div className="relative flex-1 after:w-[1px] after:h-full
after:bg-white/10 after:absolute after:top-0 after:right-0">
<div className="text-2xl xl:text-4xl font-extrabold
 text-accent mb-2">
  <CountUp start={0} end={15} duration={5} />+
  </div>
  <div className="text-xs uppercase tracking-[1px] 
  leading-[1.4] max-w-[100px]">
   Satisfied clients
    </div>
</div>
{/* project */}
<div className="relative flex-1 after:w-[1px] after:h-full
after:bg-white/10 after:absolute after:top-0 after:right-0">
<div className="text-2xl xl:text-4xl font-extrabold
 text-accent mb-2">
  <CountUp start={0} end={50} duration={5} />+
  </div>
  <div className="text-xs uppercase tracking-[1px] 
  leading-[1.4] max-w-[100px]">
   Finished projects
    </div>
</div>
{/* awards */}
<div className="relative flex-1 ">
<div className="text-2xl xl:text-4xl font-extrabold
 text-accent mb-2">
  <CountUp start={0} end={8} duration={5} />+
  </div>
  <div className="text-xs uppercase tracking-[1px] 
  leading-[1.4] max-w-[100px]">
   Winning awards</div>
</div>
</div>

           </motion.div>
          </div>
          {/* info */}
        <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8
            after:h-[2px] after:bg-white 
            after:absolute 
            after:-bottom-1 after:left-0`}
                onClick={() => SetIndex(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex}
              className="flex-1 flex flex-col md:flex-row
              max-w-max gap-x-2 items-center text-white/60"
              // className="cursor-pointer capitalize xl:text-lg relative
              // after:w-8 after:h-[2px]
              //  after:bg-white after:absolute after:-bottom-1"
              >
                {/* tite */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div >{item.stage}</div>
                <div className="flex gap-x-4">

                {/* icons */}
                {item.icons?.map((icon,itemIndex)=>
                {
                  return (<div className="text-2xl text-white">{icon}</div>);
                })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default About;
