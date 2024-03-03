<h1 align="center">throw-http</h1>

## Introduction

Throw-http is an Error utility for handling http errors in a delightful way.

## Installation

To get started, install http-throw using npm or yarn:

```sh
npm install throw-http
# or
yarn add throw-http
```

## Usage

Throwing an HttpThrow error

```typescript
import { HttpThrow } from 'throw-http';

throw new HttpThrow.NotFound('User not found');
```

Throwing a custom HttpThrow error

```typescript
import { HttpThrow } from 'throw-http';

throw new HttpThrow({ code: 500, name: 'Badaboom' });
```

Typeguard for HttpThrow

```typescript
import { HttpThrow } from 'throw-http';

try {
  // some code
} catch (error) {
  if (HttpThrow.isHttpThrow(error)) {
    // handle http error
  }
}
```
