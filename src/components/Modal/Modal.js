import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';
import { useTransition } from 'react';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'relative',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    // transform: 'translate(-50%, -50%)',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    maxHeight: '100%'
  }
  // content: {
    // top: '50%',
    // left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
  // },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#portal');


function Modal(props) {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isPending, startTransition] = useTransition();
  
  function openModal(e) {
    console.log(e);
    startTransition((e) => {
      console.log('startTransition');
      setIsOpen(true);
    });
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'; 
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button 
        className={styles.thumbnail}
        onClick={openModal}
      >
        <img src={props.imageSrc} alt={props.buttonTitle} />
        <p>{props.buttonTitle}</p>
      </button>
        <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // className={styles.modal}
          style={customStyles}
          contentLabel={props.contentLabel}
          closeTimeoutMS={250}
        >
          {props.children}
        </ReactModal>
    </div>
  );
} 

export default Modal;
