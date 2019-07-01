import React, {Component} from 'react'
import CarItem from './CarItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carsActions from '../actions/carsActions';
import PropTypes from 'prop-types';


class CarList extends Component {
    componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
        this.props.carsActions.fetchCars();
      }
     
     renderData() {
       return <div>
           {
               this.props.cars.map(car => <CarItem key={car.id} car={car} />)
           }
        </div>;
     }

    render(){
        return (
            <div className="carList">
                { this.props.cars.length > 0 ?
                    this.renderData()
                :
                <div className="error">
                    No car data. :(
                </div>
                }
            </div>
        )
    }
}

CarList.propTypes = {
    carsActions : PropTypes.object,
    cars: PropTypes.array
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

function mapDispatchToProps(dispatch) {
    return {
        carsActions: bindActionCreators(carsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList)

