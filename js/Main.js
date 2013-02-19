$(function() {

	var markdown = new Markdown.Converter();
	var footer = new StickyFooter.StickyObject({
		main: $('#footer'),
		header: $('#header'),
		content: $('#content')
	});

	function positionFooter() {
		footer.positionBottom();
	} $(window).scroll(positionFooter).resize(positionFooter);

	positionFooter();

	if (location.hash == "") {
		location.hash = "#/";
	}

	$(window).bind('hashchange', function() {
		var hash = location.hash.replace(/^#/, '');
		hash = hash.replace(/^\/|\/$/g, '') || 'home';

		var title = 'FluxCore';
		var split = hash.split('/');
		$.each(split, function(k, v) {
			title = title + ' - ' + v.charAt(0).toUpperCase() + v.slice(1);
		});

		document.title = title;
		var result = Pages.factory.get(hash + '.md') || Pages.factory.get('error/404.md');
		if (result) {
			result = markdown.makeHtml(result);
		}

		$('#content').html(result || 'There is no 404 present.');
	});

	$(window).trigger('hashchange');

});