import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';

export default class RedditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      // subreddits: [],
      limit: 10,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMethod(this.state.search, this.state.limit);
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
          value={ this.state.search }
          onChange={ this.handleSearch }
          placeholder="Search..."
          />
          <label>Number of Subs:</label>
          <input
          type="number"
          min="1" 
          max="100"
          ref={this.state.limit}
          value={this.state.limit}
          onChange={this.handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {
            this.props.subreddits.map((item, index) => {
              return (
                <div key={index}
                className="subreddit-detail">
                <a href={item.data.url}>
                <h2>{item.data.title}</h2>
                </a>
                </div>
              );
            })
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
