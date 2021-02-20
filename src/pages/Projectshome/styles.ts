import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  height: 100vh;
`;


export const Content = styled.div`
  width: 999px;
  height:558px;
  /* margin-top: 52px; */

 
  display: grid;

  grid-template-rows: 1fr 1fr  1fr;
  grid-template-columns: 2fr 1fr 1fr ;

  grid-template-areas: 
        'information selectproject selectproject  '
        'information  addproject addproject '
        'information community  support';
`;


export const Information = styled.div`
  height: 558px;
  width: 384.45px;
  grid-area: information;
  text-align: center;
  justify-content: space-between;

  h1{
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 40px;

    color: #FFFFFF;
  }

  span{
    width: 196px;
    height: 18px;
    font-family: 'Rubik';
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 5px;
    color: #828284;
  }

  p{
    margin-top:49px;
    margin-bottom: 8px;
  }

  div{
    width: 384.45px;
    height: 236px;

 

    background: #3A3A3E;
    border-radius: 30px;
    display: flex;

    align-items: center;
    justify-content: center;
    margin-top: auto;

    svg{
      font-size: 100px;
      transform: rotate(90deg);
    }
 
  }
`

export const LinkSelectproject =styled(Link)`
text-decoration: none;
  width: 526px;
  height: 203px;


  background: rgba(32, 32, 36, 0.6);
  border: 1px solid #3A3A3E;
  box-sizing: border-box;
  border-radius: 16px;
  grid-area: selectproject;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover{
    border: 1px solid #40C676;
  }
  img{
    width: 80px;
    height: 80px;
  }

  h1{
    margin-top: 14px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #C4C4C4;
  }
`;

export const  LinkAddproject =styled(Link)`
  text-decoration: none;
  width: 526px;
  height: 166px;

  margin-top: 18px;

  background: rgba(32, 32, 36, 0.6);
  border: 1px solid #3A3A3E;
  box-sizing: border-box;
  border-radius: 16px;
  grid-area:addproject;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover{
    border: 1px solid #40C676;
  }

  img{
    width: 80px;
    height: 80px;
  }
  h1{
    margin-top: 13px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    text-align: center;

    color: #C4C4C4;
  }
`;

export const  LinkCommunity =styled(Link)`
  text-decoration: none;

  width: 254px;
  height: 152px;


  background: rgba(32, 32, 36, 0.6);
  border: 1px solid #3A3A3E;
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 18px;

  grid-area: community;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover{
    border: 1px solid #40C676;
  }

  h1{
    margin-top:12px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #C4C4C4;

  }
`;

export const  LinkSupport =styled(Link)`
text-decoration: none;

  width: 254px;
  height: 152px;


  background: rgba(32, 32, 36, 0.6);
  border: 1px solid #3A3A3E;
  box-sizing: border-box;
  border-radius: 16px;
  margin-top: 18px;
  margin-left: 18px;

  grid-area: support;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover{
    border: 1px solid #40C676;
  }
  h1{
    margin-top:12px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #C4C4C4;

  }
`;
