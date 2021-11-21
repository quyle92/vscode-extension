>This is a fork of the [original ayu extension](https://github.com/teabyii/vscode-ayu) at version 0.14.0.
I did not like the changes made in 0.15.0 so I forked the extension and rolled back. This extension may include
some personal touches which were not present in the original ayu extension.

![vscode-ayu](https://github.com/TeeSeal/vscode-ayu-legacy/raw/master/assets/header.png)

> Source from: https://github.com/dempfi/ayu

A simple theme with bright colors and comes in three versions — *dark*, *light* and *mirage* for all day long comfortable work.

> Note that this isn't a theme maintained by the original [Ayu theme](https://github.com/dempfi/ayu) author so please report issues related to this theme here.

## Install

```shell
ext install ayu
```

Then go to `Preferences > Color Theme > Ayu Light(or Ayu Dark, or Ayu Mirage)`.
If you want to setup File Icon, then go to `Preferences > File Icon Theme > Ayu`.

## Screenshots

#### Light
![Light](https://github.com/TeeSeal/vscode-ayu-legacy/raw/master/assets/light.png)

#### Dark
![Dark](https://github.com/TeeSeal/vscode-ayu-legacy/raw/master/assets/dark.png)

#### Mirage
![Mirage](https://github.com/TeeSeal/vscode-ayu-legacy/raw/master/assets/mirage.png)

## Development

Install dependencies
```shell
npm install
```

Update themes and build VSIX package
```shell
npm run build && npm run package
```
