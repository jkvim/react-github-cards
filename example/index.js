import React from 'react';
import ReactDOM from 'react-dom';
import { UserCard, RepoCard } from '../src/themes/medium';

class App extends React.Component {
  render() {
    return (
      <div id="root">
        <UserCard username={'jkvim'} />
        <RepoCard username={'jkvim'} repo={'vivid.js'} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
