import { BindingSignaler } from 'aurelia-templating-resources';
import { EventAggregator } from 'aurelia-event-aggregator';
import { I18N } from 'aurelia-i18n';

import {
  GridOption,
  ExtensionName,
  ExtensionModel,
  Column,
} from '../../models';
import {
  AutoTooltipExtension,
  CellExternalCopyManagerExtension,
  CheckboxSelectorExtension,
  ColumnPickerExtension,
  DraggableGroupingExtension,
  GridMenuExtension,
  GroupItemMetaProviderExtension,
  HeaderButtonExtension,
  HeaderMenuExtension,
  RowDetailViewExtension,
  RowMoveManagerExtension,
  RowSelectionExtension
} from '../../extensions';
import { ExtensionService, SharedService } from '..';

jest.mock('flatpickr', () => { });

const gridStub = {
  autosizeColumns: jest.fn(),
  getColumnIndex: jest.fn(),
  getOptions: jest.fn(),
  getColumns: jest.fn(),
  setColumns: jest.fn(),
  onColumnsReordered: jest.fn(),
  onColumnsResized: jest.fn(),
  registerPlugin: jest.fn(),
};

const extensionStub = {
  create: jest.fn(),
  dispose: jest.fn(),
  register: jest.fn()
};
const extensionGroupItemMetaStub = { ...extensionStub };
const extensionGridMenuStub = {
  ...extensionStub,
  refreshBackendDataset: jest.fn(),
  translateGridMenu: jest.fn()
};
const extensionColumnPickerStub = {
  ...extensionStub,
  translateColumnPicker: jest.fn()
};
const extensionHeaderMenuStub = {
  ...extensionStub,
  translateHeaderMenu: jest.fn()
};

