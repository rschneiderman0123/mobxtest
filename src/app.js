import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import {observable, computed} from 'mobx'

class Question {
  choices = [{label : "nbc", value : 1},{label : "cbs", value : 2}]
  name = "channel"
  title = "Richard"

}

class QuestionView extends Component {

  
   render() {
        const cbs = this.props.question.choices.map((c) =>
          <div>
            <input type="radio" name="options" value={c.value}/>{c.label}
          </div>
        );
       return(
          <div>
          {cbs}
          </div>
       )

  }
} ;

var question = new Question() 

ReactDOM.render(<QuestionView question={question}/>, document.getElementById('app'));
