/**
 * Color Picker widget for Wakanda
 * With the help of an external library, you can include a color picker on your Wakanda Pages.
 * @author JB Piot
 */

WAF.define('ColorPicker', function () {
    var Widget = WAF.require('waf-core/widget');
    var widget = Widget.create('ColorPicker');
    
    /**
    * Framework creates the widget
    */
    widget.prototype.init = function () {
        
        $(this.node).empty();
        
        var myPicker  = document.createElement('input');
        var thisWidget = this;
        
        $(this.node).append(myPicker);
        
        $(myPicker).spectrum({
            color: "#000000",
            change: function (color) {
                console.log('color change', color);
                thisWidget.color (color.toHexString());
                thisWidget.red   (color.toRgb().r);
                thisWidget.green (color.toRgb().g);
                thisWidget.blue  (color.toRgb().b);
			}
        });
    };

    /**
    * generate a function to set or get a specified component
    */
    var componentSetter = function(component) {
        return function(value) {
            console.log(this.id, component, value);
            var color = $("input", this.node).spectrum("get").toRgb();
            
            color[component] = value;
            var s = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
            
            $("input", this.node).spectrum("set", s);
        };
    };
    
    widget.addProperty('red', {
        defaultValue: 0,
        onChange: componentSetter('r')
    });
    widget.addProperty('green', {
        defaultValue: 0,
        onChange: componentSetter('g')
    });
    widget.addProperty('blue', {
        defaultValue: 0,
        onChange: componentSetter('b')
    });
    widget.addProperty('color', {
        defaultValue: '#000000',
        onChange: function(v) {
            $("input", this.node).spectrum("set", v);
        }
    });

	return { ColorPicker: widget };
});
