import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Parallax } from 'react-scroll-parallax'
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse'

const GamePlay = () => {
  return (
    <div className="gameplay flex w-[100%] flex-col items-center justify-center bg-no-repeat md:bg-[url('../images/sky.png')] bg-[url('../images/sky_mobile.png')] md:bg-contain bg-[length:100%_100%] bg-bottom pt-[80px] md:pt-[450px] md:mt-[-250px] relative z-30">
      <Parallax
        className="absolute top-0 z-[-10] hidden md:block"
        translateY={['300px', '500px']}
      >
        <StaticImage
          placeholder="none"
          src="../images/forest_clouds.png"
          alt="forest_clouds"
        />
      </Parallax>
      <h3 className="font-vag font-bold not-italic text-[32px] md:text-[64px] text-white">
        Gameplay
      </h3>

      <text className="font-gameplay font-vag font-bold not-italic text-lg px-0 text-center text-[#ABABAB] mt-[21px] hidden md:block">
        Build an unbeatable team of CryptoChampions, equip them with weapons,
        and conquer the arena! Each CryptoChampion
        <br className="hidden md:block" />
        has unique traits, specs based on its class and on your luck. Champions
        can be from 5 different races:
        <br className="hidden md:block" />
        Death knights, Elite military, Cyberpunk, Western, and Fantasian, with
        attributes randomly created
        <br className="hidden md:block" />
        (we hope you will not mint one with bunny ears). Depending on the race,
        your champion will have initial random statistics.
      </text>

      <text
        className="font-vag font-bold not-italic text-[14px] px-5 text-center text-[#ABABAB] mt-[10px] md:hidden block"
      >
        Build an unbeatable team of CryptoChampions,
        <br />
        equip them with weapons, and conquer the arena!
        <br />
        Each CryptoChampion has unique traits, specs based
        <br />
        on its class and on your luck. Champions can be from
        <br />
        5 different races: Death knights, Elite military,
        <br />
        Cyberpunk, Western, and Fantasian, with attributes
        <br />
        randomly created (we hope you will not mint one
        <br />
        with bunny ears). Depending on the race,
        <br />
        your champion will have initial random statistics.
      </text>

      {/* Gameplay block */}





      
      <div className="deskripsi-sugus deskripsi-gameplay max-w-[1440px] flex flex-col md:grid md:gap-20 gap-8 grid-cols-2 mt-[20px]">
        <div className="flex flex-col md:flex-row items-center mt-[32px] md:mt-0">
          <div className="css-bounce_item_1 flex flex-col justify-center items-center md:w-[250px] w-[220px] z-10">
            <StaticImage
              placeholder="none"
              src="../images/person_1.png"
              alt="gallery"
            />
          </div>

          <div className="text-kecilnya bg_elipse flex flex-col text-center md:text-left items-center md:items-start justify-center md:ml-[25px] mt-[-80px] z-20 relative">
            <h4 className="font-vag not-italic font-bold md:leading-[72px] leading-[44px] text-white md:text-4xl text-[22px] whitespace-nowrap">
              Death knights champions
            </h4>
            <text className="md:px-0 px-6 font-vag font-bold not-italic md:text-lg text-sm text-[#ABABAB] mt-[2px]">
              Death Knights were once proud paladins
              <br />
              and virtuous defenders of Humanity.
              <br />
              The Death Knight is a melee Hero having
              <br />
              low speed, low health, but high strength.
            </text>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-[32px] md:mt-0">
          <div className="css-bounce_item_2 flex shrink-0 flex-col justify-center items-center md:w-[250px] w-[220px] z-10">
            <StaticImage
              placeholder="none"
              src="../images/person_2.png"
              alt="gallery"
            />
          </div>

          <div className="text-kecilnya bg_elipse flex flex-col text-center md:text-left items-center md:items-start justify-center md:ml-[25px] mt-[-80px] z-20 relative">
            <h4 className="font-vag not-italic font-bold md:leading-[72px] leading-[44px] text-white md:text-4xl text-[22px] whitespace-nowrap">
              Elite Military champions
            </h4>
            <text className="text-kecilnya font-vag font-bold not-italic md:text-lg text-sm text-[#ABABAB] mt-[2px]">
              Elite Militaries were trained by the highest
              <br />
              standards of the military alliance.
              <br />
              The elite military champions have low agility,
              <br />
              low speed, but high health, capable of doing tricks
              <br className="md:hidden block" />
              with the bow that few others can hope to do.
              <br />
            </text>
          </div>
        </div>
      </div>

      <div className="deskripsi-gameplay max-w-[1440px] flex flex-col md:grid md:gap-20 gap-8 grid-cols-2 mt-[20px]">
        <div className="flex flex-col md:flex-row items-center mt-[32px] md:mt-0">
          <div className="css-bounce_item_2 flex shrink-0 flex-col justify-center items-center md:w-[250px] w-[220px] z-10">
            <StaticImage
              placeholder="none"
              src="../images/person_3.png"
              alt="gallery"
            />
          </div>

          <div className="text-kecilnya bg_elipse flex flex-col text-center md:text-left items-center md:items-start justify-center md:ml-[25px] mt-[-80px] z-20 relative">
            <h4 className="font-vag not-italic font-bold md:leading-[72px] leading-[44px] text-white md:text-4xl text-[22px] whitespace-nowrap">
              Cyberpunk champions
            </h4>
            <text className="text-kecilnya md:px-0 px-6 font-vag font-bold not-italic md:text-lg text-sm text-[#ABABAB] mt-[2px]">
              Cyberpunks were once Elite Military champions
              <br />
              but had been betrayed by the military alliance,
              <br />
              they modified their DNA through human body
              <br />
              hacks. Cyberpunks have low health, low agility,
              <br />
              but high speed. They are great shooters.
            </text>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-[32px] md:mt-0">
          <div className="css-bounce_item_1 flex shrink-0 flex-col justify-center items-center md:w-[250px] w-[220px] z-10">
            <StaticImage
              placeholder="none"
              src="../images/person_4.png"
              alt="gallery"
            />
          </div>

          <div className="text-kecilnya bg_elipse flex flex-col text-center md:text-left items-center md:items-start justify-center md:ml-[25px] mt-[-80px] z-20 relative">
            <h4 className="font-vag not-italic font-bold md:leading-[72px] leading-[44px] text-white md:text-4xl text-[22px] whitespace-nowrap">
              Western champions
            </h4>
            <text className="text-kecilnya md:px-0 px-6 font-vag font-bold not-italic md:text-lg text-sm text-[#ABABAB] mt-[2px]">
              Western champions are the oldest class
              <br />
              in CryptoChampion. Stucked for a while
              <br />
              in the Arena, they perfectly know the rules!
              <br />
              Western champions have low strength, low speed, but high agility.
            </text>
          </div>
        </div>
      </div>






















      <div className="deskripsi-gameplay flex justify-center mt-[20px]">
        <div className="flex flex-col md:flex-row items-center mt-[32px] max-w-[705px] md:mt-0">
          <div className="css-bounce_item_2 flex shrink-0 flex-col justify-center items-center md:w-[250px] w-[220px] z-10">
            <StaticImage
              placeholder="none"
              src="../images/person_5.png"
              alt="gallery"
            />
          </div>

          <div className="bg_elipse flex flex-col text-center md:text-left items-center md:items-start justify-center md:ml-[25px] mt-[-80px] z-20 relative">
            <h4 className="font-vag not-italic font-bold md:leading-[72px] leading-[44px] text-white md:text-4xl text-[22px] whitespace-nowrap">
              Fantasian champions
            </h4>
            <text className="text-kecilnya md:px-0 px-6 font-vag font-bold not-italic md:text-lg text-sm text-[#ABABAB] mt-[2px]">
              The Fantasian champions are empowered by the Light, these mighty
              warriors brandish both epic and magical weapons in the arena
              against all who would trample the meek and innocent. Fantasian
              champions are the rarest and a very equilibrated class in CCG.
              They are good everywhere, that's it.
            </text>
          </div>
        </div>
      </div>

      {/* STAKE */}
      <div className="flex md:flex-row flex-col-reverse justify-center items-start md:items-start mt-[64px] md:mt-[100px] relative z-10">
        <div className="md:mt-[-26px] mt-[-35px] relative md:overflow-x-visible overflow-x-clip">
          <MouseParallaxContainer
            resetOnLeave
            enabled
            className="parallax !overflow-visible !absolute z-10 w-[100%] h-[100%]"
          >
            <MouseParallaxChild
              className="md:right-[65px] right-[-30px] md:bottom-[-210px] bottom-[-170px] z-20 absolute"
              factorX={0.09}
              factorY={0.05}
            >
              <div className="md:w-[570px] w-[370px]">
                <StaticImage
                  placeholder="none"
                  src="../images/gem_4.png"
                  alt="gallery"
                />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="md:top-[-55px] md:right-[calc(100%-80px)] bottom-[15px] left-[-60px] z-20 absolute"
              factorX={0.09}
              factorY={0.05}
            >
              <div className="md:w-[201px] w-[121px] rotate-[80deg]">
                <StaticImage
                  placeholder="none"
                  src="../images/gem_2.png"
                  alt="gallery"
                />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="md:top-[-40px] md:right-[100px] top-[50px] right-[25px] z-20 absolute"
              factorX={0.09}
              factorY={0.05}
            >
              <div className="md:w-[74px] w-[42px]">
                <StaticImage
                  placeholder="none"
                  src="../images/gem_3.png"
                  alt="gallery"
                />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              className="top-[calc(100%+28px)] left-[-10px] z-20 absolute hidden md:block"
              factorX={0.09}
              factorY={0.05}
            >
              <div className="md:w-[197px]">
                <StaticImage
                  placeholder="none"
                  src="../images/gem.png"
                  alt="gallery"
                  layout="fullWidth"
                />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <StaticImage
            placeholder="none"
            src="../images/stake.png"
            alt="gallery"
          />
        </div>
        <div className="stake flex flex-col items-center md:items-start md:ml-[24px] text-center md:text-left">
          <h4 className="whitespace-pre font-vag not-italic text-white font-bold text-[32px] leading-[36px] md:leading-[79px] md:text-[64px]">
            Stake your CCG tokens
            <br />
            now and get rewarded!
          </h4>
          <text
            className="max-w-[690px] font-vag font-bold md:text-left text-center not-italic md:text-lg text-sm text-[#ABABAB] px-[25px] md:px-0 md:mt-[21px] mt-[10px]"
          >
            Every champion and NFT assets require gems to upgrade them. By
            staking your CCG,
            <br className="hidden 2xl:block" />
            you will get daily gems, exchangeable for CCG tokens. Stake and earn
            tokens!
          </text>
          <div className="tombolkiri button_hover md:w-[406px] w-[326px] md:h-[100px] h-[92px] p-[4px] rounded-[24px] bg-[#032915] md:mt-[48px] mt-[27px] flex items-center justify-center hover:cursor-pointer">
            <div className="w-full h-full rounded-[24px] bg-[#1F824D] md:pb-[5px] pb-[2px] flex items-center justify-center">
              <div className="w-full h-full rounded-[24px] px-[7px] py-[9px] bg-gradient-to-b from-[#53EA9A] to-[#116638] flex items-center justify-center">
                <div className="w-full h-full rounded-[20px] bg-[#46C883] flex items-center justify-center">
                  <h4
                    className="font-vag font-bold not-italic md:text-[32px] text-[24px] text-[#0C572F] relative top-[-5px]"
                    style={{
                      textShadow:
                        '3px 0 0 #53EA9A, -3px 0 0 #53EA9A, 0 3px 0 #53EA9A, 0 -3px 0 #53EA9A, 2px 2px #53EA9A, -2px -2px 0 #53EA9A, 2px -2px 0 #53EA9A, -2px 2px 0 #53EA9A',
                    }}
                  >
                    Staking
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[240px] absolute left-0 bottom-0 translate-y-[60%] hidden md:block">
        <StaticImage
          placeholder="none"
          src="../images/ground.png"
          alt="ground"
          layout="fullWidth"
        />
      </div>

      <div className="w-[100%] h-[145px] absolute left-0 bottom-0 translate-y-[60%] md:hidden block">
        <StaticImage
          placeholder="none"
          src="../images/ground_mobile.png"
          alt="ground"
          layout="fullWidth"
        />
      </div>
    </div>
  )
}

export default GamePlay
