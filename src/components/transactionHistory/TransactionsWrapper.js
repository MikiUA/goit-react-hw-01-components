import React from 'react'
import TransactionHistory from './TransactionHistory'
import transactions from './transactions.json'

export default function TransactionsWrapper() {
  return (
    <div  className='task-wrapper'>
    <TransactionHistory items={transactions}/>
    </div>
  )
}
