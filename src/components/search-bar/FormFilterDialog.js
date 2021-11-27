import React from "react";

class FormFilterDialog extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <span>
                        <label>From</label>
                        <input></input>
                    </span>
                    <span>
                        <label>To</label>
                        <input></input>
                    </span>
                    <span>
                        <label>Subject</label>
                        <input></input>
                    </span>
                    <span>
                        <label>Has the words</label>
                        <input></input>
                    </span>
                    <span>
                        <label>Doesn't have</label>
                        <input></input>
                    </span>
                    <span>
                        <label>Size</label>
                        <input></input>
                    </span>
                    <span>
                        <label>Date within</label>
                        <input></input>
                    </span>
                    <span>
                        <label>Search</label>
                        <input></input>
                    </span>
                    <span>
                        <label>Has attachment</label>
                        <input></input>
                    </span>
                    <span>
                        <label>Don't include chats</label>
                        <input></input>
                    </span>
                    <div>
                        <button>Create filter</button>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormFilterDialog;