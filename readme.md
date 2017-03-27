# Fin-sentence-type

Sentence type detection for Fin natural language processor.

There are 4 possible sentence types:

- Declarative, example: `I will go to the book store`.
- Interrogative, example: `Will you go to the book store?`.
- Exclamatory, example: `Alex went to the book store!`.
- Imperative, example: `go to the book store`.

> Note: it works even when the sentence end punctuation (e.g. ".", "?", "!") isn't there.

> Note: The sentences `Would you go to the book store?` and `could you open the door?` will be considered both imperative and interrogative, however, you'll see a confidence score of it being interrogative more than imperative.

## Installation

```
npm i --save fin-sentence-type
```

## Usage


```typescript
import * as Fin from "finnlp";
import "fin-sentence-type";

const a = new Fin.Run("I'll go to the book store").sentenceType();
const b = new Fin.Run("should I go to the book store").sentenceType();
const c = new Fin.Run("Send the mail tonight");
const d = new Fin.Run("wow, that was awesome");

console.log(a);
console.log(b);
console.log(c);
console.log(d);

```

The above example would give the following result

```javascript
[
    // each sentence will have an array of the possible types
    [
        {
            type:"declarative",
            confidence:80
        }
    ]
]
```

```javascript
[
    [
        {
            type:"interrogative",
            confidence:70
        }
    ]
]
```

```javascript
[
    [
        {
            type:"imperative",
            confidence:80
        }
    ]
]
```

```javascript
[
    [
        {
            type:"exclamatory",
            confidence:30
        }
    ]
]
```




