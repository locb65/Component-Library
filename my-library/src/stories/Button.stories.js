import Button from "../components/Button"
import './Buttons.css'
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default {
    title: "Components/Button",
    component: Button,
}

const Template = args => <Button {...args} />


export const Primary = Template.bind({})
Primary.args = {
    backgroundColor: 'Blue', 
    label: 'Click Me', 
    size: 'medium'
}

export const BorderedPrimary = Template.bind({})
BorderedPrimary.args = {
    backgroundColor: 'white', 
    label: 'Click Me', 
    size: 'medium',
    border: 'solid 2px blue',
    color: 'blue'
}

export const Danger = Template.bind({})
Danger.args = {
    backgroundColor: 'Red', 
    label: 'Click Me', 
    size: 'medium',
}
export const BorderedDanger = Template.bind({})
BorderedDanger.args = {
    backgroundColor: 'white', 
    label: 'Click Me', 
    size: 'medium',
    border: 'solid 2px red',
    color: 'red'
}


export const Success = Template.bind({})
Success.args = {
    backgroundColor: 'Green', 
    label: 'Click Me', 
    size: 'medium',
}
export const BorderedSuccess = Template.bind({})
BorderedSuccess.args = {
    backgroundColor: 'white', 
    label: 'Click Me', 
    size: 'medium',
    border: 'solid 2px green',
    color: 'green'
}



export const Warning = Template.bind({} )
Warning.args = {
    backgroundColor: 'Orange', 
    label: 'Click Me', 
    size: 'medium',
}

export const BorderedWarning = Template.bind({})
BorderedWarning.args = {
    backgroundColor: 'white', 
    label: 'Click Me', 
    size: 'medium',
    border: 'solid 2px orange',
    color: 'orange'
}

export const Default = Template.bind({})
Default.args = {
    backgroundColor: 'Black', 
    label: 'Click Me', 
    size: 'medium',
}
export const BorderedDefault = Template.bind({})
BorderedDefault.args = {
    backgroundColor: 'white', 
    label: 'Click Me', 
    size: 'medium',
    border: 'solid 2px black',
    color: 'black'
}

export const Shopping = Template.bind({})
Shopping.args = {
    backgroundColor: '#d7d7d7', 
    label: 'Cart', 
    size: 'medium',
    icon: <AiOutlineShoppingCart/>,
    color: 'black'
}

export const SubmitButton = Template.bind({})
SubmitButton.args = {
    backgroundColor: '#d7d7d7', 
    label: 'Submit', 
    size: 'medium',
    color: 'black'
}
