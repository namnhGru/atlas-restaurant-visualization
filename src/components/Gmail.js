import React from "react";
import SearchBar from "./SearchBar";

class Gmail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <SearchBar />
                {/* <AppBody /> */}
            </div>
        )
    }
}

export default Gmail;