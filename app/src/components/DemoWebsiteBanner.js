import React, { Component } from 'react';


class DemoWebsiteBanner extends Component {
    state = {
        agree: false,
    }
    agree = () => {
        console.log("agreement made");
        this.setState({
            agree: true,
        })
    }
    render() {
        return (
            this.state.agree ? null :
            <div className="d-flex justify-content-center" style={{marginTop: '10%'}}>
                <div className="card text-center " style={{width: '60%'}}>
                    <div className="card-header">
                        Creator's proclaims
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">This is a Demo Website!</h5>
                        <p className="card-text">
                            This is a website for demonstrating the "Unique ID Card Reader" which is the part of Practicum's 
                            project.
                        </p>
                        <button
                            type="button" 
                            className="btn btn-outline-primary btn-sm"
                            onClick={this.agree}
                            >OK, I got it.</button>
                    </div>
                    <div className="card-footer text-muted">
                        Created by "PO The Dragon Warrior" group 
                    </div>
                </div>
            </div>
        )
    }
}
export default DemoWebsiteBanner;