import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGoal } from '../state/savingsSlice'

function Goal() {
  const dispatch = useDispatch()
  const goal = useSelector((state) => state.savings.goal)
  const totalSavings = useSelector((state) => state.savings.total)

  const [goalName, setGoalName] = useState(goal.name)
  const [goalAmount, setGoalAmount] = useState(goal.amount)

  const handleSetGoal = () => {
    dispatch(setGoal({ name: goalName, amount: Number(goalAmount) }))
  }

  const progress = goalAmount > 0 ? Math.min((totalSavings / goalAmount) * 100, 100) : 0

  return (
    <div className="goal">
      <h2>Cel oszczędnościowy</h2>
      <input 
        type="text" 
        value={goalName} 
        onChange={(e) => setGoalName(e.target.value)} 
        placeholder="Nazwa celu" 
      />
      <input 
        type="number" 
        value={goalAmount} 
        onChange={(e) => setGoalAmount(e.target.value)} 
        placeholder="Kwota celu (€)" 
      />
      <button onClick={handleSetGoal}>Ustaw cel</button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress.toFixed(0)}% osiągnięte ({totalSavings}€ / {goalAmount}€)</p>
    </div>
  )
}

export default Goal
