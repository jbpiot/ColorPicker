/**
 * ColorPicker widget for Wakanda
 * With the help of an external library, you can include a color picker on your Wakanda Pages. 
 * @author JB Piot
 */
(function () {
    
    var widget = WAF.require('ColorPicker').ColorPicker;
    
    widget.inherit(WAF.require('waf-behavior/studio'));
    
    widget.setDescription('Color Picker');  //Widget's display name

    /*Default size*/
    widget.setWidth('50');
    widget.setHeight('30');

    /*Styles*/
    widget.setPanelStyle({
        'fClass': true,
        'text': false,
        'background': false,
        'border': true,
        'sizePosition': true,
        'label': true,
        'disabled': ['border-radius']
    });
}());
