import React from 'react'
import {
  StaticImage,
  GatsbyImage,
  getImage,
  withArtDirection,
} from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

interface GamePlayItemProps {
  personImg: string
  bgImg: string
  title: string
  content: string
}
const GamePlayItem = React.forwardRef<HTMLInputElement, GamePlayItemProps>(
  ({ personImg, bgImg, title, content }, ref) => {
    // const personImgs = personImg
    // const personImgs = withArtDirection(getImage(pageQuery.file), [
    //   {
    //     media: '(max-width: 1024px)',
    //     image: getImage(pageQuery.file),
    //   },
    // ])
    const data = useStaticQuery(graphql`
      query {
        placeholderImage: file(relativePath: { eq: "../images/person_1.png" }) {
          childImageSharp {
            fluid(maxWidth: 750, grayscale: true) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[276px] h-[212px] z-10">
            <StaticImage
              placeholder="none"
              src="../images/person_1.png"
              alt="gallery"
              layout="fullWidth"
            />
          </div>
          <div className="w-[204px] h-[152px] mt-[-24px] ">
            <StaticImage
              placeholder="none"
              src="../images/bg_person_1.png"
              alt="gallery"
              layout="fullWidth"
            />
          </div>
        </div>

        <div className="flex flex-col max-w-[410px]">
          <h4 className="font-vag not-italic font-bold text-white text-4xl ">
            {title}
          </h4>
          <text className="font-vag font-bold not-italic text-lg text-[#ABABAB] pr-[120px] mt-[2px]">
            {content}
          </text>
        </div>
      </div>
    )
  },
)

export default GamePlayItem
