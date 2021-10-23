## Easier.JS
Made for faster work.
### Start using
```html
<!-- Paste this script in your head tag. (Full version) -->
<script src="https://easier.js.org/js/1.0.0/easier.full.js"></script>
```
### Features
#### Get provider of cards
```html
<!DOCTYPE HTML>
<head>
<script src="https://easier.js.org/js/1.0.0/easier.full.js"></script>
</head>
<body>
<script>
if (Easier.card === "VISA") {
function changeImage(a) {
        document.getElementById("img").src=a;
    }
changeImage("/visa.svg")
} 
</script>
<div class="easier-card">
<img src="/empty.svg"></img>
<input id="easier-card-input" placeholder="Input"></input>
</div>
</body>
```
### Support or Contact

Having trouble? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
