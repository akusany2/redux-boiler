import React, { Component } from 'react'
import { connect } from 'react-redux'
import {testAction} from '../actions/app'

@connect(state => ({
  counter: state.app.get('counter')
}))
export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  handleCounterBtn(e){
    e.preventDefault()
    let dispatch = this.props.dispatch

    dispatch(testAction())
  }

  render(){
    return(
      <div className="contact-page">
          This is contact page
          {this.props.counter}
          <div>
              <button className="btn btn-default" onClick={this.handleCounterBtn.bind(this)}>Increase</button>
          </div>
      </div>
    )
  }
}
