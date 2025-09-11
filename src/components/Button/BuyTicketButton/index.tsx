"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonLink } from "..";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import AlertDialog, {
  Props as AlertProps}
 from "@/components/Dialog/AlertDialog";
import { useDialogCreation } from "@/components/Dialog/useDialogCreation/useDialogCreation";
import { useCallback } from "react";
import ReactGA from "react-ga4";

interface BuyTicketButtonProps {
  text: string;
  href: string;
  hideOnMobile?: boolean;
  alert: {
    title: string;
    message: string;
    okBtnText: string;
  }
  lng: string;
}

export default function BuyTicketButton({text, href, hideOnMobile, alert, lng}: Readonly<BuyTicketButtonProps>) {
  const promptMessageDialog = useDialogCreation<AlertProps>(AlertDialog)
  
  const onOkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

      event.preventDefault();

      ReactGA.event({
        category: "Button",
        action: "Click",
        label: `Buy Ticket - ${lng}`,
      });

      promptMessageDialog({
        title: alert.title,
        message: alert.message,
        okBtnText: alert.okBtnText,
        onOk: () => {
          ReactGA.event({
            category: "Button",
            action: "Click",
            label: `Buy Ticket Redirect - ${lng}`,
          });
          location.assign(href);
        },
      })
    },
    [alert.message, alert.okBtnText, alert.title, href, promptMessageDialog, lng],
  )

  return  <ButtonLink
            styling="BuyNow"
            href={href}
            aria-label={text}
            onClick={onOkClick}
          >
            <FontAwesomeIcon
              icon={faTicket}
              className="inline mr-2"
              width={20}
            />
            <span className={!!hideOnMobile ? "hidden sm:inline": ""}>{text}</span>
          </ButtonLink>
}