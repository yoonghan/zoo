A zoo template website that runs on server rather than just frontend codes.

---

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]

## Achievement for

Goal is to replace a website zoonegara.my. The website contains the following

### UX Issues

1. Link out to many images/pdf/documents and cannot be linked back.
2. Information are insufficient and has even a less/more or need links to be clicked.
3. Images/Video are few.
4. Pop-up that is annoying and stops users from navigating before closing.
5. Ticketing information are image.

### UI Issues

1. Not mobile friendly.
2. Contrast of catchy colors.
3. Slow loading.
4. Small fonts.
5. Images are not lazy loaded and position disoriented.

### Things to keep

1. Logo.
2. Multi language, malay/english.
3. Static site, to save from hosting fee.

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

## Code Engine

1. Nextjs
2. Vercel

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/zoo/pull-request.yml
[build]: https://github.com/yoonghan/zoo/actions?query=workflow
[coverage-badge]: https://img.shields.io/codecov/c/github/yoonghan/zoo.svg?style=flat-square
[coverage]: https://codecov.io/gh/yoonghan/zoo
