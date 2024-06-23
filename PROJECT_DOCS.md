# Table of contents
- [Initial project setup](#initial-project-setup)
- [Runing a development Server](#runing-a-development-server)
- [Running a production build](#running-a-production-build)
- [Extending tailwindcss config](#extending-tailwindcss-config)
- [Generating and using axios client with request methods and models based on apiDoc](#generating-and-using-axios-client-with-request-methods-and-models-based-on-apidoc)
- [Docs](#docs)

## Initial project setup

Make sure to install the dependencies and run project with node v18
```bash
# npm
nvm use 18
npm install
```

## Runing a development Server

Start the development server on http://localhost:3000
```bash
npm run dev
```

## Running a production build

Build the application for production:
```bash
npm run build
```

Locally preview production build:
```bash
npm run preview
```

## Extending tailwindcss config
[Theme configuration - Tailwind CSS](https://tailwindcss.com/docs/theme#extending-the-default-theme)

[./tailwind.config.js](./tailwind.config.js)
```js
    },
    extend: {
        ...
    },
},
```

## Generating and using axios client with request methods and models based on apiDoc
Run a command, that generates an axios client and ts models based on the api schema
```bash
npm run api
```

Set API BASE URL for the generated client or uncomment similar lines in [./plugins/common.ts](./plugins/common.ts)
```ts
import { OpenAPI } from '~/apiClient';
OpenAPI.BASE = 'https://interview-test.digital.cz';
```

Use generated axios api client (and optionally typescript models)
```ts
import { UserService, /* SalaryService, TokenService */ } from '~/apiClient';
const items = await UserService.getApiUsersList();

// import type { User } from '~/apiClient';
// const items: User[] = await UserService.getApiUsersList();
```


## Docs
[heroicons Docs](https://heroicons.com/)

[Nuxt 3 Docs](https://nuxt.com/docs/getting-started/introduction)

[Tailwindcss Docs](https://nuxt.com/docs/getting-started/introduction)

[OpenAPI Typescript Codegen Docs](https://github.com/ferdikoomen/openapi-typescript-codegen)