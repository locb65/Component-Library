import TextFields from '../components/TextFields'
import React from 'react'

export default {
    title: "Components/TextFields",
    component: TextFields,
}

const Template = args => <TextFields {...args} />;



export const PrimaryText = Template.bind({})
PrimaryText.args = {
};


export const PlaceHolderText = Template.bind({ }) 
PlaceHolderText.args = {
    placeHolder: 'place holder'
};

export const PasswordText = Template.bind({});
PasswordText.args = {
    placeHolder: 'password',
}
export const UsernameText = Template.bind({});
UsernameText.args = {
    placeHolder: 'username',
}