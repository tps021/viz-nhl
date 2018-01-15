// Load the modules
var vows = require('vows'),
	assert = require('assert'),
	windmill = require('../../windmill');

// Create the test suite
var suite = vows.describe("windmill.layout.matrix");

// Create a Sample Data array
var data = [
	{a: 1, b: 1, c: 10},
	{a: 2, b: 2, c: 5}
];

var average = function(values) {
	var sum = 0;
	values.forEach(function(d) {
		sum += d;
	});
	return sum / values.length;
};

// Add a Batch to test the default layout
suite.addBatch({
	"default layout": {
		topic: function() {
			return windmill.layout.matrix();
		},
		"is a function": function(topic) {
			assert.isFunction(topic.row);
		},
		"has a row method": function(topic) {
			assert.isFunction(topic.row);
		},
		"has a column method": function(topic) {
			assert.isFunction(topic.column);
		},
		"has a value method": function(topic) {
			assert.isFunction(topic.value);
		}
	}
});

suite.export(module);