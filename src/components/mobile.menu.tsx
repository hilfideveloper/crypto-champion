import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

interface MobileMenuProps {
  onCloseClick: () => void
  isShowMobileMenu: boolean
}

const MobileMenu = React.forwardRef<HTMLLIElement, MobileMenuProps>(
  ({ onCloseClick, isShowMobileMenu }) => {
    return (
      <div className="w-full h-screen bg-[#08101F] flex flex-col justify-between z-40 pb-[40px]">
        <div className={`${isShowMobileMenu ? 'block' : 'hidden'}`}>
          <div className="flex justify-between items-center px-5 pt-3 mb-[32px]">
            <div className="w-[156px] min-w-[164px]">
              <StaticImage
                placeholder="none"
                src="../images/logo.png"
                alt="A dinosaur"
                layout="constrained"
              />
            </div>
            <div
              className="min-w-[40px] active:opacity-75"
              onClick={onCloseClick}
            >
              <div className="w-[40px]">
                <StaticImage
                  placeholder="none"
                  src="../images/close.png"
                  alt="close"
                  layout="constrained"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] px-[20px] min-w-[180px]">
            <a
              href="play.cryptochampion.game"
              rel="noopener norefferer"
              target="_blank"
              className="button_hover font-vag font-bold not-italic text-[#282C34] text-base"
              style={{
                textShadow:
                  '2px 0 0 #677082, -2px 0 0 #677082, 0 2px 0 #677082, 0 -2px 0 #677082, 1px 1px #677082, -1px -1px 0 #677082, 1px -1px 0 #677082, -1px 1px 0 #677082',
              }}
            >
              <div className="w-full h-[48px] flex flex-col items-center justify-center p-[3px] rounded-[12px] bg-gradient-to-b from-[#50596B] to-[#242A35]">
                <div className="w-full h-full flex flex-col items-center justify-center rounded-[12px] bg-[#3A4456]">
                  Arena
                </div>
              </div>
            </a>
            <a
              href="marketplace.cryptochampion.game"
              rel="noopener norefferer"
              target="_blank"
              className="button_hover font-vag font-bold not-italic text-[#282C34] text-base"
              style={{
                textShadow:
                  '2px 0 0 #677082, -2px 0 0 #677082, 0 2px 0 #677082, 0 -2px 0 #677082, 1px 1px #677082, -1px -1px 0 #677082, 1px -1px 0 #677082, -1px 1px 0 #677082',
              }}
            >
              <div className="w-full h-[48px] flex flex-col items-center justify-center p-[3px] rounded-[12px] bg-gradient-to-b from-[#50596B] to-[#242A35]">
                <div className="w-full h-full flex flex-col items-center justify-center rounded-[12px] bg-[#3A4456]">
                  Boutique
                </div>
              </div>
            </a>
            <a
              href="/"
              rel="noopener norefferer"
              target="_blank"
              className="button_hover font-vag font-bold not-italic text-[#282C34] text-base"
              style={{
                textShadow:
                  '2px 0 0 #677082, -2px 0 0 #677082, 0 2px 0 #677082, 0 -2px 0 #677082, 1px 1px #677082, -1px -1px 0 #677082, 1px -1px 0 #677082, -1px 1px 0 #677082',
              }}
            >
              <div className="w-full h-[48px] flex flex-col items-center justify-center p-[3px] rounded-[12px] bg-gradient-to-b from-[#50596B] to-[#242A35]">
                <div className="w-full h-full flex flex-col items-center justify-center rounded-[12px] bg-[#3A4456]">
                Mint / Stake
                </div>
              </div>
            </a>
            <a
              href="https://cryptochampion.gitbook.io/whitepaper/"
              rel="noopener norefferer"
              target="_blank"
              className="button_hover font-vag font-bold not-italic text-[#282C34] text-base"
              style={{
                textShadow:
                  '2px 0 0 #677082, -2px 0 0 #677082, 0 2px 0 #677082, 0 -2px 0 #677082, 1px 1px #677082, -1px -1px 0 #677082, 1px -1px 0 #677082, -1px 1px 0 #677082',
              }}
            >
              <div className="w-full h-[48px] flex flex-col items-center justify-center p-[3px] rounded-[12px] bg-gradient-to-b from-[#50596B] to-[#242A35]">
                <div className="w-full h-full flex flex-col items-center justify-center rounded-[12px] bg-[#3A4456]">
                  
                Whitepaper
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          className={`flex flex-col ${isShowMobileMenu ? 'block' : 'hidden'}`}
        >
          <p className="font-vag not-italic text-[#2F4047] text-base font-bold text-center">
            contact@CryptoChampion.game
          </p>
          <p className="font-vag not-italic text-[#2F4047] text-base font-bold text-center mt-[9px]">
            © Copyright © 2021, CryptoChampion.
            <br className="md:hidden block" /> All Rights Reserved.
          </p>
        </div>
      </div>
    )
  },
)

export default MobileMenu
