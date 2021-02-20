import React from 'react';
import { FiTriangle } from 'react-icons/fi';


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
  ContentSelectproject,
  
} from './styles';

const Selectproject: React.FC = () => {

  return (
    <Container>
      <Header />
      <Content>
        <Information>
          <img src={logo} alt="" />
          <h1>Lançador PRO</h1>
          <span>P L A T A F O R M A</span>

          <p>Como usar a plataforma:</p>
          <div>
            <FiTriangle />

          </div>
        </Information>

        <ContentSelectproject >
          <div>
            
          </div>
          <img src={selection} alt="select" />
          <h1>Selecionar projeto</h1>
        </ContentSelectproject>

      </Content>
    </Container>
  );
};

export default Selectproject;
