odoo.define('odoo_notify.action_button', function(require){
    'use strict'
    var core = require('web.core');
    var ListController = require('web.ListController');
    var rpc = require('web.rpc');
    var session = require('web.session');
    var _t = core._t;

    ListController.include({
        renderButtons: function($node) {
            this._super.apply(this, arguments);
            if(this.$buttons) {
                this.$buttons.find('.oe_action_button').click(this.proxy('action_def'));
                console.log(this.$buttons.find('.oe_action_button'))
                console.log("girla");
            }
        },

        action_def: function() {
            var self = this;
            var user = session.uid;
            rpc.query({
                model: 'odoo_notify.notify',
                method: 'test_button',
                args: [[user], {'id': user}]
            }).then(function(e) {
                console.log("Its working but method not picked");
                toastr.info("Hello "+e);
                console.log(e);
            });
        },

    });

});