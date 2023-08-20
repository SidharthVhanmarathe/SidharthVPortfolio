


import {Swiper,SwiperSlide}  from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// next image
import Image from 'next/image';


// import required modules
import { Navigation, Pagination } from 'swiper';
import {FaQuoteLeft } from 'react-icons/fa'
// testimonial data
const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      ' was blown away by the level of professionalism and expertise that siddharth brought to the table. ',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
'They took the time to understand my business and delivered a website that perfectly captures our brand essence. The results have exceeded my expectations'  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'He transformed my outdated website into a modern masterpiece. The user experience is now seamless'},
];


const TestimonialSlider = () => {
  return(
     <Swiper
 navigation={true}
  pagination={{
    clickable:true,
  }}
  modules={[Navigation, Pagination]} 
  className='h-[400px]'>
    {
      testimonialSlider.map((person,index)=>
      {
        return(
<SwiperSlide key={index}>
 <div className='flex flex-col items-center
 md:flex-row gap-x-8 h-full px-16' >
  {/* avatar ,name,position */}
<div className='w-full max-w-[300px] flex flex-col 
xl:justify-center items-center relative mx-auto xl:mx-0'>
  <div className='flex flex-col justify-center text-center'>
    {/* avatr iamage */}
    <div className=' mb-2 mx-auto'>
      <Image src={person.image} width={100} height={100} alt='' />
    </div>
    {/* name */}
    <di className='text-lg'>{person.name}</di>
    {/* position */}
  <div className='text-[12px] uppercase font-extralight'>{person.position}</div>
  </div>
</div>
{/* quote & messsage */}
<div className=' flex-1 flex flex-col 
justify-center
before:w-[1px] xl:before:bg-white/20
 xl:before:absolute xl:before:left-0
 xl:before:h-[200px] relative xl:pl-20'>
  {/* quote icon */}
  <div className='mb-4'>
    <FaQuoteLeft 
    className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/></div>
{/* message */}
<div className='xl:text-lg text-center md:text-left'>{person.message}</div>

</div>
 </div>

</SwiperSlide>
        );
      })}

  </Swiper>
  );
};

export default TestimonialSlider;


