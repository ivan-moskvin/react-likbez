'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e('img',
      {src: "/pictures/bender.webp"}
      );
    }

    return e(
      'button',
      { style: {
          width: 500,
              height: 400,
              fontSize: "80px"
          }, onClick: () => this.setState({ liked: true }) },
      'Покажи Бендера'
    );
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(LikeButton), domContainer);