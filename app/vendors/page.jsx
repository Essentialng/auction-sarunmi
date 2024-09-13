import Products from "@/components/products"
import Table from "@/components/table"
import FooterCard from "@/components/footerCard"
export default function Page(){
    const headers = [
        "Serial Numbers",
        "Name",
        "Location",
        "Expertise",
        "Number of Listings"
    ]
    return(
        <div className="flex flex-col gap-0">
            <Products 
            page="vendors" 
            headline="Discover Our Verified Vendors"
            detail="Reliable Partners Offering Quality Products Across Various Categories."
            style="vendors"
            />
            <Table headers={headers}/>
            <div className=" w-full py-12">
                <FooterCard/>            
            </div>
        </div>
    )
}