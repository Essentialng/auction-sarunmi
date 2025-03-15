import { FaAngleRight, FaUser, FaRegEnvelope, FaAngleDown } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import History from "@/components/users/history";
import ProfileOverview from "@/components/users/profilePreview";
import Page from "@/components/users/upload";
import Notification from "@/components/users/notification";


export const SideLink = ({ navBtn, toggle, setToggle, type, product, handleClick, dropDown, setDropDown }) => {
  return (
    <nav className="flex flex-col gap-6 space-y-2 p-6 rounded-xl shadow-lg border text-[16px] font-medium">
      <button 
        className={`${navBtn} ${toggle == "profile" && "text-orange-500"}`}
        onClick={() => setToggle("profile")}
      >
        Profile
      </button>

      {/* {type !== "bidder" && (
        <button 
          className={`${navBtn} ${toggle == "revenue" && "text-orange-500"}`}
          onClick={() => setToggle("revenue")}
        >
          My Revenue
        </button>
      )} */}

      <button 
        className={`${navBtn} ${toggle == "notification" && "text-orange-500"}`}
        onClick={() => setToggle("notification")}
      >
        Notification
      </button>

      {type !== "bidder" && (
        <div className='flex flex-col gap-4'>
          <button 
            className={`flex items-center justify-between ${navBtn} ${toggle == "upload" && "text-orange-500"}`}
            onClick={() => {
              setDropDown(!dropDown);
              setToggle("upload");
            }}
          >
            <small className='text-lg w-full'>Upload Product</small>
            {dropDown ? <FaAngleDown /> : <FaAngleRight />}
          </button>

          {dropDown && (
            <div className='flex flex-col gap-4 text-[#1E2420]'>
              <button 
                className={`text-start ${product.name == "Car" && "text-orange-500"}`}
                onClick={() => handleClick("Car", 1)}
              >
                Car
              </button>
              <button 
                className={`text-start ${product.name == "Property" && "text-orange-500"}`}
                onClick={() => handleClick("Property", 2)}
              >
                Properties
              </button>
              <button 
                className={`text-start ${product.name == "Others" && "text-orange-500"}`}
                onClick={() => handleClick("Others", 3)}
              >
                Others
              </button>
            </div>
          )}
        </div>
      )}
      
      <button 
        className={`${navBtn} ${toggle == "history" && "text-orange-500"}`}
        onClick={() => setToggle("history")}
      >
        History
      </button>
    </nav>
  );
};




export const UserInfo = ({ user }) => {
  return (
    <div className="lg:block hidden space-y-4 text-white bg-[#35318E] rounded-2xl p-4 mb-4">
      <div className='flex flex-col gap-4 text-[16px]'>
        <div className='flex gap-2 items-center'>
          <FaUser/>
          <p className="font-bold">{user?.firstName} {user?.lastName}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <FaRegEnvelope/>
          <p className="text-sm">{user?.phoneNumber}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <FiPhone/>
          <p className="text-sm">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};




export const ToggleContent = ({ toggle, user, initializeUser, product, handleClick, id }) => {
  return (
    <>
      {toggle === "notification" && (
        <div className='col-span-4'>
          <Notification />
        </div>
      )}
      {toggle === "history" && (
        <div className='col-span-4'>
          <History />
        </div>
      )}
      {toggle === "profile" && (
        <div className='col-span-4'>
          <ProfileOverview 
            user={user} 
            initializeUser={initializeUser}
          />
        </div>
      )}
      {toggle === "upload" && (
        <div className='col-span-4'>
          <Page 
            product={product} 
            id={id}
            handleClick={handleClick}
            user={user}
          />
        </div>
      )}
    </>
  );
};



