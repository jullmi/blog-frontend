import '../styles/globals.css';
import '../styles/classes/colors.scss';
import '../styles/classes/common.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
