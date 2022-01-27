import React from 'react';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {MyContext} from "../../App"
import { useEffect , useState} from "react"
import Image from 'react-bootstrap/Image'
import {useDispatch} from "react-redux"
import {MdArrowBack } from "react-icons/md"

function ProductDetails() {


  const Dispatch = useDispatch();

    let {getProduct , Loading } = useContext(MyContext)

    const [SingleProduct,SetSingleProduct] = useState([])   
    let  { id }  = useParams(); 
    
    
        
    useEffect(()=>{
        let String = parseFloat( id )
        let Product = getProduct(String)
        const Render =  Product.map((item) => {
          return (
            <>
            <main >
    <div className="card" key={item.id}>
      <div className="card__title">
        <div className="icon">
      <Link to="/Products"  style={{textDecoration:"none" }} >
          <div>
          <MdArrowBack size={40} />
          <span style={{ fontSize: "20px"}} >Back</span>
          </div>
        </Link>

        </div>
        <h3>Our product</h3>
      </div>
      <div className="card__body">
        <div className="half">
          <div className="featured_text" key={item.id}>
            <h5>{item.title}</h5>
            <p className="sub">{item.category}</p>
            <p className="price">${item.price}</p>
          </div>
          <div className="image">
          <Image src={item.image} />
          </div>
        </div>
        <div className="half">
          <div className="description">
            <p>{item.description}</p>
          </div>
          <span className="stock"><i className="fa fa-pen"></i> In stock ({item.rating.count})</span>
          <div className="reviews">
            <ul className="stars">
              <li>{ 
                        (item.rating.rate) <= 1 ? "⭐" : 
                        (item.rating.rate) <= 2 ? "⭐⭐" :
                        (item.rating.rate) <= 3 ? "⭐⭐⭐" :
                        (item.rating.rate) <= 4 ? "⭐⭐⭐⭐" :
                        (item.rating.rate) <= 5 ? "⭐⭐⭐⭐⭐" : null
                        }</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="recommend">
          <p>Recommended by</p>
          <h3>Andrew Palmer</h3>
        </div>
        <div className="action" >
          <button type="button"  onClick={()=>{
            Dispatch({type: "PRICEINC" , payload: item.price})
            Dispatch({type: "ADD" , payload : item})
          }
            
            }>Add to cart</button>
        </div>
      </div>
    </div>
  </main>
            </>
        )})
        SetSingleProduct(Render)
      },[id , getProduct , Loading , Dispatch])

  return (

    <>
    {SingleProduct}
    </>
  )
}

export default ProductDetails;
