import React from 'react';
import ReactDOM from 'react-dom';
import { UserCard, RepoCard } from './src';

class App extends React.Component {
  render() {
    return (
      <div id="root">
        <UserCard username={'jkvim'} theme="Medium" />
        <RepoCard username={'jkvim'} repo={'blog'} theme="Medium" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
