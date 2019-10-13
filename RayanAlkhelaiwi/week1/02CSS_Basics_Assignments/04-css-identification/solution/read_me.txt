##Selector identification

Identify the selectors in each style and what HTML element(s) they target.
Also, which of these examples have errors? What are they?

###1 #Answer: This is correct. This style colors all the paragraph elements in white.
```
p {
  color: white;
}
```

###2 #Answer: This is correct. This style adding inner-space all around the span element by 15 px.
```
span {
  padding: 15px;
}
```

###3 #Answer: This is correct. This style colors the table-data of the table in the hex color #222 (Equivalent to #222222).
```
table td {
  color: #222;
}
```

###4 #Answer: This is NOT correct. This style supposed to position the elements absolute to the first element with the class name and ID specified. 
              The correct aproach would be dividing the class name and the ID because the convention states that the ID cannot be styled with other 
              elements, class-names nor other IDs. It can only be used once and solo.
```
.lede-section #left-side {
  position: absolute;
}
```

###5 #Answer: This is partially NOT correct. The first line inside the style misses a semicolon.
              This style displays the text as a separate block with an underline and in bold.
```
#section-9 {
  display: block
  text-decoration: underline;
  font-weight: bold;
}
```

##What's different about the following three selectors?

###6 #Answer: This aligns the class name (.another-class) inside the class name (.fewd25-page-section).
              (.another-class) is dependent on (.fewd25-page-section).
```
.fewd25-page-section .another-class {
  text-align: center;
}
```


###7 #Answer: This aligns both the class names (.another-class) and (.fewd25-page-section).
              Both class names are independent of each other.
```
.fewd25-page-section, .another-class {
  text-align: center;
}
```


###8 #Answer: This aligns the class name (.another-class) that has the class name (.fewd25-page-section) as well.
              The class names are both dependent on each other.
```
.fewd25-page-section.another-class {
  text-align: center;
}
```