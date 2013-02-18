$(function() {

	var markdown = new Markdown.Converter();

	$(window).bind('hashchange', function() {
		var hash = location.hash.replace(/^#|^\/|\/$/g, '');
		var file = (hash || 'home') + '.md';

		var result = Pages.factory.get(file) || Pages.factory.get('error/404.md');
		if (result) {
			result = markdown.makeHtml(result);
		}

		$('#content').html(result || 'There is no 404 present.');
	});

	if (location.hash == "") {
		location.hash = "#/";
	}

	$(window).trigger('hashchange');

});