import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEntry } from '../state/savingsSlice'
import { addXP } from '../state/gameSlice'

function SavingsJournal() {
  const dispatch = useDispatch()
  const entries = useSelector((state) => state.savings.entries)
  const [amount, setAmount] = useState('')

  const handleAddEntry = () => {
    if(amount) {
      dispatch(addEntry(Number(amount)))
      dispatch(addXP(Number(amount))) // 1 XP za każdy €
      setAmount('')
    }
  }

  return (
    <div className="savings-journal">
      <h2>Dziennik oszczędności</h2>
      <div className="entry-form">
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Kwota wpłaty" 
        />
        <button onClick={handleAddEntry}>💾 Zapisz</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Kwota</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.amount}€</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SavingsJournal
