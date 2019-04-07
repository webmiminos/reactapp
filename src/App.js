import React from 'react';
import { Add } from './components/Add'
import { Comments } from './components/News'

import './App.css';






class App extends React.Component {
    state = {
        comments: null,
        isLoading: false,
    };

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            let comments = localStorage.getItem('comments');
            comments = JSON.parse(comments) || [];

            this.setState({
                isLoading: false,
                comments: comments.map((item) => {
                    item.date = new Date(item.date);
                    return item;
                })
            })
        }, 1000)
    }

    handleAddComment = data => {
        const nextComments = [data, ...this.state.comments];
        this.updateComments(nextComments)
    };
    handleRemoveComment = removingComment => {
        const nextComments = this.state.comments.filter((comment) => {
            return comment.id !== removingComment.id;
        });
        this.updateComments(nextComments)
    };
    updateComments = (comments) => {
        localStorage.setItem('comments', JSON.stringify(comments));
        this.setState({comments: comments})
    };

    render() {
        const {comments, isLoading} = this.state;

        return (
            <React.Fragment>
                <Add onAddComment={this.handleAddComment}/>
                <h3>Комментарии</h3>
                {isLoading && <p>Загружаю...</p>}
                {Array.isArray(comments) && <Comments
                    onRemoveComment={this.handleRemoveComment}
                    data={comments}
                />}
            </React.Fragment>
        )
    }
}
// -------------------------------------------------------------------------
export default App;
