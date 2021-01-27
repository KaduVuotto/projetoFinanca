import styled from 'styled-components/native'

export const Background = styled.View`
flex:1;
background-color:#009fe3;
`;

export const Container = styled.View`
align-items:center;
justify-content:center;
`;

export const Name = styled.Text`
color:#FFF;
font-size:18px;
font-weight:bold;
margin-bottom:10px;
`;

export const BalanceMoney = styled.View`
height:230px;
width:230px;
border-radius:230px;
background-color:#109fdb;
align-items:center;
justify-content:center;
`;

export const Title = styled.Text`
color:#FFF;
text-align:center;
font-size:16px;
`;

export const ContentBalance = styled.View`
height:180px;
width:180px;
border-radius:180px;
background-color:#009fe3;
shadow-color: #000;
shadow-offset: { width: 0; height: 2; };
shadow-opacity: 0.25;
shadow-radius: 3.84;
elevation: 5;
align-items:center;
justify-content:center;
`;

export const Money = styled.Text`
color:#FFF;
font-size:22px;
font-weight:bold;
`;

export const Balance = styled.Text`
color:#52c8ff;
position:absolute;
bottom:50px;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15,
})`
margin-top:15px;
padding-top:20px;
background-color:#FFF;
border-top-left-radius:15px;
border-top-right-radius:15px;
margin-left:8px;
margin-right:8px;
`;

export const FooterList = styled.View`
height:26px;
`;