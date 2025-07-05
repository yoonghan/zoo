import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function getTranslation(lng: string, ns = "translation", options = { keyPrefix: '' }) {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}

export const useTranslation = (lng: string, ns = "translation", options = { keyPrefix: '' }) => getTranslation(lng, ns, options)
