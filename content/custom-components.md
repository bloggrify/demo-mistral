---
id: "30"
title: "Custom components"
description: "Enhance your markdown files with custom components."
date: "2024-06-06"
categories:
  - markdown
  - documentation
tags:
  - markdown
  - sample
  - thailand

cover: "covers/iceland.jpg"
---

You can use [custom components](https://content.nuxt.com/usage/markdown#vue-components) within vue.js to extend markdown features. Some components are already available within Bloggrify such as:

:toc

## Code

### Code group

::mdd

#preview    
:::code-group

```bash [npm]
npm run dev
```

```bash [yarn]
yarn dev
```

```bash [pnpm]
pnpm run dev
```

:::

#markup
```markdown
    ::code-group
    
    ```bash [npm]
    npm run dev
    ```
    
    ```bash [yarn]
    yarn dev
    ```
    
    ```bash [pnpm]
    pnpm run dev
    ```
    
    ::
```
::




### Markdown code block

::mdd

#preview    
    :::mdd
    
    #preview    
    _Showing a result_
    
    #markup
    ```markdown
    _Showing the markup_
    ```
    :::

#markup
```markdown
    ::mdd
    
    #preview    
    _Showing a result_
    
    #markup
    ```markdown
    _Showing the markup_
    ```
    ::
```
::


## Alerts

::mdd

#preview    
::alert{type="TIP"}
This is a tip
::

#markup
```markdown
::alert{type="TIP"}
This is a tip
::
```
::

::mdd

#preview    
::alert{type="Warning"}
This is a warning
::

#markup
```markdown
::alert{type="Warning"}
This is a warning
::
```
::



## table of contents 

::mdd

#preview    
:toc

#markup
```markdown
:toc
```
::

**Configuration :**

| Parameter                                       | Description                                                                              |
|-------------------------------------------------|------------------------------------------------------------------------------------------|
| `type`                                          | The type of alert. Can be `warning`, or `tip`.                                           |
| `showChildren`                                  | If set to `true`, the H3 will be displayed in the table of contents. Default is `false`. |

