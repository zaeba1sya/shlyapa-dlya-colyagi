// Dependencies
import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Layout HOC
import Layout from '../HOC/layout';

// Query
import { QueryClientProvider, QueryClient } from 'react-query';
const client = new QueryClient();

// Redux
import { compose, createStore } from 'redux';
import { rootReducer } from '../redux/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
const store = createStore(rootReducer, composeWithDevTools());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
