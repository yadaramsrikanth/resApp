import './index.css'

const FoodItem = props => {
  const {eachItem} = props
  const {menuCategory, menuCategoryId} = eachItem

  return (
    <>
      <li>
        <button type="button" className="food-item-button">
          {menuCategory}
        </button>
      </li>
    </>
  )
}

export default FoodItem
