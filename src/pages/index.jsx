import React from 'react'

import '../styles/global.css'
import Header from '~/components/header'
import Contents from '~/components/contents'
import Arena from '~/components/arean'
import GamePlay from '~/components/gameplay'
import Team from '~/components/team'
import Documentation from '~/components/documentation'
import Social from '~/components/social'
import Footer from '~/components/footer'

import { ParallaxProvider } from 'react-scroll-parallax'

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <div className="max-w-[1920px] mx-auto bg-no-repeat w-full h-full md:overflow-hidden relative">
        <Header />
        <Contents />
        <Arena />
        <GamePlay />
        <div className="md:hidden block">
          <Documentation />
        </div>
        <div className="md:hidden block">
          <Team />
        </div>
        <div className="hidden md:block">
          <Team />
        </div>
        <div className="hidden md:block">
          <Documentation />
        </div>
        <Social />
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default IndexPage
