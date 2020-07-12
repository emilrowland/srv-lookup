# srv-lookup 
![npm](https://img.shields.io/npm/v/srv-lookup)

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