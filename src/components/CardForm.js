import React from 'react'

class CardForm extends React.Component{
    state = { title: '',
              frontSide: '',
              backside: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.title)
        this.props.submit(this.state.frontSide)
        this.props.submit(this.state.backSide)
        this.setState({ title: '' })
        this.setState({ frontSide: '' })
        this.setState({ backSide: '' })
    }

    handleChange = (e) => {
        let {target : {value, id}} = e;
        this.setState({ [id]: value })
    }

    render(){

        return(
            <div className='row'>
              <div className='col s12 offset-s4'>
                <form className='info' onSubmit={this.handleChange} >
                    <input id="title" placeholder="Card title" required value={this.state.title} onChange={this.handleChange} />
                    <input id="frontSide" placeholder="Card Question" requried value={this.state.frontSide} onChange={this.handleChange} />
                    <input id="backside" placeholder="Card Answer" requried value={this.state.backSide} onChange={this.handleChange}/>
                </form>
              </div>
            </div>




        )
    }

}

export default CardForm;
