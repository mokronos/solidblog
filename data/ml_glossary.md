---
title: ML Glossary
layout: base
---

# Collection of terms and definitions for machine learning, statistics and data science.

## L1 Regularization

$\lambda \sum_{i=1}^n |w_i|$

Penalizing the absolute value of the weights in a model.
Compared to the L2 regularization, the weights can now drop to zero and thus can be removed from the model.

<details>
<summary>Maths</summary>

The L1 regularization term is of the form

$L_1 = \lambda \sum_{i=1}^n |w_i|$, 

$$L_1 = \lambda \sum_{i=1}^n |w_i|$$, 

where $\lambda$ is the regularization parameter, which controls how much regularization there should be, and $w_i$ is the $i\,\text{th}$ weight.
</details>

<details>
<summary>Implementation</summary>

In pytorch we can loop over all the parameters and add their absolute values to the loss function.

```python
loss_reg_l1 = 0
for param in model.parameters():
    loss_reg_l1 += torch.sum(torch.abs(param))
total_loss = loss_data + lambda * loss_reg_l1
```

In sklearn, most models, like the [SGDClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html#:~:text=penalty%7B%E2%80%98l2%E2%80%99%2C%20%E2%80%98l1,0.0%2C%20inf\).), have a `penalty` parameter that can be set to `'l1'` to use L1 regularization.
And the `alpha` parameter that controls the lambda.
```python
clf = SGDClassifier(penalty='l1', alpha=0.01)
```

</details>

## One-hot Encoding

A way to represent categorical features as binary features.

<details>
<summary>Example</summary>

Let's say we have a dataset with a feature `weather` that can take on the values `sunny`, `cloudy` and `rainy`.
We can one-hot encode this feature as `[1, 0, 0]` for `sunny`, `[0, 1, 0]` for `cloudy` and `[0, 0, 1]` for `rainy`.
Thus we created three binary features from one categorical feature.
</details>

## L2 Regularization

L2 Regularization can be used to punish large weights in a model.
Large model weights often indicate more complex models that are more prone to overfitting.
Thus overfitting can be reduced by driving all the weights towards zero, but not exactly zero.

<details>
<summary>Maths</summary>

L2 Regularization adds a term to the loss function of the form

$L_2 = \lambda \sum_{i=1}^n w_i^2$, 

where $\lambda$ is the regularization parameter, which controls how much regularization there should be, and $w_i$ is the $i\,\text{th}$ weight.
We can see that the derivative of the L2 regularization term is $2 w_i$, thus the smaller the weight, the smaller the push towards zero by the parameter update.
So the weights almost never reach exactly zero (unless floating point stuff).


</details>
<details>
<summary>Implementation</summary>

In pytorch, we can use the [`weight_decay`](https://pytorch.org/docs/stable/generated/torch.optim.Adam.html#:~:text=weight_decay%20(float%2C%20optional)%20%E2%80%93%20weight%20decay%20(L2%20penalty)%20(default%3A%200)) parameter in the optimizer to change the lambda of L2 regularization.

```python
optimizer = torch.optim.Adam(model.parameters(), lr=0.001, weight_decay=0.01)
```

In sklearn, most models, like the [SGDClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html#:~:text=penalty%7B%E2%80%98l2%E2%80%99%2C%20%E2%80%98l1,0.0%2C%20inf\).), have a `penalty` parameter that can be set to `'l2'` to use L2 regularization.
And the `alpha` parameter that controls the lambda.
```python
clf = SGDClassifier(penalty='l2', alpha=0.01)
```
</details>

## Sparse Feature

A feature that is mostly zero across all observations and is therefore sparse in the sense that it has few non-zero values.
For example, a dataset of people and their favorite songs might have a feature for each song of 100000 songs.
However, most people have only listened to a few songs, so most of the feature values would be zero and some ones ([one-hot encoding](#one-hot-encoding)).

## Feature Cross

A new feature that is created by combining two or more existing features.
This is often used to create non-linearity in a linear model.
<details>
<summary>Example</summary>

So for example, we can have the feature $x$ and a non-linear relationship to $y$.
Instead of using a non-linear model, we can create a new feature $x^2$ and use a linear model.

</details>

<details>
<summary>Implementation</summary>

In pandas, one can just add another column to the dataframe with the new feature.
```python
df['x_squared'] = df['x'] ** 2
```

</details>

## Activation Function

A function that is applied to the output of a layer/neuron in a model.
It is mainly used to introduce non-linearity to the otherwise linear model.
Popular examples are the sigmoid function, the tanh function and the ReLU function.
The ReLU function often works better than the other two smooth functions and is easier to compute.
This is mostly based on empirical evidence.

In general, any mathematical function can be used as an activation function.
However it is important that the function is differentiable, because we need to compute the derivative of the function for the backpropagation algorithm.

<details>
<summary>Maths</summary>

The sigmoid function is defined as

$\sigma(x) = \frac{1}{1 + e^{-x}}$.

The tanh function is defined as

$\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x} + 1}$.

The ReLU function is defined as

$\text{ReLU}(x) = \max(0, x)$.

</details>

<details>
<summary>Implementation</summary>

In pytorch, we can add the activation functions to the model definition. (
[ReLU](https://pytorch.org/docs/stable/generated/torch.nn.ReLU.html),
[Sigmoid](https://pytorch.org/docs/stable/generated/torch.nn.Sigmoid.html),
[Tanh](https://pytorch.org/docs/stable/generated/torch.nn.Tanh.html)
)

```python
import torch.nn as nn
x = torch.randn(1, 1)
m = nn.ReLU()
m = nn.Sigmoid()
m = nn.Tanh()
y = m(x)
```

or functional (
[ReLU](https://pytorch.org/docs/stable/generated/torch.nn.functional.relu.html),
[Sigmoid](https://pytorch.org/docs/stable/generated/torch.nn.functional.sigmoid.html),
[Tanh](https://pytorch.org/docs/stable/generated/torch.nn.functional.tanh.html)
)
    
```python
import torch.nn.functional as F
x = torch.randn(1, 1)
y = F.relu(x)
y = F.sigmoid(x)
y = F.tanh(x)
```

In sklearn, we can specify the activation function for each model in the model definition, for example for the [MLPClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html#:~:text=activation%7B%E2%80%98identity%E2%80%99%2C%20%E2%80%98logistic%E2%80%99%2C%20%E2%80%98tanh%E2%80%99%2C%20%E2%80%98relu%E2%80%99%7D%2C).
    
```python
clf = MLPClassifier(activation='relu')
clf = MLPClassifier(activation='logistic')
clf = MLPClassifier(activation='tanh')
```
The logistic activation function is the sigmoid function in this case.
The sigmoid function is a special case of the logistic function.

</details>

## Neural Network

A neural network is a model that consists of multiple layers of neurons.
In general, a neural network consists of
- an input layer, whose dimensions fits the input data (features)
- one or more hidden layers, with weights/biases as connections and an activation function
- an output layer, whose dimensions fits the output data (labels)

<details>
<summary>Implementation</summary>

In pytorch, we can define a neural network by subclassing the [`nn.Module`](https://pytorch.org/docs/stable/generated/torch.nn.Module.html) class.

```python
import torch.nn as nn

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(10, 20)
        self.fc2 = nn.Linear(20, 1)
        self.relu = nn.ReLU()

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x
```

</details>

## Vanishing Gradient

The gradient during backpropagation may vanish, i.e. approach zero, in the first few layers of a neural network if it is multiplied by low values in the deeper layers.
This makes it hard to train earlier layers.
In practice the ReLU activation function helps with this problem as it has a derivative of 1 compared to the sigmoid and tanh activation functions, which have very low derivatives pretty quickly.
We need to be careful with ReLU, as it's gradient is zero for negative values, which can lead to dead ReLUs.
This is further investigated in this [paper](https://proceedings.mlr.press/v15/glorot11a/glorot11a.pdf) and can be fixed with a LeakyReLU, which has a linear function with a really small slope for the negative part of the ReLU, so it "leaks" some gradient.

## Dead ReLU

A ReLU neuron is dead if it's output is always zero.
This can happen if the weights are initialized in a way that the neuron always outputs a negative value.
Or in general, if the ReLU unit outputs a negative value it's gradient is zero and it will never be updated.
Thus it may never again output a positive value again and contribute to the model.
Lowering the learning rate can keep ReLUs from dying.

## Exploding Gradient

The gradient during backpropagation may explode, i.e. approach infinity, in the first few layers of a neural network if it is multiplied by high values in the deeper layers.
This can be fixed by clipping the gradient, batch normalization or a lower learning rate.


## Dropout

Dropout is a regularization technique that randomly sets some neurons to zero during training.
This forces the model to learn a more robust representation of the data and prevents overfitting.
During inference, all neurons are used again.

In practice, there will be a probability $p$ attached to certain neurons, which determines if the neuron will be active or not.
We can then vary the probability $p$ to add more (higher $p$) or less (lower $p$) regularization.

<details>
<summary>Implementation</summary>

In pytorch, we can add dropout layers to the model definition.

```python
import torch.nn as nn

class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(10, 20)
        self.fc2 = nn.Linear(20, 1)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(p=0.5)

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.dropout(x)
        x = self.fc2(x)
        return x
```

In sklearn we need a custom implementation for a dropout layer.
</details>

## Sample Space

The set of all possible outcomes of a random experiment.

## Distribution

A distribution is a function that assigns probabilities to the outcomes of a random experiment.
A normal distribution has lower probabilities for extreme values and higher probabilities for values close to the mean.
A uniform distribution has the same probability for all values.
A bimodal distribution is similar to a normal distribution, but has two peaks instead of one.
There can also be a skewed normal distribution, where the probability is higher for one side of the distribution.

## Sampling Distribution

A sampling distribution is the distribution of a statistic, like the mean, if we take many samples from a population.
If we pick multiple samples from a normal distribution, the sampling distribution will also be normal, but skinnier, or a lower variance.
When picking many samples it gets more unlikely that the average of those samples is at the extremes of the distribution.

## p-value

The p-value is the probability of observing a test statistic at least as extreme as the one observed, given that the null hypothesis is true.
If the p-value is small, it is more likely that the null hypothesis can be rejected.
The point where the p-value is small enough to reject the null hypothesis is called the significance level (usually 0.05).

## p-hacking

P-hacking is the practice of trying many different statistical tests until one finds a significant result (p < 0.05).
For example, if we have a dataset with 100 features and we test each feature for correlation with the target variable, we will find 5 features that are correlated with the target variable by chance.
Better practice is to have a hypothesis before looking at the data and then test that hypothesis.
