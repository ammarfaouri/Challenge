import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      type: "name",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ type: e.target.value, term: "" });
    this.props.update(this.props.data);
  }

  handleSearch(e) {
    this.setState({ term: e.target.value }, () => {
      let { type, term } = this.state;
      let { data } = this.props;

      let searched = data.filter((entry) => {
        return entry[type]
          .toString()
          .toLowerCase()
          .includes(term.toLowerCase());
      });
      this.props.update(searched);
    });
  }

  render() {
    return (
      <div className="Search">
        <input
          name="searchterm"
          type="text"
          value={this.state.term}
          placeholder="Search here"
          onChange={this.handleSearch}
        />
        <span> Filter by: </span>
        <select
          name="term"
          value={this.state.type}
          onChange={this.handleChange}
        >
          <option value="age">Age</option>
          <option value="eyeColor">Eye Color</option>
          <option value="name">Name</option>
          <option value="gender">Gender</option>
          <option value="company">Company</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="address">Address</option>
        </select>
      </div>
    );
  }
}

export default Search;
