// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeState = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      this.setState(() => ({isSubscribed: false}))
    } else {
      this.setState(() => ({isSubscribed: true}))
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="main">
        <h1 className="h1">Welcome</h1>
        <p className="p1">Thank you! Happy Learning</p>
        {isSubscribed ? (
          // eslint-disable-next-line
          <button className="button" onClick={this.changeState}>
            Subscribed
          </button>
        ) : (
          // eslint-disable-next-line
          <button className="button" onClick={this.changeState}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
