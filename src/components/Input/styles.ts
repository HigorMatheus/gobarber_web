import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #202024;
  padding: 16px;
  width: 100%;
  border-bottom-color: #202024;
  border-bottom: 1px solid #fff;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
    color: #ffffff;
      border-bottom-color: #ffffff;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ffffff;
      border-bottom-color: #40C676;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ffffff;
      border-bottom-color: #40C676;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
   

    &::placeholder {
      text-align: center;    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-bottom-color: #ffffff;
    }
  }
`;
