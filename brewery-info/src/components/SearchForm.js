import React from 'react'
import { Form, Field, withFormik } from 'formik'
import { connect } from 'react-redux'

import { getSearchResults } from '../actions'

const JSXForm = () => {
    return (
        <Form style={{alignSelf:'center', margin:'2rem 0px'}}>
            <label>
                State:
                <Field type='text' name='usState' placeholder='New York' />
            </label>

            <button type='submit'>Search</button>
        </Form>
    )
}

const SearchForm = withFormik({
    mapPropsToValues({ usState }) {
        return {
            usState: usState || '',
        }
    },

    handleSubmit(values, { props, resetForm, setSubmitting }) {
        props.getSearchResults(values.usState)
        resetForm()
        setSubmitting(false)
    }
})(JSXForm)

export default connect(null, { getSearchResults })(SearchForm)