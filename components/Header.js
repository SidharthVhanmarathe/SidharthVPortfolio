import Image from 'next/image';

import Link from 'next/link';
// import {motion} from 'framer-motion';

import { fadeIn } from "../variants";
import Socials from '../components/Socials';

const Header = () => {
  return <header className="absolute z-30 w-full
  flex items-center px-16xl:px-0 xl:h-[90px]">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
        {/* Image */}
        <Link href={'/'}>
   <Image 
          src={'/finallogo.png'}
          // src={'/logo.svg'}
        width={350} 
        height={98} 
        alt=''
        priority={true}/>
        </Link>
        {/* <motion.h3 variants={fadeIn('down',0.2)} initial="hidden"
        animate="show" exit="hidden" className='h1'>Sidharth vhanmarathe <span className='text-accent'>.</span>
        </motion.h3> */}

{/* <h2 className="h2" >
  <span className='font-semibold'>Sidharth </span>
  <span className='font-extralight'>vhanmarathe </span> <span className='text-accent'>.</span></h2>
         */}

       
        {/* Socials */}
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
