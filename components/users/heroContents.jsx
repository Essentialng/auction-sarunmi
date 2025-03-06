
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


export function HeroTitle({ title, orangeText }) {
  return (
    <p className="xl:text-[36px]">
      {title}
      <span className="text-[#EF6509]">{orangeText}</span>
    </p>
  );
};


export function HeroSubTitle({ bfOrangeText, title2, frOrangeText }) {
  return (
    <div className="text-[45px]">
      <small>
        <small className="text-[#EF6509]">{bfOrangeText} </small>
        {title2}
        <small className="text-[#EF6509]">{frOrangeText}</small>
      </small>
    </div>
  );
};



export function HeroDetails({ details, isLarge }) {
  return (
    <small className={`text-[20px] font-[700] ${isLarge ? "py-[3rem]" : ""}`}>
      {details}
    </small>
  );
};



export function HeroCard({ title, details }) {
  return (
    <div className="bg-[#6B5EC1] bg-opacity-45 rounded-[20px] shadow-black-300 shadow-md w-full px-[1rem] py-[2rem] z-50 my-[5rem] flex flex-col gap-4">
      <p className="text-center text-[#FFB485] text-[20px]">{title}</p>
      <small className="text-[14px]">{details}</small>
    </div>
  );
}


export function HeroButton({ link, button }) {
  return (
    <Link
      href={link}
      className="text-left bg-[#EF6509] rounded-[10px] px-[2rem] py-[10px] items-center text-white w-1/2 cursor-pointer text-[16px] font-[500] flex justify-between hover:bg-[#35318E] hover:shadow-white shadow-md"
    >
      <span>{button}</span>
      <FaArrowRight size={20} />
    </Link>
  );
}


