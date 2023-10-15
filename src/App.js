import './App.css';
import ColorPicker from './colorpicker';

function App() {
  return (
    <div className="App">
    <ColorPicker colors={['red', 'green', 'blue', 'yellow', 'purple', '#FF00A0', '#FFA500', '#FFFF00', '#800080', '#00FFFF', '#0000FF', '#008000', '#00C9A7', '#A700C9', '#C900A7', '#C9A700', '#808080', '#C0C0C0', '#000000', '#FFFFFF', '#D2B48C', '#F0E68C', '#EEE9BF', '#D3D3D3', '#F5F5F5', '#FAFAFA', '#E6E6E6']} />


    </div>
  );
}

export default App;
