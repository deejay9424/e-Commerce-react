import React, { Component } from 'react'

export default class Default extends Component {
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-upperccase pt-5">
                        <h1 className="display-3">
                            404
                        </h1>
                        <h1 >Error</h1>
                        <h3>Requested URL<span className="text-danger">
                        {"  "+this.props.location.pathname}</span> is not found</h3>
                    </div>
                </div>
            </div>
        )
    }
}
