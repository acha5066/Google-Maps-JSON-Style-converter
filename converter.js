function get_static_style(styles) {
	var result = [];
	styles.forEach(function(value, i, a){
		var style='';
		if (value.stylers.length > 0) { // Needs to have a style rule to be valid.
			style += (value.hasOwnProperty('featureType') ? 'feature:' + value.featureType : 'feature:all') + '|';
			style += (value.hasOwnProperty('elementType') ? 'element:' + value.elementType : 'element:all') + '|';
			value.stylers.forEach(function(val, i, a){
				var propertyname = Object.keys(val)[0];
				var propertyval = val[propertyname].toString().replace('#', '0x');
				style += propertyname + ':' + propertyval + '|';
			});
		}
		result.push('style='+encodeURIComponent(style));
	});

	return result.join('&');
}