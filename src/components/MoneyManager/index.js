import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransectionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

function  MoneyManager () {

    const [titleInput,setTitleInput]=useState('');
    const [amountInput,setAmountInput]=useState('');
    const [typeInput,setTypeInput]=useState('INCOME');
    const [balanceInput,setBalanceInput]=useState(0);
    const [incomeInput,setIncomeInput]=useState(0);
    const [expenseInput,setExpenseInput]=useState(0);
    const [transactionsList,setTransactionsList]=useState([]);



 const deleteTransaction = transactionId => {

    const filteredTransactionList = transactionsList.filter(
      eachTransaction => eachTransaction.id !== transactionId,
    )

        setTransactionsList(filteredTransactionList)
    
  }

 const addTransaction = event => {
    event.preventDefault()


    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: typeInput,
    }

    let incomeUpdate = incomeInput
    let expenseUpdate = expenseInput
    let balanceUpdate = balanceInput
    if (typeInput === 'INCOME') {
      balanceUpdate += amountInput
      incomeUpdate += amountInput
      expenseUpdate += 0
    } else {
      balanceUpdate -= amountInput
      expenseUpdate += amountInput
      incomeUpdate += 0
    }

      setTransactionsList([...transactionsList, newTransaction])
      setTitleInput('')
      setAmountInput('')
      setTypeInput('INCOME')
      setBalanceInput(balanceUpdate)
      setIncomeInput(incomeUpdate)
      setExpenseInput(expenseUpdate)

    
  }




  const onChangeTitleValue = event => {
      setTitleInput(event.target.value)
    
    
  }
  

 const onChangeAmountValue = event => {
      setAmountInput(parseInt(event.target.value))
  }

 const onChangeTypeValue = event => {
    console.log(event.target.value)
      setTypeInput(event.target.value)
  }
    return (
      <div className="app-container-3">
        <div className="money-manager-container">
          <div className="greetings-container">
            <h1 className="greeting-heading">Hi,Richard</h1>
            <p className="welcome-description">
              Welcome back to your{' '}
              <span className="money-manager-heading">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceInput={balanceInput}
            incomeInput={incomeInput}
            expenseInput={expenseInput}
          />
          <div className="add-transaction-and-history-container">
            <form className="form" onSubmit={addTransaction}>
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="input-text"
                placeholder="TITLE"
                onChange={onChangeTitleValue}
                value={titleInput}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="input-text"
                placeholder="AMOUNT"
                onChange={onChangeAmountValue}
                value={amountInput}
              />
              <label htmlFor="type" className="label">
                TYPE
              </label>
              <select
                className="dropdown-list"
                onChange={onChangeTypeValue}
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="form-add-btn">
                Add
              </button>
            </form>
            <div className="transaction-history-container">
              <h1 className="history-heading">History</h1>
              <ul className="transaction-list">
                <li className="headings-container">
                  <p className="columns-headings">Title</p>
                  <p className="columns-headings">Amount</p>
                  <p className="columns-headings">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetails={eachTransaction}
                    key={eachTransaction.id}
                    deleteTransaction={deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )

}

export default MoneyManager