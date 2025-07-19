"use client";
import { languages } from "@/i18n/settings";
import { CSSProperties } from "react";
import { Link } from "../Link";

const labelLanguage = (language: string) => {
  switch (language) {
    case "en":
      return "English";
    case "ms":
      return "Bahasa";
    // case "zh":
    //   return "中文";
    // case "ta":
    //   return "தமிழ்";
  }
};

export const LanguageDropdown = ({
  defaultValue,
  mobileStyle = {},
  desktopStyle = {},
  ...defaultProps
}: {
  defaultValue: string;
  className?: string;
  mobileStyle?: CSSProperties;
  desktopStyle?: CSSProperties;
}) => {
  return (
    <>
      <div style={desktopStyle} className="hidden md:inline-block mr-4">
        {languages.map((language, idx) => (
          <span key={language}>
            {idx !== 1 || <span className={"hidden sm:inline mx-1"}> | </span>}
            <Link
              styling="None"
              href={`/${language}`}
              className={language === defaultValue ? "underline" : ""}
            >
              {labelLanguage(language)}
            </Link>
          </span>
        ))}
      </div>
      <select
        {...defaultProps}
        value={defaultValue}
        onChange={(e) => {
          window.location.assign(`/${e.target.value}`);
        }}
        style={mobileStyle}
        className="md:hidden mr-2"
        id="language-dropdown"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {labelLanguage(language)}
          </option>
        ))}
      </select>
    </>
  );
};
