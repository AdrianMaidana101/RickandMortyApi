import React, { Component } from 'react'
import Saludo from './Saludo';

export default class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

  render() {
    return (
      <div>
       <Saludo /> 
      </div>
    )
  }
}


