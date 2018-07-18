import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';

export default class RedditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      max: 5,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMethod(this.state.search, this.state.max);
  }

  handleSearch = (event) => {
    const search = event.target.value;
    this.setState({ search });
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="subreddit-list">
        <label>Search For a Subreddit</label>
        <form onSubmit={ this.handleSubmit }>
          <input
          /><br />
          <label>Number of Subs: {this.state.max}</label>
          <input/>
          <button type="submit">Search</button>
        </form>
        <ul>
          {
            
          }
        </ul>
      </div>
    );
  }
}

RedditList.propTypes = {
  searchMethod: PropTypes.func,
  subreddits: PropTypes.array,
};
