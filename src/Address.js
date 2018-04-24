import React, { Component } from 'react';

class Address extends Component {
    constructor(props) {
        super(props);

        this.addressChange = this.addressChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
    }

    addressChange(event) {
        let temp = this.props.address;
        temp.address = event.target.value;
        this.props.toChangeAddress(temp);
    }

    cityChange(event) {
        let temp = this.props.address;
        temp.city = event.target.value;
        this.props.toChangeAddress(temp);
    }

    stateChange(event) {
        let temp = this.props.address;
        temp.state = event.target.value;
        this.props.toChangeAddress(temp);
    }

    zipChange(event) {
        let temp = this.props.address;
        temp.zip = event.target.value;
        this.props.toChangeAddress(temp);
    }

    render ()
    {
        const x = this.props.address;
        return (
            <div className="address">
                <input type="text" value={x.address} onChange={this.addressChange}/>
                <input type="text" value={x.city} onChange={this.cityChange} />
                <input type="text" value={x.state} onChange={this.stateChange} />
                <input type="text" value={x.zip} onChange={this.zipChange} />
            </div>
        );
    }
}

export default Address;