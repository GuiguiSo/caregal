import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar.jsx'
import Cards from '../components/Cards.js'
import Footer from "../components/Footer";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      card: [{
        Img: "img/raccoon.jpg",
        Title: 'Card Title',
        Text: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },{
        Img: "img/raccoon.jpg",
        Title: 'Card Title2',
        Text: "2Some quick example text to build on the card title and make up the bulk of the card's content."
      },{
        Img: "img/raccoon.jpg",
        Title: 'Card Title2',
        Text: "2Some quick example text to build on the card title and make up the bulk of the card's content."
      },{
        Img: "img/raccoon.jpg",
        Title: 'Card Title2',
        Text: "2Some quick example text to build on the card title and make up the bulk of the card's content."
      },{
        Img: "img/raccoon.jpg",
        Title: 'Card Title2',
        Text: "2Some quick example text to build on the card title and make up the bulk of the card's content."
      },{
        Img: "img/raccoon.jpg",
        Title: 'Card Title2',
        Text: "2Some quick example text to build on the card title and make up the bulk of the card's content."
      },{
        Img: "img/raccoon.jpg",
        Title: 'Card Title2',
        Text: "2Some quick example text to build on the card title and make up the bulk of the card's content."
      },{
        Img: "img/raccoon.jpg",
        Title: 'Card Title2',
        Text: "2Some quick example text to build on the card title and make up the bulk of the card's content."
      }],
    }
  }


  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="offset-md-2 col-md-8">
            <div className="card-deck mt-5 mb-5">
              {this.state.card.map((c,i) => <div key={i} className="cardCustom">
                <Cards card = {c}></Cards>
              </div>)}
            </div>
        </div>
        <Footer></Footer>
      </div> 
      
    );
  }

}

export default App;
