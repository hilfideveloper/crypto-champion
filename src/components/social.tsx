import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'
import telegram from '../images/telegram.svg'
import discord from '../images/discord.svg'
import facebook from '../images/facebook.svg'
import tiktok from '../images/tiktok.svg'

const Social = () => {
  return (
    //h-[896px]
    <div className="w-full relative md:pb-[200px] pb-[64px] md:pt-[390px] pt-[90px]">
      <div className="bg-[url('../images/bg_social.png')] bg-cover bg-bottom w-full h-full top-0 left-0 absolute hidden md:block" />
      <div className="bg-[url('../images/bg_social_mobile.png')] bg-cover bg-top w-full h-full top-0 left-0 absolute md:hidden block" />

      {/* HEROES */}
      <div className="absolute bottom-0 left-0 hidden md:block">
        <StaticImage
          placeholder="none"
          src="../images/social_person_left.png"
          alt="cloud"
        ></StaticImage>
      </div>
      <div className="absolute bottom-0 right-0 hidden md:block">
        <StaticImage
          placeholder="none"
          src="../images/social_person_right.png"
          alt="cloud"
        ></StaticImage>
      </div>
      <div className="w-full flex flex-col justify-center items-center relative">
        <h4 className="font-vag font-bold not-italic text-[36px] md:text-[64px] text-[#0F3049] z-10 md:z-0">
          Our socials
        </h4>
        <p className="font-vag font-bold not-italic text-base text-[#5F8798] mt-[21px] hidden md:block">
          Subscribe to our social networks and stay up to date with all the
          latest news
        </p>
        <p className="font-vag font-bold not-italic text-sm text-[#5F8798] mt-[6px] px-6 z-10 text-center md:hidden">
          But I must explain to you how all this mistaken
          <br />
          idea of denouncing pleasure and praising pain
          <br />
          was born and I will give you a complete account
          <br />
          of the system, and expound the actual
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-0 mt-[27px] md:mt-[42px]">
          {/* YOUTUBE */}
          <a
            href="/"
            target="_blank"
            rel="noopener norefferer"
            className="md:w-[96px] md:h-[96px] w-[90px] h-[90px] relative hover:cursor-pointer md:top-[5px]"
          >
            <div className="w-full h-full p-[6px] bg-[#E31717] rounded-full relative z-20">
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#FF2828] rounded-full">
                <img placeholder="none" src={youtube} alt="youtube" />
              </div>
            </div>
            <div className="w-full h-full bg-[#790909] rounded-full absolute top-[3px] z-10" />
          </a>

          {/* TELEGRAM */}
          <a
            href="https://t.me/cryptochampionofficial"
            target="_blank"
            rel="noopener norefferer"
            className="md:w-[96px] md:h-[96px] w-[90px] h-[90px] relative hover:cursor-pointer md:top-[-5px]"
          >
            <div className="w-full h-full p-[6px] bg-[#0E82B6] rounded-full relative z-20">
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#31A4D7] rounded-full">
                <img placeholder="none" src={telegram} alt="telegram" />
              </div>
            </div>
            <div className="w-full h-full bg-[#004B6C] rounded-full absolute top-[3px] z-10" />
          </a>

          {/* DISCORD */}
          <a
            href="https://discord.gg/UMqvwhU6sE"
            target="_blank"
            rel="noopener norefferer"
            className="md:w-[96px] md:h-[96px] w-[90px] h-[90px] relative hover:cursor-pointer md:top-[5px]"
          >
            <div className="w-full h-full p-[6px] bg-[#3A48DE] rounded-full relative z-20">
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#5865F2] rounded-full">
                <img placeholder="none" src={discord} alt="discord" />
              </div>
            </div>
            <div className="w-full h-full bg-[#1C28B0] rounded-full absolute top-[3px] z-10" />
          </a>

          {/* TWITTER */}
          <a
            href="https://twitter.com/Crypto_champNFT"
            target="_blank"
            rel="noopener norefferer"
            className="md:w-[96px] md:h-[96px] w-[90px] h-[90px] relative hover:cursor-pointer md:top-[-5px]"
          >
            <div className="w-full h-full p-[6px] bg-[#1087D0] rounded-full relative z-20">
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#1EA8FC] rounded-full">
                <img placeholder="none" src={twitter} alt="twitter" />
              </div>
            </div>
            <div className="w-full h-full bg-[#045E95] rounded-full absolute top-[3px] z-10" />
          </a>

          {/* FACEBOOK */}
          <a
            href="/"
            target="_blank"
            rel="noopener norefferer"
            className="md:w-[96px] md:h-[96px] w-[90px] h-[90px] relative hover:cursor-pointer md:top-[5px]"
          >
            <div className="w-full h-full p-[6px] bg-[#284175] rounded-full relative z-20">
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#395693] rounded-full">
                <img placeholder="none" src={facebook} alt="facebook" />
              </div>
            </div>
            <div className="w-full h-full bg-[#14274E] rounded-full absolute top-[3px] z-10" />
          </a>

          {/* TIKTOK */}
          <a
            href="/"
            target="_blank"
            rel="noopener norefferer"
            className="md:w-[96px] md:h-[96px] w-[90px] h-[90px] relative hover:cursor-pointer md:top-[-5px]"
          >
            <div className="w-full h-full p-[6px] bg-[#2D2D2D] rounded-full relative z-20">
              <div className="w-full h-full flex flex-col justify-center items-center bg-[#101010] rounded-full">
                <img placeholder="none" src={tiktok} alt="tiktok" />
              </div>
            </div>
            <div className="w-full h-full bg-[#000000] rounded-full absolute top-[3px] z-10" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Social
