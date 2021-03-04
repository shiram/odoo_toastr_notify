odoo.define('odoo_notify.toastr_exception_handler', function(require) {
    'use strict';

    var core = require('web.core');

    var ToastrExceptionHandler = core.Class.extend({
        init: function(parent, error) {
            this.error = error;
        },

        display: function() {

            var message = this.error.data.arguments[0];

            var toastr_settings = this.error.data.arguments[1];
            var type = toastr_settings['type'];

            toastr.options = {
                "debug": toastr_settings['debug'],
                "closeButton": toastr_settings['closeButton'],
                "positionClass": toastr_settings['positionClass'],
                "progressBar": toastr_settings['progressBar'],
                "showDuration": toastr_settings['showDuration'],
                "hideDuration": toastr_settings['hideDuration'],
                "timeOut": toastr_settings['timeOut'],
                "extendedTimeOut": toastr_settings['extendedTimeOut'],
                "newestOnTop": toastr_settings['newestOnTop'],
                "showEasing": toastr_settings['showEasing'],
                "hideEasing": toastr_settings['hideEasing'],
                "showMethod": toastr_settings['showMethod'],
                "hideMethod": toastr_settings['hideMethod']
            }

            switch(type) {
                case 'success':
                    toastr.success(message)
                    break;
                case 'error':
                    toastr.error(message)
                    break;
                case 'warning':
                    toastr.warning(message);
                    break;
                case 'info':
                    toastr.info(message)
                    break;
                default:
                    //show default toastr
                    toastr.info(message)
            }
        }
    });

    core.crash_registry.add('odoo.addons.odoo_notify.exceptions.ToastrException', ToastrExceptionHandler);

    return ToastrExceptionHandler;
 });