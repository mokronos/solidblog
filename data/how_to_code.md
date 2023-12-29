# How to code


Notes taken from ["What is Programming"](https://www.youtube.com/watch?v=N2bXEUSAiTI) by George Hotz.

# Programs

Input > Program > Output

Seems more like functional programming.

C is like assembly with some syntactic sugar.

Language spectra:

- Ease of use: C --> Python
- Functional: C --> Haskell

C --> C++ was functional --> object oriented.

Didn't really improve programmer productivity.

Garbage collection improved programmer productivity.

# Computer

- Processor (CPU) --> Stream of instructions
- Memory (RAM) --> Instructions + data

## Hello World Example

```c
int main() {
    printf("hello world\n");
}
```

Compile with `gcc main.c` and run with `./a.out`.
The compilation will give some errors but it will still run.
And you can check out the instructions and memory with `objdump -D a.out`.

## Program

- .text: Instructions
- bss: Static data
- stack: local variables (control flow)
- heap: malloc

```c
void a() {
    int variable_on_the_stack;
    \\ return by popping off the stack
}

void b() {
}

int main() {
    a(); // pushes the return location of the function onto the stack
    b();
}
```
So in this example, the computer starts by executing the main function.
It then enters the a function and pushes the return location of the function onto the stack.
The a function does whatever it does, in our example, create a variable on the stack.
When the function ends, the variable gets popped off, so it does not exist anymore.
Then the return location gets popped off to know where to return to, in our case the main function after a.

This is "real" programming.

## Programming for work

What does a software "engineer" do?
- not writing algorithms

In reality they are just translating a (shitty) language aka "business requirements" into "code".

There are a lot of frameworks, like ruby on rails, that do a lot of the work for you (for example a website that enables users to leave their email address).
So you don't have to code, you just have to learn some weird syntax.

Ruby on rails, React (or similar) --> Web app
CRUD apps <-- Create, Read, Update, Delete

Frontend (View)
Database (Model)
Backend/Business Logic (Controller)

This whole thing might soon be automated by AI.

1. Build a CRUD app contracting firm
2. Record all the inputs of my developers (translators for business requirements --> code)
3. Train an AI model to translate "business requirements" --> code


So writing these kind of apps, is nothing like writing binary search algorithms or other lower level stuff, which is taught in school.
These two things are completely separate.

# Hacking

Input --> System --> Output

To gain access to the System you need to know:
- What input achieves my desired outcome?

Often times you can give a system an input that it does not expect and thus manage to get access to the system.
Figure out how to make the function behave how you want.

## Pure model

Domain --> Function --> Range
y = f(x)

## Impure model

Function can output something outside of the range.

## Example

Let's say we want to cancel a flight without paying the cancellation fee.
We can think of a few of the inputs we have to that system (airline agent can press a button on pc to cancel flight and waive the fee):
- We can call the agent and ask them
- We have a huge amount of words to choose from for that conversation
- We can do it in person
- We can send an email
- Or we can do something unexpected, or out of bounds of the "usual" input, like finding personal information about the agent and blackmailing them (not recommended)

This way we could essentially hack the system.

# Guide for Software Engineers

## High Brow Software Engineering

1. Understand a complex system
2. Modify the system to add a new feature
3. Test and ship the new system

## Machine Learning Engineer

1. Download a paper
2. Implement the paper
3. Keep doing this until you are good

# Funnels
Funnels are essentially just a series of filters that can be applied to some group of things to get to the desired outcome.

## Selling cars

1. Top of the funnel: Advertise | 10000 people
2. Middle of the funnel: Test drive | 100 people
3. Bottom of the funnel: Buy | 5 people

## Getting a partner

1. Send a message | 100 people
2. Get a response | 30 people
3. Get a date | 5 people
4. Lays | 2 person
5. Partner | 1 person

## Getting money

Capitalism.

Buyers and Sellers.
Both need to consent.

So we need to convince others to give us money.

How to get 1.000.000$?

- 1$ from 1.000.000 people
    - online only
- 1.000$ from 1.000 people
    - A couple phone calls can be spent to close deal
- 1.000.000$ from 1 person
    - A lot of effort can be spent to close deal

## Million Subs on Instagram

Followers and Influencers.
Both need to consent.

Convince 1.000.000 others to follow you.

1. Appealing content
    - "Novelty"
    - "Shock"
    - "Beauty"
    - "Sexuality"
    - "Comedy"
2. Be famous
    - FOMO <-- Fear of missing something positive
    - "car crash" <-- Fear of missing out on something negative
3. Dark arts
    - Buy followers
        - Cracked accounts
        - New accounts
    - Make Instagram private
        - Mystery (Whats behind the curtain?)

## Wasting time

Existentialism --> You make your own meaning.

Don't fall in other people's funnels.
Don't be in skinner boxes.
Don't be influenced by advertising.

# What to learn

Object level skills, like specific frameworks, or languages, are not that important.
They will die out at some point.

Meta level skills, like how to learn, are more important.

## Example Data Science

Learning statistics is more important than learning Pytorch.
Statistics will always be useful, but Pytorch will be replaced at some point.

## Knowledge Tree

Integrate new information into the tree. Build a world model.
In the case of not knowing something you are still able to make decent decisions based on interpolation.

The root of the tree might be something like physics, such that every data point that gets included in your tree can be distilled down to the smallest particles known in physics at the time.
This enables predictions about unknown data points.

Another tree root, arguably more advanced than physics, is information.
This is based on the paradigm from before (Input --> System --> Output).
This obviously includes physics as a sub tree.

"There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors."

## Leetcode Interviews

Insulting

Just shows if you can grind leetcode not if you are intelligent or a good programmer.
Programming challenges with an objective metric and a slight time limit.
