import classNames from "classnames"
import { dateFormat } from "@/utils/methods"

export default function Table({ header, contents, userDetailsHandler }) {

    const getStatus = (lastLogin) => {
        if (!lastLogin) return "Inactive";
        const lastLoginDate = new Date(lastLogin);
        const today = new Date();
        const diffTime = Math.abs(today - lastLoginDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 7 ? "Inactive" : "Active";
    };

    return (
        <table className="border-separate border-spacing-y-6">
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
                    const status = getStatus(content?.lastLogin);

                    return (
                        <tr 
                        key={index} 
                        className="text-center cursor-pointer h-12 hover:bg-slate-200"
                        onClick={()=>userDetailsHandler(content)}
                        >
                            <td>{dateFormat(content?.createdAt)}</td>
                            <td>{content?.firstName} {content?.lastName}</td>
                            <td>{content?.email}</td>
                            <td
                                className={classNames(
                                    { "bg-[#A3D6A0]": status === "Active" },
                                    { "bg-[#FFA687]": status === "Inactive" }
                                )}
                            >
                                {status}
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
    );
}
