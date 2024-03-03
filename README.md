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

Throwing an ThrowHttp error

```typescript
import { ThrowHttp } from 'throw-http';

throw new ThrowHttp.NotFound('User not found');
```

Throwing a custom ThrowHttp error

```typescript
import { ThrowHttp } from 'throw-http';

throw new ThrowHttp({ code: 500, name: 'Badaboom' });
```

Typeguard for ThrowHttp

```typescript
import { ThrowHttp } from 'throw-http';

try {
  // some code
} catch (error) {
  if (ThrowHttp.isThrowHttp(error)) {
    // handle http error
  }
}
```
