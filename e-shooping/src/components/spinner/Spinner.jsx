import React from 'react';
import { useSelector } from 'react-redux';
import './spinner.css';
const Spinner = () => {
  const { loaderStatus } = useSelector(state => state.loader);
  return (
    <div className={'loader ' + (loaderStatus ? '' : 'hide')}>
      <div className="carriage">
        <div className="box" />
        <div className="box second" />
        <div className="box spacer" />
        <div className="box spacer" />
        <div className="box third" />
        <div className="box fourth white" />
      </div>
    </div>
  );
};

export default Spinner;