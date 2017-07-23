import React, {Component} from 'react';
import {connect} from "react-redux";

import '../resources/css/game.css';

import Loading from "./Loading";
import ViewBox from "./layout/ViewBox";
import TextBox from "./layout/TextBox";

import {fetchData} from "../actions/dataActions";

class Game extends Component {
    componentWillMount() {
        this.props.dispatch(fetchData());
    }

    currentDisplay() {
        const {pages, current} = this.props;
        if (pages.length !== 0) {
            return pages.find(function (page) {
                return page.ID === current;
            });
        }
        return pages;
    }

    render() {
        const {fetching, fetched, pages} = this.props;

        if (!fetched || fetching || pages.length === 0) {
            return (
                <Loading/>
            );
        } else {
            return (
                <div className="app">
                    <ViewBox page={this.currentDisplay()}/>
                    <TextBox page={this.currentDisplay()}/>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        fetching: state.data.fetching,
        fetched: state.data.fetched,
        pages: state.data.pages,
        current: state.game.current
    }
}

export default connect(mapStateToProps)(Game);
