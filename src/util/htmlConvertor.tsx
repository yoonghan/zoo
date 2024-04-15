import { Link } from "@/components/Link";
import React from "react";

/*
Usage

!! - with spaces between means new line.
[url|description] - creates link with description.
* - any words followed by * is bold, i.e. *I am *BOLD!
*/

const unbreakableSpaceTextReplacement = "\n";
const regexAcceptableEndSymbol = "[\\.|,]";
const regExpOfWordHasClosingAnchorBracket = new RegExp(
  `.*\\]${regexAcceptableEndSymbol}?$`
);
const regExpOfClosingAnchorBracket = new RegExp(
  `\\]${regexAcceptableEndSymbol}?$`,
  "g"
);
const regExpEndsWithAcceptableEndSymbol = new RegExp(
  `${regexAcceptableEndSymbol}$`
);

export function htmlConvertor(text: string) {
  function substituteAnchorWithLink(word: string, parentKey: number) {
    if (
      word.match(regExpOfWordHasClosingAnchorBracket) &&
      word.indexOf("|") > -1
    ) {
      const wordWifCloseBracket = word.replaceAll(
        regExpOfClosingAnchorBracket,
        "]"
      );
      const wordsWithNoBrackets = wordWifCloseBracket.substring(
        1,
        wordWifCloseBracket.length - 1
      );
      const linkWordPair = wordsWithNoBrackets.split("|");
      const link = linkWordPair[0];
      const text = linkWordPair[1].replaceAll(
        unbreakableSpaceTextReplacement,
        " "
      );
      return (
        <React.Fragment key={parentKey}>
          <Link href={link}>{text}</Link>
          {word.match(regExpEndsWithAcceptableEndSymbol)
            ? `${word.slice(-1)}`
            : ""}
        </React.Fragment>
      );
    }
    return word;
  }

  const replaceWordsWithNewLineForSpecialTags = (text: string) => {
    const wordsIdentifiedAsAnchor = text.split("|");
    if (wordsIdentifiedAsAnchor.length > 1) {
      return wordsIdentifiedAsAnchor
        .map((wordByPipe) => {
          const wordsAreAnchorEnded = wordByPipe.split("]");
          if (wordsAreAnchorEnded.length === 2) {
            return `${wordsAreAnchorEnded[0].replaceAll(
              " ",
              unbreakableSpaceTextReplacement
            )}]${wordsAreAnchorEnded[1]}`;
          }
          return wordByPipe;
        })
        .join("|");
    }
    return text;
  };

  const words = replaceWordsWithNewLineForSpecialTags(text).split(" ");
  const boldedWords = words.map((word, idx) => {
    if (word.length < 2) {
      return word;
    }

    if (word.startsWith("*")) {
      return <strong key={idx}>{word.substring(1, word.length)}</strong>;
    } else if (word.startsWith("[")) {
      return substituteAnchorWithLink(word, idx);
    } else if (word === "!!") {
      return <br key={idx} />;
    } else {
      return word.replaceAll(unbreakableSpaceTextReplacement, " ");
    }
  });

  const joinWithSpace = boldedWords.reduce(
    (prev, curr) => [...prev, " ", curr],
    [] as (string | React.JSX.Element)[]
  );
  joinWithSpace.shift(); //remove first space
  return joinWithSpace;
}
