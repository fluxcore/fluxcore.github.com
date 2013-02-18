Pages = {};

(function(exports, Markdown, $) {

	exports.factory = new FileFactory(new FileFetcher('/pages/'));

	function FileFactory(fileFetcher) {
		this.fileFetcher = fileFetcher;
		this.buffer = {};
	}

	FileFactory.prototype.get = function(file) {
		if (this.buffer[file]) {
			return this.buffer[file];
		}

		this.buffer[file] = this.fileFetcher.get(file);
		return this.buffer[file];
	}

	function FileFetcher(directory) {
		this.directory = directory;
	}

	FileFetcher.prototype.get = function(file) {
		var result = false;
		$.ajax({
			url: this.directory + file,
			data: {},
			success: function(data) { result = data; },
			dataType: 'html',
			async: false
		});

		return result;
	};

})(Pages, Markdown, jQuery);