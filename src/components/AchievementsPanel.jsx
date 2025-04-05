import React from 'react'
import { useSelector } from 'react-redux'

function AchievementsPanel() {
  const achievements = useSelector((state) => state.game.achievements)

  return (
    <div className="achievements-panel">
      <h2>Osiągnięcia</h2>
      <ul>
        {achievements.map((ach, index) => (
          <li key={index}>
            <span role="img" aria-label="achievement">{ach.icon}</span> {ach.name} {ach.unlocked ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AchievementsPanel
