import React, { Component } from 'react'
//
import {
  Form,
  FormError,
  Text,
  Select,
  Textarea,
  Checkbox,
  RadioGroup,
  Radio,
  NestedForm
} from 'react-form'

// import CodeHighlight from './components/CodeHighlight'

class Story extends Component {
  render() {
    

    return (
      <div>
        <Form
          // Let's give the form some default values
          defaultValues={{}}
          // Validating your form is super easy, just use the `validate` life-cycle method
          validate={values => {
            const {
              name
            } = values
            return {
              name: !name ? 'A name is required' : undefined,
              
            }
          }}
          // `onValidationFail` is another handy form life-cycle method
          
        >
          {({ submitForm }) => {
            // This is a stateless component, but you can use any valid react component to render your form.
            // Forms also supply plenty of useful props for your components to utilize. See the docs for a complete list.
            return (
              <form onSubmit={submitForm}>
                
                <div>
                  <h6>Full Name</h6>
                  <Text 
                    field="name" 
                    placeholder="Your name" 
                  />
                </div>
                <button>Submit</button>
                
              </form>
            )
          }}
        </Form>
      </div>
    )
  }
}

// Source Code
export default Story
// export default () =>
//   <div>
//     <Story />
//   </div>