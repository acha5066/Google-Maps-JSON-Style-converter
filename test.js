var json_style = [
	{
		"featureType": "administrative",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"hue": "#0066ff"
			},
			{
				"saturation": 74
			},
			{
				"lightness": 100
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "off"
			},
			{
				"weight": 0.6
			},
			{
				"saturation": -85
			},
			{
				"lightness": 61
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "on"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "all",
		"stylers": [
			{
				"visibility": "simplified"
			},
			{
				"color": "#5f94ff"
			},
			{
				"lightness": 26
			},
			{
				"gamma": 5.86
			},
			{
				"saturation:": 20
			}
		]
	}
]

describe("Test JSON to query string conversion", function() {

	var result = get_static_style(json_style);
	if (json_style.length > 1) {
		it("For each element in the JSON array there should be a corresponding style= parameter", function() {
			var style_occurences = result.split("style=").length - 1;
			expect(style_occurences).toEqual(json_style.length);
		});
	}

	it("| characters should be converted to %7C", function() {
		expect(result.indexOf('|') === -1 ).toBe(true);
		expect(result.indexOf('%7C') !== -1).toBe(true);
	});

	it("# in colors should be replaced by 0x", function() {
		expect(result.indexOf('#5f94ff') === -1).toBe(true);
		expect(result.indexOf('0x5f94ff') !== -1).toBe(true);
	});

});