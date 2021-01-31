import React from "react";
import abstractpurple from "../assests/images/purple.jpg";

class SearchBar extends React.Component {
  state = { term: '' };
  
  onFormSubmit(event) {
      event.preventDefault();
      this.props.runSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment" style={{ backgroundImage: `url(${abstractpurple})`}}>
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <h3 >Image Search</h3>
            <input type="text"
            value = {this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
