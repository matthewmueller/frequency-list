
# frequency-list

  Create frequency lists

## Example

```js
var list = new FrequencyList;

list.add('hi')
    .add('how are you')
    .add('whats up')
    .add('hi');

list.has('how are you') // true
list.size('hi') // 2
list.size('oh no') // 0

list.remove('hi')
list.size('hi') // 1
```

## Installation

    $ component install matthewmueller/frequency-list

## API

### FrequencyList( [values] )

Initialize the `FrequencyList` with an optional array of `values`

### #add(str)

Add a word or phrase to the frequency list

### #remove(str)

Remove a word or phrase from the frequency list.

### #has(str)

Checks to see if a word or phrase exists in the list.

### #size(str)

Gets the number of occurences of the given `str`. If the string is not in the list, the size will be 0.

### #unique(str)

Returns true if `str` occurs exactly once. Alias for `size(str) === 1`.

### #values()

Returns the raw frequency list. You may also use the alias `toJSON()`.

```js
list.values(); //=> { 'hi' : 2, 'how are you' : 1, 'whats up' : 1 }
```

## License

  MIT
