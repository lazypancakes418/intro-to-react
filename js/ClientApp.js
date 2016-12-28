import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

class MyFirstComponent extends React.Component {

  render () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='I am working on it' color='blue' />
        <MyTitle title='Starting to get hang of it' color='peru' />
      </div>
    );
  }
}

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
