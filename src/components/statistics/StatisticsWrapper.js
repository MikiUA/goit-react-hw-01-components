import React from 'react'
import data from './data.json'
import Statistics from './Statistics'

export default function StatisticsWrapper() {
  return (
    <>
    <div className='task-wrapper'>
    <Statistics stats={data}/>
    </div>
    <div className='task-wrapper'>
    <Statistics title="Upload Stats" stats={data}/>
    </div>
    </>
  )
}
