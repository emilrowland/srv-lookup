<h1 align="center">Welcome to srv-lookup 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/emilrowland/srv-lookup#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/emilrowland/srv-lookup/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/emilrowland/srv-lookup/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/emilrowland/srv-lookup" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/emilrowland/srv-lookup#readme)

## Install

```sh
npm install srv-lookup
```

## Usage

Get server url from srv record, that can later be used as the domain name in for example an axios call.
```javascript
const srvLookup = require('srv-lookup');
const serverUrl = await srvLookup('myserver.mydomain'); //this will return something like serverurl:serverport
```

## Author

👤 **Emil Rowland**

* Github: [@emilrowland](https://github.com/emilrowland)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/emilrowland/srv-lookup/issues). 

## 📝 License

Copyright © 2020 [Emil Rowland](https://github.com/emilrowland).<br />
This project is [MIT](https://github.com/emilrowland/srv-lookup/blob/master/LICENSE) licensed.