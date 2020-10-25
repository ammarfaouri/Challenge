import React, { Component } from "react";
import Search from "./Search";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filtered: [],
    };
    this.updateData = this.updateData.bind(this);
  }

  async componentDidMount() {
    let response = await fetch("http://localhost:5000/data");
    let data = await response.json();
    this.setState({ data: data, filtered: data });
  }

  updateData(arr) {
    this.setState({ filtered: arr });
  }

  render() {
    let data = this.state.filtered.map((piece) => {
      return (
        <tr>
          <td>{piece.age}</td>
          <td>{piece.eyeColor}</td>
          <td>{piece.name}</td>
          <td>{piece.gender}</td>
          <td>{piece.company}</td>
          <td>{piece.email}</td>
          <td>{piece.phone}</td>
          <td>{piece.address}</td>
        </tr>
      );
    });

    return (
      <div className="App">
        <Search update={this.updateData} data={this.state.data} />
        <hr class="rounded" />
        <h3>{this.state.filtered.length} entry</h3>
        <table className="table-latitude">
          <thead>
            <th>age</th>
            <th>eyeColor</th>
            <th>name</th>
            <th>gender</th>
            <th>company</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
