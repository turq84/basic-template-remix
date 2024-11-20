# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This app leverages [Panda CSS](https://panda-css.com/) as its styling system. Panda CSS enables a consistent and declarative approach to styling, making it easy to manage and scale the app's design system.

### Storybook

This app components are documented and visually tested using [Storybook](https://storybook.js.org/). Storybook provides an isolated development environment for UI components, making it easier to build and iterate on the design system.

---

## Translations

This app handles translations with a combination of [`i18next`](https://www.i18next.com/) and [`remix-i18next`](https://remix.run/resources/remix-i18next). These tools provide a robust internationalization (i18n) solution for managing and delivering translations across the app.

### Key Features:

- **Translation Files**: All translation files are located in `public/locales/[language]/common.json`. These files store the text content for different languages in a structured format.
- **Language Persistence**:
  - User preferences are stored using a Remix cookie object.
  - When a user selects a language (e.g., switching from English to another language), the preferred language is saved in the cookie.
  - This ensures the selected language persists across page refreshes and sessions.

Refer to the [i18next documentation](https://www.i18next.com/) for more information on advanced configuration and usage.

---

## Testing

This app uses [Vitest](https://vitest.dev/) for unit and integration testing, alongside [React Testing Library](https://testing-library.com/) for testing UI components. These tools ensure the app's functionality and UI are reliable and performant.

### Testing Highlights:

- **Vitest**: A fast and lightweight testing framework optimized for modern web apps.
- **React Testing Library**: Encourages testing components as users interact with them, ensuring meaningful and accessible tests.
