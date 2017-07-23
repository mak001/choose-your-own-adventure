import React, {Component} from 'react';

class ViewBox extends Component {


    renderImage() {
        let display = this.props.page.display;
        return (
            <div style={{backgroundImage: 'url(' + display.src + ')'}} title={display.title}>
            </div>
        );
    }

    renderEmbed() {
        let display = this.props.page.display;
        return (
            <embed src={display.src}>
            </embed>
        );
    }

    render() {
        let display = this.props.page.display;

        let renderMethod = '';

        if (display.type === 'img') {
            renderMethod = this.renderImage();
        } else if (display.type === 'embed') {
            renderMethod = this.renderEmbed();
        }

        return (
            <div className="view-box">
                {renderMethod}
            </div>
        );
    }
}

export default ViewBox;