import { Link } from "@/components/Link";
import React from "react";

export function htmlConvertor(text: string) {
  const unbreakableSpaceTextReplacement = "\n";

  function substituteAnchorWithLink(word: string, parentKey: number) {
    if (word.endsWith("]") && word.indexOf("|") > -1) {
      const wordsWithNoBrackets = word.substring(1, word.length - 1);
      const linkWordPair = wordsWithNoBrackets.split("|");
      const link = linkWordPair[0];
      const text = linkWordPair[1].replaceAll(
        unbreakableSpaceTextReplacement,
        " "
      );
      return (
        <Link href={link} key={parentKey}>
          {text}
        </Link>
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
