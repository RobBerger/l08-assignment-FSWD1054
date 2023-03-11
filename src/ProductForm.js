import { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
import { ProductContext } from './ProductContext'

function ProductForm() {
  let [ product, setProduct ] = useState({
    productName: "",
    description: "",
    price: ""
  })

  let { addProduct } = useContext(ProductContext)
  let navigate = useNavigate()
  let { productName, description, price } = contact

  function handleChange(event) {
    setProduct((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
  }

  function handleSubmit(event) {
    event.preventDefault()
    addProduct(product)
      .then((product) =>
        navigate(`/procuct/${product.id}`)
      )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="productName" value={productName} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Discription</Form.Label>
        <Form.Control type="text" name="description" value={description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" value={price} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  )
}

export default ProductForm