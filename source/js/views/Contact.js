import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  handleCounterBtn(e){
    e.preventDefault()
    console.log('Cicked!');
  }

  render(){
    return(
      <div className="contact-page">
          This is contact page
          <div>
              <button className="btn btn-default" onClick={this.handleCounterBtn.bind(this)}>Increase</button>
          </div>
      </div>
    )
  }
}
