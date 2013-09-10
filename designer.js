/**
 * ColorPicker widget for Wakanda
 * Simple demo for creating a custom widget based on an external library.
 * designer.js, declaration of the widget for use in Wakanda Studio : attributes & behavior of the widget in the GUI Designer
 * 
 * @author JB Piot
 */
(function () {
    
    var wafWidget = WAF.require('waf-core/widget');
    
    var widget = wafWidget.ColorPicker.inherit(WAF.require('waf-behavior/studio'));
    
    widget.setDescription('Color Picker');
    
    
    /*
    * Attributes definitions
    */
    widget.addAttribute({
        'name': 'data-binding-r',
        'description': 'Red',
        'typeValue': 'datasource'
    });
    
    widget.addAttribute({
        'name': 'data-binding-g',
        'description': 'Green',
        'typeValue': 'datasource'
    });
    
    widget.addAttribute({
        'name': 'data-binding-b',
        'description': 'Blue',
        'typeValue': 'datasource'
    });
    
    widget.addAttribute({
        'name': 'data-width',
        'description': 'Width',
        'defaultValue': '50px'
    });
    
    widget.addAttribute({
        'name': 'data-height',
        'description': 'Height',
        'defaultValue': '30px'
    });

    /*
    * Events binding
    */
    widget.on('resize', function (event) {
        this.studioCss('height', event.size.height);
        this.studioCss('width', event.size.width);
        this.studioVal('data-width', event.size.width + 'px');
        this.studioVal('data-height', event.size.height + 'px');
        this.studioPanelRefresh();
    });
    
    widget.on('display', function (attributes) {
        this.studioCss('width', attributes['data-width']);
        this.studioCss('height', attributes['data-height']);
    });
    
    /*
    * Style change
    */
    widget.setPanelStyle({
        'fClass': true,
        'text': true,
        'background': true,
        'border': true,
        'sizePosition': true,
        'label': true,
        'disabled': ['border-radius']
    });
})();