import { tempConfig } from "@/config/temp";

export function getUnscrambledEmail(scrambledEmail: string): string {
  return scrambledEmail.replace(/#|_/g, "").replace(/!/g, "");
}

/* c8 ignore next */
export const postEmail = getUnscrambledEmail(tempConfig.scrambledEmail);