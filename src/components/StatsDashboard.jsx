import React from 'react'
import { useSelector } from 'react-redux'

function StatsDashboard() {
  const entries = useSelector((state) => state.savings.entries)
  const totalEntries = entries.length
  const totalSaved = entries.reduce((sum, entry) => sum + entry.amount, 0)

  return (
    <div className="stats-dashboard">
      <h2>Statystyki</h2>
      <p>Liczba wpłat: {totalEntries}</p>
      <p>Łącznie zaoszczędzono: {totalSaved}€</p>
      {/* Możesz dodać dodatkowe statystyki lub prognozę daty osiągnięcia celu */}
    </div>
  )
}

export default StatsDashboard
