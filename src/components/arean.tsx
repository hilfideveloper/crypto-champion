import React from 'react'

import ArenaCarousel from './arean.carousel'

// markup
const Arena = () => {
  return (
    <div className="flex flex-col bg-[url('../images/stars.png')] relative z-40 mt-[79px] md:mt-[87px]">
      <ArenaCarousel />
    </div>
  )
}

export default Arena
