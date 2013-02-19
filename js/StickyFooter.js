StickyFooter = {};

(function(exports, $) {

	// Extend jQuery so we can do $('element').exists().
	$.fn.exists = function () {
		return this.length !== 0;
	}

	exports.StickyObject = StickyObject;
	exports.ElementDynamicSize = ElementDynamicSize;

	function StickyObject(elements) {
		this.elements = elements || {};
		this.sizes = {};
		if (typeof elements.main == 'undefined') {
			throw "No main object is defined!";
		}
	}

	StickyObject.prototype.positionBottom = function(offset) {
		var height = this.getHeight() + this.getHeightOfElement(this.elements.main, false, true);
		if (height < $(window).height()) {
			var top = (
				$(window).scrollTop() +
				$(window).height() -
				this.getHeightOfElement(this.elements.main) -
				1
			) + 'px';

			this.elements.main.css({
				position: 'absolute',
				top: top
			});
		} else {
			this.elements.main.css({
				position: 'static'
			});
		}
	};

	StickyObject.prototype.getHeight = function() {
		var that = this;
		var result = this.getHeightOfElement(this.elements.main, true);
		$.each(this.elements, function(k, v) {
			if (k == 'main') {
				return;
			}

			result = result + that.getHeightOfElement(v);
		});

		return result;
	};

	StickyObject.prototype.getHeightOfElement = function($element, nodyn, noheight) {
		nodyn = nodyn || false;
		noheight = noheight || false;

		var index = $element.id + $element.class;
		if (!this.sizes[index]) {
			this.sizes[index] = new ElementDynamicSize($element);
		}

		return ((nodyn) ? 0 : this.sizes[index].height()) + ((noheight) ? 0 : $element.height());
	};

	function ElementDynamicSize($element) {
		if (!$element.exists()) {
			throw "ElementDynamicSize: Element does not exist!";
		}

		this.$element = $element;
		this.buffer = {};
	}

	ElementDynamicSize.prototype.width = function() {
		if (typeof this.buffer.width == 'undefined') {
			var $e = this.$element;

			var eW = 0;
			eW = eW + parseInt($e.css('marginLeft').replace('px', ''));
			eW = eW + parseInt($e.css('marginRight').replace('px', ''));
			eW = eW + parseInt($e.css('paddingLeft').replace('px', ''));
			eW = eW + parseInt($e.css('paddingRight').replace('px', ''));

			this.buffer.width = eW;
		}

		return this.buffer.width;
	};

	ElementDynamicSize.prototype.height = function() {
		if (typeof this.buffer.height == 'undefined') {
			var $e = this.$element;

			var eH = 0;
			eH = eH + parseInt($e.css('marginTop').replace('px', ''));
			eH = eH + parseInt($e.css('marginBottom').replace('px', ''));
			eH = eH + parseInt($e.css('paddingTop').replace('px', ''));
			eH = eH + parseInt($e.css('paddingBottom').replace('px', ''));

			this.buffer.height = eH;
		}

		return this.buffer.height;
	};

})(StickyFooter, jQuery);