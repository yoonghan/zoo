import { getUnscrambledEmail } from "./tempConfig"

describe("getUnscrambledEmail and walcron_email", () => {
  it("getUnscrambledEmail removes #, _, and ! characters from the scrambled email", () => {
    const input = "w#al_cr!on@example.com";
    const output = getUnscrambledEmail(input);
    expect(output).toBe("walcron@example.com");
  });

  it("getUnscrambledEmail returns the same email when there are no scramble characters", () => {
    const input = "user@example.com";
    const output = getUnscrambledEmail(input);
    expect(output).toBe("user@example.com");
  });

  it("getUnscrambledEmail removes multiple and mixed occurrences across local-part and domain", () => {
    const input = "m#y__na!me@ex_am!ple.co#m";
    const output = getUnscrambledEmail(input);
    expect(output).toBe("myname@example.com");
  });
});