/**
 * Color Picker widget for Wakanda
 * With the help of an external library, you can include a color picker on your Wakanda Pages.
 * @author JB Piot
 */

WAF.define('ColorPicker', ['waf-core/widget'], function (widget) {

    var componentSetter = function (component) {
        return function (value) {
            //console.log(this.id, component, value);
            var color = $("input", this.node).spectrum("get").toRgb();

            color[component] = value;
            var s = "rgb(" + color.r + "," + color.g + "," + color.b + ")";

            $("input", this.node).spectrum("set", s);
        };
    };

    var ColorPicker = widget.create('ColorPicker', {
        init: function () {

            $(this.node).empty();

            var myPicker = document.createElement('input');
            var thisWidget = this;

            $(this.node).append(myPicker);

            $(myPicker).spectrum({
                color: "#000000",
                change: function (color) {
                    //console.log('color change', color);
                    thisWidget.color(color.toHexString());
                    thisWidget.red(color.toRgb().r);
                    thisWidget.green(color.toRgb().g);
                    thisWidget.blue(color.toRgb().b);
                }
            });
        },
        'red': widget.property({
            defaultValue: 0,
            bindable: false,
            onChange: componentSetter('r')
        }),
        'green': widget.property({
            defaultValue: 0,
            bindable: false,
            onChange: componentSetter('g')
        }),
        'blue': widget.property({
            defaultValue: 0,
            bindable: false,
            onChange: componentSetter('b')
        }),
        'color': widget.property({
            defaultValue: '#000000',
            onChange: function (v) {
                //console.log(this.id, 'color', v);
                $("input", this.node).spectrum("set", v);
            }
        })
    });

    return ColorPicker;
});
