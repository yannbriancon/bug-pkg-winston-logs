# API

## Description

This is the API used to build KPI and serve data from a SIP setup.

## Table of Contents

* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Developement](#developement)
  * [Build](#build)
* [Quality](#quality)
  * [Typing](#typing)
  * [Linting](#linting)
  * [Unit Tests](#unit-tests)
* [Versioning](#versioning)

## Getting Started

### Prerequisites

You need Node version 16. See [Node official documentation](https://nodejs.org/en/download/package-manager/) for details.

### Environment

Environment variables can be configured by creating a `.env` file.

Check [.env.example](./.env.example) to see used variables.

### Developement

Install the needed packages with:

```bash
npm i
```

Then launch the API in watch mode with:

```bash
npm run dev
```

### Build

To build the code into static files you can use:

```bash
npm run build
```

## Quality

To run all quality checks, run:

```bash
npm run quality-checks
```

### Typing

Strict typing rules are applied on the project with typescript.

To see the issues in whole project, run:

```bash
npm run tsc
```

### Linting

Strict linting rules are applied on the project with eslint and prettier.

To see the issues, run:

```bash
npm run lint
```

To automatically fix the issues, run:

```bash
npm run lint:fix
```

### Unit Tests

To run the tests, run:

```bash
npm run test
```

To debug a test in Google Chrome (or any Chromium-based browser), open your browser and go to `chrome://inspect` and click on "Open Dedicated DevTools for Node", which will give you a list of available node instances you can connect to.

Run in the terminal:

```bash
npm run test:debug
```

Click on the address displayed in the terminal (usually something like localhost:9229) after running the above command, and you will be able to debug Jest using Chrome's DevTools.

## Versioning

Each change must be added to `CHANGELOG.md` under `Unreleased` while developing.

To deploy a new version:

```bash
npm run bump-version <version>
```

* Run the above command to:
  * Run all the quality checks (linting, unit tests and type checking)
  * Modify `CHANGELOG.md` with the new version
  * Change the package version
  * Create a tag

* Push the changes and the tag:

  ```bash
  git  
  git push --tags
  ```

* Create a release on Gitlab:
  * Go to [Tags](https://gitlab.com/outsight-tech/platform/sip-app/-/tags)
  * Modify the tag with the changes from `CHANGELOG.md`
