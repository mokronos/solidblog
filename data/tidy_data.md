---
title: Tidy data
layout: base
---

# Tidying data

Mostly a summary of the paper [tidy data](https://vita.had.co.nz/papers/tidy-data.pdf).

Example of badly formatted data:

||treatmenta|treatmentb|
|---|---|---|
|John Smith|-|2|
|Jane Doe|16|11|
|Mary Johnson|3|1|

Better formatted version of that data:

|name|trt|result|
|---|---|---|
|Jane Doe|a|16|
|Jane Doe|b|11|
|John Smith|a|-|
|John Smith|b|2|
|Mary Johnson|a|3|
|Mary Johnson|b|1|

Important guidelines:
- Rows: observations
- Columns: variables
- Values: variable values at specific observations

Order:
- variables: fixed (descriptions of the experiment) first, then measured variables, always the ones related to each other next to each other
- observations: order by first variable, then break ties with the following variables

This leads to a standard, which is important as programs knows how their input is structured. So they can take the data, transform it and return tidy data again.

# From messy to tidy

To get a dataset from messy to tidy one can employ three operations:

## Melting
Turns multiple columns that are variables into a column with the names of the specific columns and a column with the value.

### Messy:

|row|a|b|c|
|---|---|---|---|
|A|1|4|7|
|B|2|5|7|
|C|3|6|9|

### Molten:

|row|column|value|
|---|---|---|
|A|a|1|
|A|b|4|
|A|c|7|
|B|a|2|
|B|b|5|
|B|c|8|
|C|a|3|
|C|b|6|
|C|c|9|

## String splitting
## Casting
