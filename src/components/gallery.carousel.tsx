import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MagicSliderDots from 'react-magic-slider-dots'
import 'react-magic-slider-dots/dist/magic-dots.css'

// markup
const GalleryCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots: any) => {
      return (
        <MagicSliderDots
          dotContainerClassName="!mt-[32px] magic-dots slick-dots"
          dots={dots}
          numDotsToShow={4}
          dotWidth={18}
        />
      )
    },
  }

  return (
    <Slider {...settings}>
      <div className="!w-[272px] h-[272px] ml-[20px]">
        <StaticImage
          placeholder="none"
          src="../images/gallery_1.png"
          alt="gallery"
          layout="constrained"
        />
      </div>
      <div className="!w-[272px] h-[272px] ml-[20px]">
        <StaticImage
          placeholder="none"
          src="../images/gallery_2.png"
          alt="galleryss"
          layout="constrained"
        />
      </div>
      <div className="!w-[272px] h-[272px] ml-[20px]">
        <StaticImage
          placeholder="none"
          src="../images/gallery_3.png"
          alt="gallerye"
          layout="constrained"
        />
      </div>
      <div className="!w-[272px] h-[272px] ml-[20px]">
        <StaticImage
          placeholder="none"
          src="../images/gallery_4.png"
          alt="gallerdy"
          layout="constrained"
        />
      </div>
    </Slider>
  )
}

export default GalleryCarousel
