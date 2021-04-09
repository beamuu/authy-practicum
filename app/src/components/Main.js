import React, { Component } from 'react';
import '../App.css';


const UnlockLogo = "https://raw.githubusercontent.com/joaobborges/minimal-icons/99bfaadcfe71de07ad6dae744052c8660dbbfa9d/svg/ic-locker-closed.svg";
const LockLogo = "https://raw.githubusercontent.com/joaobborges/minimal-icons/99bfaadcfe71de07ad6dae744052c8660dbbfa9d/svg/ic-locker-open.svg"
const profilePlaceHolder = 'https://raw.githubusercontent.com/joaobborges/minimal-icons/99bfaadcfe71de07ad6dae744052c8660dbbfa9d/svg/ic-smile.svg'
const noNamePlaceHolder = 'No one is using this card reader.'

const DSIM = {
    userid: 0b1101,
    username: "nutchanonc",
    display: "Beamu",
    profLink: "https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.6435-9/121496537_2663797753934858_2949128898054520551_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=NKRomX20W3EAX-huvc1&_nc_ht=scontent.fbkk6-2.fna&oh=598124317de78cb09a437cd594807c54&oe=6097CCF0"
}


class Main extends Component {
    state = {
        active: false,
        activeDisplayName: null,
        activeUsername: null,
        activeTimeStamp: null,
        activeUserProfile: null,
    }
    getUserInfo = () => {
        this.setState({
            active: true,
            activeDisplayName: DSIM.display,
            activeUsername: DSIM.username,
            activeTimeStamp: null,
            activeUserProfile: DSIM.profLink
        })
    }
    logMe = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center" style={{ marginTop: '10%' }}>
                    <div className="card shadow-behind-box" style={{ width: '80%' }}>
                        <div className="card-header" style={{ textAlign: 'left' }}>
                            <img src={this.state.active ? LockLogo : UnlockLogo} className="shift-logo-up" />
                        &nbsp; &nbsp;<b>Card Reader</b>&nbsp;({this.state.active ? "Active" : "Not Active"})
                     </div>
                        <div className="card-body bg-white ease" style={{ textAlign: 'left' }}>
                            <br />

                            <div className="row align-items-center">
                                <div className="col-2">
                                    <img src={this.state.active ? this.state.activeUserProfile : profilePlaceHolder} className="rounded float-left" style={{ width: '100px', height: '100px' }} />
                                </div>
                                <div className="col-10 display-name">{this.state.active ? this.state.activeDisplayName : noNamePlaceHolder} &nbsp; &nbsp;
                                    <span className="display-username">{this.state.active ? `(@${this.state.activeUsername})` : ""}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <button type="button" className="btn btn-outline-primary" onClick={this.getUserInfo}>Load User</button>
                <button type="button" className="btn btn-outline-primary" onClick={this.logMe}>Console.log State</button>
            </div>
        )
    }
}
export default Main;
