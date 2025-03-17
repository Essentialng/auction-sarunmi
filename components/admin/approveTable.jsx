import classNames from "classnames"
import { dateFormat } from "@/utils/methods"
import { TbCurrencyNaira } from "react-icons/tb";


export default function Table({ header, contents, userDetailsHandler}) {


    return (
        <div className="rounded-xl shadow-xl w-full col-span-10 p-4">
            <table className="border-separate border-spacing-y-6  w-full">
                <thead className="bg-[#B7A5F9] h-20">
                    {header.map((thead, index) => (
                        <th
                            key={index}
                            className={classNames(
                                { "rounded-l-xl": index === 0 },
                                { "rounded-r-xl": index === header.length - 1 },
                                { "border-l-2": index !== 0 },
                                " font-normal text-[16px]"
                            )}
                        >
                            {thead}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {contents?.map((content, index) => {

                        return (
                            <tr 
                            key={index} 
                            className="text-center cursor-pointer h-12 hover:bg-slate-200"
                            onClick={()=>userDetailsHandler(content)}
                            >
                                <td>{dateFormat(content?.createdAt)}</td>
                                <td>{content?.model?.category?.name}</td>
                                <td>{content?.model?.name}</td>
                                <td >
                                    <div className="flex items-center text-center justify-center">
                                    <TbCurrencyNaira/> 
                                    {Number(content?.price).toLocaleString()}
                                    </div>
                                    </td>
                                <td>{content?.location}</td>
                                <td
                                    className={classNames(
                                        { "bg-[#A3D6A0]": content?.status === "Active" },
                                        { "bg-[#FFA687]": content?.status === "Inactive" }
                                    )}
                                >
                                    {content?.status}
                                </td>
                                {contents?.length > 4 && (
                                    <>
                                    <td>{content?.subscriptionType}</td>
                                    <td>{content?.lastLogin && dateFormat(content?.lastLogin)}</td>
                                    </>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
