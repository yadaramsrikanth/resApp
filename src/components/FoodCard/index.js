import './index.css'

const FoodCard = props => {
  const {each, onDecrement, onIncrement} = props
  const {
    dishId,
    dishName,
    dishAvailability,
    dishType,
    dishCalories,
    dishImage,
    dishPrice,
    dishDescription,
  } = each

  const onClickminusButton = () => {
    onDecrement()
  }

  const onClickPlusButton = () => {
    onIncrement()
  }

  return (
    <li className="food-item-card">
      <div className="item-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <div className="currency-container">
          <p className="sar">SAR</p>
          <p className="sar">{dishPrice}</p>
        </div>
        <p className="description">{dishDescription}</p>
        {dishAvailability ? (
          <div className="button-container">
            <button
              className="minus"
              type="button"
              onClick={onClickminusButton}
            >
              -
            </button>
            <p className="value">0</p>
            <button className="minus" type="button" onClick={onClickPlusButton}>
              +
            </button>
          </div>
        ) : (
          <p className="not-available">Not available</p>
        )}
      </div>
      <p className="calories">{`${dishCalories} calories`}</p>
      <img src={dishImage} alt={dishName} className="dish-image" />
    </li>
  )
}

export default FoodCard
