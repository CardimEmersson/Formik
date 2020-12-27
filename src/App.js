import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import schema from './schema.js'
import './App.css';

function App() {

  // function validate(values) {
  //   const errors = {}
  //   if(!values.name) {
  //     errors.name = 'Nome é obrigatorio';
  //   }
  //   if(!values.email) {
  //     errors.email = 'Email é obrigatorio';
  //   }

  //   return errors;
  // }

  return (
    <div className="App">
      <Formik 
        // validate={validate}
        validationSchema={schema}
        initialValues={{
          name: '',
          email: '',
        }}
        onSubmit={(values, actions) => {
          console.log('SUBMIT', values)
        }}
      >
        {({ values, errors, touched, isValid }) => (
          <Form>
            <div>
              <label htmlFor="name">Nome</label>
              {/* <input type="text" name="name" value={values.name} onChange={handleChange}/> */}
              <Field type="text" name="name" />
              <ErrorMessage name="name"/>
              {/* {errors.name && touched.name && (
                <span>{errors.name}</span>
              )} */}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              {/* <input type="email" name="email" value={values.email} onChange={handleChange}/> */}
              <Field type="email" name="email" />
              <ErrorMessage name="email"/>
              {/* {errors.email && touched.email &&  (
                <span>{errors.email}</span>
              )} */}
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
