import React from 'react';
import Modal from '../components/Modal/Modal';
import test from '../pages/data/test';

var data = test.data;

function Home(props) {
  return (
    <>
      <div className="grid">
        {data.map((data) => (
          <Modal buttonTitle={data.name} imageSrc={data.img} key={data.id}>
            <>
              <img src={data.img} alt={data.name} />
            </>
          </Modal>
        ))}
      </div>
    </>
  );
} 

export default Home;
