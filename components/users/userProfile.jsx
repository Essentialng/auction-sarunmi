import { useState } from "react";
import useStore from "@/app/store";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { UploadLink } from "./navSections";


export default function DropDown({ dropLinks }) {
  const { clearUser } = useStore();
  const router = useRouter();

  return (
    <div className="absolute xl:right-0 right-0 xl:top-10 top-12 xl:w-[230px] w-1/2 flex flex-col items-start text-start rounded-2xl py-4 text-white text-[16px] bg-[#8474DA]">
      {dropLinks.map((link, index) => (
        <div key={index} className="relative w-full flex flex-col">
          {link.name !== "Upload Product" ? (
            <Link href="#" className="py-4 hover:bg-[#B7A5F9] w-full px-8">
              {link.name}
            </Link>
          ) : (
            <UploadLink/>
          )}
        </div>
      ))}
      <small
        onClick={() => {
          clearUser();
          router.push("/");
        }}
        className="py-4 cursor-pointer text-[16px] hover:bg-[#B7A5F9] w-full px-8"
      >
        Sign out
      </small>
    </div>
  );
}
