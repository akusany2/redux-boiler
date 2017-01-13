import React, { Component } from 'react'
import {fetchData} from '../actions/blog'
import {connect} from 'react-redux'


@connect(state => ({
  asyncError: state.blog.get('asyncError'),
  asyncData: state.blog.get('asyncData'),
  asyncLoading: state.blog.get('asyncLoading')
}))
export default class Post extends Component {
  constructor(props) {
    super(props);

  }

  handleGetPosts(){
    let dispatch = this.props.dispatch

    dispatch(fetchData('post'))
  }

  render(){
    const {
      asyncData,
      asyncError,
      asyncLoading,
    } = this.props;
    return(
      <div className="post-page">
          <button onClick={this.handleGetPosts.bind(this)} >Get posts</button>
          <br/>
          <div>
              {asyncData && asyncData.get('data').toJS().map(data => {
                  return (
                      <div key={data.id}>
                          <h3>{data.title}</h3>
                          <p>{data.body}</p>
                          <hr/>
                      </div>
                  )
              })}
              {asyncLoading && <p>Loading...</p>}
              {asyncError && <p>Error: {asyncError}</p>}
          </div>
      </div>
    )
  }
}
