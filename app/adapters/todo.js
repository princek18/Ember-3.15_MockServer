import RESTAdapter from '@ember-data/adapter/rest';

export default class TodoAdapter extends RESTAdapter {
  host = "api";

  pathForType(){
    return "todos.json";
  }
}
