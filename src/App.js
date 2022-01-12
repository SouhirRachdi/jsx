import img1 from './image/imageInSrc.jpg';
import './style.css';

function App() {
  return (
    <div className='App'>
   
    <div style={{border:'solid 3px black',maxWidth:'100vw'}}>
   
    <h1 className='title red'>Hello Natural life   </h1>
   <div className='img'>
    <br/ >
    <img src={img1} alt="my image"/>
    <br/>
    <img src='/images/imageInPublic.jpg' alt="image"  className='imeg'/>
   </div>
   </div>
 
   <video width="320" height="240" controls autoplay>
   
    <source src='/images/video.mp4' type="video/mp4" />
   </video>
   </div>
  );
}

export default App;
