import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Lbl, Inp } from './Filter.styled'

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <>
      <Lbl htmlFor={filterId}>Find contacts by name</Lbl>
      <Inp type="text" value={value} onChange={onChange} />
    </>
  )
};
  
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};