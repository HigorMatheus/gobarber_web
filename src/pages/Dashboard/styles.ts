import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  height: 100vh;
`;


export const Content = styled.div`
  width: 600px;
  /* height:400px; */
  /* margin-top: 52px; */

  background-color: #ffff;
  display: grid;

  grid-template-rows: 1fr 1fr  3fr;
  grid-template-columns: 3fr 1fr 1fr 2fr  ;

  grid-template-areas: 
        'profile profileinfo profileinfo profileinfo '
        'profile  profilestatus profilestatus profileconquitas'
        'plataforma plataforma conteudos conteudos ';
`;


export const Profile = styled.div`
  margin: 2.5px;
  border-radius: 5px;
  background : #333;
  grid-area: profile;

  display: flex;
  flex-direction: column;

  svg{
    margin: 5px
  }

  img {
    height: 75px;
    width: 75px;
    border-radius: 50%;

    border: 2px solid #3333ff;
    margin: auto;
  }

    div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
      h1{
        font-size: 18px;
        margin: auto;
        color: #3333ff
      }
      p{
        margin: auto;
        font-size: 12px;
        color: #636360;
      }

  }
`
export const ProfileInfo = styled.div`
  margin: 2.5px;
  border-radius: 5px;
  background-color : #333;
  grid-area: profileinfo;
  display: flex;

  div{
    div{
      margin: 5px;
      display: flex;
      flex-direction: column ;
      span{
        color: #636360;
        font-size: 12px
      }
      strong{
        font-size: 15px
      }
    }
  }
  svg{
    margin: 5px 5px auto auto;
    font-size: 12px;

  }
`
export const ProfileStatus = styled.div`
   margin: 2.5px;
   border-radius: 5px;
  background-color : #333;
  grid-area: profilestatus;
  display: flex;
  div{
    div{
      margin: 5px;
      display: flex;
      flex-direction: column ;
       p{
        color: #008739;
      }
      span{
        color: #636360;
        font-size: 12px
      }
      strong{
        font-size: 15px
      }
    }
  }
  svg{
    margin: 5px 5px auto auto;
    font-size: 12px;

  }
`

export const ProfileConquitas = styled.div`
  margin: 2.5px;
  border-radius: 5px;
  background-color : #333;
  grid-area: profileconquitas;
 

  div{
    display: flex;
    h1{
    font-size: 15px;
    margin: 5px;
    color: #636360;
    }

    svg{
      font-size: 15px;
      color: #636360;
      margin: 5px 5px auto auto
    }
  }

  section{
    display: flex;
    div{
      flex-direction: column;
      margin: 5px;
      img{
        height:30px;
        width: 30px;
        border-radius: 50%;
        margin: auto
      }
      span{
        font-size: 12px
      }
    }
  }

  
`

export const Plataforma = styled.div`
  margin: 2.5px;
  padding: 10px;
  border-radius: 5px;
  background-color : #333;
  grid-area: plataforma;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img{
    width: 100px;
    height: 100px;

    margin: auto;
    
  }

  h1{
    font-size: 30px;

  }
  span{
    font-size: 15px;
    color: #636360;
  }

  p{ 
    margin-top: 10px;
    font-size: 15px;
    color: #636360;
  }
  strong{
    color: #008739;
  }

  a{
    margin-top: 25px;
    text-decoration: none;
    color: #636360;
  }
`

export const Conteudos = styled.div`
  margin: 2.5px;
  padding: 10px;
  border-radius: 5px;
  background-color : #333;
  grid-area: conteudos;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img{
    width: 100px;
    height: 100px;

    margin: auto;
    
  }

  h1{
    font-size: 30px;

  }
  span{
    font-size: 15px;
    color: #636360;
  }

  p{ 
    margin-top: 10px;
    font-size: 15px;
    color: #636360;
  }
  a{
    margin-top: 25px;
    text-decoration: none;
    color: #636360;
  }
`