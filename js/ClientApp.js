import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

var MyTitleFactory = React.createFactory(MyTitle);
var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
      MyTitleFactory({title: 'props are the best', color: 'black'}),
      MyTitleFactory({title: 'semicolors are the worst', color: 'red'}),
      MyTitleFactory({title: 'goodbye', color: 'orange'})
      )
    );
  }
}
);
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
