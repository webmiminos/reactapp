import React from 'react'
import PropTypes from 'prop-types'

class Article extends React.Component {

  handleRemoveBtnClick = () => {
    const { id } = this.props.data;
    this.props.onRemoveComment({id})
  };
  render() {
    const { author, text, date } = this.props.data;
    const dateFormat = date.toLocaleString();
    return (
      <div className="article">
        <p className="comments__author">{author} <span className="comments__date">({dateFormat})</span>:</p>
        <p className="comments__text">{text}</p>

        <button
            className="remove__btn"
            onClick={this.handleRemoveBtnClick}
        >
          Удалить комментарий
        </button>
      </div>
    )
  }
}

Article.propTypes = {
  onRemoveComment: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired, // добавили id, это число, обязательно
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  }),
};

export { Article }
