import styled from 'styled-components/native'

export const Background = styled.View`
flex:1;
background-color:#009fe3;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'white',
    textAlign: 'left',
})`
height:50px;
width:90%;
background-color:#0062c9;
border-radius:12px;
font-size:18px;
margin-top:30px;
color: #FFF;
padding-left:10px;
`;
export const SubmitButton = styled.TouchableOpacity`
height:50px;
width:50%;
background-color:#0062c9;
border-radius:12px;
align-items:center;
justify-content:center;
margin-top:30px;
`;
export const SubmitText = styled.Text`
font-size:18px;
font-weight:500;
color: #FFF;
`;