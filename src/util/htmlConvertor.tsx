import React from "react"

export function htmlConvertor(text: string) {
    const words = text.split(" ")
    const boldedWords = words.map((word, idx) => {
        if(word.startsWith("*") && word.length > 1) {
            return <b key={idx}>{word.substring(1, word.length)}</b>
        } else {
            return word
        }
    })
    const joinWithSpace = boldedWords.reduce((prev, curr) => [...prev, ' ', curr], [] as (string|React.JSX.Element)[])
    joinWithSpace.shift() //remove first space
    return joinWithSpace
}