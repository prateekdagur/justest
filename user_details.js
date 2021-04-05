import React, { Component } from 'react';
import axios from 'axios';

export default class CreateDetail extends Component {
  constructor(props) {
    super(props);

    this.onChangeFavourite_car = this.onChangeFavourite_car.bind(this);
    this.onChangeMobile_no = this.onChangeMobile_no.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      favourite_car: '',
      mobile_no: '',
    }
  }

  onChangeFavourite_car(e) {
    this.setState({
      favourite_car: e.target.value
    })
  }

  onChangeMobile_no(e) {
    this.setState({
      mobile_no: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const detail = {
      favourite_car: this.state.favourite_car,
      mobile_no: this.target.mobile_no,
     }

    console.log(detail);

    axios.post('http://localhost:5000/user/user_details', detail)
      .then(res => console.log(res.data));

    this.setState({
      favourite_car: '',
      mobile_no: '',
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Favourite Car: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.favourite_car}
                onChange={this.onChangeFavourite_car}
                />
          </div>

          <div className="form-group"> 
            <label>Mobile_no: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.mobile_no}
                onChange={this.onChangeMobile_no}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create detail" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

