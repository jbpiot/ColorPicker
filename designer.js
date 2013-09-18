/**
 * ColorPicker widget for Wakanda
 * With the help of an external library, you can include a color picker on your Wakanda Pages. 
 * @author JB Piot
 */
(function () {
    
    var wafWidget = WAF.require('waf-core/widget');
    
    var widget = wafWidget.ColorPicker.inherit(WAF.require('waf-behavior/studio'));
    
    widget.setDescription('Color Picker');  //Widget's display name
    
    /*Widget properties*/
    widget.addAttributes([{
        'name': 'data-binding-red',
        'description': 'Red Source',
        'typeValue': 'datasource'
    }, {
        'name': 'data-binding-green',
        'description': 'Green Source',
        'typeValue': 'datasource'
    }, {
        'name': 'data-binding-blue',
        'description': 'Blue Source',
        'typeValue': 'datasource'
    }]);
    
    /*Widget events*/
    widget.addEvent({
        'name': 'ColorChange',
        'description': 'ColorChange'
    });

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