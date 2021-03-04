# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request


@http.route('/odoo_notify', type='http', auth='user')
def odoo_notify(self, **kwargs):
    return kwargs
