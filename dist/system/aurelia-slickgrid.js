System.register(["jquery-ui-dist/jquery-ui", "slickgrid/lib/jquery.event.drag-2.3.0", "slickgrid/slick.core", "slickgrid/slick.dataview", "slickgrid/slick.grid", "slickgrid/slick.groupitemmetadataprovider", "slickgrid/controls/slick.columnpicker", "slickgrid/controls/slick.gridmenu", "slickgrid/controls/slick.pager", "slickgrid/plugins/slick.autotooltips", "slickgrid/plugins/slick.cellcopymanager", "slickgrid/plugins/slick.cellexternalcopymanager", "slickgrid/plugins/slick.cellrangedecorator", "slickgrid/plugins/slick.cellrangeselector", "slickgrid/plugins/slick.cellselectionmodel", "slickgrid/plugins/slick.checkboxselectcolumn", "slickgrid/plugins/slick.headerbuttons", "slickgrid/plugins/slick.headermenu", "slickgrid/plugins/slick.rowmovemanager", "slickgrid/plugins/slick.rowselectionmodel", "aurelia-framework", "aurelia-event-aggregator", "aurelia-i18n", "./global-grid-options", "./models/index", "./services/index", "jquery"], function (exports_1, context_1) {
    "use strict";
    var __assign = (this && this.__assign) || Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_event_aggregator_1, aurelia_i18n_1, global_grid_options_1, index_1, index_2, $, aureliaEventPrefix, eventPrefix, AureliaSlickgridCustomElement;
    return {
        setters: [
            function (_1) {
            },
            function (_2) {
            },
            function (_3) {
            },
            function (_4) {
            },
            function (_5) {
            },
            function (_6) {
            },
            function (_7) {
            },
            function (_8) {
            },
            function (_9) {
            },
            function (_10) {
            },
            function (_11) {
            },
            function (_12) {
            },
            function (_13) {
            },
            function (_14) {
            },
            function (_15) {
            },
            function (_16) {
            },
            function (_17) {
            },
            function (_18) {
            },
            function (_19) {
            },
            function (_20) {
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            },
            function (aurelia_i18n_1_1) {
                aurelia_i18n_1 = aurelia_i18n_1_1;
            },
            function (global_grid_options_1_1) {
                global_grid_options_1 = global_grid_options_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function ($_1) {
                $ = $_1;
            }
        ],
        execute: function () {
            aureliaEventPrefix = 'asg';
            eventPrefix = 'sg';
            AureliaSlickgridCustomElement = /** @class */ (function () {
                function AureliaSlickgridCustomElement(controlAndPluginService, exportService, elm, ea, filterService, graphqlService, gridEventService, gridExtraService, gridStateService, i18n, resizer, sortService, container) {
                    this.controlAndPluginService = controlAndPluginService;
                    this.exportService = exportService;
                    this.elm = elm;
                    this.ea = ea;
                    this.filterService = filterService;
                    this.graphqlService = graphqlService;
                    this.gridEventService = gridEventService;
                    this.gridExtraService = gridExtraService;
                    this.gridStateService = gridStateService;
                    this.i18n = i18n;
                    this.resizer = resizer;
                    this.sortService = sortService;
                    this.container = container;
                    this._eventHandler = new Slick.EventHandler();
                    this.showPagination = false;
                }
                AureliaSlickgridCustomElement.prototype.attached = function () {
                    this.elm.dispatchEvent(new CustomEvent(eventPrefix + "-on-before-grid-create", {
                        bubbles: true,
                    }));
                    this.ea.publish('onBeforeGridCreate', true);
                    // make sure the dataset is initialized (if not it will throw an error that it cannot getLength of null)
                    this._dataset = this._dataset || this.dataset || [];
                    this.gridOptions = this.mergeGridOptions(this.gridOptions);
                    this.createBackendApiInternalPostProcessCallback(this.gridOptions);
                    if (this.gridOptions.enableGrouping) {
                        this.groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();
                        this.dataview = new Slick.Data.DataView({
                            groupItemMetadataProvider: this.groupItemMetadataProvider,
                            inlineFilters: true
                        });
                    }
                    else {
                        this.dataview = new Slick.Data.DataView();
                    }
                    this.controlAndPluginService.createPluginBeforeGridCreation(this.columnDefinitions, this.gridOptions);
                    this.grid = new Slick.Grid("#" + this.gridId, this.dataview, this.columnDefinitions, this.gridOptions);
                    this.controlAndPluginService.attachDifferentControlOrPlugins(this.grid, this.columnDefinitions, this.gridOptions, this.dataview, this.groupItemMetadataProvider);
                    this.attachDifferentHooks(this.grid, this.gridOptions, this.dataview);
                    this.grid.init();
                    this.dataview.beginUpdate();
                    this.dataview.setItems(this._dataset, this.gridOptions.datasetIdPropertyName);
                    this.dataview.endUpdate();
                    // publish certain events
                    this.elm.dispatchEvent(new CustomEvent(eventPrefix + "-on-grid-created", {
                        bubbles: true,
                        detail: this.grid
                    }));
                    this.ea.publish('onGridCreated', this.grid);
                    this.elm.dispatchEvent(new CustomEvent(eventPrefix + "-on-dataview-created", {
                        bubbles: true,
                        detail: this.dataview
                    }));
                    this.ea.publish('onDataviewCreated', this.dataview);
                    // attach resize ONLY after the dataView is ready
                    this.attachResizeHook(this.grid, this.gridOptions);
                    // attach grid extra service
                    this.gridExtraService.init(this.grid, this.columnDefinitions, this.gridOptions, this.dataview);
                    // when user enables translation, we need to translate Headers on first pass & subsequently in the attachDifferentHooks
                    if (this.gridOptions.enableTranslate) {
                        this.controlAndPluginService.translateHeaders();
                    }
                    // if Export is enabled, initialize the service with the necessary grid and other objects
                    if (this.gridOptions.enableExport) {
                        this.exportService.init(this.grid, this.gridOptions, this.dataview);
                    }
                    // attach the Backend Service API callback functions only after the grid is initialized
                    // because the preProcess() and onInit() might get triggered
                    if (this.gridOptions && (this.gridOptions.backendServiceApi || this.gridOptions.onBackendEventApi)) {
                        this.attachBackendCallbackFunctions(this.gridOptions);
                    }
                    this.gridStateService.init(this.grid, this.filterService, this.sortService);
                };
                AureliaSlickgridCustomElement.prototype.detached = function () {
                    this.ea.publish('onBeforeGridDestroy', this.grid);
                    this.elm.dispatchEvent(new CustomEvent(eventPrefix + "-on-before-grid-destroy", {
                        bubbles: true,
                        detail: this.grid
                    }));
                    this.dataview = [];
                    this._eventHandler.unsubscribeAll();
                    this.controlAndPluginService.dispose();
                    this.filterService.dispose();
                    this.gridEventService.dispose();
                    this.gridStateService.dispose();
                    this.resizer.dispose();
                    this.sortService.dispose();
                    this.grid.destroy();
                    this.gridStateSubscriber.dispose();
                    this.localeChangedSubscriber.dispose();
                    this.ea.publish('onAfterGridDestroyed', true);
                    this.elm.dispatchEvent(new CustomEvent(eventPrefix + "-on-after-grid-destroyed", {
                        bubbles: true,
                        detail: this.grid
                    }));
                };
                /**
                 * Keep original value(s) that could be passed by the user ViewModel.
                 * If nothing was passed, it will default to first option of select
                 */
                AureliaSlickgridCustomElement.prototype.bind = function (binding, contexts) {
                    // get the grid options (priority is Global Options first, then user option which could overwrite the Global options)
                    this.gridOptions = __assign({}, global_grid_options_1.GlobalGridOptions, binding.gridOptions);
                    // Wrap each editor class in the Factory resolver so consumers of this library can use
                    // dependency injection. Aurelia will resolve all dependencies when we pass the container
                    // and allow slickgrid to pass its arguments to the editors constructor last
                    // when slickgrid creates the editor
                    // https://github.com/aurelia/dependency-injection/blob/master/src/resolvers.js
                    for (var _i = 0, _a = this.columnDefinitions; _i < _a.length; _i++) {
                        var c = _a[_i];
                        if (c.editor) {
                            c.editor = aurelia_framework_1.Factory.of(c.editor).get(this.container);
                        }
                    }
                };
                AureliaSlickgridCustomElement.prototype.datasetChanged = function (newValue, oldValue) {
                    this._dataset = newValue;
                    this.refreshGridData(newValue);
                    // expand/autofit columns on first page load
                    // we can assume that if the oldValue was empty then we are on first load
                    if (!oldValue || oldValue.length < 1) {
                        if (this.gridOptions.autoFitColumnsOnFirstLoad) {
                            this.grid.autosizeColumns();
                        }
                    }
                };
                /**
                 * Define what our internal Post Process callback, it will execute internally after we get back result from the Process backend call
                 * For now, this is GraphQL Service only feautre and it will basically refresh the Dataset & Pagination without having the user to create his own PostProcess every time
                 */
                AureliaSlickgridCustomElement.prototype.createBackendApiInternalPostProcessCallback = function (gridOptions) {
                    var _this = this;
                    if (gridOptions && (gridOptions.backendServiceApi || gridOptions.onBackendEventApi)) {
                        var backendApi_1 = gridOptions.backendServiceApi || gridOptions.onBackendEventApi;
                        // internalPostProcess only works with a GraphQL Service, so make sure it is that type
                        if (backendApi_1 && backendApi_1.service && backendApi_1.service instanceof index_2.GraphqlService) {
                            backendApi_1.internalPostProcess = function (processResult) {
                                var datasetName = (backendApi_1 && backendApi_1.service && typeof backendApi_1.service.getDatasetName === 'function') ? backendApi_1.service.getDatasetName() : '';
                                if (processResult && processResult.data && processResult.data[datasetName]) {
                                    _this._dataset = processResult.data[datasetName].nodes;
                                    _this.refreshGridData(_this._dataset, processResult.data[datasetName].totalCount);
                                }
                                else {
                                    _this._dataset = [];
                                }
                            };
                        }
                    }
                };
                AureliaSlickgridCustomElement.prototype.attachDifferentHooks = function (grid, gridOptions, dataView) {
                    var _this = this;
                    // on locale change, we have to manually translate the Headers, GridMenu
                    this.localeChangedSubscriber = this.ea.subscribe('i18n:locale:changed', function (payload) {
                        if (gridOptions.enableTranslate) {
                            _this.controlAndPluginService.translateHeaders();
                            _this.controlAndPluginService.translateColumnPicker();
                            _this.controlAndPluginService.translateGridMenu();
                        }
                    });
                    // attach external sorting (backend) when available or default onSort (dataView)
                    if (gridOptions.enableSorting) {
                        (gridOptions.backendServiceApi || gridOptions.onBackendEventApi) ? this.sortService.attachBackendOnSort(grid, dataView) : this.sortService.attachLocalOnSort(grid, dataView);
                    }
                    // attach external filter (backend) when available or default onFilter (dataView)
                    if (gridOptions.enableFiltering) {
                        this.filterService.init(grid, gridOptions, this.columnDefinitions);
                        // if user entered some "presets", we need to reflect them all in the DOM
                        if (gridOptions.presets && gridOptions.presets.filters) {
                            this.filterService.populateColumnFilterSearchTerms(gridOptions, this.columnDefinitions);
                        }
                        (gridOptions.backendServiceApi || gridOptions.onBackendEventApi) ? this.filterService.attachBackendOnFilter(grid, gridOptions) : this.filterService.attachLocalOnFilter(grid, gridOptions, this.dataview);
                    }
                    // if user set an onInit Backend, we'll run it right away (and if so, we also need to run preProcess, internalPostProcess & postProcess)
                    if (gridOptions.backendServiceApi || gridOptions.onBackendEventApi) {
                        var backendApi = gridOptions.backendServiceApi || gridOptions.onBackendEventApi;
                        if (gridOptions.onBackendEventApi) {
                            console.warn("\"onBackendEventApi\" has been DEPRECATED, please consider using \"backendServiceApi\" in the short term since \"onBackendEventApi\" will be removed in future versions. You can take look at the Aurelia-Slickgrid Wikis for OData/GraphQL Services implementation");
                        }
                        if (backendApi && backendApi.service && backendApi.service.init) {
                            backendApi.service.init(backendApi.options, gridOptions.pagination, this.grid);
                        }
                    }
                    var _loop_1 = function (prop) {
                        if (grid.hasOwnProperty(prop) && prop.startsWith('on')) {
                            this_1._eventHandler.subscribe(grid[prop], function (e, args) {
                                _this.elm.dispatchEvent(new CustomEvent(eventPrefix + "-" + index_2.toKebabCase(prop), {
                                    bubbles: true,
                                    detail: {
                                        eventData: e,
                                        args: args
                                    }
                                }));
                            });
                        }
                    };
                    var this_1 = this;
                    // expose all Slick Grid Events through dispatch
                    for (var prop in grid) {
                        _loop_1(prop);
                    }
                    var _loop_2 = function (prop) {
                        if (dataView.hasOwnProperty(prop) && prop.startsWith('on')) {
                            this_2._eventHandler.subscribe(dataView[prop], function (e, args) {
                                _this.elm.dispatchEvent(new CustomEvent(eventPrefix + "-" + index_2.toKebabCase(prop), {
                                    bubbles: true,
                                    detail: {
                                        eventData: e,
                                        args: args
                                    }
                                }));
                            });
                        }
                    };
                    var this_2 = this;
                    // expose all Slick DataView Events through dispatch
                    for (var prop in dataView) {
                        _loop_2(prop);
                    }
                    // expose GridState Service changes event through dispatch
                    this.gridStateSubscriber = this.ea.subscribe('gridStateService:changed', function (gridStateChange) {
                        _this.elm.dispatchEvent(new CustomEvent(aureliaEventPrefix + "-on-grid-state-service-changed", {
                            bubbles: true,
                            detail: gridStateChange
                        }));
                    });
                    // on cell click, mainly used with the columnDef.action callback
                    this.gridEventService.attachOnCellChange(grid, this.gridOptions, dataView);
                    this.gridEventService.attachOnClick(grid, this.gridOptions, dataView);
                    this._eventHandler.subscribe(dataView.onRowCountChanged, function (e, args) {
                        grid.updateRowCount();
                        grid.render();
                    });
                    this._eventHandler.subscribe(dataView.onRowsChanged, function (e, args) {
                        grid.invalidateRows(args.rows);
                        grid.render();
                    });
                };
                AureliaSlickgridCustomElement.prototype.attachBackendCallbackFunctions = function (gridOptions) {
                    var _this = this;
                    var backendApi = gridOptions.backendServiceApi || gridOptions.onBackendEventApi;
                    var serviceOptions = (backendApi && backendApi.service && backendApi.service.options) ? backendApi.service.options : {};
                    var isExecuteCommandOnInit = (!serviceOptions) ? false : ((serviceOptions && serviceOptions.hasOwnProperty('executeProcessCommandOnInit')) ? serviceOptions['executeProcessCommandOnInit'] : true);
                    // update backend filters (if need be) before the query runs
                    if (backendApi) {
                        var backendService = backendApi.service;
                        if (gridOptions && gridOptions.presets) {
                            if (backendService && backendService.updateFilters && gridOptions.presets.filters) {
                                backendService.updateFilters(gridOptions.presets.filters, true);
                            }
                            if (backendService && backendService.updateSorters && gridOptions.presets.sorters) {
                                backendService.updateSorters(undefined, gridOptions.presets.sorters);
                            }
                            if (backendService && backendService.updatePagination && gridOptions.presets.pagination) {
                                backendService.updatePagination(gridOptions.presets.pagination.pageNumber, gridOptions.presets.pagination.pageSize);
                            }
                        }
                        else {
                            var columnFilters = this.filterService.getColumnFilters();
                            if (columnFilters && backendService && backendService.updateFilters) {
                                backendService.updateFilters(columnFilters, false);
                            }
                        }
                    }
                    if (backendApi && backendApi.service && (backendApi.onInit || isExecuteCommandOnInit)) {
                        var query = (typeof backendApi.service.buildQuery === 'function') ? backendApi.service.buildQuery() : '';
                        var onInitPromise_1 = (isExecuteCommandOnInit) ? (backendApi && backendApi.process) ? backendApi.process(query) : undefined : (backendApi && backendApi.onInit) ? backendApi.onInit(query) : null;
                        // wrap this inside a setTimeout to avoid timing issue since the gridOptions needs to be ready before running this onInit
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            var processResult;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (backendApi.preProcess) {
                                            backendApi.preProcess();
                                        }
                                        return [4 /*yield*/, onInitPromise_1];
                                    case 1:
                                        processResult = _a.sent();
                                        // define what our internal Post Process callback, only available for GraphQL Service for now
                                        // it will basically refresh the Dataset & Pagination without having the user to create his own PostProcess every time
                                        if (processResult && backendApi && backendApi.service instanceof index_2.GraphqlService && backendApi.internalPostProcess) {
                                            backendApi.internalPostProcess(processResult);
                                        }
                                        // send the response process to the postProcess callback
                                        if (backendApi.postProcess) {
                                            backendApi.postProcess(processResult);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                };
                AureliaSlickgridCustomElement.prototype.attachResizeHook = function (grid, options) {
                    // expand/autofit columns on first page load
                    if (grid && options.autoFitColumnsOnFirstLoad && typeof grid.autosizeColumns === 'function') {
                        this.grid.autosizeColumns();
                    }
                    // auto-resize grid on browser resize
                    this.resizer.init(grid, options);
                    if (grid && options.enableAutoResize) {
                        this.resizer.attachAutoResizeDataGrid();
                        if (options.autoFitColumnsOnFirstLoad && typeof grid.autosizeColumns === 'function') {
                            grid.autosizeColumns();
                        }
                    }
                };
                AureliaSlickgridCustomElement.prototype.mergeGridOptions = function (gridOptions) {
                    gridOptions.gridId = this.gridId;
                    gridOptions.gridContainerId = "slickGridContainer-" + this.gridId;
                    if (gridOptions.enableFiltering) {
                        gridOptions.showHeaderRow = true;
                    }
                    // use jquery extend to deep merge and avoid immutable properties changed in GlobalGridOptions after route change
                    return $.extend(true, {}, global_grid_options_1.GlobalGridOptions, gridOptions);
                };
                AureliaSlickgridCustomElement.prototype.paginationChanged = function (pagination) {
                    this.ea.publish('gridStateService:changed', {
                        change: { newValues: pagination, type: index_1.GridStateType.pagination },
                        gridState: this.gridStateService.getCurrentGridState()
                    });
                };
                /**
                 * When dataset changes, we need to refresh the entire grid UI & possibly resize it as well
                 * @param dataset
                 */
                AureliaSlickgridCustomElement.prototype.refreshGridData = function (dataset, totalCount) {
                    if (dataset && this.grid && this.dataview && typeof this.dataview.setItems === 'function') {
                        this.dataview.setItems(dataset, this.gridOptions.datasetIdPropertyName);
                        // this.grid.setData(dataset);
                        this.grid.invalidate();
                        this.grid.render();
                        if (this.gridOptions.enablePagination || this.gridOptions.backendServiceApi) {
                            // do we want to show pagination?
                            // if we have a backendServiceApi and the enablePagination is undefined, we'll assume that we do want to see it, else get that defined value
                            this.showPagination = ((this.gridOptions.backendServiceApi && this.gridOptions.enablePagination === undefined) ? true : this.gridOptions.enablePagination) || false;
                            // before merging the grid options, make sure that it has the totalItems count
                            // once we have that, we can merge and pass all these options to the pagination component
                            if (!this.gridOptions.pagination) {
                                this.gridOptions.pagination = (this.gridOptions.pagination) ? this.gridOptions.pagination : undefined;
                            }
                            if (this.gridOptions.pagination && totalCount) {
                                this.gridOptions.pagination.totalItems = totalCount;
                            }
                            if (this.gridOptions.presets && this.gridOptions.presets.pagination && this.gridOptions.pagination) {
                                this.gridOptions.pagination.pageSize = this.gridOptions.presets.pagination.pageSize;
                                this.gridOptions.pagination.pageNumber = this.gridOptions.presets.pagination.pageNumber;
                            }
                            this.gridPaginationOptions = this.mergeGridOptions(this.gridOptions);
                        }
                        if (this.grid && this.gridOptions.enableAutoResize) {
                            // resize the grid inside a slight timeout, in case other DOM element changed prior to the resize (like a filter/pagination changed)
                            this.resizer.resizeGrid(1);
                        }
                    }
                };
                /**
                 * Toggle the filter row displayed on first row
                 * @param isShowing
                 */
                AureliaSlickgridCustomElement.prototype.showHeaderRow = function (isShowing) {
                    this.grid.setHeaderRowVisibility(isShowing);
                    return isShowing;
                };
                /** Toggle the filter row displayed on first row */
                AureliaSlickgridCustomElement.prototype.toggleHeaderRow = function () {
                    var isShowing = !this.grid.getOptions().showHeaderRow;
                    this.grid.setHeaderRowVisibility(isShowing);
                    return isShowing;
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
                ], AureliaSlickgridCustomElement.prototype, "element", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
                ], AureliaSlickgridCustomElement.prototype, "dataset", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
                ], AureliaSlickgridCustomElement.prototype, "gridPaginationOptions", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
                ], AureliaSlickgridCustomElement.prototype, "dataview", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
                ], AureliaSlickgridCustomElement.prototype, "grid", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], AureliaSlickgridCustomElement.prototype, "gridId", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], AureliaSlickgridCustomElement.prototype, "columnDefinitions", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], AureliaSlickgridCustomElement.prototype, "gridOptions", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], AureliaSlickgridCustomElement.prototype, "gridHeight", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], AureliaSlickgridCustomElement.prototype, "gridWidth", void 0);
                __decorate([
                    aurelia_framework_1.bindable()
                ], AureliaSlickgridCustomElement.prototype, "pickerOptions", void 0);
                AureliaSlickgridCustomElement = __decorate([
                    aurelia_framework_1.inject(index_2.ControlAndPluginService, index_2.ExportService, Element, aurelia_event_aggregator_1.EventAggregator, index_2.FilterService, index_2.GraphqlService, index_2.GridEventService, index_2.GridExtraService, index_2.GridStateService, aurelia_i18n_1.I18N, index_2.ResizerService, index_2.SortService, aurelia_framework_1.Container)
                ], AureliaSlickgridCustomElement);
                return AureliaSlickgridCustomElement;
            }());
            exports_1("AureliaSlickgridCustomElement", AureliaSlickgridCustomElement);
        }
    };
});
//# sourceMappingURL=aurelia-slickgrid.js.map