# @mohit2404/payglocal-js-client

A Node.js helper library for generating **JWE** and **JWS** tokens required for
PayGlocal transaction initiation.

This package is a **community-maintained npm / pnpm distribution** of the official [`payglocal-js-client`](https://github.com/PayGlocal-Technologies/payglocal-js-client), created to resolve Docker and CI/CD issues caused by GitHub-based dependencies.

## Features

- Generate **JWE** (encrypted payload)
- Generate **JWS** (signed digest)
- Generate **JWE + JWS together** for transaction initiation
- No GitHub dependency during installation
- Compatible with **npm / pnpm / yarn**
- Node.js **≥ 16** supported

## Installation

```
npm install @mohit2404/payglocal-js-client
# or
pnpm add @mohit2404/payglocal-js-client
```

## Usage

```
const { generateJWEAndJWS } = require('@mohit2404/payglocal-js-client');
# or
import { generateJWEAndJWS } from "@mohit2404/payglocal-js-client";

const data = {
  payload, // transaction payload (required)
  publicKey, // PayGlocal public key (required)
  privateKey, // private key (required)
  merchantId, // unique merchant id (required)
  privateKeyId, // kid for private key (required)
  publicKeyId // kid for public key (required)
};

// function returns a promise which resolved to { jweToken, jwsToken }
generateJWEAndJWS(data).then((res) => {
  const { jweToken, jwsToken } = res;
  console.log({ jweToken, jwsToken });
});
# or
const { jweToken, jwsToken } = await generateJWEAndJWS(data);
console.log({ jweToken, jwsToken })
```