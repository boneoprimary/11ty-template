# 11TY Starter

This starter is bootstrapped with the following tools:

- `11ty` for the static site generated (SSG) framework.
- `tailwindcss via postcss` for styling.
- `liquid` for the templating language.

## Prerequisites

- NodeJS
- Linux (WSL or a UNIX based system)

## Quickstart

1. Fork this repository.
2. Clone it to your computer.
3. `cd` into it.
4. Run `npm install`
5. Run `npm run develop`

These steps will make your website available at <a href="http://localhost:8080">http://localhost:8080</a>, which will auto reload when a change is made.

## HTML

To add HTML, we will instead use the extension `.liquid`.
When running the server, it will transform the liquid file into a HTML file out into the `_site/` directory.

## Data

Data comes from `_data`. To access this in the liquid template, we reference it using the object name.

Check `src/_data/menu.yaml` and `src/menu.liquid` for its application.

## Styling

To add styling, use the tailwind classes.

```html
<p class="p-2 ml-1">Hello</p>

<!-- The classes above will be computed to this css -->
<style>
  .p-2 {
    padding: 0.5rem;
  }

  .ml-1 {
    margin-left: 0.25rem;
  }
</style>
```

- Heading
- shows "We prefer Bitcoin"
- Logo