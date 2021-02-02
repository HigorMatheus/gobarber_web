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
        'profile profileinfo profileinfo profileinfo '
        'profile  profileinfo profileinfo profileinfo'
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
export const ProfileInfo = styled.div`
  /* margin: 2.5px; */
  border-radius: 8px;
  padding: 10px;
  width: 412px;
  height: 280px;
  background-color :#202024;
  grid-area: profileinfo;
  display: flex;

  form{
    div{
      margin: 5px;
      display: flex;
      flex-direction: column ;
      span{

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 15px;

      color: #828284;
      }
      strong{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
  svg{
    margin: 5px 5px auto auto;
    font-size: 12px;

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