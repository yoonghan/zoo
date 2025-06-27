import "@testing-library/jest-dom";
import {render, screen, act} from "@testing-library/react";
import { withTranslator } from "./withTranslator";
import { TFunction } from "i18next";
import en from "@/i18n/locales/en/translation.json"

describe('withTranslator', () => {

  it('should call the passed function with the correct arguments', () => {
    const withTranslator = jest.fn((Component) => Component);
    const Component = jest.fn();
    withTranslator(Component);
    expect(withTranslator).toHaveBeenCalledWith(Component);
  });

  it('should return a component that renders the original component', async () => {
    const keyword = 'welcome'
    const TestComponent = ({t}: {t: TFunction<string, string>}) => <div>{t(keyword)}</div>

    const TranslatedComponent = withTranslator(TestComponent);
    await act(async () => {
      render(<TranslatedComponent params={Promise.resolve({lng: "en"})}/>);
    })
    expect(await screen.findByText(en[keyword])).toBeInTheDocument();
  });
});