import React from 'react';
import { Text } from 'native-base';

const ErrorMessage = ({ message }) => (
  message.length
  ? <Text style={{marginTop: 10, color: 'red'}}>{message}</Text>
  : null
);

export default ErrorMessage;
