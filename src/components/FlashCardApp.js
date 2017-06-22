import React from 'react';
import List from './List';
import CardForm from './CardForm'


class FlashCardApp extends React.Component{
    state = { cards: [], id: 0, showForm: false}



    addCard = (title, frontSide, backSide) => {
        let { cards, id } = this.state;
        let nextId = id + 1;
        let card = { title, id: nextId, frontSide, backSide }
        this.setState({ cards: [...cards, card], id: nextId })
    }


    toggleForm = () => {
      this.setState( state => {
        return { showForm: !state.showForm}
      })
    }

    form = () => (
        <CardForm addCard={this.addCard} />
    )

    card = () => (
      <List cards={this.state.cards} />
    )




    render() {
      let { showForm } = this.state;
        return(
            <div className='container'>
                <h2>Flash Cards</h2>
                <button className='btn' onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } New Card Form</button>
                { showForm ? this.form() : this.card() }
            </div>
        )
    }

}

export default FlashCardApp;
