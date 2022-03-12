import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { StaticImage } from 'gatsby-plugin-image'

const Documentation = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    variableWidth: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="flex flex-col items-center md:pb-[21px] pb-[130px] md:pt-[136px] pt-[150px] relative">
      <div className="w-full h-full md:h-[200%] top-0 absolute bg-contain bg-[url('../images/bg_documentation.png')]" />

      <h4 className="font-vag not-italic font-bold text-[32px] md:text-[64px] text-white">
        Documentation
      </h4>

      <div className="inti md:w-auto w-[90%] relative flex flex-col gap-[20px] md:mt-[40px] mt-[52px]">
        <div className="buku w-[624px] z-30 relative md:block hidden top-[40px] pointer-events-none select-none">
          <StaticImage
            placeholder="none"
            src="../images/book.png"
            alt="cloud"
          />
        </div>

        <div className="buku-anom will-change-transform	 md:w-[531px] md:h-auto h-[77px] md:absolute flex justify-center items-center relative md:top-[50px] md:left-[-280px] hover:scale-105 transition-all">
          <div className="kotok flex flex-col w-full h-full items-center justify-center absolute z-50">
            <h4
              style={{
                textShadow:
                  '2px 0 0 #E8BB85, -2px 0 0 #E8BB85, 0 2px 0 #E8BB85, 0 -2px 0 #E8BB85, 1px 1px #E8BB85, -1px -1px 0 #E8BB85, 1px -1px 0 #E8BB85, -1px 1px 0 #E8BB85',
              }}
              className="font-vag font-bold not-italic text-[22px] md:text-4xl text-[#543712] z-50 mt-[-10px]"
            >
              Liquidity Lock
            </h4>
            <p className="font-vag font-bold not-italic text-sm md:text-lg text-[#78572D] z-50 md:mt-[2px]">
              Benefits of a technology
            </p>
          </div>
          <div className="w-full dilebuan">
            <StaticImage
              placeholder="none"
              src="../images/bg_doc_1.png"
              alt="cloud"
              layout="constrained"
            ></StaticImage>
          </div>
        </div>

        <div className="buku-anom  will-change-transform	 md:h-auto h-[77px] md:absolute relative md:top-[235px] md:left-[-288px] hover:scale-105 transition-all">
          <div className="flex flex-col w-full h-full items-center justify-center absolute z-50">
            <h4
              style={{
                textShadow:
                  '2px 0 0 #E8BB85, -2px 0 0 #E8BB85, 0 2px 0 #E8BB85, 0 -2px 0 #E8BB85, 1px 1px #E8BB85, -1px -1px 0 #E8BB85, 1px -1px 0 #E8BB85, -1px 1px 0 #E8BB85',
              }}
              className="kotok font-vag font-bold not-italic text-[22px] md:text-4xl text-[#543712] z-50 mt-[-10px]"
            >
              Bestiary
            </h4>
            <p className="kotok font-vag font-bold not-italic text-sm md:text-lg text-[#78572D] z-50 md:mt-[2px]">
              CryptoChampion Encyclopedia
            </p>
          </div>
          <div className="w-full dilebuan">
            <StaticImage
              placeholder="none"
              src="../images/bg_doc_1.png"
              alt="cloud"
              layout="constrained"
            ></StaticImage>
          </div>
        </div>

        <div className="buku-anom  will-change-transform	 md:h-auto h-[77px] md:absolute relative md:top-[50px] md:right-[-350px] hover:scale-105 transition-all">
          <div className="flex flex-col w-full h-full items-center justify-center absolute z-50">
            <h4
              style={{
                textShadow:
                  '2px 0 0 #E8BB85, -2px 0 0 #E8BB85, 0 2px 0 #E8BB85, 0 -2px 0 #E8BB85, 1px 1px #E8BB85, -1px -1px 0 #E8BB85, 1px -1px 0 #E8BB85, -1px 1px 0 #E8BB85',
              }}
              className="catatan-anom font-vag font-bold not-italic text-[22px] md:text-4xl text-[#543712] z-50 mt-[-10px]"
            >
              Contract audit
            </h4>
            <p className="catatan-anom font-vag font-bold not-italic text-sm md:text-lg text-[#78572D] z-50 md:mt-[2px]">
              Certic audit
            </p>
          </div>
          <div className="w-full">
            <StaticImage
              placeholder="none"
              src="../images/bg_doc_2.png"
              alt="cloud"
              layout="constrained"
            ></StaticImage>
          </div>
        </div>

        <div className="buku-anom  will-change-transform	 md:h-auto h-[77px] md:absolute relative md:top-[235px] md:right-[-370px] z-40 hover:scale-105 transition-all">
          <a href="https://cryptochampion.gitbook.io/whitepaper/">
          <div className="flex flex-col w-full h-full items-center justify-center absolute z-50">
            <h4
              style={{
                textShadow:
                  '2px 0 0 #E8BB85, -2px 0 0 #E8BB85, 0 2px 0 #E8BB85, 0 -2px 0 #E8BB85, 1px 1px #E8BB85, -1px -1px 0 #E8BB85, 1px -1px 0 #E8BB85, -1px 1px 0 #E8BB85',
              }}
              className="catatan-anom font-vag font-bold not-italic text-[22px] md:text-4xl text-[#543712] z-50 mt-[-10px]"
            >
              Whitepaper
            </h4>
            <p className="catatan-anom font-vag font-bold not-italic text-sm md:text-lg text-[#78572D] z-50 md:mt-[2px]">
              How to CryptoChampion
            </p>
          </div>
          <div className="w-full">
            <StaticImage
              placeholder="none"
              src="../images/bg_doc_2.png"
              alt="cloud"
              layout="constrained"
            ></StaticImage>
          </div>
          </a>
        </div>

        <div className="will-change-transform	 md:h-auto h-[77px] md:absolute relative md:top-[385px] md:right-[60px] z-40 hover:scale-105 transition-all">
          <div className="flex flex-col w-full h-full items-center justify-center absolute z-50">
            <h4
              style={{
                textShadow:
                  '2px 0 0 #E8BB85, -2px 0 0 #E8BB85, 0 2px 0 #E8BB85, 0 -2px 0 #E8BB85, 1px 1px #E8BB85, -1px -1px 0 #E8BB85, 1px -1px 0 #E8BB85, -1px 1px 0 #E8BB85',
              }}
              className="font-vag font-bold not-italic text-[22px] md:text-4xl text-[#543712] z-50 mt-[-10px]"
            >
              Team token lock
            </h4>
            <p className="font-vag font-bold not-italic text-sm md:text-lg text-[#78572D] z-50 md:mt-[2px]">
              Benefits of a technology
            </p>
          </div>
          <div className="w-full">
            <StaticImage
              placeholder="none"
              src="../images/bg_doc_3.png"
              alt="cloud"
              layout="constrained"
            ></StaticImage>
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-[64px] md:mt-[30px] md:px-[140px] docsSlider">
        <Slider {...settings}>
          <a
            href="https://unity.com"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:w-auto !w-[170px] !flex justify-center items-center md:pl-[0] pl-[20px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/unity.png"
              alt="binance"
            />
          </a>
          <a
            href="https://pancakeswap.finance/"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:!w-[300px] md:w-auto !w-[335px] !flex justify-center items-center md:pl-[64px] pl-[32px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/pancake.svg"
              alt="pancake"
            />
          </a>
          <a
            href="https://uniswap.org/"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:!w-[280px] md:w-auto !w-[310px] !flex justify-center items-center md:pl-[64px] pl-[32px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/uniswap.png"
              alt="opensea"
            />
          </a>
          <a
            href="https://opensea.io/"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:!w-[235px] md:w-auto !w-[235px] !flex justify-center items-center md:pl-[64px] pl-[32px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/opensea.svg"
              alt="opensea"
            />
          </a>
          <a
            href="https://royaldsgn.com/"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:w-auto !w-[230px] !flex justify-center items-center md:pl-[64px] pl-[32px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/royal.svg"
              alt="royal"
            />
          </a>
          <a
            href="https://chain.link/"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:!w-[180px] md:w-auto !w-[190px] !flex justify-center items-center md:pl-[64px] pl-[32px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/chainlink.png"
              alt="chainlink"
            />
          </a>
          <a
            href="https://app.1inch.io/"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:!w-[180px] md:w-auto !w-[190px] !flex justify-center items-center md:pl-[64px] pl-[32px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/1inch.png"
              alt="1inch"
            />
          </a>
          <a
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:!w-[200px] md:w-auto !w-[220px] !flex justify-center items-center md:pl-[64px] pl-[32px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/coingecko.png"
              alt="coingecko"
            />
          </a>
          <a
            href="https://coinmarketcap.com/"
            target="_blank"
            rel="noopener norefferer"
            className="md:box-content md:h-[80px] h-[40px] md:!w-[290px] md:w-auto !w-[330px] !flex justify-center items-center md:pl-[64px] pl-[32px] select-none partner"
          >
            <StaticImage
              placeholder="none"
              src="../images/coinmarketcap.png"
              alt="coinmarketcap"
            />
          </a>
        </Slider>
      </div>
    </div>
  )
}

export default Documentation
