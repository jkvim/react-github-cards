import React from 'react';
import ReactDOM from 'react-dom';
import { UserCard, RepoCard } from './src/themes/medium';

class App extends React.Component {
  render() {
    return (
      <div id="root">
        <RepoCard username={'jkvim'} repo={'zhihu-collection'} />
        <RepoCard username={'jkvim'} repo={'CodeVivid'} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
