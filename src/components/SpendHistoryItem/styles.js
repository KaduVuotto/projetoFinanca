import styled from 'styled-components/native'

export const Container = styled.View`
margin-bottom:15px;
padding:10px;
shadow-color: #000;
shadow-offset: { width: 0; height: 2; };
shadow-opacity: 0.25;
shadow-radius: 3.84;
elevation: 5;
background-color:#FFF;
width:90%;
height:100px;
align-self:center;
border-radius:20px;
flex-direction:row;
`;

export const IconView = styled.View`
flex:1;
align-items:center;
justify-content:center;
`;

export const ContentSpend = styled.View`
flex:2;
align-items:flex-start;
justify-content:center;
`;

export const SpendTitle = styled.Text`
font-size:20;
`;
export const SpendDescription = styled.Text`
font-size:12;
color:#c0c0c0;
`;
export const SpendValue = styled.Text`

`;
export const ViewValue = styled.View`
flex:1;
align-items:center;
justify-content:center;
`;