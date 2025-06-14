import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <NextIntlClientProvider
      messages={pageProps.messages}
      locale={router.locale || 'en'}
      defaultTranslationValues={{
        // Global defaults for translation values
        fallback: '...'
      }}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { locale } = appContext.ctx;
  
  try {
    const messages = (await import(`../messages/${locale || 'en'}.json`)).default;
    return {
      pageProps: {
        messages
      }
    };
  } catch (error) {
    // Fallback to English if locale file doesn't exist
    const messages = (await import(`../messages/en.json`)).default;
    return {
      pageProps: {
        messages
      }
    };
  }
};

export default MyApp; 