import '../styles/main.scss';
import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/pages/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
};
