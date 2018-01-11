System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var selectFilterTemplate;
    return {
        setters: [],
        execute: function () {
            exports_1("selectFilterTemplate", selectFilterTemplate = function (searchTerm, columnDef, i18n) {
                if (!columnDef.filter.selectOptions) {
                    throw new Error("SelectOptions with value/label (or value/labelKey when using Locale) is required to populate the Select list, for example:: { filter: type: FormElementType.select, selectOptions: [ { value: '1', label: 'One' } ]')");
                }
                var options = '';
                columnDef.filter.selectOptions.forEach(function (option) {
                    if (!option || (option.label === undefined && option.labelKey === undefined)) {
                        throw new Error("SelectOptions with value/label (or value/labelKey when using Locale) is required to populate the Select list, for example:: { filter: type: FormElementType.select, selectOptions: [ { value: '1', label: 'One' } ]')");
                    }
                    var textLabel = (option.labelKey && i18n && typeof i18n.tr === 'function') ? i18n.tr(option.labelKey) : option.label;
                    options += "<option value=\"" + option.value + "\">" + textLabel + "</option>";
                });
                return "<select class=\"form-control search-filter\">" + options + "</select>";
            });
        }
    };
});
//# sourceMappingURL=selectFilterTemplate.js.map