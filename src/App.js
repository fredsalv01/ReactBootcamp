import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
    return <p>Esta es una app del curso de fullstack</p>
}

const App = () => {
  return (
    <div className="App">
        <Mensaje message={'Estamos trabajando'} color={'red'} />
        <Mensaje message={'En un curso'} color={'green'}/>
        <Mensaje message={'de react'} color={'yellow'}/>
        <Description/>
    </div>
  );
}

export default App;
