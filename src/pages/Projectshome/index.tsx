import React from 'react';
import { FiBell, FiTriangle } from 'react-icons/fi';


import logo from '../../assets/logo2.svg'
import Header from '../../components/Header';
import selection from '../../assets/selection.svg'
import addproject from '../../assets/addproject.svg'
import imgcustomerservice from '../../assets/customer-service.svg'
import imgdiscussion from '../../assets/discussion.svg'

import {
  Container,
  Content,
  Information,
  LinkSelectproject,
  LinkAddproject,
  LinkCommunity,
  LinkSupport,
} from './styles';

const Projectshome: React.FC = () => {
 
  return (
    <Container>
      <Header />
     <Content>
       <Information>
         <img src={logo} alt=""/>
         <h1>Lançador PRO</h1>
         <span>P L A T A F O R M A</span>

         <p>Como usar a plataforma:</p>
         <div>
           <FiTriangle/>
      
         </div> 
       </Information>

       <LinkSelectproject to='selectproject'>
         <img src={selection} alt="select"/>
         <h1>Selecionar projeto</h1>
       </LinkSelectproject>
       < LinkAddproject to='addproject           '>
        <img src={addproject} alt="select"/>
         <h1>Adicionar novo projeto</h1>
       </LinkAddproject>
       < LinkCommunity to=''>
       <img src={imgdiscussion} alt="select"/>
         <h1>Comunidade       </h1>
       </LinkCommunity>
       < LinkSupport to=''>
       <img src={imgcustomerservice} alt="select"/>
         <h1>Suporte</h1>
       </LinkSupport>
     </Content>
    </Container>
  );
};

export default Projectshome;
