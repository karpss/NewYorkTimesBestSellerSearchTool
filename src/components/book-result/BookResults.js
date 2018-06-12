import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class BookResults extends Component {
  render(){
    
    const  {books}  = this.props;

    let bookList = [];
    Object.keys(books).map((cardIndex) => {
        let card = books[cardIndex]
        bookList.push (
            <Card>
                <CardHeader
                    title={card.title}
                    subtitle={card.author}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    { card.description }
                </CardText>
            </Card>            
        )
    })

    return (
        
            <div>
                
                  
                    { bookList }
                
                
            </div>
        
    );
}
}




export default BookResults;
