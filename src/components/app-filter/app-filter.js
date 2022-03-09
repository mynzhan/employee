import { Component } from 'react';
import './app-filter.css'

class AppFilter extends Component{
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    toTop = () => {
        
    }

    render() {
        return (
            <div className="btn-group">
                <button
                    className="btn btn-light"
                    type="button"
                    onClick={this.allFilms}>
                    All films
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.toTop}>
                    Top
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button">
                    Greatest 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;