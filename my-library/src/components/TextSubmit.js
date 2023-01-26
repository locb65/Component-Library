import { SubmitButton } from '../stories/Button.stories'
import { PasswordText } from '../stories/TextFields.stories'
import { UsernameText } from '../stories/TextFields.stories'
import React from 'react'
import "./TextSubmit.css"

function TextSubmit ({display}) {
    const style = {
        margin: '5px',
        padding: '5px'
    }
    return (
        <container>
            <div>
            <UsernameText style ={style} {...UsernameText.args} />
            </div>
            <div>
            <PasswordText style ={style} {...PasswordText.args} />
            </div>
            <div>
            <SubmitButton style ={style} {...SubmitButton.args} />
            </div>
        </container>
    )
}
TextSubmit.propTypes ={
}

export default TextSubmit