// next image
import ParticleContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectsBtn';
import { Helmet } from 'react-helmet';

// import Avatar from '../components/Avatar';
import Link from 'next/link';

// framer motion
import {fadeIn} from '../variants';
import {motion} from 'framer-motion';
import Image from 'next/image';



const Home = () => {
  return (<div className='bg-primary/60 h-full'>
     {/* <Helmet> */}
        {/* <link rel="icon" href="/t-avt-2.png" /> */}
        {/* <Link href={'/'} >
       <Image 
          src={'/finallogo.png'}
        width={50} 
        height={18} 
        alt=''
        priority={true}/>
        </Link> */}

      {/* </Helmet> */}
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r
     from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center
       xl:pt-40 xl:text-left h-full container mx-auto'>
        {/* title */}
        <motion.h1 variants={fadeIn('down',0.2)} initial="hidden"
        animate="show" exit="hidden" className='h1'>Transforming Ideas <br/> Into <span className='text-accent'>Digital Reality</span>
        </motion.h1>
        {/* subttitle */}
      <motion.p variants={fadeIn('down',0.3)} initial="hidden"
        animate="show" exit="hidden" className=''>In a world where innovation drives progress and creativity fuels inspiration,<br/>
         I am on a relentless journey to transform ideas into tangible digital experiences.<br/> My passion for design and technology is more than a career—it&apos;s a calling..  
        </motion.p>
        {/* btn */}
        
          <div className='flex justify-center xl:hidden relative'>
          <ProjectBtn/>
        </div>
        <motion.div variants={fadeIn('down',0.4)} initial="hidden"
        animate="show" exit="hidden" className='hidden:xl:flex'>
        <ProjectBtn/>

        </motion.div>
      </div>
    </div>
    {/* image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
      {/* bg-img */}
      <div  className='bg none xl:bg-explosion xl:bg-cover
       xl:bg-right xl:bg-no-repeat w-full h-full absolute 
       mix-blend-color-dodge translate-z-0'></div>
   
    {/* particle */}
<ParticleContainer/>
    {/* avatar ig */}
    <motion.div
    variants={fadeIn('up',0.5)} initial="hidden"
    animate="show" exit="hidden" transition={{duration:1 ,ease:'easeInOut'}}
    className='w-full h-full max-w-[737px] 
    max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
      {/* <Avatar /> */}
    </motion.div>
    </div>
    </div>
    
    );
};

export default Home;
