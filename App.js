import {BrowserRouter , Routes , Route } from "react-router-dom"
import {createContext , useState , useEffect} from "react"
import { Provider } from 'react-redux';
import './App.css';
import Navbarr from "./Components/Navbarr"
import Home from "./Pages/Home"
import AllProducts from './Pages/Products/AllProducts';
import ProductDetails from './Pages/Products/ProductDetails';
import Footerr from "./Components/Footer"
import Cart from './Pages/Cart';
import {store} from "./Redux/REDO"
import ContactUs from './Pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';





export const MyContext = createContext("");
function App() {
  
  const [productsfetch,SetProductsfetch] = useState([])  
  const [Sear,SetSear] = useState([])  
  const [Loading,SetLoading] = useState(true)  





  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => SetProductsfetch(data))
    SetLoading(false)
  },[])



  let MainData = {
    Allproducts : productsfetch,
    SortingProducts : Sear
  }


  function getProduct (id){
    let single =  productsfetch.filter(item => item.id === id)
    return single
  }





  function getCatg (catg){
    if(catg==="all"){
      SetSear(productsfetch)
    }else{
    let Catgo =  productsfetch.filter(item => item.category === catg)
    SetSear(Catgo)
  }
  }



  function Search(query){
    let Maza = productsfetch.filter((item) => {
      if (query === '') {
        return item;
    } else if (item.title.toLowerCase().includes(query)) {
      return item;
    }})
SetSear(Maza)
  }









  return (
<>
<Provider store={store}>
<MyContext.Provider value={{...MainData , getProduct , getCatg , Search , Loading }}  >
<BrowserRouter>
<Navbarr />
<Routes>
<Route exact path="/" element={<Home  />}/>
<Route exact path="/Products" element={<AllProducts />}/>
<Route exact path="/Cart" element={<Cart  />}/>
<Route exact path="/Contactus" element={ <ContactUs /> }/>
<Route exact path="/Products/:id" element={ <ProductDetails /> }/>
</Routes>
<Footerr />
</BrowserRouter>
  </MyContext.Provider > 
  </Provider>
</>
  );
}

export default App;
