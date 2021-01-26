import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar.jsx'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: ['A', 'B', 'C'],
      name: 'Guillaume'
    }
  }

  componentDidMount() {
    console.log(this.state.name)
    this.setState({
      name: 'Guillaume Le tricheur'
    }, () => console.log('call back :', this.state.name))

  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
      </div> 
      
    );
  }

}

export default App;
