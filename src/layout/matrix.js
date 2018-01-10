// Matrix Layout
windmill.layout.matrix = function() {
	'use strict';

	// Default Accessors
    var attributes = {
        row: function(d) { return d.row; },
        column: function(d) { return d.column; },
        value: function(d) { return d.value; },
        aggregate: function(values) {
            var sum = 0;
            values.forEach(function(d) { sum += d; });
            return sum;
        }
    };

	// Layout Function
	function layout(data) {
		// Output data array
		var groupedData = [];

		var	row,
			col,
			val,
			found = false;

		// Group and aggregate the input values
		data.forEach(function(d) {
			// Compute the row, column, and value
			row = attributes.row(d);
			col = attributes.column(d);
			val = attributes.value(d);

			// Search corresponding items in groupedData
			found = false;

			groupedData.forEach(function(item, idx) {
				if ((item.row === row) && (item.col === col)) {
					groupedData(idx).values.push(val);
					item.values.push(val);
					found = true;
				}
			});

			// Append the item, if not found
			if (!found) {
				groupedData.push({
					row: row,
					col: col,
					values: [val]
				});
			}
		});

		// Aggregate the values
		groupedData.forEach(function(d) {
			// Compute the aggregated value
			d.value = attributes.aggregate(d.values);
			delete d.values;
		});

		return groupedData;
	}

	// Create accessor functions
	function createAccessor(attr) {
		function accessor(value) {
			if (!arguments.length) { return attributes[attr]; }
			attributes[attr] = value;
			return layout;
		}

		return accessor;
	}

	// Generate automatic accessor for each attribute
	for (var attr in attributes) {
		if ((!layout[attr]) && (attributes.hasOwnProperty(attr))) {
			layout[attr] = createAccessor(attr);
		}
	}

	return layout;
};