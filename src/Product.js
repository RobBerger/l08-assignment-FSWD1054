import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from './ProductContext'
import { useContext, useState, useEffect } from 'react'
import Spinner from "react-bootstrap/Spinner";

function Product(props) {

  let params = useParams()
  let navigate = useNavigate()

  let { getProduct, deleteProduct } = useContext(ProductContext)
  let [ product, setProduct ] = useState()

  useEffect(() => {
    async function fetch() {
        await getProduct(params.productId)
            .then((product) => setProduct(product))
    }
    fetch()
  }, [params.productId]);

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  function loading() {
    return <div className="w-25 text-center"><Spinner animation="border" /></div>
  }

  function productCard() {
    let { id, productName, description, price} = product
    return (
        <Card className="align-self-start w-25">
          <Card.Body>
            <Card.Title>{productName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
            <Card.Text>
              <strong>Discription:</strong> <span>{description}</span>
            </Card.Text>
            <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
          </Card.Body>
      </Card>
      )
  }
  if (product === undefined) return loading()
  return product.id !== parseInt(params.productId) ? loading() : productCard()

}

export default Product