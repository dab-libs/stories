'use strict';

var Story = function() {

  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      var dialogs = [];
      for (let dialog of this.props.dialogs) {
        dialogs.push(React.createElement(Dialog, dialog));
      }
      return React.createElement(
        'div',
        {
          className: 'story',
          style: {
            display: 'block',
            position: 'relative',
            top: 0,
            left: 0
          }
        },
        ...dialogs
      );
    }
  }

}();