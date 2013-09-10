/**
 * ColorPicker widget for Wakanda
 * Simple demo for creating a custom widget based on an external library.
 * widget.js, main source code of the widget to be imported by the Wakanda framework
 * 
 * @author JB Piot
 */

(function () {
    var Widget = WAF.require('waf-core/widget');
    var Event = WAF.require('waf-core/event');
    
    var widget = Widget.create('ColorPicker');
    
    Event.create('ColorChange');
    
    /**
    * Creates the widget, automatically called by the framework.
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
    * @param {char} component The name of the component to retrieve (r, v or b)
    * @param {number} value The new value of the color picker.
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
    * Declare 3 color properties to the widget.
    */
    widget.prototype.r = function (v) { return this.colorComponent('r', v); };
    widget.prototype.g = function (v) { return this.colorComponent('g', v); };
    widget.prototype.b = function (v) { return this.colorComponent('b', v); };
    
    /**
    * Make the color properties bindable.
    */
    widget.makeBindableProperty('r', widget.prototype.r, Event.ColorChange);
    widget.makeBindableProperty('g', widget.prototype.g, Event.ColorChange);
    widget.makeBindableProperty('b', widget.prototype.b, Event.ColorChange);
    
    
    /**
    * Sets the color of the color picker to <tt>color</tt>
    * @param {string} color The new color of the color picker.
    */
    widget.prototype.setColor = function (c) {
        $("input", this.node).spectrum("set", c);
    };
})();