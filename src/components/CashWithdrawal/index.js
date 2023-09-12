// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  cashBtn = value => {
    this.setState(prevValue => ({
      count: prevValue.count - value,
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const index = name.slice(0, 1)
    return (
      <div className="bg-con">
        <div className="card">
          <div className="card1">
            <p className="head">{index}</p>
            <p className="heading">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="digit">
              {count} <br /> <span className="rupees">In Rupees</span>
            </p>
          </div>
          <div className="card3">
            <p className="num">Withdraw</p>
            <p className="heading2">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="box-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                cash={eachItem}
                cashBtn={this.cashBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
