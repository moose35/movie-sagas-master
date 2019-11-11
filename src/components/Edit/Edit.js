import React, { Component } from 'react';


class Edit extends Component {
    // Renders the entire app on the DOM

    cancelButton = (event) =>{
        // sends user back to Details component when clicked
        event.preventDefault();
        console.log('Cancel clicked');
        this.props.history.push('/details');
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.cancelButton}>Cancel</button><button>Save</button>
                <br /><input placeholder="Movie Title" />
                <br /><input type="text" />
                <p>Edit Page</p>
                put route
                <pre>{JSON.stringify(this.props.reduxState, null, 2)}</pre>
            </div>
        );
    }
}

export default Edit;