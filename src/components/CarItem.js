import React, { Component } from 'react'

class CarItem extends Component {
    render(){
        return (
            <div className="carItem">
                <div className="carItem__header">
                    <h3 className="title">{ this.props.car.make + " " + this.props.car.model }</h3>
                    <h4 className="subTitle">{ this.props.car.year + " " + this.props.car.variant + " " + this.props.car.trim }</h4>
                </div>
                <div className="carItem__mainImage">
                    <img src={this.props.car.photo} alt={ this.props.car.make + " " + this.props.car.model }/>
                </div>
                <div className="detail">
                    <div className="detail__price">
                        {this.props.car.price.current_price}
                    </div>
                </div>

                <div className="spec">
                    <ul className="spec__list">
                        <li>
                            {this.props.car.engine_size}
                        </li>
                        <li>
                            {this.props.car.mileage}
                        </li>
                        <li>
                            {this.props.car.fuel_type}
                        </li>
                        <li>
                            {this.props.car.transmission_type}
                        </li>
                        <li>
                            {this.props.car.body_type}
                        </li>
                    </ul>
                </div>

                <div className="dealerInfo">
                    <span className="dealerInfo__name">{this.props.car.dealer.name}</span>
                    <span className="dealerInfo__contact">{this.props.car.dealer.phone}</span>
                </div>
            </div>
        )
    }
}

export default CarItem