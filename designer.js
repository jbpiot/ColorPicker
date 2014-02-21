/**
 * ColorPicker widget for Wakanda
 * With the help of an external library, you can include a color picker on your Wakanda Pages.
 * @author JB Piot
 */
(function (ColorPicker) {
    ColorPicker.setDescription('Color Picker'); //Widget's display name

    /*Default size*/
    ColorPicker.setWidth('50');
    ColorPicker.setHeight('30');

    /*Styles*/
    ColorPicker.setPanelStyle({
        'fClass': true,
        'text': false,
        'background': false,
        'border': true,
        'sizePosition': true,
        'label': true,
        'disabled': ['border-radius']
    });

    var initSave = ColorPicker.prototype.init;

    ColorPicker.prototype.init = function () {

        initSave.apply(this);

        unbindChildren($(this.node));

        function unbindChildren(parent) {
            $(parent).children().each(
                function (i) {
                    unbindChildren($(this));
                    $(this).undelegate();
                });
        }
        
        $(this.node).undelegate();
    }
});
