import React, { useEffect } from 'react'
import { useSpring, animated as anim } from 'react-spring'
import './Hooks.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function Goo () {
  const [{ pos1 }, set] = useSpring({ pos1: [0, 0], config: fast })
  const [{ pos2 }] = useSpring({ pos2: pos1, config: slow })
  const [{ pos3 }] = useSpring({ pos3: pos2, config: slow })
  useEffect(() => {
    const handler = ({ clientX, clientY }) => set({ pos1: [clientX, clientY] })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])
  return (
    <div>
      <svg >
        <filter id='goo'>
          <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='30' />
          <feColorMatrix in='blur' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7' />
        </filter>
      </svg>
      <div class='hooks-main'>
        <div class='hooks-filter'>
          <anim.div class='b1' style={{ transform: pos3.interpolate(trans) }} />
          <anim.div class='b2' style={{ transform: pos2.interpolate(trans) }} />
          <anim.div class='b3' style={{ transform: pos1.interpolate(trans) }} />
        </div>
      </div>
    </div>
  )
}
