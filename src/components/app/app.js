import React from 'react';
import RedditList from '../list/list';
import RedditDetail from '../detail/detail';
import { fetchData } from './../../lib/utils';

import './app.scss';

const redditApi = 'http://www.reddit.com/api/';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reddit: {},
      redditList: [],
      loading: false,
    };
  }

  load = (url) => {
    this.setState({ loading: true });
    return fetchData(url)
      .then((data) => {
        this.setState({ loading: false });
        return data;
      })
      .catch(console.error);
  }

  componentDidMount() {
    this.loadRedditList()
      .then((redditList) => {
        this.setState({ redditList });
      })
      .catch(console.error);
  }

  loadRedditList = () => {
    return this.load(redditApi)
      .then((redditData) => {
        return redditData.results;
      })
      .catch(console.error);
  }

  redditDetails = (event) => {
    const url = event.target.id;
    return this.load(url)
      .then((reddit) => {
        this.setState({ reddit });
      })
      .catch(console.error);
  }

  redditSearch = (search) => {
    const url = `${redditApi}/${search}`;
    return this.load(url)
      .then((reddit) => {
        this.setState({ reddit });
      })
      .catch(console.error);
  }

  render() {
    return (
      <main className="container">
        <RedditList 
          searchMethod={ this.redditSearch }
          reddit={ this.state.redditList }
          redditLoader={ this.redditDetails }
        />
        <RedditDetail reddit={this.state.reddit} />
      </main>
    );
  }
}
