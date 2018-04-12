# Intro to CSS

* by Matthew Gonzalez

## What is CSS?
CSS is a language that describes the style of an HTML document. More specifically, CSS describes how HTML elements should be displayed.

You have a couple options when working with a __Casading Style Sheet__:
1. External Style Sheet
2. Internal Style Sheet

An external style sheet is a separate file, that is referenced from within the HTML file.
```
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

In contrast, an internal style sheet is implemented within the HTML file directly – to do this, simply place the parameters of the style sheet within in ```<head>``` section of the HTML page. Make sure to surround the style sheet with the ```<style>``` tag as well. Provided is a more clear example:

```
<head>
<style>
body {
    background-color: white;
}

h1 {
    color: orange;
    margin-left: 80px;
}
</style>
</head>
```

## Basic CSS Example
```
body {
    background-color: blanched-almond;
}

h1 {
    color: red;
    text-align: center;
}

p {
    font-family: verdana;
    font-size: 18px;
}
```

## Text Color
The ```color``` property is used to set the color of the text.
* If the color is set in the body parameter, then all of the text in the document will be the same color.
* More commonly, you may choose to set different colors of text for specific headings and paragraphs.

## Text Alignment
The ```text-align``` property is used to set the horizontal alignment of a portion of text.
* Text may be aligned to the right or left, centered, or justified.

```
h1 {
    text-align: center;
}

h2 {
    text-align: left;
}

p {
    text-align: justify;
}
```

## Other Neat Ways to Manipulate Text

* The ```text-decoration``` property is used to set or remove decorations from text.

* The ```text-transform``` property is used to specify uppercase and lowercase letters in a text.

* The ```text-indent``` property is used to specify the indentation of the first line of a text.

* The ```letter-spacing``` property is used to specify the space between the characters in a text.

* The ```line-height``` property is used to specify the space between lines of text.

#### Example:

```
h1 {
    text-decoration: underline;
    text-transform: uppercase;
}

p {
    text-indent: 50px;
    line-height: 2.0;
}

h3 {

    text-transform: capitalize;
    letter-spacing: 5px;
}
```
