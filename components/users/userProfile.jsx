import useStore from "@/app/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UploadLink } from "./navSections";


export default function DropDown({ dropLinks, user, setActivate }) {
  const { clearUser } = useStore();
  const router = useRouter();

  return (
    <div className="absolute xl:right-0 right-0 xl:top-10 top-12 sm:w-[230px] w-1/2 flex flex-col
     items-start text-start rounded-2xl py-4 text-white text-[16px] bg-[#8474DA] z-50">
      <div 
      className="w-full flex items-center px-4 border-b pb-4 gap-2 text-xs"
      >
        <Link href="/dashboard" onClick={()=>setActivate(false)} >
            <img src={user?.profilePicture} alt="" className="w-12 h-12 object-cover rounded-full cursor-pointer" />
        </Link>
        <small>Dashboard</small>
      </div>
      {dropLinks.map((link, index) => (
        <div
        onClick={()=>setActivate(false)} 
        key={index} className="relative w-full flex flex-col">
          {link.name !== "Upload Product" ? (
            <Link href={`/hub/${user?.id}/${user?.type}/profile`} className="py-4 hover:bg-[#B7A5F9] w-full px-8">
              {link.name}
            </Link>
          ) : 

          (user?.type != "bidder" &&
            <UploadLink
            setActivate={setActivate}/>
          )}

        </div>
      ))}
      <small
        onClick={() => {
          clearUser();
          setActivate(false);
          router.push("/");
        }}
        className="py-4 cursor-pointer text-[16px] hover:bg-[#B7A5F9] w-full px-8"
      >
        Sign out
      </small>
    </div>
  );
}
