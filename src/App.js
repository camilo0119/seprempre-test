import { Provider } from 'react-redux';
import { AppRouter } from './components/router/AppRouter';
import { store } from './redux/store/store';
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
