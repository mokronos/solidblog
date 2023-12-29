---
layout: base
title: Coding
---

# Random collection of Coding tips

## Gitignore

Just select a gitignore template when creating a repository on github. Overview can be found [here](https://github.com/github/gitignore).


## Python random seed

Need to set the seed in the file of the execution of the function. If the function is imported from another file, the seed will not be set for the imported function. Same for PyTorch.

## Vim tips

- gf to open file under cursor (markdown internal links)
- gx to open file under cursor with default program (images, urls)

## Local server

If you get slow load times on every other request only in chrome, use 127.0.0.1 instead of localhost.
I think it has something to do with chrome trying to resolve localhost to ipv6 first.

## Cool python libraries

- [icecream](https://github.com/gruns/icecream) for nicer printing/logging

## Python flask sqlite

When accessing database, the fetchall() function returns a list of sql row objects.
When accessing a specific column from one row, in python you need to use bracket notation [string].
In the jinja template you can use the dot notation .string (without quotation marks, like accessing an attribute of an object) or the bracket notation.
