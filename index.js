import React from 'react';
import ReactDOM from 'react-dom';
import { ProfileCard, RepoCard } from './src';

class App extends React.Component {
  render() {
    console.log('hehe', ProfileCard);
    return (
      <div id="root">
        <ProfileCard user={'jkvim'} height="150" weight="400" />
        <RepoCard repo={'jkvim/blog'} height="150" weight="400" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
