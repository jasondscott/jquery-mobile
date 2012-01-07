/**
 * Wrapper for wrapDefine.js that runs in Java/Rhino.
 */

var module = {},
    __dirname = 'build',
    lineSeparator = '/';

function require(id) {
    var modules = {
        fs: {
            readFileSync: function (path) {
                return readFile(path);
            }
        },
        path: {
            join: function (one, two) {
                return one + lineSeparator + two;
            }
        }
    };
    
    return modules[id];
}

load('build' + lineSeparator + 'wrapDefine.js');

var fileName = arguments[0],
    contents = readFile(fileName);

contents = wrapDefine(contents);

print(contents);

