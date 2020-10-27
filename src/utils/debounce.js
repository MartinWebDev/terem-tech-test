export const debounce = (func, ms) => {
    var timeout;

    return function () {
		var context = this, args = arguments;

        clearTimeout(timeout);
		timeout = setTimeout(() => {
			timeout = null;
			func.apply(context, args);
		}, ms);
	};
}
