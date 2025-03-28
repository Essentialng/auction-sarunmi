"use client"
import Products from "@/components/users/products"
import Table from "@/components/users/table"
import FooterCard from "@/components/users/footerCard"
export default function Page(){
    const headers = [
        "S/N",
        "Name",
        "Location",
        "Expertise",
        "Years of Experience"
    ]
    return(
        <div className="flex flex-col gap-0  overflow-x-hidden">
            <Products 
            page="valuers" 
            headline="Meet Our Expert Valuers"
            detail="Trusted Professionals Ensuring Accurate and Fair Valuations."
            style="valuers"
            />
            <Table headers={headers}/>
            <div className=" w-full py-12">
                <FooterCard/>            
            </div>
        </div>
    )
}