import { TFunction } from "i18next";

interface WithComponentTranslatorProps {
  t: TFunction<string, string>
}

export function withComponentTranslator(
  WrappedComponent: React.ComponentType<WithComponentTranslatorProps>,
): React.FC<WithComponentTranslatorProps> {

  const WithComponentTranslator: React.FC<WithComponentTranslatorProps> = ({ t }) => {
    return <WrappedComponent t={t}/>;
  };

  return WithComponentTranslator;
};