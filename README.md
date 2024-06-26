A zoo template website that runs on server rather than just frontend codes.

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

### UI Issues

1. Not mobile friendly. - DONE
2. Contrast of catchy colors. - DONE
3. Slow loading. - DONE
4. Small fonts. - DONE
5. Images are not lazy loaded and position disoriented. - Can be improved further

### Things to keep

1. Logo.
2. Multi language, malay/english.
3. Static site, to save from hosting fee.

### Things that seems valid

1. Ticketing seems to runned by another service.
2. Having server load might be overkill on this scenario.

### Done

1. Rearrange menu - more.
2. Add site map.
3. Add auto deployment and verification workflow.

### Things removed

1. Removed zooku (strange annual pass = per entry ticket)
2. Removed news
3. Merged education in to get involved

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

## Attribution to

1. Nextjs (with React)
2. Font Awesome by Dave Gandy - http://fontawesome.io

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/zoo/master_merge.yml
[build]: https://github.com/yoonghan/zoo/actions?query=workflow
