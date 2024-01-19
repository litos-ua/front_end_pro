
import React from 'react';
import './styles.css'

const App = () => {
  const numOfPictures = 9;

  const createImage = (num) => {
    return (
        <div className="col-md-4" key={num}>
          <div className="card" style={{ height: '100%' }}>
            <img src={`./images/${num}.jpg`} className="card-img-top" alt={`Image ${num}`}
                 style={{ objectFit: 'cover', height: '200px' }} />
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                                height: '100%', backgroundColor: '#dded80' }}>
              <h5 className="card-title">Image {num}</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
    );
  };


  const getRandomImageNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  const handleRestart = () => {
        window.location.reload();
  };

  return (
      <div className="text-center">
          <h2>Lessons_18</h2>
          <div className="button-container" style={{ display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',paddingRight: '5%', paddingLeft: '5%'  }}>
              <h3>Homework_22: Images output</h3>
              <button className="btn btn-primary" style={{ marginLeft: '10px' }} onClick={handleRestart}>
                  Restart
              </button>
          </div>
        <div id="imageContainer" className="container mt-5">
          <div className="row">
            {[...Array(numOfPictures)].map(() => (
                createImage(getRandomImageNumber(1, numOfPictures))
            ))}
          </div>
        </div>
      </div>
  );
};

export default App;

