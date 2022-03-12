import React, { useState } from 'react'
import MagIdle from './mag.idle'
import { Stage } from '@inlet/react-pixi'
import MagAttack from './mag.attack'

const Grandpa = () => {
  const [attack, setAttack] = useState(false)
  return (
    <div className="right-[250px] absolute">
      <Stage
        style={{
          transform: 'scaleX(-1)',
          position: 'absolute',
          bottom: 0,
          right: 0,
          display: attack ? 'block' : 'none',
        }}
        width={1200}
        height={600}
        options={{ backgroundAlpha: 0 }}
      >
        <MagAttack attack={attack} setAttack={setAttack} />
      </Stage>
      <Stage
        style={{
          transform: 'scaleX(-1)',
          position: 'absolute',
          bottom: 0,
          right: 0,
          display: !attack ? 'block' : 'none',
        }}
        width={1100}
        height={600}
        options={{ backgroundAlpha: 0 }}
      >
        <MagIdle attack={attack} setAttack={setAttack} />
      </Stage>
    </div>
  )
}

export default Grandpa
