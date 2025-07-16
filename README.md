A zoo template website that runs on server rather than just frontend codes.

This site is an assistant page from the original Zoo Negara website. Please refer to original Zoo Negara website.

---

[![Build Status][build-badge]][build]
[![codecov](https://codecov.io/gh/yoonghan/zoo/graph/badge.svg?token=0SGU5RSG0Q)](https://codecov.io/gh/yoonghan/zoo)

## Achievement for

Goal is to replace a website zoonegara.my. Zoo Negara is a non-government organization.

### UX Issues

1. Link out to many images/pdf/documents and cannot be linked back.
2. Information are insufficient and has even a less/more or need links to be clicked.
3. Images/Video are few.
4. Pop-up that is annoying and stops users from navigating before closing.
5. Ticketing information are image.
6. No dual language, esp. Bahasa Malaysia.

### Things that seems valid

1. Ticketing seems to runned by another service.
2. Having server load might be overkill on this scenario.

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Remove versioning from page with querystring, ?version=none

## Attribution to

1. Nextjs (with React)
2. Font Awesome by Dave Gandy - http://fontawesome.io

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/zoo/master_merge.yml
[build]: https://github.com/yoonghan/zoo/actions?query=workflow
