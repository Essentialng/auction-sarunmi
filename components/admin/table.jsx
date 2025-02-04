import classNames from "classnames"

export default function Table({header, contents}){
    return(
        <table className="border-separate border-spacing-y-8">
            <thead className="bg-[#B7A5F9] h-20">
                {header.map((thead, index)=>(
                    <th 
                    key={index}
                    className={classNames(
                        {"rounded-l-xl" : index ==0 }, 
                        {  "rounded-r-xl" : index == header.length - 1},
                        {"border-l-2" : index !=0 }, 
                        " font-normal text-[16px]"
                        )}
                    >
                        {thead}
                    </th>
                ))}
            </thead>
            <tbody>
                {contents.map((content, index)=>(
                    <tr key={index} className="text-center h-12">
                        <td>{content?.dateJoined}</td>
                        <td>{content.name}</td>
                        <td>{content.email}</td>
                        <td className={classNames(
                            {"bg-[#A3D6A0]" : content.status == "Active" || content.status == "Successful"},
                            {"bg-[#FFA687]" : content.status == "Inactive" || content.status == "Pending"}
                        )}>{content.status}</td>
                        {contents.length > 3 && (
                        <>
                            <td>{content?.subscription}</td>
                            <td>{content?.lastLogin}</td>
                        </>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}