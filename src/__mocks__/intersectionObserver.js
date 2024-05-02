export const observe = jest.fn();
export const unobserve = jest.fn();
export const disconnect = jest.fn();
export var intersectionFn = jest.fn();

afterEach(() => {
  disconnect.mockReset();
});

class IntersectionObserver {
  constructor(intersection) {
    intersectionFn = intersection;
  }

  static observe = observe;

  static unobserve = unobserve;

  disconnect = disconnect;
}

window.IntersectionObserver = IntersectionObserver;

window.HTMLElement.prototype.scrollIntoViewIfNeeded = function () {};
