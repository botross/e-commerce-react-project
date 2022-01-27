import React from 'react';
import { Card  , Button  , ButtonGroup } from 'react-bootstrap';
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"


function Product({products}) {
  const Dispatch = useDispatch();
  

return (

    <>
    
    <div className="col-lg-4" ey={products.id}>
<Card  className="p-2 m-3"  key={products.id}>
  <div className='container' height={"50px"} width={"100%"} >
              <Card.Img variant="top" src={products.image}  width={"100%"} className='itmimg p-5' />
  </div>
                  <Card.Body>
                    <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                    {products.price}$
                    </Card.Text>
                    <Card.Text>
                    {products.category}
                    </Card.Text>
                  </Card.Body> 
                  <ButtonGroup>
  <Button as={Link} to={`/Products/${ products.id }`} variant="primary">More Details</Button>
  <Button onClick={()=>{
    Dispatch({type: "PRICEINC" , payload: products.price})
    Dispatch({type: "ADD" , payload: products})}} variant="success">Add to cart</Button>
  </ButtonGroup>
          </Card>
</div>
    </>
)}

export default Product;
