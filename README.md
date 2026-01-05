# @payglocal/js-client

A Node.js helper library for generating **JWE** and **JWS** tokens required for
PayGlocal transaction initiation.

This package is a **community-maintained npm/pnpm distribution** of the
original `payglocal-js-client` provided by **PayGlocal Technologies**, published
to solve common CI/CD and Docker issues caused by GitHub-based dependencies.

---

## 🙏 Credit & Acknowledgement

All cryptographic logic and API design are based on the original work by  
**PayGlocal Technologies**.

- Original repository: https://github.com/PayGlocal-Technologies/payglocal-js-client
- License: MIT

This package **does not modify the core logic** and exists only to:

- provide a stable npm / pnpm installation
- remove the need for `git` during installation
- improve compatibility with Docker, CI/CD, and serverless environments
 
> For documentation, onboarding, and credentials, please refer to PayGlocal directly.

---

## ✨ Features

- Generate **JWE** (encrypted payload)
- Generate **JWS** (signed digest)
- Generate **JWE + JWS together** for transaction initiation
- No GitHub dependency
- npm / pnpm / yarn compatible
- Node.js ≥ 16 supported

---

## 📦 Installation

```bash
npm install @payglocal/js-client
# or
pnpm add @payglocal/js-client
```
