import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import RouteApp from './src/navigation/routes';
import {store, persistor} from './src/stores/CreateStore';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

class App extends Component {
  render() {
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
      },
    };
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={theme}>
            <RouteApp />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
