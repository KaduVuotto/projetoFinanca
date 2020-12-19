import React from 'react';
import { View, Text } from 'react-native';

import { Container, Titulo, Nome, BotaoSujeito, BotaoText } from './src/styles'

export default function projetoFinanca() {
  return (
    <Container>
      <Titulo cor='#FF0000' tamanho='50' >projetoFinanca</Titulo>
      <Nome>Olá, Kadu</Nome>

      <BotaoSujeito onPress={ () => alert('Clicou') }>
        <BotaoText>Entrar</BotaoText>
      </BotaoSujeito>

    </Container>
  );
}

