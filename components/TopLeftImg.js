import Image from "next/image";

const TopLeftImg = () => {
  return <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[300px] opacity-50'>
    <Image src='/top-left-img.png' width={300} height={300} alt=""/>
  </div>;
};

export default TopLeftImg;
