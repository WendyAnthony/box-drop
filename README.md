box-drop
===

Box drop is a simple box dropdown toggle I created while playing with jQuery and plugins

Demo : http://samarjeet27.github.io/box-drop

Sample Markup
---
```html
<div class="box-container">
	<div class="box">
		<div class="box-title">
			<h3>Sample Heading 1</h3>
			<a class="drop-image"></a>
		</div>
		<div class="box-content">
			<p>Some Text</p>
		</div>
	</div>
	<div class="box">
		<div class="box-title">
			<h3>Sample Heading 2</h3>
			<a class="drop-image"></a>
		</div>
		<div class="box-content">
			<p>Some Text</p>
		</div>
	</div>
</div>
```
Usage
---

Simple usage

```javascript
$('.box-container').boxdrop();
```

Custom Effects
```javascript
$('.box-container').boxdrop(function ($e){
	$e.fadeToggle();
});
```