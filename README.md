# Combine Bootstrap 5 with Headless UI in React Server Components

## Init Next.js 13 with Bootstrap 5

`npx create-next-app@latest`

![Nextjs Installation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/grkawkpehr1gmun166pw.png)

`npm install bootstrap`

Next.js has [support](https://nextjs.org/docs/app/building-your-application/styling/sass) for sass.

`npm install --save-dev sass`

Add sassOptions

```js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
```

styles folder
bootstrap.scss

```scss
$theme-colors: (
  "primary": #7a45d0bf,
);
@import "/node_modules/bootstrap/scss/bootstrap.scss";
```

$theme-colors for override bootstrap default values

app/layout.js

```js
import "../styles/bootstrap.scss";
import "./globals.css";
```

Remove or clear `app/globals.css` and `app/page.module.css`

Replace the content of `app/page.js` with

```jsx
export default function Home() {
  return (
    <>
      <button className="btn btn-primary">Bootstrap button</button>
    </>
  );
}
```

You now have a bootstrap button with an ugly custom color

## Headless UI

`npm install @headlessui/react`
