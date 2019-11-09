import React, { Component } from 'react';


class Edit extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <button>Cancel</button><button>Save</button>
                <br /><input placeholder="Movie Title" />
                <br /><input type="text" />
                <p>Edit Page</p>
            </div>
        );
    }
}

export default Edit;