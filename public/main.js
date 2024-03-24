const productID = new Date()

const fetchData = async () => {
  try {
    const response = await fetch('/api/v1/products/')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

fetchData()

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: productID,
    productName: 'soffa',
    price: '$50',
  }),
}
