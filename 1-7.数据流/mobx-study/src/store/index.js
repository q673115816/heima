import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

export default class Store {
    @observable count = 0
    @action.bound 
    increment() {
        this.count++
    }
}