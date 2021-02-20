import React, { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
 import { Container } from './styles';

 interface IHeaderprops{
  icon?: React.ComponentType<IconBaseProps>;
 }

const Header: React.FC<IHeaderprops> = ({icon:Icon}) => {


  return (
    <Container>
      <div>
        <Link to='dashboard' ><FiArrowLeft/> voltar</Link>
        <div>
          {Icon && <Icon size={20} />}
          <h1>Higor Matheus</h1>
          <img src="https://avatars1.githubusercontent.com/u/53712358?v=4" alt=""/>
        </div>
      </div>
   
    </Container>
  )
}

export default Header;