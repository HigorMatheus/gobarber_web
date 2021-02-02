import React from 'react';
import {  FiCode,  FiLogIn, } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import conteudo from '../../assets/conteudo2.svg'

import logo from '../../assets/logo2.svg'
import logoVibrantPRO from '../../assets/logoVibrantPRO.svg'
import {
  Container,
  Content,
  Profile,
  ProfileConquitas,
  Plataforma,
  Conteudos,
  AchievementIten,
} from './styles';

const Achievements: React.FC = () => {
 
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

       <ProfileConquitas>

             <FiCode></FiCode>

         <section>
          <AchievementIten>
            <div>
              <img src={logoVibrantPRO} alt=""/>
              <span>Vibrant PRO</span>
            </div>

              <p>+3 Lançamentos realizados ou 100k em faturamento/ano</p>

           </AchievementIten>
           <AchievementIten>
            <div>
              <img src={logoVibrantPRO} alt=""/>
              <span>Vibrant PRO</span>
            </div>

              <p>+3 Lançamentos realizados ou 100k em faturamento/ano</p>
              
           </AchievementIten>
           <AchievementIten>
            <div>
              <img src={logoVibrantPRO} alt=""/>
              <span>Vibrant PRO</span>
            </div>

              <p>+3 Lançamentos realizados ou 100k em faturamento/ano</p>
              
           </AchievementIten>
          
         </section>
       </ProfileConquitas>
       <Plataforma >
         <img src={logo} alt=""/>

         <h1>Lançador PRO</h1>
         <span>P L A T A F O R M A</span>

         <p>A sua plataforma completa para<strong> gestão de projetos</strong> e <strong> operação de lançamento. </strong>   </p>

         <Link to='dashboard'> CLIQUE PARA ACESSAR</Link>
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

export default Achievements;
