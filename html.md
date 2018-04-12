# Intro to HTML

* by Matthew Gonzalez

## What is HTML?
HTML is the standard markup language for creating Web pages.

## Basic Setup of HTML Document
```
<!DOCTYPE html>
<html>
<head>
<title>Title of the page</title>
</head>
<body>

<h1>This is where the Main heading goes</h1>
<p>This is where you put paragraphs of text.</p>

</body>
</html>
```
## HTML Tags
#### The <!DOCTYPE> Declaration

Represents the document type, and helps browsers to display web pages correctly.
It must only appear once, at the top of the page (before any HTML tags).

The format is:
```
<!DOCTYPE html>
```

#### The ```<html>``` Element

Defines the entire document.  
Starts in tag ```<html>``` and ends in tag ```</html>```

#### The ```<body>``` Element

Defines the body of the document.  
Starts in tag ```<body>``` and ends in tag ```</body>```
In between these two tags is where you define other elements, such as __headers__ ```<h1> </h1>``` and __paragraphs__ ```<p> </p>```.

#### Headings

In HTML, headings can be defined with ```<h1>``` up to ```<h6>``` tags, with ```<h1>``` being the most important heading and ```<h6>``` being the least important.

#### Paragraphs

In HTML, paragraphs can be defined with the ```<p>``` tag.

#### Links

The ```<a>``` tag is used to implement links in HTML.

For example:
```
<a href = https://github.com/gonzalezm6> This is the text that will show as a hyperlink </a>
```

```href``` is an attribute used to define the link.

#### Images

HTML images are defined with the ```<img>``` tag.

*Note: The source file (src), alternative text (alt), width, and height are provided as attributes.

For example:
```
<img src="github.jpg" alt="github.com" width="104" height="142">
```
