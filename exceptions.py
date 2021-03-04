class BSOD(Exception):
    """ Exception to be raised """


class ToastrException(Exception):
    """ Show a toast popup message exception """
    def __init__(self, name, toastr_settings=None):
        self.name = name
        self.toastr_settings = toastr_settings
        self.args = (name, toastr_settings)
