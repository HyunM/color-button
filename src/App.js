import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 0
        }
    }

    componentDidMount() {
        // if(this.state.numberOfClicks > 18){
        //     this.setState({numberOfClicks: 0});
        // }
    }

    componentDidUpdate() {
        if(this.state.numberOfClicks > 17){
            this.setState({numberOfClicks: 0});
        }
    }

    changeButtonColor = () => {
        const idOfHotButton = document.getElementById("hotButton");
        this.setState({ numberOfClicks: this.state.numberOfClicks + 1 },
            () => {
                console.log(this.state.numberOfClicks);

                if (this.state.numberOfClicks === 3) {
                    idOfHotButton.className = "second";
                } else if (this.state.numberOfClicks === 6) {
                    idOfHotButton.className = "third";
                } else if (this.state.numberOfClicks === 9) {
                    idOfHotButton.className = "fourth";
                } else if (this.state.numberOfClicks === 12) {
                    idOfHotButton.className = "fifth";
                } else if (this.state.numberOfClicks === 15) {
                    idOfHotButton.className = "sixth";
                } else if (this.state.numberOfClicks === 18) {
                    idOfHotButton.className = "first";
                }
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Hot Button Test</h1>
                <input id="hotButton" className="first" type="button" value="Hot Button" onClick={this.changeButtonColor}/>
            </div>
        );
    }
}

export default App