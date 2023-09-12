// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cash, cashBtn} = props
  const {value} = cash

  const clickCash = () => {
    cashBtn(value)
  }

  return (
    <li className="button-container">
      <button type="button" className="button1" onClick={clickCash}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
