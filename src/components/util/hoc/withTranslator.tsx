import { useTranslation } from "@/i18n";
import { PageParams } from "@/typings/params";
import { i18n, TFunction } from "i18next";
import { Suspense, use } from "react";

export interface TranslatorProps {
  readonly t: TFunction<string, string>;
  readonly lng: string;
}

export function withTranslator<P extends PageParams>(
  WrappedComponent: React.ComponentType<TranslatorProps>,
  ns: string = "translation"
): React.FC<P> {

  function Loader({ translator, lng }: Readonly<{
    translator: Promise<{
      t: TFunction<string, string>;
      i18n: i18n;
    }>,
    lng: string
  }>) {
    const { t } = use(translator);
    return <Suspense><WrappedComponent t={t} lng={lng} /></Suspense>;
  }

  const WithTranslator: React.FC<P> = ({ params }) => {
    const { lng } = use(params);
    const translator = useTranslation(lng, ns)

    return <Suspense><Loader translator={translator} lng={lng} /></Suspense>;
  };

  return WithTranslator;
}