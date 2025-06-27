import "@testing-library/jest-dom";
import {render, screen, act} from "@testing-library/react";
import { withComponentTranslator } from "./withComponentTranslator";
import { withTranslator } from "./withTranslator";
import { TFunction } from "i18next";

describe('withComponentTranslator', () => {
  it('should return a component that renders the original component', async () => {

    const SubTranslatedComponent = withComponentTranslator(({t}: {t: TFunction<string, string>}) => <div>{t('welcome')}</div>)
    const TestComponent = ({t}: {t: TFunction<string, string>}) => <SubTranslatedComponent t={t} />

    const TranslatedComponent = withTranslator(TestComponent);
    await act(async () => {
      render(<TranslatedComponent params={Promise.resolve({lng: "en"})} />)
    })
    expect(await screen.findByText('Welcome to Zoo Negara')).toBeInTheDocument();
  });

  it('should return a component that renders with array', async () => {

    const SubTranslatedComponent = withComponentTranslator(({t}: {t: TFunction<string, string>}) => {
        const announcements: string[] = t('announcements', {returnObjects: true}) as string[]
        return (
            <div>{announcements.map(a => <span key={a}>{a}</span>)}</div>
        )
    })
    const TestComponent = ({t}: {t: TFunction<string, string>}) => <SubTranslatedComponent t={t} />

    const TranslatedComponent = withTranslator(TestComponent);
    await act(async () => {
      render(<TranslatedComponent params={Promise.resolve({lng: "en"})} />)
    })
    expect(await screen.findByText('Our Multi-animal Show will be *CLOSED on Friday *EXCEPT school holidays & public holidays.')).toBeInTheDocument();
  });
})