import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth'
import { Background, Input, SubmitButton, SubmitText } from './styles';
import Picker from '../../components/Picker';
import firebase from '../../services/firebaseConnection';
import { format } from 'date-fns'

export default function New() {
  const navigation = useNavigation();
  const [valueInput, setValueInput] = useState('');
  const [valueNameInput, setValueNameInput] = useState('');
  const [typePicker, setTypePicker] = useState('Registro');
  const { user: currentUser } = useContext(AuthContext)

  async function handleAdd() {
    let uid = currentUser.uid;

    //Gerando historico
    let key = await firebase.database().ref('historico').child(uid).push().key;
    await firebase.database().ref('historico').child(uid).child(key).set({
      type: typePicker,
      name: valueNameInput,
      value: parseFloat(valueInput),
      date: format(new Date(), 'dd/MM/yyyy')
    })

    //Atualizar o saldo
    let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let balance = parseFloat(snapshot.val().balance);

      typePicker === 'Despesa' ? balance -= parseFloat(valueInput) : balance += parseFloat(valueInput);

      user.child('balance').set(balance);


    });
    Keyboard.dismiss();
    setTypePicker('Registro')
    setValueNameInput('')
    setValueInput('');
    navigation.navigate('Home')
  }

  function handleSubmit() {
    Keyboard.dismiss();

    if (isNaN(parseFloat(valueInput)) || typePicker === 'Registro') {
      alert('Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo ${typePicker} - Valor: ${parseFloat(valueInput)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    )



  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />
        <SafeAreaView style={{ alignItems: 'center' }}>
          <Picker
            onChange={setTypePicker}
            type={typePicker}
          />
          <Input
            placeholder='Nome do registro'
            returnKey='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valueNameInput}
            onChangeText={(text) => setValueNameInput(text)}
          />
          <Input
            placeholder='Valor do Registro (em R$)'
            keyboardType='numeric'
            returnKey='next'
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valueInput}
            onChangeText={(text) => setValueInput(text)}
          />
          <SubmitButton onPress={handleSubmit}>
            <SubmitText>REGISTRAR</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}