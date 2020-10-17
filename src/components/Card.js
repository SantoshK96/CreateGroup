import React from 'react';
import Modal from '../components/Modal/Modal';
import Profile from './Profile/Profile';
class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            isbillingOpen: false
        };
    }
    toggleModal = (event) => {
        this.setState(
            {
                isbillingOpen: !this.state.isbillingOpen
            }
        )
        return;
    }
    render() {
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-50 w-25-ns vh-90'>
                {this.state.isbillingOpen ? <Modal>
                    <Profile
                        isProfileOpen={this.state.isbillingOpen}
                        toggleModal={this.toggleModal}
                        recipe={this.props}
                    />
                </Modal> : ""}
                <div>
                    <img alt='dish' src={this.props.image} className="w-100 db outline black-10 vh-50" />
                    <div className="w-100 db overflow-y-auto-m">
                        <div >
                            <h3 className="f4-ns mv0">
                                <span>
                                    {this.props.name}
                                </span>
                            </h3>
                            <h4>Price : {this.props.price}</h4>
                        </div>

                        <p>{this.props.description}</p>
                    </div>
                </div>
                <button className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-pink ma2" value={this.props.name} onClick={this.toggleModal}>Buy</button >
            </div>
        );
    }
}

export default Card;