import React from "react";

class SearchBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <button>Search button</button>
                <input />
                <button>Filter button</button>
            </div>
        )
    }
}

export default SearchBox;