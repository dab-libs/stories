'use strict';

var Dialog = function() {

  var links = React.createElement('div', {id: 'links'});

  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return React.createElement(
        'div',
        {
          className: 'storyDialog',
          style: {
            display: 'block',
            position: 'absolute',
            top: this.props.top,
            left: this.props.left
          }
        },
        React.createElement('div', {id: 'name'}, this.props.name),
        React.createElement('div', {id: 'description'}, this.props.description)
      );
    }
  }

}();