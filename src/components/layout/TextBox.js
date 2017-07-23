import React, {Component} from 'react';
import {connect} from "react-redux";

import {goTo} from "../../actions/gameActions";

class TextBox extends Component {

    mappedChoices() {
        const {page} = this.props;

        if (page.choices !== undefined) {
            const choice = page.choices[0];
            if (page.choices.length === 1 && choice.content === undefined) {
                return (
                    <li onClick={
                        () => {
                            this.props.dispatch(goTo(choice.goTo));
                        }
                    }>continue...</li>
                );
            } else {
                return page.choices.map(choice => <li key={
                    choice.goTo
                } onClick={
                    () => {
                        this.props.dispatch(goTo(choice.goTo));
                    }
                }>{choice.content}</li>);
            }
        }
    }

    render() {
        const {page} = this.props;

        return (
            <div className="text-box">
                <div className="content">
                    {page.content}
                </div>
                <ul className="choices">
                    {this.mappedChoices()}
                </ul>
            </div>
        );
    }
}

export default connect()(TextBox);