import React, { Component } from 'react'
import { Form, Text, Textarea } from 'react-form'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit({ username, content }) {
    event.preventDefault()
    const { articleId } = this.props

    this.props.mutate({
      variables: {
        username,
        content,
        articleId
      }
    })
  }

  render () {
    return (
      <Form
        onSubmit={(values, state, props, { resetForm }) => {
          this.handleSubmit(values)
          resetForm();
        }}

        defaultValues={{}}

        validate={values => {
          const {
            username,   
            content
          } = values
          return {
            username: !username ? 'Username is required' : false,
            content: !content ? 'Comment is required' : false,
          }
        }}
      >
        {({ submitForm }) => {

          return (
            // When the form is submitted, call the `submitForm` callback prop
            <form onSubmit={submitForm}>
              <div>
                <Text 
                  field='username' 
                  placeholder='Username' 
                />
              </div>
              <div>
                <Textarea 
                  field='content' 
                  placeholder='Leave a comment...' 
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          )
        }}
      </Form>
    )
  }
}

export default CommentForm
