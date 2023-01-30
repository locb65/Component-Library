import { Image } from "../components/Image";
import React from "react";

export default {
    title: "Components/Images",
    component: Image
}

const Template = args => <Image {...args}/>

export const PrimaryImage = Template.bind({}) 