import styled from 'styled-components/native';

export const Background = styled.View`
flex:1;
background-color:#049be3;
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items:center;
justify-content:center;
`;

export const Logo = styled.Image`
width:220px;
height:170px;
margin-bottom:30px;
`;

export const AreaInput = styled.View`
flex-direction:row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(225,225,225,0.60)'
})`
background: #0464ca;
width:80%;
font-size:17px;
color:#FFF;
margin-bottom:15px;
padding:5px;
padding-left:15px;
border-radius:8px;
`;

export const ContainerSubmit = styled.View`
flex-direction:row;
margin-top:20px;
align-items:center;
justify-content:center
`;

export const LogoSubmit = styled.Image`
width:50px;
height:50px;
right:-20px;
top:-6px;
z-index:1;
`;

export const SubmitButton = styled.TouchableOpacity`
align-items:center;
justify-content:center;
background-color:#0464ca;
width:120px;
height:31px;
border-radius:7px;
margin-top:26px;
margin-bottom:36px;
`;

export const SubmitText = styled.Text`
font-size:13px;
color: #FFF;
`;

export const Link = styled.TouchableOpacity`
align-self: flex-end;
height:45px;
width:100%;
align-items:center;
justify-content:center;
border-top-left-radius:15px;
border-top-right-radius:15px;
background-color:#0464ca;
position:absolute;
bottom: 0px;
`;

export const LinkText = styled.Text`
color: #FFF;
`;

export const AreaInputRegister = styled.View`
flex-direction:row;
`;

export const InputRegister = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(225,225,225,0.60)'
})`
background: #009fe3;
width:85%;
font-size:17px;
color:#FFF;
margin-bottom:15px;
padding:5px;
padding-left:15px;
border-radius:8px;
`;

export const SubmitButtonRegister = styled.TouchableOpacity`
align-items:center;
justify-content:center;
background-color:#009fe3;
width:120px;
height:31px;
border-radius:7px;
margin-top:26px;
margin-bottom:36px;
`;

export const SubmitTextRegister = styled.Text`
font-size:13px;
color: #FFF;
`;