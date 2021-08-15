function indent(count) {
	let spaces = '';
	for (let index = 0; index < count; index++) {
		spaces = spaces + ' ';
	}
	return spaces;
}

class CssRule {
	constructor(properties = {}) {
		this.properties = properties;
	}

	property(name, value) {
		if (value !== undefined) {
			this.properties[name] = value;
		}
		return this.properties[name];
	}

	toString(name, indentation) {
		const arr = [];
		arr.push(`${indent(indentation * 2)}${name} {`);
		for (const property in this.properties) {
			arr.push(`${indent((indentation + 1) * 2)}${property}: ${this.properties[property]};`);
		}
		arr.push(`${indent(indentation * 2)}}`);
		return arr.join('\n');
	}
}

class CssMediaQuery {
	constructor(selectors = {}) {
		this.selectors = selectors;
	}

	selector(name, callback) {
		if (!(this.selectors[name] instanceof CssRule)) {
			this.selectors[name] = new CssRule();
		}
		if (callback) {
			callback(this.selectors[name]);
		}
		return this.selectors[name];
	}

	toString(name, indentation = 0) {
		const arr = [];
		arr.push(`${indent(indentation * 2)}${name} {`);
		for (const selector in this.selectors) {
			arr.push(this.selectors[selector].toString(selector, indentation + 1));
		}
		arr.push(`${indent(indentation * 2)}}`);
		return arr.join('\n');
	}
}

class Css {
	constructor(mediaQueries = {}) {
		this.mediaQueries = mediaQueries;
	}

	mediaQuery(name, callback) {
		if (!(this.mediaQueries[name] instanceof CssMediaQuery)) {
			this.mediaQueries[name] = new CssMediaQuery();
		}
		if (callback) {
			callback(this.mediaQueries[name]);
		}
		return this.mediaQueries[name];
	}

	toString(indentation = 0) {
		const arr = [];
		for (const mediaQuery in this.mediaQueries) {
			arr.push(this.mediaQueries[mediaQuery].toString(mediaQuery, indentation));
		}
		return arr.join('\n');
	}
}

module.exports = Css;
