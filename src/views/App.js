import React from 'react'
import './App.css'



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

      </div> 
      
    );
  }

}

export default App;
