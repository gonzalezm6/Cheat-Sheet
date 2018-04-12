# Intro to JavaScript

* by Matthew Gonzalez

## What is JavaScript?
JavaScript is used to define the behavior of a website. When used in conjunction to HTML and CSS, you become able to define functions that can detect when a button is clicked, for example.

Similar to CSS, JavaScript may be used in an external file and referenced in the HTML file, or you may choose to implement the JavaScript in a ```<script>``` tag.

## External JavaScript

To use an external script, put the name of the script file in the src (source) attribute of a ```<script>``` tag:

```
<script src="myJavaScriptFile.js"></script>
```

#### Why use an external JavaScript file?
Placing scripts in external files has some advantages:

* It separates HTML and code
* It makes HTML and JavaScript easier to read and maintain
* Cached JavaScript files can speed up page loads

To add several script files to one page  - use several script tags:

```
<script src="myJavaScriptFile.js"></script>
<script src="myJavaScriptFile2.js"></script>
```

## JavaScript in ```<head>```

```
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>

<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```

## JavaScript in ```<body>```
```
<!DOCTYPE html>
<html>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
```
