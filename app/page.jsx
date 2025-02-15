"use client";
import Hero from "@/components/users/heroSection";
import Auctions from "@/components/users/auctions";
import Cards from "@/components/users/cards";
import Footer from "@/components/users/footer";
import HeroSectionMobile from "@/components/users/heroSectionMobile";
// import Loading from "@/tabs/admin/loading";
// import useStore from "./store";

export default function DashBorad(){
    return(
    <main className="relative overflow-x-hidden manrope pt-28">
        <Hero/>
        <HeroSectionMobile/>
        <Auctions/>
        <Cards/>
        <Footer/>
    </main>
    )
}