import React from 'react';
import { useContext } from 'react';
import {MyContext} from "../../App"
import { useState , useEffect} from "react"
import {Form} from 'react-bootstrap';
import Product from "./Product"
import Slider from '../../Components/Slider';


function AllProducts() {
let {Allproducts , getCatg , Search  , SortingProducts } = useContext(MyContext)
const [search,setSearch] = useState([])   
const [UniqeCategories,setUniqeCategories] = useState([])   

useEffect(()=> {
    let UniqeCategories = [...new Set(Allproducts.map((catg) => catg.category ))]
    setUniqeCategories(UniqeCategories)
    
    let Searchee = SortingProducts.map((item)=> item)
    setSearch(Searchee)
},[SortingProducts, getCatg,Allproducts])

useEffect(()=>{
    getCatg("all")
},[Allproducts])

return (
<>
<Slider />
<div className="container mt-5">
    <div className="row">
            <div className="col-lg-4 ">
                    <div className="p-4 border ">
                            <h5>CATEGORIES</h5>
                    <div className='mt-2' > 
                    <button value={"all"} className='ctg' onClick={(e)=>{
                        console.log(e.target.value)
                        getCatg(e.target.value)}} > All </button>
                    {UniqeCategories.map((category) => {
                        return(
                            <button value={category} className='ctg'  onClick={(e)=>{
                                console.log(e.target.value)
                                getCatg(e.target.value)}}> {category} </button> 
                        )})}
                    </div>
                </div>
        </div>
        <div className="col-lg-8">
            <Form.Control className='m-5 p-2 w-75' size="md" onChange={e => Search(e.target.value)} type="text" placeholder="Search by title"/>
        </div>
    </div>
</div>
                            <div className="container my-5">
                                <div className="row">
                                    {search.map((item)=>{
                                        item.quantity = 1;
                                    return <Product key={item.id} products={item} />   
                                        })}
                                </div>
                            </div>
                                
    </>
)
}

export default AllProducts;
