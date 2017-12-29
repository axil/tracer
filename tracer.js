define([
    'base/js/namespace'
], function(Jupyter) {
    var exports = {};
    var tracer = function() {
        var selected_cell = Jupyter.notebook.get_selected_cell();
        Jupyter.notebook.edit_mode();
	var cur = selected_cell.code_mirror.getCursor();
        selected_cell.code_mirror.replaceRange('from IPython.core.debugger import Pdb; Pdb().set_trace()\n', cur, cur);
        selected_cell.code_mirror.indentLine(cur.line+1);
    };

    // Wait for notification that the app is ready
    exports.load_ipython_extension = function() {
        Jupyter.keyboard_manager.edit_shortcuts.add_shortcut('F4', tracer);
    };

    return exports;
});
