import { Container, AnimatedSprite, useApp } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import React, { useEffect, useState, VFC } from 'react'
import { ASSETS } from '~/constants'

export type MagAttackProps = {
  attack: boolean
  setAttack: (value: boolean) => void
}

type Frames = PIXI.Texture<PIXI.Resource>[]

const MagAttack: VFC<MagAttackProps> = ({ setAttack, attack }) => {
  const [frames, setFrames] = useState<Frames>([])
  const app = useApp()

  useEffect(() => {
    ASSETS.ATTACK.forEach((name, index) => {
      app.loader.add(name, `/animations/attack/texture-${index}.json`)
    })
    app.loader.load((_, resource) => {
      const frameKeys = ASSETS.ATTACK.reduce((keys, name) => {
        return [...keys, ...Object.keys(resource[name].data.frames)]
      }, [] as string[])
      setFrames(frameKeys.sort().map((frame) => PIXI.Texture.from(frame)))
    })
  }, [])

  if (frames.length === 0) {
    return null
  }

  return (
    <Container scale={0.65} x={0}>
      <AnimatedSprite
        loop={false}
        onComplete={() => setAttack(false)}
        initialFrame={0}
        animationSpeed={0.3}
        isPlaying={attack}
        textures={frames}
      />
    </Container>
  )
}

export default MagAttack
