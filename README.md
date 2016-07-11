# react-github-cards
  show github profile card and repo card by the way of react compoent, inpired by [mamal72/react-github](https://github.com/mamal72/react-github) and [lepture](https://github.com/lepture/github-cards), you can choose theme of the card,  welcome to fork to custom your own theme or make a pull request.

## Install
> npm install react-github-cards -S  
  
## Usage
```jsx
import { UserCard, RepoCard } from 'react-github-cards';

render() {
  <div>
    <UserCard username="foo" theme="medium"/>
    <RepoCard username="foo" repo="bar" theme="medium"/>
  </div>
}
```

## themes
  currently, just have two kinds of themes, `default` and `medium`.

## compoenents
- `<UserCard />`

|props   | required| value |
|--------|---------|-------|
|username| yes     | string|
|theme   | no      | theme |

- `<RepoCard />`

|props   | required| value |
|--------|---------|-------|
|username| yes     | string|
|repo    | yes     | string|
|theme   | no      | theme |


## Licence
 MIT
