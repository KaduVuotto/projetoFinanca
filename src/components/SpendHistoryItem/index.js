import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, IconView, ContentSpend, SpendTitle, SpendDescription, SpendValue, ViewValue } from './styles'

export default function SpendHistoryItem({ item }) {
    return (
        <Container>
            <IconView>
                <Icon
                    name={item.type === 'Receita' ? 'arrow-up' : 'arrow-down'}
                    color={item.type === 'Receita' ? '#13a155' : '#ff8786'}
                    size={30} />
            </IconView>
            <ContentSpend>
                <SpendTitle>
                    {item.name}
                </SpendTitle>
                <SpendDescription>
                    {item.type}
                </SpendDescription>
            </ContentSpend>
            <ViewValue>
                <SpendValue type={item.type}>
                    {item.type === 'Receita' ? '+' : '-'} R$ {item.value}
                </SpendValue>
            </ViewValue>
        </Container>
    );
}