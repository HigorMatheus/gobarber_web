import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../../hooks/Toast';
import { Container } from './styles';

interface ToasProps {
  message: ToastMessage;
  style: object;
}
const icons = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
};
const Toast: React.FC<ToasProps> = ({ message, style }) => {
  const { remuveToast } = useToast();

  useEffect(() => {
    const time = setTimeout(() => {
      remuveToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [message.id, remuveToast]);
  return (
    <Container
      style={style}
      key={message.id}
      hasDescription={!!message.description}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => remuveToast(message.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
