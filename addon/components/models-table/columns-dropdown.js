import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../../templates/components/models-table/columns-dropdown';

/**
 * Dropdown with list of table's columns used within [models-table](Components.ModelsTable.html).
 *
 * It allows to toggle visibility for column sets or single column.
 *
 * Columns that should not be hidden must have property [mayBeHidden](Utils.ModelsTableColumn.html#property_mayBeHidden) set to `false`.
 *
 * Usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.ColumnsDropdown />
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * Block usage example:
 *
 * ```hbs
 * <ModelsTable @data={{data}} @columns={{columns}} as |MT|>
 *   <MT.ColumnsDropdown as |CD|>
 *     {{#if MT.columnDropdownOptions.showAll}}
 *       <button {{action MT.showAllColumns}}>Show all</button>
 *     {{/if}}
 *     {{#if MT.columnDropdownOptions.hideAll}}
 *       <button {{action MT.hideAllColumns}}>Hide all</button>
 *     {{/if}}
 *     {{#if MT.columnDropdownOptions.restoreDefaults}}
 *       <button {{action MT.restoreDefaultVisibility}}>Restore default visibility</button>
 *     {{/if}}
 *     {{#each MT.columnDropdownOptions.columnSets as |columnSet|}}
 *       <button {{action MT.toggleColumnSetVisibility columnSet}}>{{columnSet.label}}</button>
 *     {{/each}}
 *     {{#each MT.processedColumns as |column|}}
 *       {{#if column.mayBeHidden}}
 *         <button {{action MT.toggleHidden column}}>
 *           <i class={{if column.toggleColumnVisibility MT.themeInstance.columnVisibleIcon MT.themeInstance.columnHiddenIcon}}></i>
 *           {{column.title}}
 *         </button>
 *       {{/if}}
 *     {{/each}}
 *   </MT.ColumnsDropdown>
 *   {{! .... }}
 * </ModelsTable>
 * ```
 *
 * @namespace Components
 * @class ModelsTableColumnsDropdown
 * @extends Ember.Component
 */
export default
@templateLayout(layout)
class ColumnsDropdownComponent extends Component {

  /**
   * Bound from [ModelsTable.processedColumns](Components.ModelsTable.html#property_processedColumns)
   *
   * @property processedColumns
   * @type Utils.ModelsTableColumn[]
   * @default null
   */
  processedColumns = null;

  /**
   * Bound from [ModelsTable.columnDropdownOptions](Components.ModelsTable.html#property_columnDropdownOptions)
   *
   * @property columnDropdownOptions
   * @type ColumnDropdownOptions
   * @default null
   */
  columnDropdownOptions = null;

  /**
   * Bound from [ModelsTable.themeInstance](Components.ModelsTable.html#property_themeInstance)
   *
   * @property themeInstance
   * @type object
   * @default null
   */
  themeInstance = null;

  /**
   * Closure action [ModelsTable.showAllColumns](Components.ModelsTable.html#event_showAllColumns)
   *
   * @event showAllColumns
   */
  showAllColumns = null;

  /**
   * Closure action [ModelsTable.hideAllColumns](Components.ModelsTable.html#event_hideAllColumns)
   *
   * @event hideAllColumns
   */
  hideAllColumns = null;

  /**
   * Closure action [ModelsTable.restoreDefaultVisibility](Components.ModelsTable.html#event_restoreDefaultVisibility)
   *
   * @event restoreDefaultVisibility
   */
  restoreDefaultVisibility = null;

  /**
   * Closure action [ModelsTable.toggleColumnSet](Components.ModelsTable.html#event_toggleColumnSet)
   *
   * @event toggleColumnSet
   */
  toggleColumnSet = null;

  /**
   * Closure action [ModelsTable.toggleHidden](Components.ModelsTable.html#event_toggleHidden)
   *
   * @event toggleHidden
   */
  toggleHidden = null;

  /**
   * @event doShowAllColumns
   * @protected
   */
  @action
  doShowAllColumns() {
    this.showAllColumns();
  }

  /**
   * @event doHideAllColumns
   * @protected
   */
  @action
  doHideAllColumns() {
    this.hideAllColumns();
  }

  /**
   * @event doRestoreDefaultVisibility
   * @protected
   */
  @action
  doRestoreDefaultVisibility() {
    this.restoreDefaultVisibility();
  }

  /**
   * @event doToggleColumnSet
   * @param {ColumnSet} columnSet
   * @protected
   */
  @action
  doToggleColumnSet(columnSet) {
    this.toggleColumnSet(columnSet);
  }

  /**
   * @event doToggleHidden
   * @param {Utils.ModelsTableColumn} column
   * @protected
   */
  @action
  doToggleHidden(column) {
    this.toggleHidden(column);
  }

}
