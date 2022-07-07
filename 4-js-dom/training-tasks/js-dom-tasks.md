## Task 1 (Event propagation)
There is some parent block with a button and another child block.  One can use the following markup:
```javascript       
<div id="container">
	<button>show text</button>
	<div id="block">
		some text
	</div>
</div>
```
The child block is hidden initially.  
Implement js code so child block appeares while clicking on the button and disappears while clicking at some other place inside parent block.

***

## Task 2 (Event delegation technique)
1. Create a number of block elements (>=30) dinamically, provide their appearance as set of rectangulars with numbers inside (1,2,3, etc.). CSS styles are arbitrary. Using `createDocumentFragment` is highly recommended. 
2. Ensure changing of inner text of each clicked element (to something like *clicked*) by using just **one** event handler.  
 
