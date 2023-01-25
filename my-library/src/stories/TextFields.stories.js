import TextFields from '../components/TextFields'

export default {
    title: "Components/TextFields",
    component: TextFields,
}

const Template = args => <TextFields {...args} />



export const Search = Template.bind({})
Search.args = {
label: 'Search'
}