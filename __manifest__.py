# -*- coding: utf-8 -*-
{
    'name': "Notify",

    'summary': """
        Toastr.js Odoo Implementation""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Shirambere Edward",
    'website': "http://www.shirambere.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/12.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Tools',
    'version': '1.2',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'assets/assets.xml',
        'views/views.xml',
    ],
    'qweb': [
        'static/src/xml/list_button.xml',
        'static/src/xml/crash_manager.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}