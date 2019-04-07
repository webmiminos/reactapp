import React from 'react'
import { Article } from './Article'

class Comments extends React.Component {
  handleRemoveComment = (e) => {
    this.props.onRemoveComment(e)
  };
  renderComments = () => {
    const { data } = this.props;
    let template = null;

    if (data.length) {
      template = data.map((item) => {
        return <Article
            onRemoveComment={this.handleRemoveComment}
            key={item.id}
            data={item}
        />
      })
    } else {
      template = <p>Комментариев нет</p>
    }

    return template
  };
  render() {
    const { data } = this.props;

    return (
      <div className="comments">
        {this.renderComments()}
        {data.length ? (
          <strong className={'comments__count'}>
            Всего комментариев: {data.length}
          </strong>
        ) : null}
      </div>
    )
  }
}



export { Comments }
