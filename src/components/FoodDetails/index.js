import {Component} from 'react'
import FoodCard from '../FoodCard'

import './index.css'

class FoodDetails extends Component {
  render() {
    const {foodItem, onDecrement, onIncrement} = this.props
    const {categoryDishes} = foodItem
    return (
      <ul className="unordered-food-container">
        {categoryDishes.map(each => (
          <FoodCard
            each={each}
            key={each.dishId}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ))}
      </ul>
    )
  }
}

export default FoodDetails
