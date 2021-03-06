import Helper from '@ember/component/helper';
import {isArray} from '@ember/array';
import {computed, set} from '@ember/object';
import {observes} from '@ember-decorators/object';

export default class ExistsInEmberObject extends Helper {

  @computed('needle', 'haystack.[]')
  get content() {
    const {needle, haystack} = this;
    return isArray(haystack) ? haystack.includes(needle) : false;
  }

  compute([haystack, needle]) {
    set(this, 'needle', needle);
    set(this, 'haystack', haystack);
    return this.content;
  }

  @observes('content')
  contentDidChange() {
    this.recompute();
  }
}
