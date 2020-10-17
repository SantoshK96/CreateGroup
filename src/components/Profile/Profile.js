import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardname: "",
            cardnumber: "",
            cardotp:""
        };
    }
    onFormChange = (event) => {
        switch (event.target.name) {
            case 'card-name':
                this.setState({ cardname: event.target.value })
                break;
            case 'card-number':
                this.setState({ cardnumber: event.target.value })
                break;
            case 'card-otp':
                this.setState({ cardotp: event.target.value })
                break;
            default:
                return;
        }
    }
    buySuccess = (event) => {
        if (this.state.cardname !== "" && this.state.cardnumber !== ""){
            if(this.state.cardotp==="123456")
                alert("Successfully bought Recipe");
            else    
            alert("Invalid OTP entered");
        }
        else {
            alert("Invalid Card Details");
        }
        this.props.toggleModal();
    }
    render() {
        const { recipe } = this.props;
        return (
            <div className="profile-modal">

                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 bg-white vh-90 overflow-auto" >
                    <div className="tc dib br3 pa3 ma2 bw2 w-90 " >
                        <img alt='dish' src={recipe.image} className="db center vh-30" />
                        <div className="tc pa0 ma0">
                            <h2 className="tc pa0 ma0">
                                {recipe.name}
                            </h2>
                            <h4 className="tc pa0 ma0">Price : {recipe.price}</h4>
                            {(recipe.category) ? <h4 className="tc pa0 ma0" >category : {recipe.category}</h4> : ""}
                            {(recipe.label) ? <h4 className="tc pa0 ma1 bg-light-green">{recipe.label}</h4> : ""}
                            <p>{recipe.description}</p>
                        </div>

                        <h3>Enter Card Details to Buy</h3>
                        <hr />
                        {/* <label className="mt2 fw6" htmlFor="user-name">Name:</label> */}
                        <input
                            onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder="Name"
                            type="text"
                            name="card-name"
                            id="name"
                        />
                        <input
                            onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder="Card Number"
                            type="text"
                            name="card-number"
                            id="cardno"
                        />
                        <input
                            onChange={this.onFormChange}
                            className="pa2 ba w-100"
                            placeholder="Enter OTP"
                            type="text"
                            name="card-otp"
                            id="otp"
                        />
                        <div className='mt4' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                                onClick={this.buySuccess}
                            >Buy</button>
                            <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                                onClick={this.props.toggleModal}
                            >Cancel</button>
                        </div>
                    </div>

                </article>

            </div>
        );
    }

}

export default Profile;