'use strict';

var Story = function () {

  class Story extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      updateLinks();
    }

    componentDidUpdate(prevProps) {
      updateLinks();
    }

    render() {
      dialogRefs = [];
      let dialogs = [];
      for (let dialog of this.props.dialogs) {
        let ref = React.createRef();
        dialogs.push(React.createElement(Dialog, {dialog: dialog, ref: ref}));
        dialogRefs.push(ref);
      }
      return React.createElement(
        'div',
        {
          className: 'story',
          style: storyStyle,
          ref: storyRef
        },
        React.createElement(
          'canvas',
          {
            style: linkPaneStyle,
            ref: linkPaneRef
          }
        ),
        ...dialogs
      );
    }
  }

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


  let storyRef = React.createRef();
  let linkPaneRef = React.createRef();
  let dialogRefs = [];

  function updateLinks() {
    let width = 0;
    let height = 0;
    for (let dialogRef of dialogRefs) {
      width = Math.max(width, dialogRef.current.left + dialogRef.current.width);
      height = Math.max(height, dialogRef.current.top + dialogRef.current.height);
    }
    width = Math.max(width + 64, storyRef.current.clientWidth);
    height = Math.max(height + 64, storyRef.current.clientHeight);

    let linkCanvas = linkPaneRef.current;
    linkCanvas.width = width;
    linkCanvas.height = height;

    var ctx = linkCanvas.getContext("2d");
    ctx.clearRect(0, 0, linkCanvas.width, linkCanvas.height);
    ctx.fillRect(50, 50, width-100, height - 100);
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
    ctx.stroke();
  }

  return Story;
}();
