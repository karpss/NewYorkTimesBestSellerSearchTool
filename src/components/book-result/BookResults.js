import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class BookResults extends Component {
  render(){
    
    const  books  = this.props.books;

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


BookResults.propTypes = {
  books: PropTypes.array.isRequired
}

export default BookResults;
