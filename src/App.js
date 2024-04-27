import {Component} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import FoodItem from './components/FoodItem'
import FoodDetails from './components/FoodDetails'

import './App.css'

// write your code here

class App extends Component {
  state = {
    resname: '',
    restaurantItemsList: [],
    count: 0,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    const urlData = await fetch(
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc',
    )

    if (urlData.ok) {
      const responseData = await urlData.json()

      const array = responseData.map(each => ({
        restaurantName: each.restaurant_name,
        tableMenuList: each.table_menu_list,
      }))
      const totalDetails = array[0]
      const {restaurantName, tableMenuList} = totalDetails

      const formatData = tableMenuList.map(each => ({
        categoryDishes: each.category_dishes.map(each1 => ({
          dishId: each1.dish_id,
          dishName: each1.dish_name,
          dishAvailability: each1.dish_Availability,
          dishType: each1.dish_Type,
          dishCalories: each1.dish_calories,
          dishImage: each1.dish_image,
          dishPrice: each1.dish_price,
          dishDescription: each1.dish_description,
          nexturl: each1.nexturl,
          addonCat: each1.addonCat,
        })),
        menuCategory: each.menu_category,
        menuCategoryId: each.menu_category_id,
        menuCategoryImage: each.menu_category_image,
      }))

      this.setState({
        resname: restaurantName,
        restaurantItemsList: formatData,
      })
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }))
    }
  }

  renderRestauarantDetails = () => {
    const {resname, restaurantItemsList, count} = this.state
    //   console.log(restaurantItemsList)
    return (
      <>
        <div className="bg-container">
          <h1>{resname}</h1>
          <div className="cart-container">
            <p className="my-orders">My Orders</p>
            <FaShoppingCart size={25} />
            <p className="count">{count}</p>
          </div>
        </div>
        <ul className="unordered-list-heading-container">
          {restaurantItemsList.map(eachItem => (
            <FoodItem eachItem={eachItem} key={eachItem.menuCategoryId} />
          ))}
        </ul>
        <ul>
          {restaurantItemsList.map(foodItem => (
            <FoodDetails
              foodItem={foodItem}
              key={foodItem.menuCategoryId}
              onDecrement={this.onDecrement}
              onIncrement={this.onIncrement}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    return (
      <div className="restaurant-main-container">
        {this.renderRestauarantDetails()}
      </div>
    )
  }
}

export default App
