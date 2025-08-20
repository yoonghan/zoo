import BuyTicketButton from "@/components/Button/BuyTicketButton";
import { LanguageDropdown } from "@/components/LanguageDropdown";
import { Menu } from "@/components/Menu";
import { withComponentTranslator } from "@/components/util/hoc/withComponentTranslator";
import {
  TranslatorProps,
  withTranslator,
} from "@/components/util/hoc/withTranslator";
import { zooMenu } from "@/config/menu";
import { zooProfile } from "@/config/profile";
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
  ({ t, lng }: Readonly<TranslatorProps>) => {
    return (
      <Menu
        model={translatedZooMenu(t)}
        mobileHomeText={t("menu.mobile-home-text")}
        language={lng}
        shortcutComponent={
          <form>
            <LanguageDropdown defaultValue={lng} className="mr-4" />
              <BuyTicketButton
                text={t("buyTicket.text")}
                href={zooProfile.ticket.admission.url}
                hideOnMobile={true}
                alert={{
                  title: t("buyTicket.alert.title"),
                  message: t("buyTicket.alert.message"),
                  okBtnText: t("buyTicket.alert.confirm"),
                }}/>
          </form>
        }
      />
    );
  }
);

export const TranslatedMenu = withTranslator(({ t, lng }: Readonly<TranslatorProps>) => (
  <TranslatedMenuComponent t={t} lng={lng} />
));
