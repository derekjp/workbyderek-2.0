import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#portal');


function Modal(props) {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
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
      {/* <button onClick={openModal}>{props.buttonTitle}</button> */}
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // className={styles.modal}
        style={customStyles}
        contentLabel={props.contentLabel}
      >
        {props.children}
      </ReactModal>
    </div>
  );
} 

export default Modal;
