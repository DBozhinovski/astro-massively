# Massively for Astro

Massively is a free, fully responsive HTML5 + CSS3 site template designed by [@ajlkn](https://twitter.com/ajlkn) for
[HTML5 UP](https://html5up.net) and released for free under the [Creative Commons license](https://html5up.net/license).
Remixed for [Astro](https://astro.build) by [@d_bozhinovski](https://twitter.com/d_bozhinovski).

This is a port of the template for Astro, to be used as a theme. It's been Astroized as much as I deemed practical. I
imagine it will need to change and evolve if there's interest in it, so I'm open to suggestions (and PRs) on how to
Astroize it further.

## [\[Click here for the Demo\]](https://astro-massively.darko.io)

![intro.png](./intro.png)

<div style="display: flex; justify-content: space-between; padding-bottom: 15px;">
  <img style="width: 32%;" src="./heading.png" />
  <img style="width: 32%;" src="./posts.png" />
  <img style="width: 32%;" src="./typography.png" />
</div>
<div style="display: flex; justify-content: space-between;">
  <img style="width: 32%;" src="./footer.png" />
  <img style="width: 32%;" src="./buttons.png" />
  <img style="width: 32%;" src="./image-grid.png" />
</div>

---

## Features

- Easily customizable for many use cases
- Consistent look and feel
- Uses `astro 1.2.1`
- Huge set of components to fit any type of site (see the `/elements` page)
- REALLY backward compatible - the design and styles were built a while ago :sweat_smile:
- Sitemap, RSS feed, Google Fonts Optimizer...

## Getting started

TL;DR; Clone -> install -> ? -> profit. Standard Astro stuff.

In addition to the run-of-the-mill Astro project structures, you can find a `/scripts` directory in `/src`. These are
the animation scripts ported over from the original theme. They enable some features, such as the parallax effect for
the intro header/logo transition. They can be easily disabled, however, if you'd like to have a JS-less page.

## General Configuration

Title, navigation links, social media links, URL etc. can be customized from the `./src/config.ts` file.

Changing these allows you to easily have a ready-to-deploy webpage without touching any code.

## Development and customization notes
