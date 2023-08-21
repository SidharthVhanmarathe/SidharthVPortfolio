// link
import Link from 'next/link';
// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiBehanceLine,
  // RiPinterestLine,
  RiLinkedinLine,
} from 'react-icons/ri';
const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.youtube.com/channel/UCDl0jlIRezyvgS-7t5GAhaA'} className='hover:text-accent transition-all duration-300'>
    <RiYoutubeLine/>
    </Link>
    <Link href={'https://www.instagram.com/sid_vhanmarathe/'} className='hover:text-accent transition-all duration-300'>
    <RiInstagramLine/>
    </Link>
    <Link href={'https://www.facebook.com/siddharath.vhanamarthe/'} className='hover:text-accent transition-all duration-300'>
    <RiFacebookLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/sidharth-vhanmarathe/'} className='hover:text-accent transition-all duration-300'>
    <RiLinkedinLine/>
    </Link>
    <Link href={'https://www.behance.net/siddharvhanmar'} className='hover:text-accent transition-all duration-300'>
    <RiBehanceLine/>
    </Link>
    {/* <Link href={'https://in.pinterest.com/siddharthvhanmarathe/'} className='hover:text-accent transition-all duration-300'>
    <RiPinterestLine/>
    </Link> */}
   
  
  </div>;
};

export default Socials;
