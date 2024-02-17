/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

export default function LocationSearch() {
  const [input, setInput] = useState('');
  const [data, setData] = useState();
  const onChangeText = async text => {
    setInput(text);
    console.log('get data');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <TextInput
        placeholder="Find Location"
        value={input}
        onChangeText={onChangeText}
        className="w-full p-5 border-2 border-[#4F9171] tex-lg rounded-lg"
      />
    </TouchableWithoutFeedback>
  );
}
