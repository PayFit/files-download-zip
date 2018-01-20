# bollywood-names

Get random star wars character names

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

<<<<<<< HEAD
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Roadmap][roadmap-badge]][roadmap]

## The problem

You're writing tests and need to come up with the name of your user stub. Why waste
time hard-coding `'John Doe'` again when you could use `'Count Dooku'` or
`'Qui-Gon Jinn'`? Using Star Wars characters makes your tests much more interesting.

## This solution

This module has ~100 Star Wars character names and exposes an API for you to get a
random one every time you call it.
=======
<a href="https://app.codesponsor.io/link/PKGFLnhDiFvsUA5P4kAXfiPs/kentcdodds/starwars-names" rel="nofollow"><img src="https://app.codesponsor.io/embed/PKGFLnhDiFvsUA5P4kAXfiPs/kentcdodds/starwars-names.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

![starwars-names](other/starwars-names.gif)
>>>>>>> 12805ee6ba2db911037422c2ac2184d6886b7ea7

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and should
be installed as one of your project's dependencies:

```
npm install --save starwars-names
```

Alternatively you can get the [UMD][umd] build which is also published to the npm
registry and is therefore available via [npmcdn.com][npmcdn]:

- [https://npmcdn.com/starwars-names@1.6.0/dist/index.umd.js][npmcdn-link]
- [https://npmcdn.com/starwars-names@1.6.0/dist/index.umd.min.js][npmcdn-min-link]

The UMD build exposes the module as a global called `starWarsNames` or as an unnamed
module for AMD/CommonJS (require it by its file path)

## Usage

```javascript
const starWarsNames = require('starwars-names') // CommonJS
console.log(starWarsNames.random()) // Han Solo
console.log(starWarsNames.random()) // Kit Fisto
// you can also get the full array on `starWarsNames.all`
```

## Inspiration

- [cat-names](https://github.com/sindresorhus/cat-names)
- [dog-names](https://github.com/sindresorhus/dog-names)

## Other Solutions

This is actually part of a course instructing people how to create open source
projects. So as a result there are dozens of copies of this module on npm. Good luck
finding the best :-)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />[💻](https://github.com/kentcdodds/starwars-names/commits?author=kentcdodds) [📖](https://github.com/kentcdodds/starwars-names/commits?author=kentcdodds) 🚇 [⚠️](https://github.com/kentcdodds/starwars-names/commits?author=kentcdodds) ✅ 📹 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## LICENSE

MIT

<<<<<<< HEAD
[build-badge]: https://img.shields.io/travis/kentcdodds/starwars-names.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/starwars-names
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/starwars-names.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/starwars-names
[version-badge]: https://img.shields.io/npm/v/starwars-names.svg?style=flat-square
[package]: https://www.npmjs.com/package/starwars-names
[downloads-badge]: https://img.shields.io/npm/dm/starwars-names.svg?style=flat-square
[npm-stat]: http://npm-stat.com/charts.html?package=starwars-names&from=2016-04-01
[license-badge]: https://img.shields.io/npm/l/starwars-names.svg?style=flat-square
[license]: https://github.com/kentcdodds/starwars-names/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/starwars-names/blob/master/CODE_OF_CONDUCT.md
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg?style=flat-square
[roadmap]: https://github.com/kentcdodds/starwars-names/blob/master/other/ROADMAP.md
[umd]: https://github.com/umdjs/umd
[npmcdn]: https://npmcdn.com
[npmcdn-link]: https://npmcdn.com/starwars-names@1.6.0/dist/index.umd.js
[npmcdn-min-link]: https://npmcdn.com/starwars-names@1.6.0/dist/index.umd.min.js
=======
This library was developed by [me](https://twitter.com/kentcdodds) as part of an
[egghead.io](http://egghead.io/) series called "How to Write a JavaScript Library."

I'm now also using it to give [a workshop](http://kcd.im/fem-oss) for
[Frontend Masters](https://frontendmasters.com).

### Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

You may have come to this project from different varying sources. There are a
different series of branches for each workshop/course I've done. To get started with
the project, start with this:

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. In the directory you cloned the repository, run `git fetch --all`

If you need help with these steps, you might check out
[this free Egghead.io course](http://kcd.im/pull-request) which can help you get things going.

Finally, based on which version of the project you're looking for (workshop, egghead, or
Frontend Masters) you'll run one of the following commands in the cloned directory:

- **Frontend Masters Workshop**: `npm run setup:fem`
- **Egghead Course**: `npm run setup:egghead`

If you get any failures at this point something is wrong and needs to be fixed. Remember,
[Google](https://google.com) and [StackOverflow](https://stackoverflow.com) are your friends.

You might find it helpful to see a list of the available branches. Run: `git branch` for that.
>>>>>>> 12805ee6ba2db911037422c2ac2184d6886b7ea7
