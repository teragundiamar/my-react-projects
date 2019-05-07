// import React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

// create a react component
const App = () => {
    return (
        <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
    <div className="comment">
        <a className="avatar">
        <img src="/images/avatar/small/joe.jpg" />
        </a>
        <div className="content">
        <a className="author">Joe Henderson</a>
        <div className="metadata">
            <span className="date">5 days ago</span>
        </div>
        <div className="text">
            Dude, this is awesome. Thanks so much
        </div>
        {/* <div className="actions">
            <a className="reply">Reply</a>
        </div> */}
        </div>
    </div>
    {/* <form className="ui reply form">
        <div className="field">
        <textarea defaultValue={""} />
        </div>
        <div className="ui blue labeled submit icon button">
        <i className="icon edit" /> Add Reply
        </div>
    </form> */}
</div>

    )
}


// take the react component and show it on the screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
);