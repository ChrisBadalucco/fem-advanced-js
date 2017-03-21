// #4 BONUS - my attempt at OLOO
var Widget = {
	init: function(width,height) {
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	},
	render: function($where) {
		if (this.$elem) {
			this.$elem.css({
				width: this.width + "px",
				height: this.height + "px"
			}).appendTo($where);
		}
	}
};

var Button = Object.create(Widget);
Button.setup = function(width,height,label) {
	this.init(width,height);
	this.label = label || "Button";

	this.$elem = $("<button>").text(this.label);
};

Button.create = function($where) {
	// call the parent render()
	this.render($where);
	// add a click handler -> onClick
	this.$elem.click(this.onClick.bind(this));
};

Button.onClick = function(evt) {
	console.log(this.label + " clicked!");
};

$(document).ready(function() {
	var $body = $(document.body);
	var btn1 = Object.create(Button);
	btn1.setup(100,150,"OL");
	var btn2 = Object.create(Button);
	btn2.setup(225,200,"OO");

	btn1.create($body);
	btn2.create($body);
});