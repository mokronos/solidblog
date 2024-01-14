---
title: Data Science
date: 07.01.2024
---

# Data Science

The general goal of data science is to extract important patterns and trends from the data and maybe understand the underlying mechanism that lead to the data.
These underlying mechanisms can be easy to understand with simple data, but when the datasets get bigger and more complex, the human brain is quickly at its limits.
This is where we can use computers to learn from the data, which can be roughly categorized into supervised and unsupervised learning.
In supervised learning one tries to learn the relationship between input measures and output measures.
In unsupervised learning one tries to figure out patterns and relationships between the set of input measures.

# Prediction Model

A good prediction model (or just model) is a function f(input) -> output, that enables us to predict accurate outcomes (outputs) for unseen inputs.

# Process

The main question is how to find a good prediction model from the given data or problem.

## Data

First, we need to either organize existing data or collect new data ourselves.
This highly depends on the problem and the data that is already available.
We can separate data broadly into categorical and numerical data.
Numerical data is data that can be represented by numbers.
This can be further separated into discrete, e.g. the number of children, and continuous data, e.g. the height of a person.
Categorical data is everything else, and can be further separated into ordinal, which means the categories have some kind of progression or order between them, e.g. the size of a t-shirt, and nominal data, without order, e.g. the color of a t-shirt.


## Metric

Define a metric that measures the quality of the prediction model.
Don't forget statistical significance of the result (How much confidence do we have in the result?).

## Baseline

Use the simplest model that makes sense and establish a baseline.
