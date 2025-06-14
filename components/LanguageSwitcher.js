import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  const handleChange = (e) => {
    const newLocale = e.target.value;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <select onChange={handleChange} value={locale}>
      {locales.map((loc) => (
        <option key={loc} value={loc}>
          {loc === 'en' ? 'English' : loc === 'jp' ? '日本語' : loc}
        </option>
      ))}
    </select>
  );
}
