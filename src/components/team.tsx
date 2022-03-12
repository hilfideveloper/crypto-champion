import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse'

import IsVisible from 'react-is-visible'

const Team = () => {
  return (
    <div className="flex flex-col items-center md:bg-[url('../images/bg_team.png')] bg-[url('../images/bg_team_mobile.png')] bg-[center_top_100px] bg-contain md:pt-[220px] pt-[130px] md:pb-[150px] pb-[50px] relative">
      <MouseParallaxContainer
        resetOnLeave
        enabled
        className="parallax !overflow-visible !absolute z-10 w-[100%] h-[100%] hidden md:block"
      >
        <MouseParallaxChild
          className="md:right-[-80px] right-[-50px] md:top-[-150px] bottom-[-170px] z-10 absolute"
          factorX={0.02}
          factorY={0.02}
        >
          <div>
            <StaticImage
              placeholder="none"
              src="../images/web_1.png"
              alt="gallery"
            />
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild
          className="md:left-[-110px] md:bottom-[180px] z-10 absolute"
          factorX={0.02}
          factorY={0.02}
        >
          <div>
            <StaticImage
              placeholder="none"
              src="../images/web_2.png"
              alt="gallery"
            />
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>

      <div className="w-full absolute translate-y-[-50%] top-0 h-[88px] md:hidden">
        <StaticImage
          placeholder="none"
          src="../images/ground_earth_mobile.png"
          alt="cloud"
          layout="fullWidth"
        />
      </div>

      <h4 className="font-vag font-bold not-italic text-white text-[36px] md:text-[64px]">
        The team
      </h4>
      <p className="font-vag font-bold not-italic text-sm md:text-lg text-[#ABABAB] md:mt-[21px] mt-[10px] text-center">
        Get to know the team behind CryptoChampion,{' '}
        <br className="block md:hidden" />a full set of brains!
      </p>

      <div className="button_hover md:w-[406px] md:h-[100px] w-[326px] h-[92px] rounded-[24px] bg-[#381F00] p-[4px] md:mt-[40px] mt-[27px] flex items-center justify-center hover:cursor-pointer z-10 relative">
        <div className="w-full h-full rounded-[24px] bg-[#B06D1A] md:pb-[5px] pb-[2px] flex items-center justify-center">
          <div className="w-full h-full rounded-[24px] bg-gradient-to-b from-[#FFCF23] to-[#FF9114] p-[9px] flex items-center justify-center">
            <div className="w-full h-full rounded-[24px] bg-[#FFE814] flex items-center justify-center">
            
              <div className="w-[32px]">
                <StaticImage
                  placeholder="none"
                  src="../images/security.svg"
                  alt="Union"
                  layout="constrained"
                />
              </div>
              <a href="https://solidproof.io/">
              <h4
                className="font-vag font-bold not-italic text-[32px] text-[#753901] ml-[22px] relative top-[-3px]"
                style={{
                  textShadow:
                    '3px 0 0 #FEC12B, -3px 0 0 #FEC12B, 0 3px 0 #FEC12B, 0 -3px 0 #FEC12B, 2px 2px #FEC12B, -2px -2px 0 #FEC12B, 2px -2px 0 #FEC12B, -2px 2px 0 #FEC12B',
                }}
              >
                KYC proof
              </h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tim-tengah md:mt-[94px] mt-[60px] grid grid-cols-2 gap-x-5 gap-y-5 md:gap-x-20 md:grid-cols-4">
        <IsVisible once>
          {(isVisible: boolean) => (
            <>
              <div
                className={`flex flex-col justify-center items-center w-[158px] md:w-[280px] transition-opacity duration-[2000ms] delay-100 opacity-${
                  isVisible ? '100' : '0'
                }`}
              >
                <div className="w-[158px] md:w-[280px]">
                  <StaticImage
                    placeholder="none"
                    src="../images/team_1.png"
                    alt="team_1"
                  />
                </div>
                <p className="font-vag not-italic font-bold text-lg text-[#ABABAB] mt-[21px] text-center">
                  Developer
                </p>
                <p className="font-vag not-italic text-white text-lg md:text-4xl text-center">
                  Powerfull
                </p>
              </div>

              <div
                className={`flex flex-col justify-center items-center w-[158px] md:w-[280px] transition-opacity duration-[2000ms] delay-100 opacity-${
                  isVisible ? '100' : '0'
                }`}
              >
                <div className="w-[158px] md:w-[280px]">
                  <StaticImage
                    placeholder="none"
                    src="../images/team_2.png"
                    alt="team_2"
                  />
                </div>
                <p className="font-vag not-italic font-bold text-lg text-[#ABABAB] mt-[21px] text-center">
                  UX Researcher
                </p>
                <p className="font-vag not-italic text-white text-lg md:text-4xl text-center">
                  Betman
                </p>
                <div className="h-0 md:h-[48px]" />
              </div>

              <div
                className={`flex flex-col justify-center items-center w-[158px] md:w-[280px] transition-opacity duration-[2000ms] delay-100 opacity-${
                  isVisible ? '100' : '0'
                }`}
              >
                <div className="w-[158px] md:w-[280px]">
                  <StaticImage
                    placeholder="none"
                    src="../images/team_3.png"
                    alt="team_3"
                  />
                </div>
                <p className="font-vag not-italic font-bold text-lg text-[#ABABAB] mt-[21px] text-center">
                  Software Engineer
                </p>
                <p className="font-vag not-italic text-white text-lg md:text-4xl text-center">
                  Spiderman
                </p>
              </div>

              <div
                className={`flex flex-col justify-center items-center w-[158px] md:w-[280px] transition-opacity duration-[2000ms] delay-100 opacity-${
                  isVisible ? '100' : '0'
                }`}
              >
                <div className="w-[158px] md:w-[280px]">
                  <StaticImage
                    placeholder="none"
                    src="../images/team_4.png"
                    alt="team_4"
                  />
                </div>
                <p className="font-vag not-italic font-bold text-lg text-[#ABABAB] mt-[21px] text-center">
                  DevOps
                </p>
                <p className="font-vag not-italic text-white text-lg md:text-4xl text-center">
                  Nike_Air_Max
                </p>
                <div className="h-0 md:h-[48px]" />
              </div>
            </>
          )}
        </IsVisible>
      </div>

      <div className="tim-tengah md:mt-[40px] mt-[1.24rem] grid grid-cols-2 gap-x-5 gap-y-5 md:gap-x-20 md:grid-cols-4">
        <IsVisible once>
          {(isVisible: boolean) => (
            <>
              <div
                className={`flex flex-col justify-center items-center w-[158px] md:w-[280px] transition-opacity duration-[2000ms] delay-100 opacity-${
                  isVisible ? '100' : '0'
                }`}
              >
                <div className="w-[158px] md:w-[280px]">
                  <StaticImage
                    placeholder="none"
                    src="../images/team_5.png"
                    alt="team_1"
                  />
                </div>
                <p className="font-vag not-italic font-bold text-lg text-[#ABABAB] mt-[21px] text-center">
                  Frontend Developer
                </p>
                <p className="font-vag not-italic text-white text-lg md:text-4xl text-center">
                  kamikadze
                </p>
              </div>

              <div
                className={`flex flex-col justify-center items-center w-[158px] md:w-[280px] transition-opacity duration-[2000ms] delay-100 opacity-${
                  isVisible ? '100' : '0'
                }`}
              >
                <div className="w-[158px] md:w-[280px]">
                  <StaticImage
                    placeholder="none"
                    src="../images/team_6.png"
                    alt="team_2"
                  />
                </div>
                <p className="font-vag not-italic font-bold text-lg text-[#ABABAB] mt-[21px] text-center">
                  Cyber Security Specialist
                </p>
                <p className="font-vag not-italic text-white text-lg md:text-4xl text-center">
                  Ramzes
                </p>
                <div className="h-0 md:h-[48px]" />
              </div>

              <div
                className={`flex flex-col justify-center items-center w-[158px] md:w-[280px] transition-opacity duration-[2000ms] delay-100 opacity-${
                  isVisible ? '100' : '0'
                }`}
              >
                <div className="w-[158px] md:w-[280px]">
                  <StaticImage
                    placeholder="none"
                    src="../images/team_7.png"
                    alt="team_3"
                  />
                </div>
                <p className="font-vag not-italic font-bold text-lg text-[#ABABAB] mt-[21px] text-center">
                  UI Designer
                </p>
                <p className="font-vag not-italic text-white text-lg md:text-4xl text-center">
                  YouTouchMeTaLaLA
                </p>
              </div>

              <div
                className={`flex flex-col justify-center items-center w-[158px] md:w-[280px] transition-opacity duration-[2000ms] delay-100 opacity-${
                  isVisible ? '100' : '0'
                }`}
              >
                <div className="w-[158px] md:w-[280px]">
                  <StaticImage
                    placeholder="none"
                    src="../images/team_8.png"
                    alt="team_4"
                  />
                </div>
                <p className="font-vag not-italic font-bold text-lg text-[#ABABAB] mt-[21px] text-center">
                  UX Designer
                </p>
                <p className="font-vag not-italic text-white text-lg md:text-4xl text-center">
                  TheEndSkrillex
                </p>
                <div className="h-0 md:h-[48px]" />
              </div>
            </>
          )}
        </IsVisible>
      </div>

      <div className="w-full h-[88px] hidden md:block absolute bottom-[0] z-10">
        <StaticImage
          placeholder="none"
          src="../images/ground_earth.png"
          alt="cloud"
          layout="fullWidth"
        />
      </div>
    </div>
  )
}

export default Team
