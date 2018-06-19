import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class BookResults extends Component {
    render() {




        let bookList;

        const books = this.props.books;

        if (books) {
            bookList = (

                <Card  >
                    {books.map(book => (

                        <React.Fragment key={book.title} >



                            <CardHeader

                                title={book.title}
                                subtitle={book.author}
                            />

                            <br />

                            <CardText  >
                                {book.description}
                            </CardText>


                        </React.Fragment>

                    ))}
                </Card>


            );
        } else {
            bookList = null;
        }

        return (

            <div >


                {bookList}


            </div>

        );
    }
}

BookResults.propTypes = {
    books: PropTypes.array.isRequired
  }


export default BookResults;
