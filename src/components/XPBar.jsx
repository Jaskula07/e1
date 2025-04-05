import React from 'react'
import { useSelector } from 'react-redux'
import { calculateLevel } from '../utils/levelUtils'

function XPBar() {
  const xp = useSelector((state) => state.game.xp)
  const level = calculateLevel(xp)
  const progressToNextLevel = xp % 100

  return (
    <div className="xp-bar">
      <h2>XP: {xp} | Poziom: {level}</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressToNextLevel}%` }}></div>
      </div>
      <p>{progressToNextLevel} XP do kolejnego poziomu</p>
    </div>
  )
}

export default XPBar
