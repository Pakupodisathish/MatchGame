import './index.css'

const TabItem = props => {
  const {tabItemDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabItemDetails
  const clickingTabItem = () => {
    onClickTabItem(tabId)
  }
  const activeTabClassName = isActive ? 'activetab' : 'tabitem'
  return (
    <li className="tab-item">
      <button
        className={`${activeTabClassName}`}
        onClick={clickingTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
