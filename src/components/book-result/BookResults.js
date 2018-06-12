import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class BookResults extends Component {
    render() {




        let bookList;

        const books = this.props.books;

        if (books) {
            bookList = (
                <Card>
                    {books.map(book => (
                        <CardHeader
                            title={book.title}
                            subtitle={book.author}
                            actAsExpander={true}
                            showExpandableButton={true}

                        />
                          
                        





                    ))}
                </Card>


            );
        } else {
            bookList = null;
        }

        return (

            <div>


                {bookList}


            </div>

        );
    }
}




export default BookResults;
