import Component from '@glimmer/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';

export default class TodoComponentComponent extends Component {
  @service store;

  @action deleteAction(){
    let todo = this.store.createRecord('todo', {
      id: 82,
      userId: 3,
      title: "werttrewef",
      body: "wefgfddf"
    })
    todo.save();
    console.log("saved");
  }
}
