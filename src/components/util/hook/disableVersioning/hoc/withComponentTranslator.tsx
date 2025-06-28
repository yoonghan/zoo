import { TranslatorProps } from "./withTranslator";


export function withComponentTranslator(
  WrappedComponent: React.ComponentType<TranslatorProps>,
): React.FC<TranslatorProps> {

  const WithComponentTranslator: React.FC<TranslatorProps> = ({ t, lng }) => {
    return <WrappedComponent t={t} lng={lng} />;
  };

  return WithComponentTranslator;
};