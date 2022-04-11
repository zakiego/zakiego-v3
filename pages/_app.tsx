import 'styles/global.css';

import { useAnalytics } from 'lib/analytics';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
