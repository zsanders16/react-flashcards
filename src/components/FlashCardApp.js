import React from 'react';
import List from './List';
import CardForm from './CardForm'


class FlashCardApp extends React.Component{
    state = { cards: [], showForm: false}

    addCard = (card) => {
        let cards = this.state
        this.setState({ cards: [...cards, card] })
        this.toggleForm()
    }


    toggleForm = () => {
      this.setState( state => {
        return { showForm: !state.showForm}
      })
    }

    form = () => (
      <CardForm addCard={this.addCard} />
    )

    showCards = () => (
      <List cards={this.state.cards} />
    )




    render() {
      let { showForm } = this.state;
        return(
            <div className='container'>
                <h2>Flash Cards</h2>
                <button className='btn' onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } New Card Form</button>
                { showForm ? this.form() : this.showCards() }
            </div>
        )
    }

}

export default FlashCardApp;
