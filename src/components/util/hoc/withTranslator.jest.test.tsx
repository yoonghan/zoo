import { render, screen, act } from "@testing-library/react";
import { TranslatorProps, withTranslator } from "./withTranslator";
import en from "@/i18n/locales/en/translation"
import enPage from "@/i18n/locales/en/pages"

describe('withTranslator', () => {

  it('should call the passed function with the correct arguments', () => {
    const withTranslator = jest.fn((Component) => Component);
    const Component = jest.fn();
    withTranslator(Component);
    expect(withTranslator).toHaveBeenCalledWith(Component);
  });

  it('should return a component that renders the original component', async () => {
    const keyword = 'Monday'
    const TestComponent = ({ t, lng }: TranslatorProps) => <div>{lng}, {t(keyword)}</div>

    const TranslatedComponent = withTranslator(TestComponent);
    await act(async () => {
      render(<TranslatedComponent params={Promise.resolve({ lng: "en" })} />);
    })
    expect(await screen.findByText(`en, ${en[keyword]}`)).toBeInTheDocument();
  });

  it('should allow using namespace conversion', async () => {
    const keyword = 'lang'
    const TestComponent = ({ t, lng }: TranslatorProps) => <div>{lng}, {t(keyword)}</div>

    const TranslatedComponent = withTranslator(TestComponent, "pages");
    await act(async () => {
      render(<TranslatedComponent params={Promise.resolve({ lng: "en" })} />);
    })
    expect(await screen.findByText(`en, ${enPage[keyword]}`)).toBeInTheDocument();
  });
});