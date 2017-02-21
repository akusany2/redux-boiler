import React, { Component } from 'react'
import {fetchData} from '../redux/blog'
import {connect} from 'react-redux'


@connect(state => ({
  asyncError: state.blog.asyncError,
  asyncData: state.blog.asyncData,
  asyncLoading: state.blog.asyncLoading
}))
export default class Post extends Component {
  constructor(props) {
    super(props);

  }

  handleGetPosts(){
    let dispatch = this.props.dispatch

    dispatch(fetchData('posts'))
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
              {asyncData && asyncData.map(data => {
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
