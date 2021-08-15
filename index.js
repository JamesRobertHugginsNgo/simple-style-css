const fs = require('fs');

const Css = require('./css');

const infixes = ['', 'sm-', 'md-', 'lg-', 'xl-'];

const css = new Css();

css.mediaQuery('@media all', (mediaQuery) => {
	mediaQuery.selector('body', (selector) => {
		selector.property('background-color', '#eeeeee');
		selector.property('color', '#000000');
		selector.property('font-family', '"Helvetica Neue", Helvetica, Arial, sans-serif');
		selector.property('font-size', '1rem');
		selector.property('line-height', '1.4rem');
		selector.property('margin', '0');
		selector.property('padding', '0');
	});

	mediaQuery.selector('body > footer', (selector) => {
		selector.property('padding', '1.4rem 0 0 0');
	});

	mediaQuery.selector('body > header', (selector) => {
		selector.property('background-color', '#ffffff');
		selector.property('border-bottom', '1px solid #cccccc');
		selector.property('padding', '1.4rem 0 0 0');
	});

	mediaQuery.selector('body > main', (selector) => {
		selector.property('background-color', '#ffffff');
		selector.property('border-bottom', '1px solid #cccccc');
		selector.property('padding', '1.4rem 0');
	});

	mediaQuery.selector('h1', (selector) => {
		selector.property('font-size', '3.8rem');
		selector.property('line-height', '4.2rem');
		selector.property('margin', '1.4rem 0');
	});

	mediaQuery.selector('h2', (selector) => {
		selector.property('font-size', '2.4rem');
		selector.property('line-height', '2.8rem');
		selector.property('margin', '1.4rem 0');
	});

	mediaQuery.selector('h3', (selector) => {
		selector.property('font-size', '2.0rem');
		selector.property('line-height', '2.8rem');
		selector.property('margin', '1.4rem 0');
	});

	mediaQuery.selector('h4', (selector) => {
		selector.property('font-size', '1.8rem');
		selector.property('line-height', '2.8rem');
		selector.property('margin', '1.4rem 0');
	});

	mediaQuery.selector('h5', (selector) => {
		selector.property('font-size', '1.2rem');
		selector.property('line-height', '1.4rem');
		selector.property('margin', '1.4rem 0');
	});

	mediaQuery.selector('h6', (selector) => {
		selector.property('font-size', '1rem');
		selector.property('line-height', '1.4rem');
		selector.property('margin', '1.4rem 0');
	});

	mediaQuery.selector('hr', (selector) => {
		selector.property('border-bottom', '0');
		selector.property('border-left', '0');
		selector.property('border-right', '0');
		selector.property('border-top', '1px solid #333333');
		selector.property('margin', '1.4rem 0');
	});

	mediaQuery.selector('html', (selector) => {
		selector.property('font-size', '16px');
	});

	mediaQuery.selector('ol, ul', (selector) => {
		selector.property('font-size', '1rem');
		selector.property('line-height', '1.4rem');
		selector.property('margin', '1.4rem 0');
		selector.property('padding', '0 0 0 1.4rem');
	});

	mediaQuery.selector('ol ol, ol ul, ul ol, ul ul', (selector) => {
		selector.property('margin', '0');
	});

	mediaQuery.selector('p', (selector) => {
		selector.property('font-size', '1rem');
		selector.property('line-height', '1.4rem');
		selector.property('margin', '1.4rem 0');
	});

	mediaQuery.selector('table', (selector) => {
		selector.property('border-color', '#000000');
		selector.property('border-spacing', '0');
		selector.property('border-style', 'solid');
		selector.property('border-width', '1px 0 0 1px');
		selector.property('margin', '1.4rem 0');
		selector.property('width', '100%');
	});

	mediaQuery.selector('table caption', (selector) => {
		selector.property('caption-side', 'bottom');
		selector.property('font-size', '1rem');
		selector.property('line-height', '1.4rem');
		selector.property('margin-top', '0.35rem');
	});

	mediaQuery.selector('table td, table th', (selector) => {
		selector.property('border-color', '#000000');
		selector.property('border-style', 'solid');
		selector.property('border-width', '0 1px 1px 0');
		selector.property('font-size', '1rem');
		selector.property('line-height', '1.4rem');
		selector.property('padding', '0.35rem 0.7rem');
	});

	mediaQuery.selector('table td.num-col', (selector) => {
		selector.property('font-family', 'monospace, monospace');
		selector.property('text-align', 'right');
	});

	mediaQuery.selector('table thead th', (selector) => {
		selector.property('background-color', '#333333');
		selector.property('color', '#ffffff');
		selector.property('font-weight', 'normal');
		selector.property('text-align', 'left');
	});

	mediaQuery.selector('table tfoot td', (selector) => {
		selector.property('background-color', '#eeeeee');
	});

	mediaQuery.selector('.page-width', (selector) => {
		selector.property('margin', '0 auto');
		selector.property('max-width', '960px');
	});

	mediaQuery.selector('.bg-red', (selector) => {
		selector.property('background-color', '#ffb3ba');
	});

	mediaQuery.selector('.bg-orange', (selector) => {
		selector.property('background-color', '#ffdfba');
	});

	mediaQuery.selector('.bg-yellow', (selector) => {
		selector.property('background-color', '#ffffba');
	});

	mediaQuery.selector('.bg-green', (selector) => {
		selector.property('background-color', '#baffc9');
	});

	mediaQuery.selector('.bg-blue', (selector) => {
		selector.property('background-color', '#bae1ff');
	});

	mediaQuery.selector('.flex-row', (selector) => {
		selector.property('box-sizing', 'border-box');
		selector.property('display', 'flex');
		selector.property('flex-wrap', 'wrap');
		selector.property('justify-content', 'space-between');
	});

	mediaQuery.selector('.flex-row.flex-root', (selector) => {
		selector.property('padding', '0 0.7rem');
	});

	mediaQuery.selector('.flex-row > *', (selector) => {
		selector.property('box-sizing', 'border-box');
		selector.property('width', '100%');
	});

	mediaQuery.selector('.flex-row > .flex-leaf', (selector) => {
		selector.property('margin-top', '-1.4rem');
		selector.property('padding', '0 0.7rem');
	});
});

