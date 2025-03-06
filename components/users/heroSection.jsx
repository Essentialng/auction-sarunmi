"use client";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Sliders from "./sliders";
import {HeroTitle, HeroSubTitle, HeroDetails, HeroCard, HeroButton} from "./heroContents";

export default function Hero() {
  const hero_section = [
    {
      title: "From rare finds to everyday ",
      orange_text: "essentials:",
      details: "Start bidding now for your properties, cars, electronics etc.",
      image1: "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290591/building.png",
      image2: "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290583/full-light.png",
      image3: "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290557/generator.png",
      button: "REGISTER & START BIDDING",
      link: "/register",
      cards: [
        { title: "SIGN UP", details: "Join the bidding frenzy: Sign up for auctions now!" },
        { title: "SEARCH", details: "Discover what you're looking for: search now" },
        { title: "BID", details: "Bid with confidence: start bidding today!" },
      ],
    },
    {
      title: "Appliance Auctions: Upgrade",
      title2: "Your Home with ",
      fr_orange_text: "Top-Quality Deals!:",
      details: "Discover unbeatable deals on top-quality home appliances at our appliance auctions, perfect for upgrading your home with style and savings. Bid now and transform your living space into the haven of your dreams!",
      image: "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290608/machines.png",
      button: "CATEGORIES",
      link: "/categories/3",
    },
    {
      title: "Gadget Galore:",
      orange_text: " Explore Tech",
      title2: "and Score Big Savings!",
      bf_orange_text: "Treasures",
      details: "Dive into a world of tech wonders at our gadget auctions, where you can uncover coveted gadgets and secure fantastic savings. Don't miss out on the opportunity to elevate your tech game while keeping your budget intact!",
      image: "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290624/iphones.png",
      button: "CATEGORIES",
      link: "/categories/3",
    },
  ];

  return (
    <div className="xl:block hidden">
      <Sliders slideShow={1} margin={40} scroll={1} play={true} speed={50} infinite={true} className="max-h-[80vh] relative">
        {hero_section.map((hero, index) => (
          <div
            key={index}
            className={classNames({
              "bg-gradient-to-r from-[#9D8CED] to-[#35318E]": index === 0,
              "bg-gradient-to-r from-[#83DE7D] to-[#8474DA]": index === 1,
              "bg-gradient-to-r from-[#6B5EC1] to-[#FF9354]": index === 2,
              "h-[85vh] justify-center flex px-[4rem]": true,
            })}
          >
            <div className="grid grid-cols-2 justify-center items-center h-full">
              <div className="col-span-1 flex flex-col gap-12">
                <div className="w-full text-white font-[700]">
                  <HeroTitle title={hero.title} orangeText={hero.orange_text} />
                  <HeroSubTitle bfOrangeText={hero.bf_orange_text} title2={hero.title2} frOrangeText={hero.fr_orange_text} />
                  <HeroDetails details={hero.details} isLarge={index === 1 || index === 2} />

                  <div className="2xl:flex xl:flex hidden gap-[2rem] w-[1000px]">
                    {hero.cards?.map((card, cardIndex) => (
                      <HeroCard key={cardIndex} title={card.title} details={card.details} />
                    ))}
                  </div>
                </div>

                <HeroButton link={hero.link} button={hero.button} />
              </div>

              <div className="col-span-1 flex relative justify-center items-center h-fit z-10">
                {index === 0 ? (
                  <div className="flex flex-col justify-center items-center">
                    <Image alt="" className="z-30" src={hero.image1} width={270} height={270} />
                    <div className="relative flex items-center justify-center">
                      <Image alt="" className="z-50" src={hero.image2} width={270} height={270} />
                      <Image alt="" className="z-10" src={hero.image3} width={270} height={270} />
                    </div>
                  </div>
                ) : (
                  <Image alt="" className="relative" src={hero.image} width={index === 1 ? 670 : 520} height={270} />
                )}
              </div>
            </div>
          </div>
        ))}
      </Sliders>
    </div>
  );
}
