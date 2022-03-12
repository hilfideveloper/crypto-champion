import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-[1fr_1fr_1fr] justify-start md:justify-between items-center px-0 md:px-[227px] bg-[#111217] py-[32px] relative z-30">
      <div className="md:w-[220px] w-[158px]">
        <StaticImage
          placeholder="none"
          src="../images/logo.png"
          alt="A dinosaur"
        />
      </div>

      <div className="hidden md:flex justify-center items-center hover:cursor-pointer gap-[20px]">
        <a
          href="play.cryptochampion.game"
          target="_blank"
          rel="noopener norefferer"
          className="font-bold not-italic text-base text-white hover:cursor-pointer font-vag"
        >
          Arena
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener norefferer"
          className="font-bold not-italic text-base text-white hover:cursor-pointer font-vag"
        >
          Boutique
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener norefferer"
          className="font-bold not-italic text-base text-white hover:cursor-pointer font-vag"
        >
          Mint / Stake
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener norefferer"
          className="font-bold not-italic text-base text-white hover:cursor-pointer font-vag"
        >
          Whitepaper
        </a>
      </div>

      <div className="flex flex-col justify-center items-center md:items-end hover:cursor-pointer">
        <p className="font-vag not-italic text-[#2F4047] md:text-base text-sm font-bold text-center md:text-right md:mt-0 mt-[21px]">
          contact@CryptoChampion.game
        </p>
        <p className="font-vag not-italic text-[#2F4047] md:text-base text-sm font-bold text-center md:text-right md:mt-0 mt-[12px]">
          © Copyright © 2021, CryptoChampion.
          <br className="md:hidden block" />{' '}
          <span className="whitespace-nowrap">All Rights Reserved.</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
