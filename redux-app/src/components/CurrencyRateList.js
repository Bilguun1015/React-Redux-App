import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

import LoadingScreen from './LoadingScreen';

const CurrencyRateList = props => {
  console.log('CurrencyList',props.rates)
  return (
    <>
      <h1>Get Yout Currency Rate Here</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <LoadingScreen />
        ) : (
          "EUR vs Other Currencies"
        )}
      </button>
      <h1>{props.rates.base}</h1>
      <p>{props.rates.date}</p>
      {props.rates.rates &&  Object.keys(props.rates.rates).map(key => {
        return [String(key), props.rates.rates[key]]
      }) }
      
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    rates: state.rates
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(CurrencyRateList);
