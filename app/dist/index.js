import React from "react";
import ReactDom from 'react-dom';

class Layout extends React.Component {
  constructor(){
    super()
    this.name = "Marc Vergara"
  }
  render() {
    return(
          <h1>Hellow { this.name }!</h1>
        )
  }
}

const app = document.getElementById('app')
ReactDom.render(<Layout/>, app)