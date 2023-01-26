import  TextSubmit  from "../components/TextSubmit";


export default {
    title: "Components/Login-Fields",
    component: TextSubmit,
}


const Template = args => <TextSubmit {...args}/>;

export const PrimaryLogin = Template.bind ({})
PrimaryLogin.args = {

}
