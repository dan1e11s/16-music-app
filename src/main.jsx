import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AudioProviderContext from './context/AudioContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AudioProviderContext>
    <App />
  </AudioProviderContext>
);
