import React from 'react';
import { FiCode, FiEdit, FiLogIn, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import conteudo from '../../assets/conteudo2.svg'

import logo from '../../assets/logo2.svg'

import logoVibrantPRO from '../../assets/logoVibrantPRO.svg'

import {
  Container,
  Content,
  Profile,
  ProfileInfo,
  ProfileStatus,
  ProfileConquitas,
  Plataforma,
  Conteudos,
} from './styles';

const Dashboard: React.FC = () => {
 
  return (
    <Container>
     <Content>
       <Profile>
         <FiLogIn/>
         <img src="https://avatars1.githubusercontent.com/u/53712358?v=4" alt=""/>
       
        <div>
          <h1> ADVANCED PRO</h1>
          <p>MEMBRO DESDE DEZEMBRO 2020</p>
        </div>
       </Profile>
       <ProfileInfo>
         <div>
          <div>
            <span>nome</span>
            <strong>Higor Matheus</strong>
          </div>
          <div>
            <span>E-mail</span>
            <strong>higor@gmail.com</strong>
          </div>

         </div>
         
        <Link to='editInformation'><FiEdit/></Link> 
       </ProfileInfo>
       <ProfileStatus>
         <div>
          <div>
            <span>Status da Assinatura </span>
           <p> Ativo  </p>
          </div>
          <div>
            <span>Tempo restante</span>
            <strong> 2 meses</strong>
          </div>
         </div>
       
        <Link to='subscription'><FiSettings/></Link> 
       </ProfileStatus>
       <ProfileConquitas>
         <div>
              <h1>Conquistas</h1>
              <Link to='achievements'>  <FiCode/></Link>
            
         </div>
      
         <section>
           <div>
             <img src={logoVibrantPRO} alt=""/>
             <span>Vibrant PRO</span>
           </div>
           <div>
             <img src={logoVibrantPRO} alt=""/>
             <span>Vibrant PRO</span>
           </div>
           <div>
             <img src={logoVibrantPRO} alt=""/>
             <span>Vibrant PRO</span>
           </div>
          
         </section>
       </ProfileConquitas>
       <Plataforma >
         <img src={logo} alt=""/>

         <h1>Lançador PRO</h1>
         <span>P L A T A F O R M A</span>

         <p>A sua plataforma completa para<strong> gestão de projetos</strong> e <strong> operação de lançamento. </strong>   </p>

         <Link to='projectshome'> CLIQUE PARA ACESSAR</Link>
       </Plataforma>
       <Conteudos >
          <img src={conteudo} alt=""/>

         <h1>Bônus</h1>
         <span>C O N T E U D O S</span>

         <p>Cursos extras,calls de analise e muito mais </p>

         <Link to='dashboard'> CLIQUE PARA ACESSAR</Link>
       </Conteudos>
     </Content>
    </Container>
  );
};

export default Dashboard;
