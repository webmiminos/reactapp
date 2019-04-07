import React from 'react'


class Add extends React.Component {
    state = {
        name: '',
        text: '',
        agree: false,
    };
    onBtnClickHandler = e => {
        e.preventDefault();
        const {name, text} = this.state;
        const date = new Date();
        this.props.onAddComment({
            id: +date,
            author: name,
            text,
            date
        })
    };
    handleChange = e => {
        const {id, value} = e.currentTarget;
        this.setState({[id]: value})
    };
    handleCheckboxChange = e => {
        this.setState({agree: e.currentTarget.checked})
    };
    validate = () => {
        const {name, text, agree} = this.state;
        return !!(name.trim() && text.trim() && agree);
    };

    render() {
        const {name, text} = this.state;
        return (
            <form className="add">
                <input
                    id="name"
                    type="text"
                    onChange={this.handleChange}
                    className="add__author"
                    placeholder="Ваше имя"
                    value={name}
                />
                <textarea
                    id="text"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст комментария"
                    value={text}
                />
                <label className="add__checkrule">
                    <input type="checkbox" onChange={this.handleCheckboxChange}/> Я
                    согласен с правилами Сервиса MiminComment
                </label>
                <button
                    className="add__btn"
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}
                >
                    Комментировать
                </button>
            </form>
        )
    }
}




export { Add }
