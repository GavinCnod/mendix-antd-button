![GitHub all releases](https://img.shields.io/github/downloads/GavinCnod/mendix-antd-button/total?style=social)

Readme here: [Readme in English](https://github.com/GavinCnod/mendix-antd-button/blob/main/README.md) | [Readme in Chinese (中文）](https://github.com/GavinCnod/mendix-antd-button/blob/main/README_CN.md)

## Introduction
This widget provide a Ant Design Button in Mendix. Clicking a Button will trigger some actions/logics in Mendix.

## Features
1. 5 type of button provided:
   * Primary button: indicate the main action, one primary button at most in one section.
   * Default button: indicate a series of actions without priority.
   * Dashed button: used for adding action commonly.
   * Text button: used for the most secondary action.
   * Link button: used for external links.

2. And 3 other properties additionally.
   * danger: used for actions of risk, like deletion or authorization.
   * ghost: used in situations with complex background, home pages usually.
   * disabled: when actions are not available.

3. If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a button with the default size.
4. 3 shapes options: Default, Circle, Round.
5. block property will make the button fit to its parent width.

## Installation and Usage

### Add this widget to the Mendix Project
1. Download the mpk file from [here](https://github.com/GavinCnod/mendix-antd-button/releases).
2. Copy the mpk file to your Mendix Project directory `{YourMendixProjectFolder}/widgets/`.
3. Open your Mendix Project with Mendix Studio Pro and click on the menu `Menu > App > Synchronize App Directory`.

### Configuration

1. Add widget `Antd Button` to a Page.
2. Config the parameters, including:  `Caption`, `Type`, `Shape`, `Size`, `Block` , `OnClick Event` and etc.
   <img width="432" alt="button-helper-01" src="https://user-images.githubusercontent.com/24690236/205483634-94b15cf8-0f51-4f36-b17a-f24e7111bc41.png">
   
   <img width="436" alt="button-helper-02" src="https://user-images.githubusercontent.com/24690236/205483661-6bfe514c-2462-45e4-a5be-79ca46f1053c.png">
3. Run the project locally and check.
   
## Demo Project

1. You can access the online demo from [here](https://demo-antdwidgets100.apps.ap-2a.mendixcloud.com/) to show the features of this widget.
2. You can also download the demo project to run it on your own PC.

## Datail of properties
### Main Section
* Caption：button text.
* Button Type：button type.
* Button Shape：button shape.
* Button Size：button size.
* Button Block：full width as parent or not.
### Status Section
* Disabled：status default as `No`.
* Danger：status default as `No`.
* Ghost：status default as `No`.
### Event Section
* OnClick Event：button event.

## Comparing the `antd` `Button` 

Here is a list of all the properties of `Button` in `antd`, with a description of whether this widget supports the property and why it does not. To see the meaning of the original property in antd, please [move here](https://ant.design/components/button).

| antd properties             | Description                                       | Supproted | Comments                   |
| --------------------- | ------------------------------------------ | ---- | -------------------- |
| block            | fit width as the parent                    | Y    |                      |
| danger              | danger status                                  | Y    |                     |
| disabled            | disabled status                    | Y    |                      |
| ghost              | make background transparent and invert text and border colors                                 | Y    |                     |
| href            | Redirect url of link button                   | N    | No need in Mendix           |
| icon                  | Set the icon component of button                    | N    | WIP     |
| loading                | Loading status                                | N    | WIP                     |
| shape                | Button shape                                | Y    |                      |
| size            | Button size                            | Y    |                      |
| target                 | Same as target attribute of a, works when href is specified            | N    | No need in Mendix                     |
| type              | Button Type                              | Y    |                      |
| onClick             | OnClick event                              | Y    |                      |

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
