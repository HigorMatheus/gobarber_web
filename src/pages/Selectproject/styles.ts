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
  /* display: flex; */
 
  display: grid;

  grid-template-rows: 1fr 1fr ;
  grid-template-columns: 1fr ;

  grid-template-areas: 
        'information contentSelectproject';
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

export const ContentSelectproject =styled.div`
  width: 526px;
  height: 556px;
  left: 693px;
  top: 181px;

  background: rgba(32, 32, 36, 0.6);
  border: 1px solid #40C676;
  box-sizing: border-box;
  border-radius: 16px;
  grid-area: contentSelectproject;

  display: flex;
  align-items: center;
  flex-direction: column;
  
 
`;
