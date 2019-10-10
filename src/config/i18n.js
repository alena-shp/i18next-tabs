import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../locale/en'
import fr from './../locale/fr'
import ru from './../locale/ru'

i18n.use(initReactI18next).init({
  debug: true,
  initImmediate: false,
  preload: ['en', 'fr', 'ru'],
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en,
    fr,
    ru
  }
})

export default i18n