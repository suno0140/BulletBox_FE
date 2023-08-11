import reactDom from 'react-dom';

type ModalCentent = {
  children: React.ReactNode;
};

const PotalContainer = ({ children }: ModalCentent) => {
  const el = document.getElementById('modal');

  return reactDom.createPortal(children, el);
};

export default PotalContainer;
