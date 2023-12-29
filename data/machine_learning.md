---
title: Machine Learning
layout: base
---

# Machine Learning

## Preparation
Going Through [CS50](https://cs50.harvard.edu/college/2022/spring/notes/0/) for refresh of some basics ([Notes](/blog/cs50.md)).

## Sources
[Roadmap/Plan](https://machinelearningmastery.com/start-here/)  
[Motivation/Karpathy is a cool dude](http://karpathy.github.io/2022/03/14/lecun1989/)

## Problem description

> Find a model or procedure that makes best use of historical data comprised of inputs and outputs in order to skillfully predict outputs given new and unseen inputs in the future. [[1]](https://machinelearningmastery.com/think-machine-learning/#:~:text=Find%20a%20model%20or%20procedure%20that%20makes%20best%20use%20of%20historical%20data%20comprised%20of%20inputs%20and%20outputs%20in%20order%20to%20skillfully%20predict%20outputs%20given%20new%20and%20unseen%20inputs%20in%20the%20future.)

## Problem solution

> A model or procedure that automatically creates the most likely approximation of the unknown underlying relationship between inputs and associated outputs in historical data. [[1]](https://machinelearningmastery.com/think-machine-learning/#:~:text=as%20the%20following%3A-,A%20model%20or%20procedure%20that%20automatically%20creates%20the%20most%20likely%20approximation%20of%20the%20unknown%20underlying%20relationship%20between%20inputs%20and%20associated%20outputs%20in%20historical%20data.,-Again%2C%20this%20is)

## How to get there

### Define the problem

- Describe problem informally and formally and list assumptions and similar problems
- List motivations for solving the problem, the benefits a solution provides and how the solution will be used.
- Describe how the problem could be solved manually.

### Prepare Data

- Consider what data is available, what data is missing and what data can be removed.
- Organize your selected data by formatting, cleaning and sampling from it.
- Transform preprocessed data into features ready for machine learning.

### Spot check algorithms

- create small experiment with different transformations of the dataset and different standard algorithms
- run every pair a bunch of times and compare mean and variance
- helps flushing out the problem structure and getting the algorithms on which to focus in the next steps

### Improving Results

- Search through parameter space to find best performing models
- Ensemble: combine results of multiple models

### Present Results

- Define the context of the problem and the motivation
- Describe Problem as a question that got answered
- Concisely describe the solution as an answer to the question
- Specify limitations of the model, what questions it can't answer and with what probability it can answer questions


# Precision and Recall

Let's assume we have a dataset of 10 items and some metric with a threshold | beyond witch our correctly classified items should lie.
X is the positive class, o is the negative class.
To the right of the threshold the positive class is correctly classified, to the left it is not.

o o o o o x x | x o x

We can then calculate the true positives, false positives, true negatives and false negatives.

## Confusion Matrix:

- True Positives (TP): 2 (Number of positive items correctly classified)
- False Positives (FP): 2 (Number of positive items incorrectly classified)
- True Negatives (TN): 5 (Number of negative items correctly classified)
- False Negatives (FN): 1 (Number of negative items incorrectly classified)

## Performance Metrics:

- Accuracy: (TP + TN) / (TP + TN + FP + FN) = 8/10
    - Rate of correct classifications.

- Precision: TP / (TP + FP) = 2/4
    - Precision is the rate of correctly predicted positives of all predicted positives. Should be high for detecting spam email. You want to let all important emails through, and it's fine if some spam get's through.

- Recall: TP / (TP + FN) = 2/3
    - Recall is the rate of correctly predicted positives of all actual positives. Should be high for detecting thiefs. It's important to catch all of them, and fine if you pull out a few normal customers.

- F1 Score: 2 * (Precision * Recall) / (Precision + Recall) = 2/3
    - Harmonic mean of precision and recall.
- Specificity: TN / (TN + FP) = 5/7
    - Rate of correct negative classifications.


# Things to look out for

## AUC of 1
- AUC can be interpreted as the probability that the model will rank a random positive example higher than a random negative example, which is good.
- but AUC of 1 indicates a perfect model, which is likely a bug

## Loss increasing

- Bug
- Learning rate too high
    - always start with low learning rate to check if everything works
    - then adjust
    - not working if loss function plateaus, or start is in a local minimum


# Overview

This should be a high level overview of the field of machine learning.
It can help to determine what methods to use for a given problem.
In general it's important to know what kind of data there is and what you want to predict.
From that you can determine what kind of model, loss function and optimization algorithm to use.

- Predicting a quantity:
    - Regression
        - Linear Regression
        - Logistic Regression
        - Support Vector Machines
        - Neural Networks
- Predicting a category:
    - Classification
        - Logistic Regression
        - Support Vector Machines
        - Neural Networks

- add base formulas for everything
- but also add implementations for everything

## Feature Selection/Engineering

- List categorical and numerical feature columns
    - numerical features are features like age, height, weight
    - categorical features are features like weather ('sunny', rainy', 'cloudy')
    - there can be features that seem numerical but are actually categorical, like zip code
        - their numerical values don't have a relationship with each other or the target variable

## Models

## Loss Functions

- Add [regularization](ml_glossary/#regularization) to loss function

## Optimization Algorithms

- Compute gradients

## Evaluation Metrics

### Classification

#### Accuracy

$accuracy = \frac{correctly\ classified\ examples}{total\ examples}$
