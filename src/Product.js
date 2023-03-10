import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";

function Product(props) {
    let params = useParams()
    let navigate = useNavigate()

    let { getProduct, deleteProduct } = useContext(ProductContext)
    let product = getProduct(params.productId)
    if (product === undefined) { return <p>Product Not Found</p> }

    let { id, productName, description, price } = product

    function handleDeleteProduct(id) {
        deleteProduct(id)
        navigate('/products')
    }

    return (
        <Card className="align-self-start w-25">
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}