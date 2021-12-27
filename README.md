![npm version](https://img.shields.io/npm/v/input-validator?color=green&label=npm&style=flat-square)
![size](https://img.shields.io/bundlephobia/min/@saimulhasnain-dev/input-validator)
# Input validator

> Human-friendly and powerful data validator library for JavaScript

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Getting Started

These instructions will help you to install this package in your project to perform data validation.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with installation of package in your project:

```sh
$ cd PROJECT
$ npm i @saimulhasnain-dev/input-validator
```

After successful installation of package you need to import package in your file:
To import complete package in once

```sh
$ import validator from '@saimulhasnain-dev/input-validator';
```

Or if you prefer using any particular function then:

```sh
$ import { isAlphabet } from '@saimulhasnain-dev/input-validator';
```

## Examples

```tsx
import validator from '@saimulhasnain-dev/input-validator';

let res = validator.isAlphabet('abc');//to verify string contains alphabet
console.log(res); // it will print `true` as it contains alphabet

validator.isStrongPassword('Qwert@!2313');//to check password strength

```
Accessing only required function

```tsx
import { isValidEmail } from '@saimulhasnain-dev/input-validator';
isValidEmail('abc@gmail.com');//to test email is valid or not

```
```tsx
import { getValueFromObject, isKeyExistsNested } from '@saimulhasnain-dev/input-validator';
const user = {
    name: "abc",
    email: "xyz@email.com",
    address: {
        state: "New york",
        country: "USA",
        phones: {
            primary: "+1234567890",
            secondary: "+0987654321"
        }
    }
}
getValueFromObject(user, ["address", "state"]);//to get value of `state` key inside `address` object
getValueFromObject(user, ["address", "phones","primary"])////to get value of `primary` key inside `phone` object inside `address`

isKeyExistsNested(user, "address", "phones","primary");// to check if key `primary` exists in this object or not

```
## Available methods
- **isEmptyArray**: To check if array is empty or not
- **isString**: To check if value is string or not
- **isNumeric**: To check string is numeric type 
- **isValidEmail**: To check email is valid or not
- **isAlphabet**: To check if string contain alphabet only
- **isAlphaNumericOnly**: To check if string contains alphabet and numeric as well
- **isSpecialCharAlphaNumeric**: To check if string contains alphabet with combination of number and special characters
- **isUndefined**: To check if variable is undefined
- **isNull**: To check if variable is null
- **isBoolean**: To check if variable boolean 
- **isArray**: To check if variable is an array
- **sanitizeString**: To get sanitized version of value
- **toInt**: To parse in integer format
- **toFloat**: To parse in floating point format
- **toDate**: To parse in date type
- **isURL**: To check if a URL is valid or not
- **isValidNumber**: To check valid numnber
- **isValidLatLong**: To check valid latitude and longitude points
- **isStrongPassword**: To check string password complexity
- **isMediumPassword**: To check medium password complexity
- **isDate**: To check if a value is date
- **isObject**: To check if a value is object
- **isKeyExists**: To check if a particular key is exists in an object or not(not in nested object)
- **isKeyExistsNested**: To check if a particular key is exists in an object or not(in nested object)
- **getValueFromObject**: To get value of a key from a nested object

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits
All credit goes to me:sunglasses: 

## Built With

* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Saimul Hasnain** - *Initial work* - [Saimul Hasnain](https://github.com/saimulhasnain-dev)

