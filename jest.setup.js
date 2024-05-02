window.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

window.HTMLElement.prototype.scrollIntoViewIfNeeded = function () {};
