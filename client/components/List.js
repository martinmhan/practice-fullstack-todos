const React = require('react');
const ListItem = require('./ListItem.js');

const List = (props) => {
  return (
    <div>
      <ul>
        List
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  )
}

module.exports = List;