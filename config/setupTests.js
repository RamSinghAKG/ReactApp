require('babel-register')({
    ignore: /node_modules/
});

const { JSDOM } = require('jsdom');

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => {
        return ({
            ...result,
            [prop]: Object.getOwnPropertyDescriptor(src, prop),
        });
    }, {});
  Object.defineProperties(target, props);
}

global.window = jsdom.window;
global.document = jsdom.window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);