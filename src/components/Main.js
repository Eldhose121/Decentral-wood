import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class Main extends Component {
    constructor() {
      super();
      this.state = {
        search: ''
      };
    }
  
    updateSearch(event) {
      this.setState({search: event.target.value.substr(0,20)});
    }
  
    render() {
      let filteredReviews = this.props.reviews.filter(
        (review) => {
          return review.mname.indexOf(this.state.search) !== -1;
        }
      );

    return (
        <div className="container-fluid mt-5">
        <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
              <div className="content mr-auto ml-auto">
                <p>&nbsp;</p>
                  <Form onSubmit={(event) => {
                    event.preventDefault()
                    const genre = this.rgenre.value
                    const mname = this.rmname.value
                    const rating = this.rrating.value
                    const description = this.rdesc.value
                    this.props.addReview(genre, mname, rating, description)
                  }}>
                  <center>
                  <h1>Write your Review</h1>
                  <div class="form-container">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="rgenre"
                        type="text"
                        ref={(input) => { this.rgenre = input }}
                        className="form-control"
                        placeholder="Movie genre"
                        required />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="rmname"
                        type="text"
                        ref={(input) => { this.rmname = input }}
                        className="form-control"
                        placeholder="Movie name"
                        required />
                    </Form.Group>
                    <br/>   
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                        id="rrating"
                        type="text"
                        ref={(input) => { this.rrating = input }}
                        className="form-control"
                        placeholder="Your rating (out of 10)"
                        required />
                    </Form.Group>
                    <br/> 
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write your detailed movie review</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={5}
                        id="rdesc"
                        ref={(input) => { this.rdesc = input }}
                        required />
                    </Form.Group>   
                    <br/>              
                  </div>
                  <br/>
                  <button type="submit" className="btn btn-outline-info">Submit your Review</button>
                  </center>
                </Form>
                <br/><br/><br/><br/>
                <h1>Search Reviews by Movie name</h1>
                <input type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} />
                <p>&nbsp;</p>
                { filteredReviews.map((review, key) => {
                  return(
                    <div class="coupon" key={key} >
                      <div className="card-header">
                      <p class="badge badge-primary">{review.genre}</p>
                      <br/>
                      <h2>{review.mname}</h2>
                      <small>Author: {review.author}</small>
                      </div>
                      <p>Rating: {review.rating} / 10</p>
                      <ul id="postList" className="list-group list-group-flush">
                        <li className="list-group-item">
                          <p>{review.description}</p>
                          <br/>
                        </li>
                        <li key={key} className="list-group-item py-2">
                          <small className="float-left mt-1 text-muted">
                            {review.ppl} people found this helpful.
                          </small>      
                          <p>If you also found this helpful, would you like to tip 0.1 ETH to the author?</p>
                          <button
                            className="btn btn-info"
                            name={review.id}
                            onClick={(event) => {
                              let fundrec = window.web3.utils.toWei('0.1', 'Ether')
                              this.props.fundReview(event.target.name, fundrec)
                            }}>
                            Yes
                          </button>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            </main>
          </div>
        </div>
      );
    }
  }
  
  export default Main;