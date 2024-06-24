import NavBar from "@/components/navBar";
import Hero from "@/components/heroSection";
import Auctions from "@/components/auctions";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
export default function DashBorad(){



    return(
    <main className="overflow-x-hidden manrope">
        <NavBar/>
        <Hero/>
        <Auctions/>
        <Cards/>
        <Footer/>
    </main>
    )
}