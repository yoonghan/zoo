import { renderHook } from "@testing-library/react"
import {
  disableVersionRegex,
  useDisableVersioning,
} from "./useDisableVersioning"

describe("useDisableVersioning", () => {
  it("should default isVersioned true", () => {
    const { result } = renderHook(useDisableVersioning, {})
    expect(result.current.isVersioned).toBe(true)
  })

  it("should stop versioning when querystring animatable=none", () => {
    Object.defineProperty(window, "location", {
      value: { search: "?version=none" },
      writable: true,
    })

    const { result } = renderHook(useDisableVersioning, {})
    expect(result.current.isVersioned).toBe(false)

    Object.defineProperty(window, "location", {
      value: { search: "" },
      writable: false,
    })
  })

  it("should return correctly define disableAnimation REGEX", () => {
    expect(disableVersionRegex.test("?version=none")).toBe(true)
    expect(disableVersionRegex.test("version=none")).toBe(false)
    expect(disableVersionRegex.test("?version=false")).toBe(false)
    expect(disableVersionRegex.test("?version=true")).toBe(false)
    expect(disableVersionRegex.test("?a=1&version=none&b=2")).toBe(true)
  })
})
