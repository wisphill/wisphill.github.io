---
description: All about the generator function
layout: post
---
### Use case
- Reduce the memory usage

```python
def square_calculator():
	i = 0
	while i < 10:
		yield i * i
		i++

if name == '__main__':
	for i in square_calculator():
		print(result)
```

The generator function can exit and re-enter the context with binding variables. So it's known as lazy-evaluation, call when needed. `square_calculator()` here is an iterator and be called when the loop trigger it each time. The variable in the previous call in the memory storage can be released without waiting to return to the array like a normal function.