css.mediaQuery('@media all', (mediaQuery) => {
	const currentInfixIndex = 0;

	mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
		selector.property('width', 'auto');
	});

	for (let count = 1; count <= 12; count++) {
		mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}${count}`, (selector) => {
			selector.property('width', `${count / 12 * 100}%`);
		});
	}

	for (let infixIndex = 0; infixIndex <= currentInfixIndex; infixIndex++) {
		for (let parentCount = 1; parentCount <= 12; parentCount++) {
			mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
				selector.property('width',  'auto');
			});

			for (let childCount = 1; childCount <= parentCount; childCount++) {
				mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}${childCount}`, (selector) => {
					selector.property('width', `${childCount / parentCount * 100}%`);
				});
			}
		}
	}
});

// Small devices (landscape phones, 576px and up)
css.mediaQuery('@media (min-width: 576px)', (mediaQuery) => {
	const currentInfixIndex = 1;

	mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
		selector.property('width', 'auto');
	});

	for (let count = 1; count <= 12; count++) {
		mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}${count}`, (selector) => {
			selector.property('width', `${count / 12 * 100}%`);
		});
	}

	for (let infixIndex = 0; infixIndex <= currentInfixIndex; infixIndex++) {
		for (let parentCount = 1; parentCount <= 12; parentCount++) {
			mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
				selector.property('width',  'auto');
			});

			for (let childCount = 1; childCount <= parentCount; childCount++) {
				mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}${childCount}`, (selector) => {
					selector.property('width', `${childCount / parentCount * 100}%`);
				});
			}
		}
	}
});

// Medium devices (tablets, 768px and up)
css.mediaQuery('@media (min-width: 768px)', (mediaQuery) => {
	const currentInfixIndex = 2;

	mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
		selector.property('width', 'auto');
	});

	for (let count = 1; count <= 12; count++) {
		mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}${count}`, (selector) => {
			selector.property('width', `${count / 12 * 100}%`);
		});
	}

	for (let infixIndex = 0; infixIndex <= currentInfixIndex; infixIndex++) {
		for (let parentCount = 1; parentCount <= 12; parentCount++) {
			mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
				selector.property('width',  'auto');
			});

			for (let childCount = 1; childCount <= parentCount; childCount++) {
				mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}${childCount}`, (selector) => {
					selector.property('width', `${childCount / parentCount * 100}%`);
				});
			}
		}
	}
});

// Large devices (desktops, 992px and up)
css.mediaQuery('@media (min-width: 992px)', (mediaQuery) => {
	const currentInfixIndex = 3;

	mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
		selector.property('width', 'auto');
	});

	for (let count = 1; count <= 12; count++) {
		mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}${count}`, (selector) => {
			selector.property('width', `${count / 12 * 100}%`);
		});
	}

	for (let infixIndex = 0; infixIndex <= currentInfixIndex; infixIndex++) {
		for (let parentCount = 1; parentCount <= 12; parentCount++) {
			mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
				selector.property('width',  'auto');
			});

			for (let childCount = 1; childCount <= parentCount; childCount++) {
				mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}${childCount}`, (selector) => {
					selector.property('width', `${childCount / parentCount * 100}%`);
				});
			}
		}
	}
});

// Extra large devices (large desktops, 1200px and up)
css.mediaQuery('@media (min-width: 1200px)', (mediaQuery) => {
	const currentInfixIndex = 4;

	mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
		selector.property('width', 'auto');
	});

	for (let count = 1; count <= 12; count++) {
		mediaQuery.selector(`.flex-row > .flex-col-${infixes[currentInfixIndex]}${count}`, (selector) => {
			selector.property('width', `${count / 12 * 100}%`);
		});
	}

	for (let infixIndex = 0; infixIndex <= currentInfixIndex; infixIndex++) {
		for (let parentCount = 1; parentCount <= 12; parentCount++) {
			mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}0`, (selector) => {
				selector.property('width',  'auto');
			});

			for (let childCount = 1; childCount <= parentCount; childCount++) {
				mediaQuery.selector(`.flex-row.flex-col-${infixes[infixIndex]}${parentCount} > .flex-col-${infixes[currentInfixIndex]}${childCount}`, (selector) => {
					selector.property('width', `${childCount / parentCount * 100}%`);
				});
			}
		}
	}
});

fs.writeFile('index.css', css.toString(), (error) => {
	if (error) {
		throw error;
	}
});
