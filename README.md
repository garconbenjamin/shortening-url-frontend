# Create Shorten URL

This feature allows the user to create a shortened URL for a long URL. When the user enters a long URL, the application generates a shortened URL that can be used in place of the long URL. This is useful when sharing URLs on social media, in emails, or in other contexts where long URLs can be unwieldy or difficult to share.

See demo [Here](https://shortening-url-6cf7a.web.app/).

## Run the project

- `yarn install`

- Update .env

  - Update `REACT_APP_BACKEND_URL_DEV` with the correct backend from cloud run
  - If running local backend service, keep using `REACT_APP_BACKEND_URL_LOCAL` in src/config.ts.

- `yarn start`

  - The website running on [Local](http://localhost:5000).

## Current features

- Create shorten URL

## Features to be implement

- Member system

- Server side render

- To display correct Open Graph info.
