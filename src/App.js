import React  from 'react'
import './css/main.css';
import { Provider } from 'react-redux';
import store from './Components/store/store';
import { StyledApp, Container } from './Components/CustomStyledComponents/CustomStyledComponents';
import ButtonsActions from './Components/ButtonsActions';
import SetupStates from './Components/SetupStates';
import CurrencyList from './Components/CurrencyList/CurrencyList';
import { myJson } from './Components/utils';

function App() {
  // SetupStates()
  return (
    <Provider store={store}>
      <SetupStates />
      <StyledApp>
        <Container>

          <ButtonsActions />
          <CurrencyList myJson={myJson} />

        </Container>
      </StyledApp>
    </Provider>
  );
}

export default App;
