'use strict';

/**
 * Behaves like `instanceof` but uses class names instead of actual references. Will recursively check
 * parent prototypes of the object until the end of the chain is reached or a prototype has the given
 * name.
 * @param {object} object The object to check against.
 * @param {string} className The name of the function.
 * @returns {boolean} True if the object is an instance of a class with the given name; false otherwise.
 */
function instanceOf (object, className) {
	var constructor = object.constructor;
	
	do {
		if (constructor.name === className) {
			return true;
		}
		constructor = Object.getPrototypeOf(constructor);
	} while (constructor);

	return false;
}

module.exports = instanceOf;
