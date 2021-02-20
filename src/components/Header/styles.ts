import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 76px;
  left: 0px;
  top: 0px;
  display: flex;
  background: #202024;
  justify-content: space-between;


  div{
    align-items: center;
    display: flex;
    width: 1440px;
    margin: 0 auto;
   a{
     text-decoration: none;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    margin: 25px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    color: #fff;

    svg{
      font-size: 16px
    }

   
  }

  > svg {
    margin-left: auto;
    font-size: 35px;
    color: #40C676;
  
  }

  div{
    width:211px;
    margin-left: auto;
    margin-right:52px;
    
  

  h1{
    font-family:'Open Sans';
    font-size: 16px;
    color:#fff;
    /* margin-left: 28px;
    margin-right: 17px */
  }

  img {
    height:52px;
    width:52px;
 
    border-radius: 50%;
    border: 2px solid #202024;

    background: #007EDC;
    box-shadow: 0px 0px 5px 2px rgba(0, 126, 220, 0.25);

   margin-left: auto;
   /* margin-right: 52px */
  }

  }

  
  }
`;
