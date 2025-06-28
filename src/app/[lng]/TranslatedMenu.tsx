import { ButtonLink } from "@/components/Button"
import { Link } from "@/components/Link"
import { Menu } from "@/components/Menu"
import { withComponentTranslator } from "@/components/util/hook/disableVersioning/hoc/withComponentTranslator"
import { TranslatorProps, withTranslator } from "@/components/util/hook/disableVersioning/hoc/withTranslator"
import { zooMenu } from "@/config/menu"
import { zooProfile } from "@/config/profile"
import { languages } from "@/i18n/settings"
import { faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TFunction } from "i18next"

const translatedZooMenu = (t: TFunction<string, string>) => zooMenu.map(menu => (
  {
    ...menu,
    label: t(menu.label),
    items: (menu.items?.map(subMenu => ({
      ...subMenu,
      label: t(subMenu.label)
    })))
  }
))

const TranslatedMenuComponent = withComponentTranslator(({ t, lng }: TranslatorProps) => {
  return <Menu
    model={translatedZooMenu(t)}
    mobileHomeText={t("menu.mobile-home-text")}
    language={lng}
    shortcutComponent={
      <form>
        {languages.map((language, idx) => (
          <span key={language} className={language === lng ? "hidden sm:inline" : ""}>
            {idx !== 1 || <span className={"hidden sm:inline -mx-2"}> | </span>}
            <Link href={`/${language}`} className={language === lng ? "hidden sm:inline underline mx-4" : "mx-4"}>
              {language === "ms" ? "BM" : language.toUpperCase()}
            </Link>
          </span>
        ))}
        <ButtonLink
          styling="BuyNow"
          href={zooProfile.ticket.admission.url}
        >
          <FontAwesomeIcon
            icon={faTicket}
            className="inline mr-2"
            width={20}
          />
          <span className="hidden sm:inline">{t("Buy Ticket")}</span>
        </ButtonLink>
      </form>
    }
  />
})

export const TranslatedMenu = withTranslator(
  ({ t, lng }: TranslatorProps) =>
    <TranslatedMenuComponent t={t} lng={lng} />
)
