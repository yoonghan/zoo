import { ButtonLink } from "@/components/Button";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { Menu } from "@/components/Menu";
import { withComponentTranslator } from "@/components/util/hoc/withComponentTranslator";
import {
  TranslatorProps,
  withTranslator,
} from "@/components/util/hoc/withTranslator";
import { zooMenu } from "@/config/menu";
import { zooProfile } from "@/config/profile";
import { languages } from "@/i18n/settings";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TFunction } from "i18next";

const translatedZooMenu = (t: TFunction<string, string>) =>
  zooMenu.map((menu) => ({
    ...menu,
    label: t(menu.label),
    items: menu.items?.map((subMenu) => ({
      ...subMenu,
      label: t(subMenu.label),
    })),
  }));

const TranslatedMenuComponent = withComponentTranslator(
  ({ t, lng }: TranslatorProps) => {
    return (
      <Menu
        model={translatedZooMenu(t)}
        mobileHomeText={t("menu.mobile-home-text")}
        language={lng}
        shortcutComponent={
          <form>
            <LanguageDropdown defaultValue={lng} className="mr-4" />
            <ButtonLink
              styling="BuyNow"
              href={zooProfile.ticket.admission.url}
              aria-label={t("menu.buyTicket")}
            >
              <FontAwesomeIcon
                icon={faTicket}
                className="inline mr-2"
                width={20}
              />
              <span className="hidden sm:inline">{t("menu.buyTicket")}</span>
            </ButtonLink>
          </form>
        }
      />
    );
  }
);

export const TranslatedMenu = withTranslator(({ t, lng }: TranslatorProps) => (
  <TranslatedMenuComponent t={t} lng={lng} />
));
