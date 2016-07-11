"use strict";
import React from 'react';
import * as themes from './themes';
import _ from 'lodash';

export default class RepoCard extends React.Component {
  componentWillMount() {
    console.log(themes);
    if (_.has(themes, this.props.theme)) {
      this.theme = _.get(themes, this.props.theme).RepoCard;
    } else {
      this.theme = _.get(themes, 'Default').RepoCard;
    }
    console.log(this.theme)
  }
  render() {
    return <this.theme {...this.props} />;
  }
}

RepoCard.propTypes = {
  username: React.PropTypes.string.isRequired,
  repo: React.PropTypes.string.isRequired,
}
