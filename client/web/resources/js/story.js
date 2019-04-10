'use strict';

var Story = function() {

  const storyStyle = {
    display: 'block',
    position: 'relative',
    top: 0,
    left: 0
  };
  const linkPaneStyle = {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0
  };
  const dialogPaneStyle = {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0
  };

  let linkPane = React.createRef();
  let dialogPane = React.createRef();

  function updateLinks() {
    let c = linkPane.current;
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
  }

  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {

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
          style: storyStyle
        },
        React.createElement(
          'canvas',
          {
            style: linkPaneStyle,
            ref: linkPane
          }
        ),
        React.createElement(
          'div',
          {
            style: dialogPaneStyle,
            ref: dialogPane
          },
          ...dialogs
        )
      );
    }
  }

}();
