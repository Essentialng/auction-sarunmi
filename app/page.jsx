import Hero from "@/components/heroSection";
import Auctions from "@/components/auctions";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import HeroSectionMobile from "@/components/heroSectionMobile";
export default function DashBorad(){



    return(
    <main className="overflow-x-hidden manrope pt-32">
        <Hero/>
        <HeroSectionMobile/>
        <Auctions/>
        <Cards/>
        <Footer/>
    </main>
    )
}