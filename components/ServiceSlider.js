import {Swiper,SwiperSlide}  from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
 RxArrowTopRight,
  RxRocket
  
} from 'react-icons/rx';

// import required modules
import { FreeMode,Pagination } from 'swiper';
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Team of experienced designers understands the importance of making a powerful first impression',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Every project starts with a blank canvas We tailor each design to match your brands unique personality and goals',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Our development team turns the approved design into a fully functional and responsive website.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: `Writing in creative way. Use "you" and "your" to show that you're focused on their success.`,
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Our designs  visually appealing to search engine optimized, helping you rank higher and attract traffic.',
  },
];
const ServiceSlider = () => {
  return <Swiper
  breakpoints={{
    320:
    {
      slidesPerView:1,
      spaceBetween:15
    },
    640:
    {
      slidesPerView:3,
      spaceBetween:15
    },
  }}
  freeMode={true}
  pagination={{
    clickable:true,
  }}
  modules={[FreeMode,Pagination]} 
  className='h-[240px] sm:h-[340px]'>
    {
      serviceData.map((item,index)=>
      {
        return(
<SwiperSlide key={index}>
  <div className='bg-[rgba(65,47,123,0.15)]
  h-max rounded-lg px-6 py-8 
  flex sm:flex-col gap-x-6
   sm:gap-x-0 group cursor-pointer
    hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
    {/* icon */}
  <div className='text-4xl text-accent mb-4'>{item.icon}</div>
  {/* title  &desc */}
  <div className='mb-8'>
    <div className='mb-2 text-lg'>{item.title}</div>
  <p className='max-w-[350px] leading-norma;'>{item.description}</p>
  </div>
  {/* arrow */}
  <div className='text-3xl'>
    <RxArrowTopRight className='group-hover:rotate-45
    group-hover:text-accent transition-all duration-300' />
  </div>
  </div>

</SwiperSlide>
        );
      })
    }

  </Swiper>;
};

export default ServiceSlider;
