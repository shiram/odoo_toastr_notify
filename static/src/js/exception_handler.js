odoo.define('odoo_notify.exception_handler', function(require) {
    'use strict';

    var core = require('web.core');
    var BSDODWidget = require('odoo_notify.BSOD');

    var BSODHandler = core.Class.extend({
        init: function(parent, error) {
            this.error = error;
            console.log("This is error:")
            console.log(error)
            console.log("This is parent:")
            console.log(parent)
        },

        display: function() {
            var bsod = new BSDODWidget(this, this.error);

            bsod.appendTo($('body'));
            toastr.error(this.error.data.message);
            $(document).one('keyup', function(e){
                e.preventDefault();
                e.stopPropagation();
                if(e.keyCode === 27) {
                    window.location.reload();
                }
                bsod.destroy();
            });
        }
    });

    core.crash_registry.add('odoo.addons.odoo_notify.exceptions.BSOD', BSODHandler);

    return BSODHandler;
 });