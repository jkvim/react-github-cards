"use strict";
import React from 'react';
import * as themes from './themes';
import _ from 'lodash';

const apiRoot = 'https://api.github.com/users';


export default class UserCard extends React.Component {
  componentWillMount() {
    if (_.has(themes, this.props.theme)) {
      this.theme = _.get(themes, this.props.theme).UserCard;
    } else {
      this.theme = _.get(themes, 'Default').UserCard;
    }
  }
  render() {
    return <this.theme {...this.props} />;
  }
}

UserCard.propTypes = {
  username: React.PropTypes.string.isRequired
};
