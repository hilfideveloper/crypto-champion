import { Container, AnimatedSprite, useApp } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'
import React, { useEffect, useState, VFC } from 'react'
import { ASSETS } from '~/constants'

export type MagIdleProps = {
  attack: boolean
  setAttack: (value: boolean) => void
}

const MagIdle: VFC<MagIdleProps> = ({ setAttack, attack }) => {
  const [frames, setFrames] = useState<PIXI.Texture<PIXI.Resource>[]>([])
  const app = useApp()

  useEffect(() => {
    app.loader
      .add(ASSETS.IDLE, '/animations/idle/idle.json')
      .load((_, resource) => {
        if (resource[ASSETS.IDLE]) {
          const list = resource[ASSETS.IDLE].data.frames

          const frames = Object.keys(list)
            .sort()
            .map((frame) => PIXI.Texture.from(frame))
          setFrames(frames)
        }
      })
  }, [])

  if (frames.length === 0) {
    return null
  }

  return (
    <Container scale={0.65} x={0} y={0}>
      <AnimatedSprite
        loop={true}
        onLoop={() => {
          if (Math.random() > 0.8) {
            setAttack(true)
          }
        }}
        animationSpeed={0.3}
        isPlaying={!attack}
        textures={frames}
      />
    </Container>
  )
}

export default MagIdle
