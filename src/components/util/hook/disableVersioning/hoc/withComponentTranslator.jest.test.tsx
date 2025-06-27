import "@testing-library/jest-dom";
import {render, screen, act} from "@testing-library/react";
import { withComponentTranslator } from "./withComponentTranslator";
import { withTranslator } from "./withTranslator";
import { TFunction } from "i18next";
import en from "@/i18n/locales/en/translation.json"

describe('withComponentTranslator', () => {
  it('should return a component that renders with array', async () => {

    const keyword = 'announcements'

    const SubTranslatedComponent = withComponentTranslator(({t}: {t: TFunction<string, string>}) => {
        const announcements: string[] = t(keyword, {returnObjects: true}) as string[]
        return (
            <div>{announcements.map(a => <span key={a}>{a}</span>)}</div>
        )
    })
    const TestComponent = ({t}: {t: TFunction<string, string>}) => <SubTranslatedComponent t={t} />

    const TranslatedComponent = withTranslator(TestComponent);
    await act(async () => {
      render(<TranslatedComponent params={Promise.resolve({lng: "en"})} />)
    })

    expect(await screen.findByText(en[keyword][0])).toBeInTheDocument();
  });
})