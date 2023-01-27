import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
  model() {
    return [
      { id: 1, todo: 'Practice ReactJs' },
      { id: 2, todo: 'Learn Redux' },
      { id: 3, todo: 'Code portfolio in react' },
      { id: 4, todo: 'Learn React Native' },
    ];
  }
}
