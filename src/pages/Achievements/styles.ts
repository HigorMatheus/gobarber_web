import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  height: 100vh;
`;


export const Content = styled.div`
  width: 720px;
  /* height:400px; */
  /* margin-top: 52px; */

 
  display: grid;

  grid-template-rows: 1fr 1fr  3fr;
  grid-template-columns: 3fr 1fr 1fr 2fr  ;

  grid-template-areas: 
        'profile profileconquitas profileconquitas profileconquitas '
        'profile  profileconquitas profileconquitas profileconquitas'
        'plataforma plataforma conteudos conteudos ';
`;


export const Profile = styled.div`
  /* margin: 2.5px; */
  height: 280px;
  width: 293px;
  border-radius: 8px;
  background : #202024;
  grid-area: profile;
  font-family: Rubik;

  display: flex;
  flex-direction: column;

  svg{
    margin: 5px;
    font-size: 14px;
  }

  img {
    height:150px;
    width:150px;
    position: relative;
    border-radius: 50%;
    /* border: 5px solid #3333ff; */
    border: 5px solid #202024;
    margin: auto;
    background: #007EDC;
    box-shadow: 0px 0px 20px 2px rgba(0, 126, 220, 0.25);
  }



    div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
      h1{
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 30px;
        text-align: center;

        color: #007EDC;

        text-shadow: 0px 0px 20px rgba(0, 126, 220, 0.4);
      }
      p{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 15px;
        text-align: center;

        color: #828284;
        margin-bottom: 28px;
        
      }

  }
`

export const ProfileConquitas = styled.div`
  /* margin: 2.5px; */
  /* margin-top: 7.5px; */
  border-radius: 8px;
  background-color :#202024;
  grid-area: profileconquitas;

  width: 412px;
  height: 280px;
  margin-left: auto;
 
  svg{
      font-size: 15px;
      margin-left: auto;
      color: #C4C4C4;
      margin: 9px 9px auto 392px;
    }

  /* div{
    display: flex;
    h1{
      width: 100%;
      text-align: center;
    font-size: 15px;
    margin: 5px;
    color: #636360;
    font-family: 'Open Sans';
    
    }

 
  } */

  section{
    margin-top: -10px;
    display: flex;
    justify-content: center;
    padding: 8px;
    flex-direction: column;
  } 
`
export const AchievementIten = styled.div`
 
      /* margin: 10px; */
      width: 58px;
      height: 75px;
      display: flex;
      justify-content: space-between;
      position: relative;
      margin-left: 60px;

      div{
        width: 37px;
        height: 38px;
        display: flex;
        flex-direction: column;
      
        img{
            width: 37px;
            height: 38px;
            border-radius: 50%;
            margin: auto
        }
        span{
          margin-top: 5px;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: normal;
          font-size: 9px;
          line-height: 12px;
          text-align: center;
        }
      }

        p{
          position: absolute;
          width: 207px;
          height: 40px;
          margin-left: 45px;
          margin-top: 10px;
        /* left: 797px;
        top: 126px; */
          font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 20px;

        color: #C4C4C4;

        }

     
      

     
  
`

export const Plataforma = styled.div`
  
  width: 450px;
   height: 461px;
  padding: 10px;
  border-radius: 8px;
  background-color :#202024;
  grid-area: plataforma;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img{
    width: 172px;
    height: 171px;

    margin: auto;
    
  }

  h1{
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    text-align: center;

  }
  span{
    font-size: 15px;
    color: #636360;
  }

  p{ 
    margin-top: 10px;
    font-size: 15px;
    color: #636360;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  }
  strong{
    color: #008739;
  }

  a{
    margin: 25px;
    text-decoration: none;
    color: #636360;
    border-bottom: 30px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  }
`

export const Conteudos = styled.div`
  /* margin: 2.5px; */
  /* margin-top: 22.5px; */
  margin-left: auto;
  width: 255px;
  height: 461px;
  padding: 10px;
  border-radius: 8px;
  background-color :#202024;
  grid-area: conteudos;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img{
    width: 163px;
    height: 142px;

    margin: auto;
    
  }

  h1{
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 30px;
    /* identical to box height, or 75% */

    text-align: center;

    color: #FFFFFF;
  }
  span{
    font-size: 15px;
    color: #636360;
  }

  p{ 
    font-family: 'Rubik';
    margin-top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #828284;
  }
  a{
    margin: 25px;
    text-decoration: none;
    color: #636360;
    border-bottom: 30px;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
  }
`