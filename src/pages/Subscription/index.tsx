import React, { useState } from 'react';
import { FiCornerLeftDown, FiCreditCard, FiLogIn, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import conteudo from '../../assets/conteudo2.svg'

import logo from '../../assets/logo2.svg'

import {
  Container,
  Content,
  Profile,
  ProfileStatus,
  StatusHistory,
  SelectionStatus,
  Plataforma,
  Conteudos,
} from './styles';

const Subscription: React.FC = (): JSX.Element => {
        
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
          <FiSettings/>
         </div>

         <StatusHistory>
           <h1>Histórico</h1>
           <p>15/03/2019 Assinatura anual - R$ 997,00</p>
           <p>15/03/2020 Renovação anual - R$ 1.497,00</p>
         </StatusHistory>

         <SelectionStatus>
           <div>
             <FiCornerLeftDown></FiCornerLeftDown>
             <span>Renovação Automática</span>
             <h1>Ativar</h1>
           </div>
           <div className='active'>
             <FiCreditCard className='active' />
             <span className='active'>Renovação Manual</span>
             <h1 className='active'>Ativada</h1>
           </div>
         </SelectionStatus>  
       </ProfileStatus>
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

export default Subscription;
