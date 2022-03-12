import React, { Suspense, useState } from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import GalleryCarousel from './gallery.carousel'
import '../styles/style-responsive.css'

import { Parallax } from 'react-scroll-parallax'

const GrandpaLazy = React.lazy(() => import('./grandpa'))

const Contents = () => {
  const isSSR = typeof window === 'undefined'

  return (
    <div className="md:bg-[url('../images/sky_1.png')] bg-[url('../images/sky_1_mobile.png')] bg-contain bg-top bg-no-repeat md:pt-56 pt-40 flex flex-col items-center justify-center relative md:overflow-hidden">
      <Parallax className="absolute top-[116px]" translateY={[-50, 50]}>
        <StaticImage placeholder="none" src="../images/birds.png" alt="birds" />
      </Parallax>

      {/* text */}
      <h2 className="text-biasa-cok font-vag font-bold not-italic text-center text-[#0F3049] md:text-7xl text-4xl justify-center items-center z-10 relative">
        Welcome to
        <br />
        CryptoChampion <br className="md:hidden block" />
        arena
      </h2>

      <text className="mt-[32px] font-vag font-bold text-lg text-[#5F8798] text-center z-10 relative hidden md:block">
        CryptoChampion is an epic mobile/browser NFT blockchain-based game
        <br />
        where you can fight, collect, earn and conquer with and against other
        players.
      </text>
      <text className="mt-[26px] px-8 font-vag font-bold text-sm text-[#5F8798] text-center z-10 relative md:hidden block">
        CryptoChampion is an epic mobile/browser
        <br />
        NFT blockchain-based game where you can fight,
        <br />
        collect, earn and conquer with and against
        <br />
        other players.
      </text>

      {/* button */}
      <div className="button_hover md:w-[514px] md:h-[117px] md:p-[5px] md:mt-[56px] w-[326px] h-[92px] p-[4px] mt-[32px] bg-[#381F00] rounded-[24px] hover:cursor-pointer z-10 relative">
        <div className="w-full h-full md:pb-[6px] pb-[2px] bg-[#9A5D11] md:rounded-[24px] rounded-[20px]">
          <div className="w-full h-full md:p-[10px] p-[8px] pt-[6px] bg-gradient-to-b from-[#FFC42D] to-[#ED8918] md:rounded-[24px] rounded-[20px]">
            <div className="w-full h-full bg-[#FFD914] md:rounded-[24px] rounded-[20px] flex items-center justify-center">
              <div className="md:w-[64px] md:h-[56px] w-[48px] h-[42px]">
                <StaticImage
                  placeholder="none"
                  src="../images/union.svg"
                  alt="Union"
                  layout="constrained"
                />
              </div>

              <span
                className="font-vag font-bold not-italic text-[28px] md:text-[40px] text-[24px] text-[#753901] md:ml-[9px] ml-[5px] relative top-[-5px]"
                style={{ textShadow: '1px 1px #FEC12B' }}
              ><a href="https://play.cryptochampion.game/">
                Enter the arena</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* characters */}
      <div className="herro-hidden items-end hidden md:flex justify-start w-full mt-20 relative px-[70px]">
        <div className="top-36 z-20 relative scale-[0.8]">
          <StaticImage
            src="../images/warrior.png"
            alt="warrior"
            placeholder="none"
            layout="constrained"
          />
        </div>
        {!isSSR && (
          <Suspense fallback={null}>
            <GrandpaLazy />
          </Suspense>
        )}
      </div>

      {/* gallery */}
      <div className="gallery md:flex justify-center hidden h-[455px] mt-[-30px]">
        <div className="flex relative">
          <div className="gallery1 css-bounce_1 w-[400px] h-[400px] absolute right-[300px]">
            <StaticImage
              placeholder="none"
              src="../images/gallery_1.png"
              alt="gallery"
              layout="constrained"
            />
          </div>
          <div className="gallery2 css-bounce_2 w-[400px] h-[400px] absolute right-[-35px] z-10 mt-[24px]">
            <StaticImage
              placeholder="none"
              src="../images/gallery_2.png"
              alt="galleryss"
              layout="constrained"
            />
          </div>
          <div className="gallery3 css-bounce_1 w-[400px] h-[400px] absolute left-[-30px]">
            <StaticImage
              placeholder="none"
              src="../images/gallery_3.png"
              alt="gallerye"
              layout="constrained"
            />
          </div>
          <div className="gallery4 css-bounce_2 w-[400px] h-[400px] absolute left-[305px]">
            <StaticImage
              placeholder="none"
              src="../images/gallery_4.png"
              alt="gallerdy"
              layout="constrained"
            />
          </div>
        </div>
      </div>

      {/* gallery_mobile */}
      <div className="md:hidden w-[100%] mt-[225px] gallery">
        <GalleryCarousel />
      </div>
    </div>
  )
}

export default Contents
