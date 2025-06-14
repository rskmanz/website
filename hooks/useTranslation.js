import en from '../locales/en.json';
import jp from '../locales/jp.json';

const resources = { en, jp };

export function useTranslation(locale = 'en') {
  const t = (key) => resources[locale][key] || key;
  return { t };
}
