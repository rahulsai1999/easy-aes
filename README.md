# Easy-AES

## Description

- Easy Encryption and Decryption using AES-256 (Counter Mode)
- Any string of length 5 to 32 characters can be used as a key
- Keys are hashed using MD5 in order to meet the key-length requirement of AES-256
- Useful for verification tokens, and use cases where text has to be encrypted repeatedly

---

## Installation

`npm install easy-aes`

`yarn add easy-aes`

---

## Disclaimer

- Please do not use this package for encrypting passwords.
- Use `bcrypt` or some other hashing library for secure storage of passwords

---

## Usage

```js
import EasyAES from "easy-aes";
const aes = new EasyAES("secret-key");

const encrypted = aes.encrypt("plain-text");
const decrypted = aes.decrypt(encrypted);
```

```js
const EasyAES = require("easy-aes");
const aes = new EasyAES("secret-key");

const encrypted = aes.encrypt("plain-text");
const decrypted = aes.decrypt(encrypted);
```

---

## ES-Module Interop

- If you're using Typescript, and you face the following typeerror: `easy_aes_1.default is not a constructor`, please add the following to your compiler options in tsconfig.json: `"esModuleInterop": true`
