import { useTranslation } from "@/i18n";
import { PageParams } from "@/typings/params";
import { i18n, TFunction } from "i18next";
import { Suspense, use } from "react";

export interface WithTranslatorProps extends PageParams {
  t: TFunction<string, string>;
}

export function withTranslator(
  WrappedComponent: React.ComponentType<WithTranslatorProps>,
): React.FC<PageParams> {

  function Loader({translator, params}: {translator: Promise<{
      t: TFunction<string, string>;
      i18n: i18n;
    }>, params: Promise<{lng: string}>}) {
    const { t } = use(translator);
    return <Suspense><WrappedComponent t={t} params={params} /></Suspense>;
  }

  const WithTranslator: React.FC<PageParams> = ({ params }) => {
    const { lng } = use(params);
    const translator = useTranslation(lng)

    return <Suspense><Loader translator={translator} params={params}/></Suspense>;
  };

  return WithTranslator;
}