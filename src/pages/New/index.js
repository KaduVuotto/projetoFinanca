import React, { useState } from 'react';
import { View, Text, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';

import Header from '../../components/Header';

import { Background, Input, SubmitButton, SubmitText } from './styles';
import Picker from '../../components/Picker';

export default function New() {
  const [value, setValue] = useState('');
  const [type, setType] = useState(null);


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />
        <SafeAreaView style={{ alignItems: 'center' }}>
          <Picker
            onChange={setType}
            type={type}
          />
          <Input
            placeholder='Valor do Registro (em R$)'
            keyboardType='numeric'
            returnKey='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
          <SubmitButton>
            <SubmitText>REGISTRAR</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}