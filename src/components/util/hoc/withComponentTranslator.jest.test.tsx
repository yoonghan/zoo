import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import { withComponentTranslator } from "./withComponentTranslator";
import { TranslatorProps, withTranslator } from "./withTranslator";
import en from "@/i18n/locales/en/translation"

describe('withComponentTranslator', () => {
  it('should return a component that renders with array', async () => {

    const keyword = 'announcements'

    const SubTranslatedComponent = withComponentTranslator(({ t, lng }: TranslatorProps) => {
      const announcements: string[] = t(keyword, { returnObjects: true }) as string[]
      return (
        <>
          <div>{lng}</div>
          <div>{announcements.map(a => <span key={a}>{a}</span>)}</div>
        </>
      )
    })
    const TestComponent = ({ t, lng }: TranslatorProps) => <SubTranslatedComponent t={t} lng={lng} />

    const TranslatedComponent = withTranslator(TestComponent);
    await act(async () => {
      render(<TranslatedComponent params={Promise.resolve({ lng: "en" })} />)
    })

    expect(await screen.findByText(en[keyword][0])).toBeInTheDocument();
    expect(await screen.getByText("en")).toBeInTheDocument()
  });
})