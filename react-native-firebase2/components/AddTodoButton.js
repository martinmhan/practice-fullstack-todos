import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const AddTodoButton = ({ displayDialog }) => (
  <TouchableOpacity
    style={style}
    onPress={displayDialog}
  >
    <Icon name="ios-add" />
  </TouchableOpacity>
);

const style = {
  margin: 10,
  borderWidth: 1,
  borderColor: 'green',
  borderRadius: 50,
  backgroundColor: 'green',
  width: 40,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
};

export default AddTodoButton;
