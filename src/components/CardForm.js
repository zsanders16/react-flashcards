import React from 'react'

class CardForm extends React.Component{
    defaultValues = { title: '', frontSide: '', backSide: '' }

    state = { ...this.defaultValues }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCard(this.state)
        this.setState({...this.defaultValues})

    }

    handleChange = (e) => {
        let { target: {id, value}} = e
        this.setState({ [id]: value});
    }

    render(){


      return(
          <div className='row'>
            <div className='col s12 offset-s4'>
              <form className='info' onSubmit={this.handleSubmit} >
                  <input id="title" placeholder="Card title" required value={this.state.title} onChange={this.handleChange} />
                  <input id="frontSide" placeholder="Card Question" required value={this.state.frontSide} onChange={this.handleChange} />
                  <input id="backSide" placeholder="Card Answer" required value={this.state.backSide} onChange={this.handleChange}/>
                  <button className='btn'>Submit</button>
              </form>
            </div>
          </div>
      )
    }

}

export default CardForm;
