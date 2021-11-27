import React from "react";
import SearchBox from "./search-bar/SearchBox";
import Settings from "./search-bar/Settings";

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <LogoCorner />
                <SearchBox />
                <Settings />
            </div>
        )
    }
}

export default SearchBar;