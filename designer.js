/**
 * ColorPicker widget for Wakanda
 * With the help of an external library, you can include a color picker on your Wakanda Pages. 
 * @author JB Piot
 */
(function () {
    var ColorPicker = WAF.require('waf-core/widget').ColorPicker.inherit(WAF.require('waf-behavior/studio'));
    
    ColorPicker.setDescription('Color Picker');  //Widget's display name
    
    /*Widget properties*/
    ColorPicker.addAttributes([{
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
    ColorPicker.addEvent({
        'name': 'ColorChange',
        'description': 'ColorChange'
    });

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
    
    
}());