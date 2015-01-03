#CSS Coding Guidelines

1. Naming Conventions
	* Generic to Specific class names
	* Namespaces class names when possible

2. Nesting and Specificity
	* Minimal nesting
	* Use classes over base elements and id's
	* Use @extend when possible
	* Use placeholders if possiblbe, they need to be very semantic, very clear use cases though

3. Variables
	* ALL COLORS go in the _colors.scss file (No exceptions)
	* **No Really**. No colors, no darken, no lighten, no rgba, etc. in the sass partials.
	* Media query's should have variablized breakpoints.
	* dependent size variablized in context (parent/child relationships)
	* Variables for global rhythm spacing
