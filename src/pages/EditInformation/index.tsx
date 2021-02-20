import { Form } from '@unform/web';
import React, { useCallback } from 'react';
import { 
  // FiCheck,
   FiEdit, 
   FiLogIn
} from 'react-icons/fi';
import { Link,  } from 'react-router-dom';
import conteudo from '../../assets/conteudo2.svg'

import logo from '../../assets/logo2.svg'


import Input from '../../components/Input';
// import { useAuth } from '../../hooks/Auth';
// import { useToast } from '../../hooks/Toast';

import {
  Container,
  Content,
  Profile,
  ProfileInfo,
  Plataforma,
  Conteudos,
} from './styles';


// interface FormHandles{
  
// }

const EditInformation: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);
  // const { addToast } = useToast();
  // const history = useHistory();
  // const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(()=>{},[])

  // const handleAvatarCharge = useCallback(()=>{},[])
 
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
    
         <Form
          // ref={formRef}
          // initialData={{
          //   name: user.name,
          //   email: user.email,
          // }}
          onSubmit={handleSubmit}
        >

          <div>
            <span>nome</span>   
            {/* <FiCheck/> */}
            <Input name="name" 
            // icon={FiUser}
            placeholder="Nome" 
            />
          
          </div>
          <div>
            <span>E-Mail</span>
            <Input name="email"
          //  icon={FiMail} 
           placeholder="E-Mail" />
          </div>
          <div>
            <span>DDD + Celular</span>
            <Input
              name="DDD + Celular"
              // icon={FiLock}
              type="text"
              placeholder="DDD + Celular"
            />
          </div>
          <div>
            <span>CPF</span>
            <Input
            name="CPF"
            // icon={FiLock}
            type="text"
            placeholder=" CPF"
          />
          </div>
          
     
         
     
        

          {/* <Button type="submit">Comfirmar mudanças</Button> */}
        </Form>
         
         <FiEdit></FiEdit>
       </ProfileInfo>

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

export default EditInformation;
