import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MagicSliderDots from 'react-magic-slider-dots'
import 'react-magic-slider-dots/dist/magic-dots.css'

// markup
const ArenaCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots: any) => {
      return (
        <MagicSliderDots
          dotContainerClassName="!mt-[28px] magic-dots slick-dots"
          dots={dots}
          numDotsToShow={3}
          dotWidth={30}
        />
      )
    },
  }

  return (
    <Slider {...settings}>
      <div className="slider-fight !flex !flex-col md:!flex-row justify-center items-center">
        <div className="flex flex-col md:w-[590px] w-[100%] justify-center md:items-start items-center md:mr-[150px]">
          <h4 className="font-vag font-bold not-italic md:text-[64px] text-[32px] text-white">
            Fight - Collect - Earn
          </h4>
          <text className="font-normal font-vag text-[18px] not-italic text-[#ABABAB] mt-[20px] hidden md:block">
            Discover a new kind of arena fight experience, combining
            play-to-earn
            <br />
            with true digital ownership. Enter the Arena ! CryptoChampion are a
            set
            <br />
            of programmatically generated and unique/rare NFTs that will be
            fully
            <br />
            playable inside the arenaverse.
          </text>
        </div>
        <div className="w-full px-8 md:py-0 md:w-[502px]  md:scale-125">
          <StaticImage
            placeholder="none"
            src="../images/flight_1.png"
            alt="gallery"
            layout="fullWidth"
          />
        </div>
        <text className="font-normal text-center font-vag text-[14px] not-italic text-[#ABABAB] px-6 mt-[22px] md:mt-[64px] md:hidden ">
          Discover a new kind of arena fight experience, combining play-to-earn
          with true digital ownership. Enter the Arena ! CryptoChampion are a
          set of programmatically generated and unique/rare NFTs that will be
          fully playable inside the arenaverse.
        </text>
      </div>
      <div className="slider-fight !flex !flex-col md:!flex-row justify-center items-center">
        <div className="flex flex-col md:w-[590px] w-[100%] justify-center md:items-start items-center md:mr-[150px]">
          <h4 className="font-vag font-bold not-italic md:text-[64px] text-[32px] text-white">
            Collect NFT Assets
          </h4>
          <text className="font-normal font-vag text-[18px] not-italic text-[#ABABAB] mt-[20px] hidden md:block">
            Collect now your NFT champions, and use them in the arena!
            Accumulate
            <br />
            the most powerful weapon and legendary pet, equip your champion
            <br />
            and become a hero! You can mint your NFT on the mint page, or
            buy/sell it on the NFT Marketplace.
          </text>
        </div>
        <div className="w-full px-8 md:py-0 md:w-[502px]  mt-[24px] md:mt-0 md:pt-[40px] md:scale-125">
          <StaticImage
            placeholder="none"
            src="../images/flight_2.png"
            alt="galqlery"
            layout="fullWidth"
          />
        </div>
        <text className="font-normal text-center font-vag text-[16px] not-italic text-[#ABABAB] px-6 mt-[22px] md:mt-[64px] md:hidden ">
          Collect now your NFT champions, and use them in the arena! Accumulate
          the most powerful weapon and legendary pet, equip your champion and
          become a hero! You can mint your NFT on the mint page, or buy/sell it
          on the NFT Marketplace.
        </text>
      </div>
      <div className="slider-fight !flex !flex-col md:!flex-row justify-center items-center">
        <div className="flex flex-col md:w-[590px] w-[100%] justify-center md:items-start items-center md:mr-[150px]">
          <h4 className="font-vag font-bold not-italic md:text-[64px] text-[32px] text-white">
            Fight To Earn
          </h4>
          <text className="font-normal font-vag text-[18px] not-italic text-[#ABABAB] mt-[20px] hidden md:block">
            Fight daily, and participate to epic tournaments to earn rewards.
            <br />
            CryptoChampion is built with thrilling play-to-earn functionalities,
            <br />
            giving any player the opportunity to earn money. It is more than
            <br />a simple game, it is a blockchain revolution!
          </text>
        </div>
        <div className="w-full px-8 md:px-0 md:w-[502px]  mt-[24px]">
          <StaticImage
            placeholder="none"
            src="../images/flight_3.png"
            alt="gallerye"
            layout="fullWidth"
          />
        </div>
        <text className="font-normal text-center font-vag text-[16px] not-italic text-[#ABABAB] px-6 mt-[22px] md:mt-[64px] md:hidden">
          Fight daily, and participate to epic tournaments to earn rewards.
          CryptoChampion is built with thrilling play-to-earn functionalities,
          giving any player the opportunity to earn money. It is more than a
          simple game, it is a blockchain revolution!
        </text>
      </div>
    </Slider>
  )
}

export default ArenaCarousel
