---
id: "11"
title: "About"
description: "About this theme."
date: "2024-02-11"
listed: false
nocomments: true
categories:
    - "documentation"
tags:
    - "theme"
    - "epoxia"
    - "documentation"

---

# About this theme

Epoxia is a theme for the blogging platform [Bloggrify](https://bloggrify.com).

::alert{type="TIP"}
This theme supports categories and tags. You can add them in the front matter of your markdown files.
::

## Installation

To install this theme, you should clone this repository and install the dependencies.

```bash
git clone git@github.com:hlassiege/demo-epoxia.git
cd demo-epoxia
npm install
```

Then you can run the development server on http://localhost:3000

```bash
npm run dev
```

Then, you can remove all contents from the `content` folder and start from scratch and create your own [content](https://bloggrify.com/introduction/writing-pages).


## Configuration

On top of the [standard configuration](https://bloggrify.com/introduction/configuration), you can add the following options to your app.config.ts file:


| **Key**                     | **Type**  | **Default** | **Description**                                                                                                                    |
|-----------------------------|-----------|-------------|------------------------------------------------------------------------------------------------------------------------------------|
| `dark_mode_selector_hide`   | `boolean` | false       | true if you want to disable the dark mode selector                                                                                 |
| `donations.buy_me_a_coffee` | `string`  |             | your identifier on [Buy me a coffee](https://www.buymeacoffee.com) if you want to display a donation button on your portfolio page |
| `portfolio`                 | `array`   | []          | list of projects you want to show on your portfolio page                                                                           |
| `portfolio.name`            | `string`  |           | Project name                                                                                                                       |
| `portfolio.description`     | `string`  |           | Project description                                                                                                                |
| `portfolio.url`             | `url`     |           | Project url                                                                                                                        |
| `portfolio.status`          | `string`  |           | Project status (if discontinued, the icon will turn red)                                                                           |
| `portfolio.image`           | `string`  |           | Project icon                                                                                                                    |

## Dark mode 

You can hide the dark mode selector by setting the `dark_mode_selector_hide` to `true` in the `app.config.ts` file.

But you may want to force the dark mode for all your users. You can do that by setting a `class` to `dark` in the `nuxt.config.ts` file.

```typescript
    app: {
    head: {
        htmlAttrs: {
            class : "dark"
        }
    }
```

## Portfolio page

This theme includes an optional portfolio page. 
You can create a page with the following front matter: 
    
```yaml
---
title: "Portfolio"
description: "Portfolio"
listed: false
layout: "portfolio"
---
```

On this page, you can list all your projects. To do so you should add a `portfolio` key in the `app.config.ts` file.

```typescript
    portfolio: [
        {
            name: "Project 1",
            description: "Description of project 1",
            url: "https://test.com",
            status: "active",
            image: "project1.png"
        },
        {
            name: "Project 2",
            description: "Description of project 2",
            url: "https://test.com",
            status: "discontinued",
            image: "project2.png"
        }
    ]
```
