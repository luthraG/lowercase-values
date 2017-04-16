# lowercase-values
It provides an API to convert the values of the object into lowercase. Client of this API can specify if values of nested keys are also required to be converted to lowercase.

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install lowercase-values --save
```

### Usage

```javascript
var lowercasevalues = require('lowercase-values');

var object = {
    'California' : 'CA',
    'Texas'      : 'TX',
    'NEW YORK'   : 'NY' 
};

lowercasevalues.toLowerCaseValues(object);
//=> { 'California' : 'ca', 'Texas' : 'tx', 'NEW YORK' : 'ny' }

var days = {
    'SUNDAY'    : 'First',
    'MONDAY'    : 'Second',
    'TUESDAY'   : 'Third',
    'WEDNESDAY' : 3
};

lowercasevalues.toLowerCaseValues(days);
//=> { 'SUNDAY': 'first', 'MONDAY' : 'second', 'TUESDAY' : 'third', 'WEDNESDAY' : 3 }

```

### Clone the repo

git clone https://github.com/luthraG/lowercase-values.git

### API

#### toLowerCaseValues(obj, [options])

This API takes two parameters:
1. Object whose values to be converted to lowercase and 
2. options object. This argument is optional


**Options**

Various options supported by this API are :
- **deep** - To specify if values of nested keys should also be converted to lowercase. Default is false.

**Example with options**

```javascript
var lowercasevalues = require('lowercase-values');

var days = {
    'SUNDAY'    : 'First',
    'MONDAY'    : 'Second',
    'TUESDAY'   : 'Third',
    'WEDNESDAY' : 3,
    'WEEK_END'  : {
    	'SUNDAY' : {
    		'CODE' : {
    			'ABBR' : 'SAT'
    		}
    	}
	}
};

lowercasevalues.toLowerCaseValues(days, { deep : true});
//=> { 'SUNDAY': 'first', 'MONDAY' : 'second', 'TUESDAY' : 'third', 'WEDNESDAY' : 3, 'WEEK_END' : { 'SUNDAY' : { 'CODE' : { 'ABBR' : 'sat' } } } }

```

### Related projects

You might also be interested in these projects:

* [uppercase-values](https://www.npmjs.com/package/uppercase-values): Convert the values of all the keys of an object into uppercase. | [homepage](https://github.com/luthraG/uppercase-values.git)
* [object-lowerkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into lowercase. | [homepage](https://github.com/luthraG/object-lowerkeys.git)
* [object-upperkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into uppercase. | [homepage](https://github.com/luthraG/object-upperkeys.git)
* [objectvalues](https://www.npmjs.com/package/objectvalues): To get all the values of an object. It can also fetch the value of nested object of any depth. | [homepage](https://github.com/luthraG/objectvalues.git)

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)

