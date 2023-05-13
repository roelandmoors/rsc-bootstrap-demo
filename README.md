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

https://headlessui.com/react/disclosure

https://getbootstrap.com/docs/5.3/components/accordion/

create new file `components/Accordion.jsx`
components is new folder in the root

Let's add the example from the Headless UI website:

```jsx
import { Disclosure } from "@headlessui/react";

export default function Accordion() {
  return (
    <Disclosure>
      <Disclosure.Button className="py-2">
        Is team pricing available?
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
    </Disclosure>
  );
}
```

Now in `app/page.jsx` use this new component:

```jsx
import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <>
      <button className="btn btn-primary">Bootstrap button</button>
      <Accordion />
    </>
  );
}
```

You should now get an error:
`You're importing a component that imports client-only. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.`

The solution is easy. Add `"use client";` at the top of `components/Accordion.jsx`

You should have a working accordion now, but not themed.

## Theme accordion

Add bootstrap classes:

```jsx
"use client";

import { Disclosure } from "@headlessui/react";

export default function Accordion() {
  return (
    <div className="accordion">
      <Disclosure>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <Disclosure.Button className="accordion-button">
              Is team pricing available?
            </Disclosure.Button>
          </h2>
          <Disclosure.Panel className="accordion-collapse">
            <div className="accordion-body">
              Yes! You can purchase a license that you can share with your
              entire team.
            </div>
          </Disclosure.Panel>
        </div>
      </Disclosure>
    </div>
  );
}
```
