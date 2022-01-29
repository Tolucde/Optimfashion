import React, { useState, useContext, useEffect } from 'react'
// import { menu } from './data'
import { commerce } from './lib/commerce'
const AppContext = React.createContext()
// const allCategories = ['all', ...new Set(menu.map((men) => men.category))]
const steps = ['Shipping address', 'Payment details']

const AppProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0)
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [shippingData, setShippingData] = useState({})
  const [shopItems, setshopItems] = useState([])
  const [sortedshopItems, setSortedshopItems] = useState([])
  const [loading, setLoading] = useState(true)
  // const [menuItems, setMenuItems] = useState(menu)
  // const [categories, setCategories] = useState(allCategories)
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }

  // await commerce retrieve sends a cart response
  const fetchCart = async () => {
    setShoppingCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity)
    setShoppingCart(response.cart)
  }
  const updateQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity })
    setShoppingCart(response.cart)
  }
  const removeItem = async (productId) => {
    const response = await commerce.cart.remove(productId)
    setShoppingCart(response.cart)
  }

  const emptyCart = async () => {
    const response = await commerce.cart.empty()
    setShoppingCart(response.cart)
  }

  const nextStep = () => setActiveStep((preActiveStep) => preActiveStep + 1)

  const backStep = () => setActiveStep((preActiveStep) => preActiveStep - 1)
  // const next = (data) => {
  //   setShippingData(data)
  //   nextStep()
  // }
  const test = (data) => {
    setShippingData(data)

    nextStep()
  }

  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     setMenuItems(menu)
  //     return
  //   }

  //   const newMenu = menu.filter((item) => item.category === category)
  //   setMenuItems(newMenu)
  // }
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh()

    setShoppingCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      )

      setOrder(incomingOrder)

      refreshCart()
    } catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }

  useEffect(() => {
    setLoading(false)
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <AppContext.Provider
      value={{
        shoppingCart,
        error: errorMessage,
        test,
        loading,
        shopItems,
        nextStep,
        backStep,
        handleCaptureCheckout,
        activeStep,
        setActiveStep,

        fetchProducts,
        products,
        steps,
        removeItem,
        updateQty,
        setShippingData,
        shippingData,
        order,

        emptyCart,
        setProducts,
        setshopItems,
        sortedshopItems,
        setSortedshopItems,
        // filterItems,
        handleAddToCart,
        // categories,
        // menuItems,
      }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
