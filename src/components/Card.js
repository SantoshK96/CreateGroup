import React from 'react';

class Card extends React.Component {
    state = {
        selected: 'false'
    }
    onClickToggle = () => {
        if (this.state.selected === 'false') {
            this.setState({ selected: 'true' });
        }
        else {
            this.setState({ selected: 'false' });
        }
    }
    render() {
        return (
            <div className="tc bg-light-green dib br1 pa1 ma1 grow shadow-5 fl w-50 w-25-m w-20-l pa2" onClick={this.onClickToggle}>
                <img alt='dish' src={this.props.image} className="db outline black-10" />
                {this.props.name}
                { this.state.selected === 'true'
                    ? <p className="em em-heavy_check_mark"></p>
                    : null
                }
            </div>
        );
    }
}

export default Card;