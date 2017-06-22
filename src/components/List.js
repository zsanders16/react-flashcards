import React from 'react'
import Card from './Card'

class List extends React.Component{
    render(){
      let counter = 0
      let cards = this.props.cards.map( (card) => {
        return <Card key={counter++} {...card}/>
      })
        return (
          <div className='row'>
            {cards}
          </div>
        )
    }
}


export default List;
