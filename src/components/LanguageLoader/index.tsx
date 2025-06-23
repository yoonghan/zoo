import { Suspense, Component, use } from 'react'
import { useTranslation } from '@/i18n'

function Loader({languagePromise, label }:{languagePromise: Promise<any>, label: string}) {
  const { t } = use(languagePromise)
  return t(label);
}

export default function PromiseLoader({ language, label } : {language: string, label: string }) {
  const languagePromise = useTranslation(language);
  return <Suspense><Loader languagePromise={languagePromise} label={label}/></Suspense>
}