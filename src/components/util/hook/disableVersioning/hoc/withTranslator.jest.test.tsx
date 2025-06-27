import "@testing-library/jest-dom";
import {render, screen, act} from "@testing-library/react";
import { withTranslator } from "./withTranslator";

describe('withTranslator', () => {

  it('should call the passed function with the correct arguments', () => {
    const withTranslator = jest.fn((Component) => Component);
    const Component = jest.fn();
    withTranslator(Component);
    expect(withTranslator).toHaveBeenCalledWith(Component);
  });

  it('should return a component that renders the original component', async () => {
    const TestComponent = ({t}: {t: (label: string) => string}) => <div>{t('welcome')}</div>

    const TranslatedComponent = withTranslator(TestComponent);
    await act(async () => {
      render(<TranslatedComponent params={Promise.resolve({lng: "en"})}/>);
    })
    expect(await screen.findByText('Welcome to Zoo Negara')).toBeInTheDocument();
  });
});