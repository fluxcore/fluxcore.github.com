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

	function updateLinks() {
		var links = document.links;

		for (var i = 0, linksLength = links.length; i < linksLength; i++) {
			if (links[i].hostname != window.location.hostname) {
				links[i].target = '_blank';
			}
		}
	}

	$('#header').html(Pages.factory.get('template/header.html'));
	$('#footer').html(Pages.factory.get('template/footer.html'));

	$(window).bind('hashchange', function() {
		if (location.hash == "" || location.hash == "#") {
			location.hash = "#/";
		}

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

		// Position footer.
		positionFooter();

		// PrettyPrint
		$('#content pre').addClass('prettyprint');
		prettyPrint();

		// Update links.
		updateLinks();

	});

	$(window).trigger('hashchange');

});