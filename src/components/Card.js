import React from 'react'

class Card extends React.Component {
    state = { showFront: true}

    front = () => {
      return (
        <div>
          <p>Question:</p>
          <p>{ this.props.frontSide }</p>
        </div>
      )
    }

    back = () => {
      return (
        <div>
          <p>Answer:</p>
          <p>{this.props.backSide }</p>
        </div>
      )
    }

    switchSide = () => {
      this.setState( state => {
          return { showFront: !state.showFront }
      })
    }

    render(){
      let {title} = this.props
      let { showFront } = this.state
      return (
        <div className='col m4'>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{title}</span>
              { showFront === true ? this.front() : this.back() }
              <div className="card-action">
                <button onClick={this.switchSide} className='btn' >{showFront === true ? 'Answer' : 'Question'}</button>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Card;
