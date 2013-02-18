(function(markdown) {
	
	md(markdown, "#content", "#md-index");

})(Markdown.getSanitizingConverter());

function md(markdown, target, source) {
	var result = markdown.makeHtml($(source).html());
	$(target).html($(target).html() + result);
}