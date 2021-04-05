# rpgio
![Build](https://img.shields.io/github/workflow/status/librowski/rpgio/CI?style=for-the-badge)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/librowski/rpgio?style=for-the-badge)
![Depfu](https://img.shields.io/depfu/librowski/rpgio?style=for-the-badge)
[![Codecov](https://img.shields.io/codecov/c/gh/librowski/rpgio?style=for-the-badge)](https://codecov.io/gh/librowski/rpgio)
![License](https://img.shields.io/github/license/librowski/rpgio?style=for-the-badge)

## Initial design

<img src='https://i.ibb.co/9tSy9Wr/Main.png' width='100%' alt='initial design' />

## Running

⚠️ _The command names are quite ambiguous and will most likely be changed_

Run these commands with `yarn`:
- `build` to create a JS build runnable by electron
- `app` to run this build
- `start` to combine the commands above
- `lint:ts` and `lint:css` to check for code-style issues
- `test`, `test:e2e` and `test:all` to run the tests

## Directory structure
```
 📂 development             | Development related utils
 📂 src                     |
 ┣ 📂 assets                | Fonts, icons, images, etc.
 ┣ 📂 components            | React components 
 ┃ ┣ 📂 providers           | Global react providers (i.e. react-router)
 ┃ ┣ 📂 shared              | Shared components - inputs, buttons, typography
 ┃ ┣ 📂 views               | Application views / pages
 ┣ 📂 electron              | Electron-related utils
 ┣ 📂 i18n                  | Locale and i18n logic
 ┣ 📂 player                | Audio-player / web-audio related files
 ┣ 📂 store                 | Redux store, actions and selectors
 ┗ 📂 test                  | Testing utilities
 ```
