# -*- coding: utf-8 -*-

from odoo import _, models, fields, api, exceptions
from odoo.addons.odoo_notify.exceptions import ToastrException
from odoo.addons.odoo_notify import base_model


class Notify(base_model.WelezaModel):
    _name = 'odoo_notify.notify'

    name = fields.Char()
    title = fields.Char()
    notify_type = fields.Char()

    @api.model
    def create(self, vals):
        name = vals['name']
        if name and name.startswith('M'):
            raise ToastrException(_('Starts with M'), toastr_settings={'type': 'info'})
        record = super(Notify, self).create(vals)
        return record

    @api.model
    def test_button(self, args):
        print("The Arguments")
        for arg in args:
            print(arg)
        print("Test Button Calls Python Method")
        return "eddie"

    @api.multi
    def test_toastr(self, args):

        return {
            'type': 'ir.actions.act_url',
            'url': '/odoo_notify/%s' % 'eddie is here',
            'target': 'self',
            'res_id': args[0],
        }
