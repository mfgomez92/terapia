import React from 'react'
import { FormControl, Input, FormErrorMessage, Button, Flex } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik';

export default function ContactInput() {
    function validate(value: string) {
        let error
        if (!value) {
            error = 'Email is required'
        }
        return error
    }

    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={(values: any, actions: { setSubmitting: (arg0: boolean) => void }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }, 1000)
            }}
        >
            {(props: { isSubmitting: boolean | undefined }) => (
                <Form>
                    <Flex flexDirection={["column","column","row"]} gap={25} alignItems='center' pb={12}>
                        <Field name='email' validate={validate}>
                            {({ field, form }: any) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email} bg="whiteAlpha.900">
                                    <Input {...field} id='email' placeholder='email@email.com' />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            variant='solid'
                            isLoading={props.isSubmitting}
                            type='submit'
                            width={["full", "full", "auto"]}
                        >
                            Contact Us
                        </Button>
                    </Flex>
                </Form>
            )}
        </Formik>
    )
}
