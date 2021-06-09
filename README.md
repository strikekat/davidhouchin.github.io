Source for davidhouchin.com  
Uses a hacked-up (and old) version of the [Kiera](https://themes.gohugo.io/hugo-kiera/) theme.

This site is built with Hugo. To install on Fedora: `sudo dnf install hugo`  

To create a new page: `hugo new content/posts/new-post.md`  
To run a debug server: `hugo server -D`  
To create a published version in `public/`, just run `hugo`  
To target a specific folder: `hugo --destination ./publish/`  
**Note** - This does not clear out the folder first, so delete it if you want to remove renamed/old files.

Here is an example static page header (In content/):  
```
---
title: "Resume"
date: 2020-02-08T13:31:09-08:00
draft: false
menu: "main"
meta: "false"
weight: 90
---
```
A higher weight means further to the left of the main menu.  
This shortcode will embed a Google document (must be published publicly first):  
`{{< gdocs src="URL" >}}`  

To modify the fonts, make sure the font is included in `themes/kiera/layouts/partials/header_includes.html`.
Then set the fonts in `themes/kiera/static/css/styles-{dark|light}.css`.
