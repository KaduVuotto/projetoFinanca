import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableWithoutFeedback } from 'react-native';

import { Container, IconView, ContentSpend, SpendTitle, SpendDescription, SpendValue, ViewValue } from './styles'

export default function SpendHistoryItem({ item, deleteItem }) {
    return (
        <TouchableWithoutFeedback onLongPress={() => deleteItem(item)} >
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
                        {item.type === 'Receita' ? '+' : '-'} R$ {item.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                    </SpendValue>
                </ViewValue>
            </Container>
        </TouchableWithoutFeedback>
    );
}