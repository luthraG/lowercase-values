const test = require('ava');
const lowercasevalues = require('.');

test('plain object A', t => {
    const object = {
        'California': 'CA',
        'Texas': 'TX',
        'NEW YORK': 'NY'
    };

    const expected = {
        'California': 'ca',
        'Texas': 'tx',
        'NEW YORK': 'ny'
    };

    t.deepEqual(lowercasevalues.toLowerCaseValues(object), expected);
});

test('plain object B', t => {
    const object = {
        'SUNDAY': 'First',
        'MONDAY': 'Second',
        'TUESDAY': 'Third',
        'WEDNESDAY': 3
    };

    const expected = {
        'SUNDAY': 'first',
        'MONDAY': 'second',
        'TUESDAY': 'third',
        'WEDNESDAY': 3
    };

    t.deepEqual(lowercasevalues.toLowerCaseValues(object), expected);
});

test('nested object', t => {
    const object = {
        'SUNDAY': 'First',
        'MONDAY': 'Second',
        'TUESDAY': 'Third',
        'WEDNESDAY': 3,
        'WEEK_END': {
            'SUNDAY': {
                'CODE': {
                    'ABBR': 'SAT'
                }
            }
        }
    };

    const expected = {
        'SUNDAY': 'first',
        'MONDAY': 'second',
        'TUESDAY': 'third',
        'WEDNESDAY': 3,
        'WEEK_END': {
            'SUNDAY': {
                'CODE': {
                    'ABBR': 'sat'
                }
            }
        }
    };

    t.deepEqual(lowercasevalues.toLowerCaseValues(object, { deep: true }), expected);
});