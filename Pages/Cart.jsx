import React from 'react';
import {useSelector , useDispatch} from "react-redux"
import { useEffect , useState} from 'react';
import {FaTrashAlt} from "react-icons/fa"
function Cart() {
    let Dispatch = useDispatch()
    let cart = useSelector(state => state.Cart)
    let Price = useSelector(state => state.PriceReducer)

let [item,SetItem] = useState([])
    useEffect(()=>{
        let items = cart.map((item)=>{
            let itemTotal = item.price * item.quantity
            return(
            <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
            <div className="d-flex flex-row">
                <img className="me-5 img-fluid rounded" alt="" src={item.image} width="100"/>

                <div className="mt-3 me-5">
                    <span className="h6 d-block me-5">{item.title}</span>
                    <span className=" text-muted me-5">Rating: {item.rating.rate} / 5</span></div>
                </div>
            <div className="d-flex flex-row align-items-center">
                <div className="input-group  ms-5" style={{maxWidth: "120px"}}>
                        <div className="input-group-prepend ">
                        <button className="btn btn-outline-primary " onClick={()=>{
                            Dispatch({type: "PRICEINC" , payload: item.price})
                            Dispatch({type: "INC" , payload: item})}} type="button">+</button>
                        </div>
                        <input type="text" className="form-control text-center" readOnly value={item.quantity} />
                        <div className="input-group-append">
                        <button className="btn btn-outline-primary "  onClick={()=>{
                            item.quantity === 1 ? Dispatch({type: "Remove_item" , payload: item}) : Dispatch({type: "DEC" , payload: item})
                            Dispatch({type: "PRICEDEC" , payload: item.price})
                            }} type="button">-</button>
                        </div>
                        </div>
                        
                
                <span className="d-block mx-3 h6">   ${Math.round(itemTotal)}</span>
                <span > <FaTrashAlt className='mx-3 ' id='trash' style={{color: "red"}} size={25} onClick={()=>{
                    Dispatch({type: "PRICEDEC" , payload: itemTotal})
                    Dispatch({type: "Remove_item" , payload: item})}} /></span>
                </div>
        </div>
            )
        })
        SetItem(items)
    },[cart , Dispatch])

return (
    <>

    <div className="container mt-5 p-3 rounded cart">
    <div className="row no-gutters">
        <div className="col-md-12">
            <div className="product-details mr-2">
                <div className="d-flex flex-row align-items-center">
                    <i className="fa fa-long-arrow-left">
                        </i><span className="ml-2 display-6">Shopping cart</span></div>
                <hr/>
                <div className="d-flex justify-content-between mb-5 h6">
                    <span>You have {item.length} items in your cart</span>

                </div>

{item}



            </div>
        </div>


 

        <div className="col-md-4 ms-auto my-5">

                <hr className="line"/>
                <div className="d-flex justify-content-between information h5"><span><strong>Total:</strong></span><h5 style={{color:"red"}}>${Math.round(Price)}</h5></div>
                <button className="btn btn-primary mt-3 w-100 text-center " type="button">Checkout</button>
            </div>
    </div>
</div>
      </>
  )
}

export default Cart;
