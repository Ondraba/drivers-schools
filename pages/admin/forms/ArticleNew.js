import React, { Component } from 'react'
import Formsy from 'formsy-react'
import MyOwnInput from '../forms/inputs/Input'

// const ArticleNewForm = React.createClass({
class ArticleNewForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        canSubmit: false
      }
      this.enableButton = this.enableButton.bind(this)
      this.disableButton = this.disableButton.bind(this)
      this.submit = this.submit.bind(this)
    }

    enableButton() {
      this.setState({
        canSubmit: true
      });
    }

    disableButton() {
      this.setState({
        canSubmit: false
      });
    }

    submit(model) {
      someDep.saveEmail(model.email);
    }

    render() {
      return (
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <MyOwnInput name="email" validations="isEmail" validationError="This is not a valid email" required/>
          <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
        </Formsy.Form>
      );
    }
  }

export default ArticleNewForm
