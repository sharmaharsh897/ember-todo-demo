import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { set } from '@ember/object';

export default class TodoComponent extends Component {
  @tracked
  text = '';

  @tracked
  isEditable = false;

  @action
  submit(model, event) {
    event.preventDefault();
    const i = model[model.length - 1].id + 1;
    const newTodo = this.text;
    if (newTodo !== '' && newTodo !== null && this.text !== '') {
      console.log(i, 'added', newTodo, model, newTodo !== '');
      model.pushObject({ id: i, todo: newTodo });
      this.text = '';
    } else {
      alert('Please enter some text!!');
    }
  }

  @action
  onChange(e) {
    this.text = e.target.value;
  }

  @action
  delete(model, item) {
    model.removeObject(item);
    console.log('removed', item, 'modified', model);
  }

  @action
  edit(model, item, event) {
    event.preventDefault();
    console.log(document.querySelectorAll('.todos')[0]);
    let inputDisplay =
      document.querySelectorAll('.todos')[0].children[item.id - 1]
        .children[1][0].style;
    let editIcon =
      document.querySelectorAll('.todos')[0].children[item.id - 1]
        .children[1][1];
    // console.log("hhh",document.querySelectorAll(".todos"));

    if (this.isEditable === false) {
      this.isEditable = true;
      inputDisplay.display = 'inline';
      editIcon.className = 'fa fa-check';
      console.log(item.id); //[0].children[item.id].children[1][0].style.display
    } else {
      if (this.text != null && this.text != '') {
        set(item, 'todo', this.text);
        inputDisplay.display = 'none';
        editIcon.className = 'fa fa-pencil';
      } else alert('Text field is blank!!');
      editIcon.className = 'fa fa-pencil';
      inputDisplay.display = 'none';
      this.isEditable = false;
    }
    this.text = '';
    // this.isEditable=true;
    // model.insertAt(2,{id:2222,todo:"gggg"})
    console.log('edit works', model);
  }
}
