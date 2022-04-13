# Resume Terminal

## About

This projet use [ParcelJS](https://parceljs.org/) as build tool. It is made from scratch, the only library used is for an hidden command `paf` [canvas-confetti](https://github.com/catdad/canvas-confetti).

## Run the project

> First you need to install dependencies with `npm install`

- To run in dev mode : `npm run dev`
- To build for production : `npm run build`

## Customs commands

In the `app.js` file you can see multiple arrays that stores commands :

- `hiddenCommands`: Commands that are not use in autocompletion (easter egg commands for example)
- `customCommands`: Commands that needs a specials JS treatments, in my case `dark`/`light` to swith app theme, `get cv` to download my resume, ...
- `commandsList`: This is the main array used for autocompletion, it stores `customCommands` **and** commands that are listed in the `commands.json` file.
