import './index.css'

const MoneyDetails = props => {
  const {balanceInput, incomeInput, expenseInput} = props

  return (
    <ul className="money-details-list-container">
      <li className="money-details-list-item-container balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="symbol-img"
        />
        <div className="money-details-description">
          <p className="detail-heading">Your Balance</p>
          <p className="value" data-testid="balanceAmount">
            Rs {balanceInput}
          </p>
        </div>
      </li>

      <li className="money-details-list-item-container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="symbol-img"
        />
        <div className="money-details-description">
          <p className="detail-heading">Your Income</p>
          <p className="value" data-testid="incomeAmount">
            Rs {incomeInput}
          </p>
        </div>
      </li>

      <li className="money-details-list-item-container expense">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="symbol-img"
        />
        <div className="money-details-description">
          <p className="detail-heading">Your Expenses</p>
          <p className="value" data-testid="expensesAmount">
            Rs {expenseInput}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails