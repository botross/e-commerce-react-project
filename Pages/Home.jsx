import React from 'react';
import {Button,Card } from 'react-bootstrap';
import image from "../images/WEL.webp"
import image2 from "../images/WEL2.png"
import image3 from "../images/WEL3.png"
import TEST1 from "../images/ProdTetst2.jfif"
import TEST3 from "../images/ProdTetst1.jfif"
import TEST2 from "../images/ProdTetst3.jfif"
import {FcAssistant , FcInTransit , FcCheckmark , FcMoneyTransfer} from "react-icons/fc"
function Home() {  

  return (

    <>
      <div className="Hero">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 text-center d-flex flex-column justify-content-center ">
              <h1 style={{fontWeight:"900" , fontSize: "70px"}}>MADE WELL</h1>
              <p className='text-muted'>Summer Collection</p>
              <h2> <span>$1,499</span> <span className='text-muted'><del>$1,999</del></span>   </h2>
              <div>
              <Button variant="outline-primary" size="md" style={{borderRadius: "0"}} className="text-center m-2 mt-5 ">
                  Shop now
                </Button>           
              <Button variant="primary" size="md" style={{borderRadius: "0"}} className=" m-2  mt-5  ">
                Shop now
                </Button>
                </div>
            </div>
            <div className="col-lg-6 ">
              <img src={image} alt=""  width={"100%"} />
            </div>
          </div>
        </div>
      </div>





      
      <div  className="text-center m-5">
        <h2 >Items in Sale</h2>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-4  text-center ">
          <Card  className="p-2 m-3">
              <Card.Img variant="top" src={TEST1}  width={"100%"} />
                  <Card.Body>
                    <Card.Title>The Belt</Card.Title>
                    <Card.Text>
                    Summer Collection
                    </Card.Text>
                  </Card.Body>
          </Card>
              </div>
          <div className="col-lg-4 text-center">
          <Card className="p-2 m-3">
              <Card.Img variant="top" src={TEST2}  width={"100%"} />
                  <Card.Body>
                    <Card.Title>Marc Jacobs Bag</Card.Title>
                    <Card.Text>
                    Summer Collection
                    </Card.Text>
                  </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4 text-center ">
          <Card  className="p-2 m-3">
              <Card.Img variant="top" src={TEST3}  width={"100%"} />
                  <Card.Body>
                    <Card.Title>The Belt</Card.Title>
                    <Card.Text>
                    Summer Collection
                    </Card.Text>
                  </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4 text-center">
          <Card  className="p-2 m-3">
              <Card.Img variant="top" src={TEST1}  width={"100%"} />
                  <Card.Body>
                    <Card.Title>The Shoee</Card.Title>
                    <Card.Text>
                    Summer Collection
                    </Card.Text>
                  </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4 text-center">
          <Card  className="p-2 m-3">
              <Card.Img variant="top" src={TEST2}  width={"100%"} />
                  <Card.Body>
                    <Card.Title>Marc Jacobs Bag</Card.Title>
                    <Card.Text>
                    Summer Collection
                    </Card.Text>
                  </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4 text-center">
          <Card  className="p-2 m-3">
              <Card.Img variant="top" src={TEST3}  width={"100%"} />
                  <Card.Body>
                    <Card.Title>The Belt</Card.Title>
                    <Card.Text>
                    Summer Collection
                    </Card.Text>
                  </Card.Body>
          </Card>
          </div>
        </div>
        </div>






        <div className="Hero2 mt-5">
          <div className="container m-5">
            <div className="row ">
              <div className="col-lg-6">
              <img src={image2} alt=""  width={"100%"} />
            </div>
            <div className="col-lg-6 text-center d-flex flex-column justify-content-center ">
              <h1 style={{fontWeight:"900"  , fontSize: "70px"}}>JACKET</h1>
              <p>Summer Collection</p>
              <h2> $1,999   </h2>
            </div>
          </div>
        </div>
        </div>
        <center>
        <div className="container m-5 p-3 ">
          <div className="row">
            <div className="col-lg-3 text-center  ">
            <FcInTransit size={70} className="align-self-center  m-5" />
            <h3>ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugiat!</p>
            </div>
            <div className="col-lg-3 text-center ">
            <FcMoneyTransfer size={70}  className="align-self-center m-5"/>
            <h3>ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugiat!</p>
            </div>
            <div className="col-lg-3 text-center " >
              <FcCheckmark size={70}  className="align-self-center m-5"/>
              <h3>ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugiat!</p>
            </div>
            <div className="col-lg-3 text-center ">
              <FcAssistant size={70} className="align-self-center m-5" />
              <h3>ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugiat!</p>
            </div>
          </div>
        </div>
        </center>





        <div className="Hero3 my-5">
            <div className="container  ">
              <div className="row">
                <div className="col-lg-4">
                <img src={image3} alt=""  width={"100%"} />
                </div>
              <div className="col-lg-8 text-center align-self-center mt-5 ">
                <h1 className='display-2' style={{fontWeight:"900" }}> <i>NEW DENIM COAT</i> </h1>
                <p  className='text-muted' >Summer Collection</p>
                <h2>$ 1,499 </h2>
              </div>
            </div>
          </div>
        </div>
    </>

  )
}

export default Home;
