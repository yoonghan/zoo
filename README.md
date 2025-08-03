A zoo template website that runs on server rather than just frontend codes.

This site is an assistant page from the original Zoo Negara website. Please refer to original Zoo Negara website.

---

[![Build Status][build-badge]][build]
[![codecov](https://codecov.io/gh/yoonghan/zoo/graph/badge.svg?token=0SGU5RSG0Q)](https://codecov.io/gh/yoonghan/zoo)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_zoo&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=yoonghan_zoo)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_zoo&metric=bugs)](https://sonarcloud.io/summary/new_code?id=yoonghan_zoo)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_zoo&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=yoonghan_zoo)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=yoonghan_zoo&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=yoonghan_zoo)

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

First, run the development server, drop any bun/yarn etc usage:

```bash
npm run dev
```

Remove versioning from page with querystring, ?version=none

## User Notes

Notes if there are development/changes made. 

| Actions | Note to users |
| --- | --- |
| translate pages | pages translation are stored in pages.ts, incase using root translation, prefix with 'translation.' |
| root translation | Main use only in footer/main page and menu and serve as common. To use translations in faq/pages, prefix with translation. I.e. "t(translation.buyNow". |
| Sonarqube | Results in https://sonarcloud.io/project/overview?id=yoonghan_zoo, point to main as there more critical compared to development. |

## Auto Approval

Any webpage changes on presentation will result a snapshot comparison between new and old; incase it fails, there is a need to sync and compare the differences for commit. To do that:

1. Go Option 1(recommended):
  a. Click on Actions -> Select Snapshot Validate and Approve -> Click Run workflow -> Select the PR branch and check "should do auto approval" -> Then run workflow.
2. Go Option 2(do if did not do option1 - REMOVED!):
  a. Write a comment "/update-snapshot" in pull request and it will execute. (It will run in background which can be check in Action to see if it succeed or fail).
3. Auto approval will update the snapshot, compare it via Commit in pull request before submitting it.
4. There is snapshot for the release/production Zoo website. Just select https://zoo.walcron.com as the domain URL to release it.

## Attribution to

1. Nextjs (with React)
2. Font Awesome by Dave Gandy - http://fontawesome.io

[build-badge]: https://img.shields.io/github/actions/workflow/status/yoonghan/zoo/master_merge.yml
[build]: https://github.com/yoonghan/zoo/actions?query=workflow%3A%22Deploy%20Next.js%20site%20to%20Pages%22
