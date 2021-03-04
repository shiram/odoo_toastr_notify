from odoo import api, fields, models

Model = models.BaseModel


class WelezaModel(Model):
    """ Main super-class for regular database-persisted Odoo models.

        Odoo models are created by inheriting from this class::

            class user(Model):
                ...

        The system will later instantiate the class once per database (on
        which the class' module is installed).
        """
    _auto = True  # automatically create database backend
    _register = False  # not visible in ORM registry, meant to be python-inherited only
    _abstract = False  # not abstract
    _transient = False  # not transient

    _event_notify = True  # flag to send mail on record events

    @api.model
    def create(self, vals_list):
        print("calling Super Method")
        records = super(WelezaModel, self).create(vals_list)
        print("This is a call to Weleza Model")
        return records
