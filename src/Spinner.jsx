import './Spinner.css';
import React from 'react';

export default function Spinner(props) {
  return (
    <div class="spinner ui segment">
      <div class="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
}

Spinner.defaultProps = {
  message: 'Loading...'
};
