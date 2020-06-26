for understanding setState().
setState() has a delay.
https://stackoverflow.com/questions/42018342/is-there-a-synchronous-alternative-of-setstate-in-reactjs
-------------------------------------------------------------------------------------------------------
It has a delay

changeButtonColor = () => {
        const idOfHotButton = document.getElementById("hotButton");
        this.setState( {numberOfClicks: this.state.numberOfClicks + 1 } );

        console.log(this.state.numberOfClicks);

        if(this.state.numberOfClicks === 3){
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
-------------------------------------------------------------------------------------------------------
 
-------------------------------------------------------------------------------------------------------
 It doesn't have a delay
 
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
 -------------------------------------------------------------------------------------------------------
