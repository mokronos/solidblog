---
layout: base
title: Data Preparation and Feature Engineering
---

# SQL vs Python vs Excel/Sheets

SQL is probably most useful, when it just comes to data manipulation and query. Excel is easier because it is more "what you see is what you get" due to the UI. If you need to go beyond data manipulation into machine learning python is probably the best.  
To learn SQL and use python for establishing a pipeline for machine learning, the best thing might be to use python to automate SQL commands. For quick stuff google sheets is probably good to learn.

# Overview

Machine Learning generally tries to recognize patterns in data to then generate new data points.
To achieve that, one needs to generate and transform a dataset to feed into the algorithms.

Mainly just notes taken from [Google](https://developers.google.com/machine-learning/data-prep).

# Dataset Generation

# Dataset Transformation

## When to transform

### Prior to training

#### Pros

- computation only performed once

#### Cons

- Transformations need to be reproduced at prediction time. New data can be unpredictable.
- need to rerun dataset generation when changing transformations, which may lead to slow iterations. Not an issue with a small dataset.

### Within the model

#### Pros

- can always use the same data, as happen in the model.
- when changing transformations the same data is still used, which leads to fast iterations.

#### Cons

- transformations can increase latency, this is the case with transformations at prediction time as well.

## Visualizations

Always look at graphs or other visualizations of your dataset, before and after transformations to detect errors or irregularities.

## Normalization

When having features with highly different ranges of numeric values it is recommended to perform normalization.
Gradient decent can have issues and slowly converge otherwise.
