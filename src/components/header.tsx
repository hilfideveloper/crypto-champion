import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import MobileMenu from './mobile.menu'
import '../styles/style-responsive.css'


// markup
const Header = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false)

  const onHandleShowMenu = () => {
    document.body.style.overflow = isShowMobileMenu ? 'auto' : 'hidden'

    setShowMobileMenu(!isShowMobileMenu)
  }
  return (
    <div className="flex w-full z-50 justify-between items-center lg:px-[148px] md:px-[48px] px-5 py-1 md:py-0 absolute md:top-[32px] top-[9px]">
      <div
        onClick={() => {
          onHandleShowMenu()
        }}
        className="md:hidden py-4 active:opacity-75"
      >
        <div className="w-[32px]">
          <StaticImage
            placeholder="none"
            src="../images/menu.svg"
            alt="Menu"
            layout="constrained"
            width={32}
          />
        </div>
      </div>

      <div className="logo-kecil hidden md:block w-[176px] md:min-w-[136px]">
        <StaticImage
          placeholder="none"
          src="../images/logo.png"
          alt="A dinosaur"
          layout="constrained"
        />
      </div>

      <div className="text-kecil md:flex justify-center gap-[14px] md:w-full md:px-5 hidden">
        <a
          href="play.cryptochampion.game"
          target="_blank"
          rel="noopener norefferer"
          className="font-bold not-italic text-2xl text-[#0F3049] hover:cursor-pointer font-vag"
        >
          Arena
        </a>
        <a
          href="marketplace.cryptochampion.game"
          target="_blank"
          rel="noopener norefferer"
          className="font-bold not-italic text-2xl text-[#0F3049] hover:cursor-pointer font-vag"
        >
          Boutique
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener norefferer"
          className="font-bold not-italic text-2xl text-[#0F3049] hover:cursor-pointer font-vag"
        >
          Mint / Stake
        </a>
        <a
          href="https://cryptochampion.gitbook.io/whitepaper/"
          target="_blank"
          rel="noopener norefferer"
          className="font-bold not-italic text-2xl text-[#0F3049] hover:cursor-pointer font-vag"
        >
          Whitepaper 
        </a>
      </div>

      <div className="text-responsive button_hover lg:w-[430px] md:w-[360px] md:h-[50px] w-[200px] h-[48px] p-[4px] rounded-xl bg-gradient-to-b from-[#53EA9A] to-[#116638] flex justify-center items-center hover:cursor-pointer relative">
        <div className="w-full h-full rounded-xl bg-[#46C883] flex items-center justify-center">
          <div className="md:w-[45px] md:h-[45px] w-[23px] h-[21px] md:absolute md:left-[15px] md:mr-0 mr-[11px]">
            <svg
              className="w-full h-full"
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8014 0.298828L13.1519 6.72293L14.7514 2.9328L21.8014 0.298828Z"
                fill="#E2761B"
                stroke="#E2761B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.83398 0.298828L10.4139 6.78378L8.89267 2.9328L1.83398 0.298828Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.6899 15.1899L16.3862 18.7192L21.3151 20.0753L22.7321 15.2681L18.6899 15.1899Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.921387 15.2681L2.32965 20.0753L7.25856 18.7192L4.95492 15.1899L0.921387 15.2681Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.98042 9.22651L5.60693 11.3041L10.5011 11.5215L10.3272 6.26221L6.98042 9.22651Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6561 9.22644L13.2658 6.20129L13.1528 11.5214L18.0383 11.3041L16.6561 9.22644Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.25879 18.7192L10.197 17.2849L7.65867 15.3029L7.25879 18.7192Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.4395 17.2849L16.3864 18.7192L15.9778 15.3029L13.4395 17.2849Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.3859 18.7193L13.439 17.2849L13.6737 19.2061L13.6476 20.0145L16.3859 18.7193Z"
                fill="#D7C1B3"
                stroke="#D7C1B3"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.2583 18.7193L9.99658 20.0145L9.9792 19.2061L10.1965 17.2849L7.2583 18.7193Z"
                fill="#D7C1B3"
                stroke="#D7C1B3"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0403 14.0337L7.58887 13.3122L9.31877 12.5211L10.0403 14.0337Z"
                fill="#233447"
                stroke="#233447"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5957 14.0337L14.3172 12.5211L16.0558 13.3122L13.5957 14.0337Z"
                fill="#233447"
                stroke="#233447"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.25823 18.7192L7.67549 15.1898L4.95459 15.2681L7.25823 18.7192Z"
                fill="#CD6116"
                stroke="#CD6116"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9688 15.1898L16.386 18.7192L18.6896 15.2681L15.9688 15.1898Z"
                fill="#CD6116"
                stroke="#CD6116"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0378 11.3041L13.1523 11.5214L13.6044 14.0337L14.3259 12.5211L16.0645 13.3122L18.0378 11.3041Z"
                fill="#CD6116"
                stroke="#CD6116"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.58844 13.3122L9.32703 12.5211L10.0399 14.0337L10.5006 11.5214L5.60645 11.3041L7.58844 13.3122Z"
                fill="#CD6116"
                stroke="#CD6116"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.60693 11.3041L7.65847 15.3028L7.58893 13.3122L5.60693 11.3041Z"
                fill="#E4751F"
                stroke="#E4751F"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0645 13.3122L15.9775 15.3028L18.0378 11.3041L16.0645 13.3122Z"
                fill="#E4751F"
                stroke="#E4751F"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5013 11.5214L10.0405 14.0336L10.6143 16.9979L10.7447 13.0948L10.5013 11.5214Z"
                fill="#E4751F"
                stroke="#E4751F"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.1527 11.5214L12.918 13.0861L13.0223 16.9979L13.6047 14.0336L13.1527 11.5214Z"
                fill="#E4751F"
                stroke="#E4751F"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6044 14.0338L13.022 16.9981L13.4392 17.2849L15.9776 15.3029L16.0645 13.3123L13.6044 14.0338Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.58887 13.3123L7.65841 15.3029L10.1968 17.2849L10.614 16.9981L10.0403 14.0338L7.58887 13.3123Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6476 20.0145L13.6737 19.206L13.4564 19.0148H10.1791L9.9792 19.206L9.99658 20.0145L7.2583 18.7192L8.21453 19.5016L10.1531 20.849H13.4825L15.4297 19.5016L16.3859 18.7192L13.6476 20.0145Z"
                fill="#C0AD9E"
                stroke="#C0AD9E"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.4393 17.2849L13.022 16.998H10.6141L10.1968 17.2849L9.97949 19.2061L10.1794 19.0148H13.4567L13.674 19.2061L13.4393 17.2849Z"
                fill="#161616"
                stroke="#161616"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.1667 7.14019L22.9056 3.59346L21.8016 0.298828L13.439 6.5056L16.6554 9.2265L21.2018 10.5565L22.2102 9.38297L21.7755 9.07003L22.471 8.43544L21.932 8.01818L22.6274 7.48791L22.1667 7.14019Z"
                fill="#763D16"
                stroke="#763D16"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.73877 3.59346L1.47767 7.14019L1.00825 7.48791L1.70369 8.01818L1.17342 8.43544L1.86885 9.07003L1.43421 9.38297L2.4339 10.5565L6.98032 9.2265L10.1967 6.5056L1.83408 0.298828L0.73877 3.59346Z"
                fill="#763D16"
                stroke="#763D16"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.202 10.5565L16.6556 9.22644L18.0378 11.3041L15.9775 15.3028L18.6897 15.2681H22.732L21.202 10.5565Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.98038 9.22644L2.43396 10.5565L0.921387 15.2681H4.95492L7.65843 15.3028L5.60689 11.3041L6.98038 9.22644Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.1521 11.5215L13.439 6.50567L14.7603 2.93286H8.89258L10.1965 6.50567L10.5008 11.5215L10.6051 13.1036L10.6138 16.9981H13.0217L13.0391 13.1036L13.1521 11.5215Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-width="0.0869296"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span
            className="font-bold not-italic text-base md:text-2xl text-[#0C572F] font-vag relative top-[-2px] md:right-[-5px]"
            style={{
              textShadow:
                '2px 0 0 #53EA9A, -2px 0 0 #53EA9A, 0 2px 0 #53EA9A, 0 -2px 0 #53EA9A, 1px 1px #53EA9A, -1px -1px 0 #53EA9A, 1px -1px 0 #53EA9A, -1px 1px 0 #53EA9A',
            }}
          >
            Connect wallet
          </span>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen transition-all duration-100 ease-linear delay-0 z-10 ${
          isShowMobileMenu ? 'w-full' : ' w-0'
        }`}
      >
        <MobileMenu
          onCloseClick={onHandleShowMenu}
          isShowMobileMenu={isShowMobileMenu}
        />
      </div>
    </div>
  )
}

export default Header
