import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const myNews = [
  { id :1,
    time:'20.03.2019,16:46:32',
    author: 'Саша Иванов',
    text: 'какой-то тестовый комментарий'


  }
];
// -------------------------------------------------------------------------
class News extends React.Component {
  renderNews = () => {
    const { data } = this.props
    let newsTemplate = null

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item}/>
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return newsTemplate
  }
  render() {
    const { data } = this.props

    return (
      <div className="news">
        {this.renderNews()}
        {
          data.length ? <strong className={'news__count'}>Всего комментариев : {data.length}</strong> : null
        }
      </div>
    );
  }
}
// ------------------------------------------------------------------------
class Article extends React.Component {
  state = {
    visible: false,
  }
  onBtnClickDelete = (e) => {
    alert('привет');
  }
  render() {
    const { author, text,id,time } = this.props.data
    return (
        <div className="article">
        <p className="news__time">{time}</p>
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        <button className='add__del'
        onClick={this.onBtnClickDelete}>Удалить</button>

      </div>
    )
  }
}
// -------------------------------------------------------------------------
class Add extends React.Component {
  state = {
    name: '',
    text: '',
    agree: false,
  }
  onBtnClickHandler = (e) => {
    e.preventDefault()
    let dates = new Date().toLocaleString()
    const { name, text } = this.state
    this.props.onAddNews({
            time: dates,
            id:+new Date(),
            author: name,
            text,

     })
  }
  handleNameChange = (e) => {
    this.setState({ name: e.currentTarget.value })
  }
  handleTextChange = (e) => {
    this.setState({ text: e.currentTarget.value })
  }
  handleCheckboxChange = (e) => {
    this.setState({ agree: e.currentTarget.checked })
  }
  render() {
    const { name, text, agree } = this.state
    return (
      <form className='add'>
        <input
          type='text'
          onChange={this.handleNameChange}
          className='add__author'
          placeholder='Ваше имя'
          value={name}
        />
        <textarea
          onChange={this.handleTextChange}
          className='add__text'
          placeholder='Текст новости'
          value={text}
        ></textarea>
        <label className='add__checkrule'>
          <input type='checkbox' onChange={this.handleCheckboxChange} /> Я согласен с правилами
        </label>

        <button
          className='add__btn'
          onClick={this.onBtnClickHandler}
          disabled={!agree}>
          Комментировать
        </button>
      </form>
    )
  }
}
// -------------------------------------------------------------------------
class App extends React.Component {
  state = {
    news: myNews,
  }
  handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news]
    this.setState({ news: nextNews })
  }
  render() {
    return (
      <React.Fragment>
        <h3>Комментарии:</h3>
        <News data={this.state.news} />
        <Add onAddNews={this.handleAddNews} />
      </React.Fragment>
    )
  }
}
// -------------------------------------------------------------------------
export default App;
