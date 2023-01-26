import TextFields from '../components/TextFields'
import { Submit } from './Button.stories'
import React from 'react'

export default {
    title: "Components/TextFields",
    component: TextFields,
}

const Template = args => <TextFields {...args} />



export const PrimaryText = Template.bind({})
PrimaryText.args = {
}


export const PlaceHolderText = Template.bind({ }) 
PlaceHolderText.args = {
    placeHolder: 'place holder'
}

export const SubmitText = Template.bind({ }) 
SubmitText.args = {
    children: <Submit {...Submit.args }/>
    }