describe('ExtensionService', () => {
  let ea: EventAggregator;
  let i18n: I18N;
  let sharedService: SharedService;
  let service: ExtensionService;

  beforeEach(() => {
    ea = new EventAggregator();
    sharedService = new SharedService();
    i18n = new I18N(ea, new BindingSignaler());
    i18n.setup({
      resources: { en: { translation: { HELLO: 'Hello' } }, fr: { translation: { HELLO: 'Bonjour' } } },
      lng: '0',
      fallbackLng: 'fr',
      debug: false
    });

    service = new ExtensionService(
      // extensions
      extensionStub as unknown as AutoTooltipExtension,
      extensionStub as unknown as CellExternalCopyManagerExtension,
      extensionStub as unknown as CheckboxSelectorExtension,
      extensionColumnPickerStub as unknown as ColumnPickerExtension,
      extensionStub as unknown as DraggableGroupingExtension,
      extensionGridMenuStub as unknown as GridMenuExtension,
      extensionGroupItemMetaStub as unknown as GroupItemMetaProviderExtension,
      i18n,
      extensionStub as unknown as HeaderButtonExtension,
      extensionHeaderMenuStub as unknown as HeaderMenuExtension,
      extensionStub as unknown as RowDetailViewExtension,
      extensionStub as unknown as RowMoveManagerExtension,
      extensionStub as unknown as RowSelectionExtension,
      sharedService,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    service.dispose();
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should return "allColumns" from the SharedService when "getAllColumns" method is called', () => {
    const spy = jest.spyOn(SharedService.prototype, 'allColumns', 'get');
    service.getAllColumns();
    expect(spy).toHaveBeenCalled();
  });

  it('should return "visibleColumns" from the SharedService when "getVisibleColumns" method is called', () => {
    const spy = jest.spyOn(SharedService.prototype, 'visibleColumns', 'get');
    service.getVisibleColumns();
    expect(spy).toHaveBeenCalled();
  });

  it('should return "autosizeColumns" from the SharedService Grid object when "autoResizeColumns" method is called', () => {
    const spy = jest.spyOn(SharedService.prototype, 'grid', 'get').mockReturnValue(gridStub);
    service.autoResizeColumns();
    expect(spy).toHaveBeenCalled();
  });

  it('should return empty array when "getAllExtensions" method is called', () => {
    const spy = jest.spyOn(service, 'getAllExtensions');
    service.getAllExtensions();
    expect(spy).toHaveReturnedWith([]);
  });

  describe('getSlickgridAddonInstance method', () => {
    it('should return null when method is called with an invalid and non instantiated addon', () => {
      const extensionMock = { name: ExtensionName.columnPicker, addon: null, instance: null, class: null } as ExtensionModel;
      const spy = jest.spyOn(service, 'getExtensionByName').mockReturnValue(extensionMock);

      const output = service.getSlickgridAddonInstance(ExtensionName.columnPicker);

      expect(spy).toHaveBeenCalled();
      expect(output).toBeNull();

    });

    it('should return extension addon when method is called with a valid and instantiated addon', () => {
      const instanceMock = { onColumnsChanged: jest.fn() };
      const extensionMock = { name: ExtensionName.columnPicker, addon: instanceMock, instance: instanceMock, class: null } as ExtensionModel;
      const spy = jest.spyOn(service, 'getExtensionByName').mockReturnValue(extensionMock);

      const output = service.getSlickgridAddonInstance(ExtensionName.columnPicker);

      expect(spy).toHaveBeenCalled();
      expect(output).toEqual(instanceMock);
    });
  });

  describe('bindDifferentExtensions method', () => {
    const instanceMock = { onColumnsChanged: jest.fn() };

    it('should call "translateItems" method is "enableTranslate" is set to true in the grid options, then column name property should be translated', () => {
      const gridOptionsMock = { enableTranslate: true } as GridOption;
      const columnBeforeTranslate = { id: 'field1', field: 'field1', name: 'Hello', headerKey: 'HELLO' };
      const columnAfterTranslate = { id: 'field1', field: 'field1', name: 'Bonjour', headerKey: 'HELLO' };
      const columnsMock = [columnBeforeTranslate] as Column[];
      const columnSpy = jest.spyOn(SharedService.prototype, 'allColumns', 'get').mockReturnValue(columnsMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();

      expect(columnSpy).toHaveBeenCalled();
      expect(gridSpy).toHaveBeenCalled();
      expect(columnsMock).toEqual([columnAfterTranslate]);
    });

    it('should register the AutoTooltip addon when "enableAutoTooltip" is set in the grid options', () => {
      const gridOptionsMock = { enableAutoTooltip: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.autoTooltip);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.autoTooltip, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
    });

    it('should register the ColumnPicker addon when "enableColumnPicker" is set in the grid options', () => {
      const gridOptionsMock = { enableColumnPicker: true } as GridOption;
      const extSpy = jest.spyOn(extensionColumnPickerStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.columnPicker);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.columnPicker, addon: instanceMock, instance: instanceMock, class: extensionColumnPickerStub } as ExtensionModel);
    });

    it('should register the DraggableGrouping addon when "enableDraggableGrouping" is set in the grid options', () => {
      const gridOptionsMock = { enableDraggableGrouping: true } as GridOption;
      const ext1Spy = jest.spyOn(extensionStub, 'register').mockReturnValue({ ...instanceMock });
      const ext2Spy = jest.spyOn(extensionGroupItemMetaStub, 'register').mockReturnValue({ ...instanceMock });
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output1 = service.getExtensionByName(ExtensionName.draggableGrouping);
      const output2 = service.getExtensionByName(ExtensionName.groupItemMetaProvider);

      expect(gridSpy).toHaveBeenCalled();
      expect(ext1Spy).toHaveBeenCalled();
      expect(ext2Spy).toHaveBeenCalled();
      expect(output1).toEqual({ name: ExtensionName.draggableGrouping, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
      expect(output2).toEqual({ name: ExtensionName.groupItemMetaProvider, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
    });

    it('should register the GridMenu addon when "enableGridMenu" is set in the grid options', () => {
      const gridOptionsMock = { enableGridMenu: true } as GridOption;
      const extSpy = jest.spyOn(extensionGridMenuStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.gridMenu);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.gridMenu, addon: instanceMock, instance: instanceMock, class: extensionGridMenuStub } as ExtensionModel);
    });

    it('should register the GroupItemMetaProvider addon when "enableGrouping" is set in the grid options', () => {
      const gridOptionsMock = { enableGrouping: true } as GridOption;
      const extSpy = jest.spyOn(extensionGroupItemMetaStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.groupItemMetaProvider);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.groupItemMetaProvider, addon: instanceMock, instance: instanceMock, class: extensionGroupItemMetaStub } as ExtensionModel);
    });

    it('should register the CheckboxSelector addon when "enableCheckboxSelector" is set in the grid options', () => {
      const gridOptionsMock = { enableCheckboxSelector: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.checkboxSelector);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.checkboxSelector, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
    });

    it('should register the RowDetailView addon when "enableRowDetailView" is set in the grid options', () => {
      const gridOptionsMock = { enableRowDetailView: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.rowDetailView);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.rowDetailView, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
    });

    it('should register the RowMoveManager addon when "enableRowMoveManager" is set in the grid options', () => {
      const gridOptionsMock = { enableRowMoveManager: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.rowMoveManager);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.rowMoveManager, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
    });

    it('should register the RowSelection addon when "enableCheckboxSelector" (false) and "enableRowSelection" (true) are set in the grid options', () => {
      const gridOptionsMock = { enableCheckboxSelector: false, enableRowSelection: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.rowSelection);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.rowSelection, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
    });

    it('should register the HeaderButton addon when "enableHeaderButton" is set in the grid options', () => {
      const gridOptionsMock = { enableHeaderButton: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.headerButton);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.headerButton, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
    });

    it('should register the HeaderMenu addon when "enableHeaderMenu" is set in the grid options', () => {
      const gridOptionsMock = { enableHeaderMenu: true } as GridOption;
      const extSpy = jest.spyOn(extensionHeaderMenuStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.headerMenu);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.headerMenu, addon: instanceMock, instance: instanceMock, class: extensionHeaderMenuStub } as ExtensionModel);
    });

    it('should register the ExcelCopyBuffer addon when "enableExcelCopyBuffer" is set in the grid options', () => {
      const gridOptionsMock = { enableExcelCopyBuffer: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'register').mockReturnValue(instanceMock);
      const gridSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.cellExternalCopyManager);

      expect(gridSpy).toHaveBeenCalled();
      expect(extSpy).toHaveBeenCalled();
      expect(output).toEqual({ name: ExtensionName.cellExternalCopyManager, addon: instanceMock, instance: instanceMock, class: extensionStub } as ExtensionModel);
    });

    it('should be able to Register external plugins from an array', () => {
      const pluginMock = { name: 'extraPlugin', doSomething: () => { } };
      const gridOptionsMock = { registerPlugins: [pluginMock] } as GridOption;
      const gridSpy = jest.spyOn(SharedService.prototype, 'grid', 'get').mockReturnValue(gridStub);
      const optionSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);
      const pluginSpy = jest.spyOn(SharedService.prototype.grid, 'registerPlugin').mockReturnValue(instanceMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.noname);

      expect(gridSpy).toHaveBeenCalled();
      expect(optionSpy).toHaveBeenCalled();
      expect(pluginSpy).toHaveBeenCalledTimes(1);
      expect(pluginSpy).toHaveBeenCalledWith(pluginMock);
      expect(output).toEqual({ name: ExtensionName.noname, class: null, addon: instanceMock, instance: instanceMock } as ExtensionModel);
    });

    it('should be able to Register one external plugins from an object', () => {
      const pluginMock = { name: 'extraPlugin', doSomething: () => { } };
      const gridOptionsMock = { registerPlugins: pluginMock } as GridOption;
      const gridSpy = jest.spyOn(SharedService.prototype, 'grid', 'get').mockReturnValue(gridStub);
      const optionSpy = jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);
      const pluginSpy = jest.spyOn(SharedService.prototype.grid, 'registerPlugin').mockReturnValue(instanceMock);

      service.bindDifferentExtensions();
      const output = service.getExtensionByName(ExtensionName.noname);

      expect(gridSpy).toHaveBeenCalled();
      expect(optionSpy).toHaveBeenCalled();
      expect(pluginSpy).toHaveBeenCalledWith(pluginMock);
      expect(output).toEqual({ name: ExtensionName.noname, class: null, addon: instanceMock, instance: instanceMock } as ExtensionModel);
    });
  });

  describe('createExtensionsBeforeGridCreation method', () => {
    it('should call checkboxSelectorExtension create when "enableCheckboxSelector" is set in the grid options provided', () => {
      const instanceMock = { onColumnsChanged: () => { } };
      const columnsMock = [{ id: 'field1', field: 'field1', width: 100, cssClass: 'red' }] as Column[];
      const gridOptionsMock = { enableCheckboxSelector: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'create').mockReturnValue(instanceMock);

      service.bindDifferentExtensions();
      service.createExtensionsBeforeGridCreation(columnsMock, gridOptionsMock);

      expect(extSpy).toHaveBeenCalledWith(columnsMock, gridOptionsMock);
    });

    it('should call rowDetailViewExtension create when "enableRowDetailView" is set in the grid options provided', () => {
      const instanceMock = { onColumnsChanged: () => { } };
      const columnsMock = [{ id: 'field1', field: 'field1', width: 100, cssClass: 'red' }] as Column[];
      const gridOptionsMock = { enableRowDetailView: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'create').mockReturnValue(instanceMock);

      service.bindDifferentExtensions();
      service.createExtensionsBeforeGridCreation(columnsMock, gridOptionsMock);

      expect(extSpy).toHaveBeenCalledWith(columnsMock, gridOptionsMock);
    });

    it('should call draggableGroupingExtension create when "enableDraggableGrouping" is set in the grid options provided', () => {
      const instanceMock = { onColumnsChanged: () => { } };
      const columnsMock = [{ id: 'field1', field: 'field1', width: 100, cssClass: 'red' }] as Column[];
      const gridOptionsMock = { enableDraggableGrouping: true } as GridOption;
      const extSpy = jest.spyOn(extensionStub, 'create').mockReturnValue(instanceMock);

      service.bindDifferentExtensions();
      service.createExtensionsBeforeGridCreation(columnsMock, gridOptionsMock);

      expect(extSpy).toHaveBeenCalledWith(gridOptionsMock);
    });
  });

  it('should call hideColumn and expect "visibleColumns" to be updated accordingly', () => {
    const columnsMock = [{ id: 'field1', width: 100 }, { id: 'field2', width: 150 }, { id: 'field3', field: 'field3' }] as Column[];
    const updatedColumnsMock = [{ id: 'field1', width: 100 }, { id: 'field3', field: 'field3' }] as Column[];
    jest.spyOn(SharedService.prototype, 'grid', 'get').mockReturnValue(gridStub);
    jest.spyOn(gridStub, 'getColumnIndex').mockReturnValue(1);
    jest.spyOn(gridStub, 'getColumns').mockReturnValue(columnsMock);
    const setColumnsSpy = jest.spyOn(gridStub, 'setColumns');
    const visibleSpy = jest.spyOn(SharedService.prototype, 'visibleColumns', 'set');

    service.hideColumn(columnsMock[1]);

    expect(visibleSpy).toHaveBeenCalledWith(updatedColumnsMock);
    expect(setColumnsSpy).toHaveBeenCalledWith(updatedColumnsMock);
  });

  it('should call the refreshBackendDataset method on the GridMenu Extension when service with same method name is called', () => {
    const gridOptionsMock = { enableGridMenu: true } as GridOption;
    const extSpy = jest.spyOn(extensionGridMenuStub, 'refreshBackendDataset');
    jest.spyOn(SharedService.prototype, 'gridOptions', 'get').mockReturnValue(gridOptionsMock);

    service.refreshBackendDataset();
    service.refreshBackendDataset(gridOptionsMock);

    expect(extSpy).toHaveBeenNthCalledWith(1, undefined);
    expect(extSpy).toHaveBeenNthCalledWith(2, gridOptionsMock);
  });

  it('should call removeColumnByIndex and return original input when it is not an array provided', () => {
    const input = { foo: 'bar' };
    // @ts-ignore:2345
    const output = service.removeColumnByIndex(input, 1);
    expect(output).toEqual(input);
  });

  it('should call removeColumnByIndex and return input array without the item at index position', () => {
    const columnsMock = [{ id: 'field1', width: 100 }, { id: 'field2', width: 150 }, { id: 'field3', field: 'field3' }] as Column[];
    const updatedColumnsMock = [{ id: 'field1', width: 100 }, { id: 'field3', field: 'field3' }] as Column[];
    const output = service.removeColumnByIndex(columnsMock, 1);
    expect(output).toEqual(updatedColumnsMock);
  });

  it('should call the translateColumnPicker method on the ColumnPicker Extension when service with same method name is called', () => {
    const extSpy = jest.spyOn(extensionColumnPickerStub, 'translateColumnPicker');
    service.translateColumnPicker();
    expect(extSpy).toHaveBeenCalled();
  });

  it('should call the translateGridMenu method on the GridMenu Extension when service with same method name is called', () => {
    const extSpy = jest.spyOn(extensionGridMenuStub, 'translateGridMenu');
    service.translateGridMenu();
    expect(extSpy).toHaveBeenCalled();
  });

  it('should call the translateHeaderMenu method on the HeaderMenu Extension when service with same method name is called', () => {
    const extSpy = jest.spyOn(extensionHeaderMenuStub, 'translateHeaderMenu');
    service.translateHeaderMenu();
    expect(extSpy).toHaveBeenCalled();
  });

  describe('translateColumnHeaders method', () => {
    it('should translate items with default locale when no arguments is passed to the method', () => {
      const columnsBeforeTranslateMock = [{ id: 'field1', field: 'field1', name: 'Hello', headerKey: 'HELLO' }] as Column[];
      const columnsAfterTranslateMock = [{ id: 'field1', field: 'field1', name: 'Bonjour', headerKey: 'HELLO' }] as Column[];
      jest.spyOn(SharedService.prototype, 'columnDefinitions', 'get').mockReturnValue(columnsBeforeTranslateMock);
      const columnSpy = jest.spyOn(SharedService.prototype, 'allColumns', 'get').mockReturnValue(columnsBeforeTranslateMock);
      const renderSpy = jest.spyOn(service, 'renderColumnHeaders');

      service.translateColumnHeaders();

      expect(columnSpy).toHaveBeenCalled();
      expect(renderSpy).toHaveBeenCalledWith(columnsAfterTranslateMock);
      expect(columnsBeforeTranslateMock).toEqual(columnsAfterTranslateMock);
    });

    it('should translate items with locale provided as argument to the method', () => {
      const columnsBeforeTranslateMock = [{ id: 'field1', field: 'field1', headerKey: 'HELLO' }] as Column[];
      const columnsAfterTranslateMock = [{ id: 'field1', field: 'field1', name: 'Hello', headerKey: 'HELLO' }] as Column[];
      jest.spyOn(SharedService.prototype, 'columnDefinitions', 'get').mockReturnValue(columnsBeforeTranslateMock);
      const columnSpy = jest.spyOn(SharedService.prototype, 'allColumns', 'get').mockReturnValue(columnsBeforeTranslateMock);
      const renderSpy = jest.spyOn(service, 'renderColumnHeaders');

      service.translateColumnHeaders('en');

      expect(columnSpy).toHaveBeenCalled();
      expect(renderSpy).toHaveBeenCalledWith(columnsAfterTranslateMock);
      expect(columnsBeforeTranslateMock).toEqual(columnsAfterTranslateMock);
    });

    it('should translate items with locale & column definitions provided as arguments to the method', () => {
      const columnsBeforeTranslateMock = [{ id: 'field1', field: 'field1', headerKey: 'HELLO' }] as Column[];
      const columnsAfterTranslateMock = [{ id: 'field1', field: 'field1', name: 'Hello', headerKey: 'HELLO' }] as Column[];
      const colDefSpy = jest.spyOn(SharedService.prototype, 'columnDefinitions', 'get');
      const columnSpy = jest.spyOn(SharedService.prototype, 'allColumns', 'get').mockReturnValue(columnsBeforeTranslateMock);
      const renderSpy = jest.spyOn(service, 'renderColumnHeaders');

      service.translateColumnHeaders('en', columnsBeforeTranslateMock);

      expect(columnSpy).toHaveBeenCalled();
      expect(colDefSpy).not.toHaveBeenCalled();
      expect(renderSpy).toHaveBeenCalledWith(columnsAfterTranslateMock);
      expect(columnsBeforeTranslateMock).toEqual(columnsAfterTranslateMock);
    });
  });

  describe('renderColumnHeaders method', () => {
    it('should call "setColumns" on the Shared Service with the Shared "columnDefinitions" when no arguments is provided', () => {
      const columnsMock = [{ id: 'field1', field: 'field1', headerKey: 'HELLO' }] as Column[];
      jest.spyOn(SharedService.prototype, 'grid', 'get').mockReturnValue(gridStub);
      const colSpy = jest.spyOn(SharedService.prototype, 'columnDefinitions', 'get').mockReturnValue(columnsMock);
      const setColumnsSpy = jest.spyOn(gridStub, 'setColumns');

      service.renderColumnHeaders();

      expect(colSpy).toHaveBeenCalled();
      expect(setColumnsSpy).toHaveBeenCalledWith(columnsMock);
    });

    it('should call "setColumns" on the Shared Service with the collection provided as argument', () => {
      const columnsMock = [{ id: 'field1', field: 'field1', headerKey: 'HELLO' }] as Column[];
      jest.spyOn(SharedService.prototype, 'grid', 'get').mockReturnValue(gridStub);
      const setColumnsSpy = jest.spyOn(gridStub, 'setColumns');

      service.renderColumnHeaders(columnsMock);

      expect(setColumnsSpy).toHaveBeenCalledWith(columnsMock);
    });
  });
});