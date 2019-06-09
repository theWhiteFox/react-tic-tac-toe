import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
     return <Square />
    }
    render() {
        const status = 'Next Player: X';

        return(
            <div>
                {this.renderSquare(0)}
            </div>
        )
    }
}

ReactDOM.render(
    Board
)