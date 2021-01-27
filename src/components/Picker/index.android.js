import React from 'react';
import { PickerView } from './styles';
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { View } from 'react-native';

export default function Picker({ onChange, type }) {
    return (
        <PickerView>
            <RNPickerSelect
                style={{
                    width: '100%',
                    color: 'white',
                    fontSize: 16,
                    paddingLeft: 10
                }}
                dropdownIconColor={'white'}
                selectedValue={type}
                onValueChange={(value) => onChange(value)} >
                <RNPickerSelect.Item label='Tipo de Registro' value='Registro' />
                <RNPickerSelect.Item label='Despesa' value='Despesa' />
                <RNPickerSelect.Item label='Receita' value='Receita' />
            </RNPickerSelect>
        </PickerView>
    );
}