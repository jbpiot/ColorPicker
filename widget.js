/**
 * Color Picker widget for Wakanda
 * With the help of an external library, you can include a color picker on your Wakanda Pages.
 * @author JB Piot
 */


(function () {
    var widget = WAF.require('waf-core/widget');
    var event = WAF.require('waf-core/event');
    var ColorPicker = widget.create('ColorPicker');
    
    event.create('ColorChange');
    
    /**
    * Framework creates the widget
    */
    ColorPicker.prototype.init = function () {
    	var thisWidget = this;
    	
        $("input", $(this.node)).siblings().remove();
        
        $("input", $(this.node)).spectrum({
            color: "#ff0000",
            change: function (color) {
                thisWidget.fire(new event.ColorChange({color: color.toHexString()}));
			}
        });
    };



    ColorPicker.prototype.createDomNode = function() {
    	this.$super('createDomNode')();
    	
    	$(this.node).empty();
    	
    	var e = document.createElement('input');
    	$(this.node).append(e);

    };



    /**
    * Retrieves the specified color component of the current active color.
    * If a 2nd parameter is provided, sets the component's
    * @param {char} component The name of the component to retrieve (r, g or b)
    * @param {number} value The new value of the color picker
    */
    ColorPicker.prototype.colorComponent = function (component, value) {
        var color = $("input", this.node).spectrum("get").toRgb();
        
        if (value !== undefined) {
            color[component] = value;
            var s = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
            
            $("input", this.node).spectrum("set", s);
        }
        return color[component];
    };
    
    
    /**
    * Declare three color properties to the widget.
    */
    ColorPicker.prototype.red = function (v) { return this.colorComponent('r', v); };
    ColorPicker.prototype.green = function (v) { return this.colorComponent('g', v); };
    ColorPicker.prototype.blue = function (v) { return this.colorComponent('b', v); };
    
    /**
    * Make the three color properties bindable (data-binding-red, data-binding-green, data-binding-blue)
    */
    ColorPicker.makeBindableProperty('red', ColorPicker.prototype.red, event.ColorChange);
    ColorPicker.makeBindableProperty('green', ColorPicker.prototype.green, event.ColorChange);
    ColorPicker.makeBindableProperty('blue', ColorPicker.prototype.blue, event.ColorChange);
    
    
    /**
    * Sets the color of the color picker to <tt>color</tt>
    * @param {string} color The new color for the color picker.
    */
    ColorPicker.prototype.setColor = function (c) {
        $("input", this.node).spectrum("set", c);
    };
}());