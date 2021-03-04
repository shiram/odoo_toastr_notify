odoo.define('odoo_notify.BSOD', function (require) {
    'use strict';

    var Widget = require('web.Widget');

    var BSODWidget = Widget.extend({
        template: 'BSOD',
        init: function(parent, error) {
            this._super(parent);
            this.error = error;
        }
    });
    return BSODWidget;
});