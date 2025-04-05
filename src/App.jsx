import React, { useState } from 'react'
import Goal from './components/Goal'
import XPBar from './components/XPBar'
import SavingsJournal from './components/SavingsJournal'
import StatsDashboard from './components/StatsDashboard'
import VillageMap from './components/VillageMap'
import AchievementsPanel from './components/AchievementsPanel'

function App() {
  const [showJournal, setShowJournal] = useState(false)
  const [showAchievements, setShowAchievements] = useState(false)

  return (
    <div className="app-container">
      <header>
        <h1>FinansowyQuest</h1>
      </header>
      <div className="dashboard">
        <div className="main-panel">
          <VillageMap />
        </div>
        <div className="side-panel">
          <Goal />
          <XPBar />
          <StatsDashboard />
          <div className="buttons">
            <button onClick={() => setShowJournal(true)}>📜 Dziennik oszczędności</button>
            <button onClick={() => setShowAchievements(true)}>🏆 Osiągnięcia</button>
          </div>
        </div>
      </div>
      {showJournal && (
        <div className="modal">
          <button className="close" onClick={() => setShowJournal(false)}>❌ Zamknij</button>
          <SavingsJournal />
        </div>
      )}
      {showAchievements && (
        <div className="modal">
          <button className="close" onClick={() => setShowAchievements(false)}>❌ Zamknij</button>
          <AchievementsPanel />
        </div>
      )}
    </div>
  )
}

export default App
