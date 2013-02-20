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

	if (location.hash == "") {
		location.hash = "#/";
	}

	$('#header').html(Pages.factory.get('template/header.html'));
	$('#footer').html(Pages.factory.get('template/footer.html'));

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

		// Position footer.
		positionFooter();

		// PrettyPrint
		$('#content pre').addClass('prettyprint');
		prettyPrint();

	});

	$(window).trigger('hashchange');

});