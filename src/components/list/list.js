import React from 'react';
import PropTypes from 'prop-types';

import './list.scss';

export default class RedditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMethod(this.state.search);
  }

  handleSearch = (event) => {
    const search = event.target.value;
    this.setState({ search });
  }

  render() {
    return (
      <div className="reddit-list">
        <form onSubmit={ this.handleSubmit }>
          <input 
            onChange={ this.handleSearch }
            placeholder="Search..."
          />
          {
            this.props.reddit.map((reddit, index) => {
              return (
                <div key={index}>
                  <div
                    className="item"
                    id={ reddit.url }
                    onClick= { this.props.redditLoader }
                  >
                    {reddit.name}
                  </div>
                </div>
              );
            })
          }
        </form>

      </div>
    );
  }
}

RedditList.propTypes = {
  searchMethod: PropTypes.func,
  reddit: PropTypes.array,
  redditLoader: PropTypes.func,
};
