'use strict';

var Dialog = function() {

  class Dialog extends React.Component {
    constructor(props) {
      super(props);
    }

    get left() {
      return rootRef.current.offsetWidth;
    }

    get top() {
      return rootRef.current.offsetTop;
    }

    get width() {
      return rootRef.current.offsetWidth;
    }

    get height() {
      return rootRef.current.offsetHeight;
    }

    render() {
      return React.createElement(
        'div',
        {
          className: 'storyDialog',
          style: {
            display: 'block',
            position: 'absolute',
            top: this.props.dialog.top,
            left: this.props.dialog.left
          },
          ref: rootRef
        },
        React.createElement('div', {id: 'name'}, this.props.dialog.name),
        React.createElement('div', {id: 'description'}, this.props.dialog.description),
        React.createElement('div', {id: 'links'})
      );
    }
  }

  const rootRef = React.createRef();

  return Dialog;
}();