import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import SelectField from 'material-ui/SelectField'

class Booksearch extends Component {
    constructor(props){
        super(props)
    this.state ={
        searchTitle: '',
        price: 10,
        apiUrl:'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json',
        apiKey:'ce9a2049fffb4140a3c3652ba36897f0',
        books:[]
    }
}

onTitleChange = e =>{

this.setState({[e.target.name]: e.target.value},()=>{
   axios
   .get (
    `${this.state.apiUrl}?api-key=${this.state.apiKey}&title=${
      this.state.searchTitle
    }&price=${this.state.price}`
  )
  .then(res => this.setState({ books: res.data.results }))
          .catch(err => console.log(err));



});

};





       render(){
        console.log(this.state.books);
           return(
               <div>
              <TextField
              name="searchTitle"
              value={this.state.searchTitle}
              onChange={this.onTitleChange}
              floatingLabelText="Search For Books"
              fullWidth={true}
              />
              <br/>
              <SelectField
              name="price"
              floatingLabelText="Price"
              value={this.state.price}
              onChange={this.onPriceChange}
              >

            <MenuItem value={10} primaryText="$10" />
          <MenuItem value={20} primaryText="$20" />
          <MenuItem value={30} primaryText="$30" />
          <MenuItem value={40} primaryText="$40" />
          <MenuItem value={50} primaryText="$50" />

          </SelectField>




                   </div>

           )

       }
}


export default  Booksearch;