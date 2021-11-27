import React from "react";

class AppBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar />
                <InboxArea />
                <UtilityBar />
            </div>
        )
    }
}

export default AppBody;