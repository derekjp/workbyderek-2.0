import React from 'react';
import Modal from '../components/Modal/Modal';
import jr from '../images/jr.png';
import tools from '../images/tools.png';
import mountains from '../images/mountains.png';

let data = [ 
  {id:1, name: 'jr.png',  img: jr}, 
  {id:2, name: 'tools.png', img: tools}, 
  {id:3, name: 'moutains.png', img: mountains} 
];
function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <div className="grid">
        {data.map((data) => (
          <Modal buttonTitle={data.name} imageSrc={data.img}>
            <div>
              <img src={data.img} alt={data.name} />
            </div>
          </Modal>
        ))}
      </div>
    </div>
  );
} 

export default Home;
