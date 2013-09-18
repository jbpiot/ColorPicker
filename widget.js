/**
 * Color Picker widget for Wakanda
 * With the help of an external library, you can include a color picker on your Wakanda Pages.
 * @author JB Piot
 */

(function () {
    var Widget = WAF.require('waf-core/widget');
    var Event = WAF.require('waf-core/event');
    var widget = Widget.create('ColorPicker');
    
    Event.create('ColorChange');
    
    /**
    * Framework creates the widget
    */
    widget.prototype.init = function () {
        
        $(this.node).empty();
        
        var myPicker  = document.createElement('input');
        var thisWidget = this;
        
        $(this.node).append(myPicker);
        
        $(myPicker).spectrum({
            color: "#ff0000",
            change: function (color) {
                thisWidget.fire(new Event.ColorChange({color: color.toHexString()}));
			}
        });
    };

    /**
    * Retrieves the specified color component of the current active color.
    * If a 2nd parameter is provided, sets the component's
    * @param {char} component The name of the component to retrieve (r, g or b)
    * @param {number} value The new value of the color picker
    */
    widget.prototype.colorComponent = function (component, value) {
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
    widget.prototype.red = function (v) { return this.colorComponent('r', v); };
    widget.prototype.green = function (v) { return this.colorComponent('g', v); };
    widget.prototype.blue = function (v) { return this.colorComponent('b', v); };
    
    /**
    * Make the three color properties bindable (data-binding-red, data-binding-green, data-binding-blue)
    */
    widget.makeBindableProperty('red', widget.prototype.red, Event.ColorChange);
    widget.makeBindableProperty('green', widget.prototype.green, Event.ColorChange);
    widget.makeBindableProperty('blue', widget.prototype.blue, Event.ColorChange);
    
    
    /**
    * Sets the color of the color picker to <tt>color</tt>
    * @param {string} color The new color for the color picker.
    */
    widget.prototype.setColor = function (c) {
        $("input", this.node).spectrum("set", c);
    };
}());