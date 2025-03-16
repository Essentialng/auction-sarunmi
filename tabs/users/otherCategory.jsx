import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";

export default function OtherCategories({ categories, filter, id, fetchOthers}) {
  const [dropDown, setDropDown] = useState(null); // Start with null, better than `true`

  const dropDownHandler = (index) => {
    setDropDown(dropDown === index ? null : index);
  };

  return (
    <div className="col-span-1 2xl:flex xl:flex hidden flex-col gap-8">
      <p className="text-[#EF6509] font-semibold text-[24px]">Other Categories</p>
      <ul className="flex flex-col gap-4">
        {categories.map((value, index) => (
          <li
            key={value.id || index} // Prefer unique id if available
            className="flex flex-col items-start cursor-pointer"
            onClick={() => dropDownHandler(index)}
          >
            <div
              className={`flex items-center gap-8 justify-between ${
                value.id === id ? "text-orange-500" : ""
              }`}
            >
              {value.name}
              <BiSolidRightArrow
                size={10}
                color={value.name === filter ? "#EF6509" : ""}
              />
            </div>

            {dropDown === index && (
              <div className="bg-[#8474DA] w-1/2 py-4 rounded-lg">
                {value?.model?.map((item) => (
                  <div
                    key={item.id} // Always add key here!
                    className="px-4 py-2 hover:bg-[#FFB485] hover:text-white w-full"
                    onClick={() => fetchOthers(item.categoryId)}
                  >
                    <small>{item.name}</small>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
