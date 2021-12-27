import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';

import NavigationBar from './NavigationBar';
import GridLayout from './GridLayout';

const App = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <NavigationBar />
      <Container>
        <GridLayout />
      </Container>
    </div>
  );
};

export default App;
