import React from 'react';
import style from './FormControls.module.css'


export const Textarea = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={(hasError ? style.error : "") }>
            <div>
                <textarea{...input} {...props}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
};

export const Input = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={(hasError ? style.error : "") }>
            <div>
                <input{...input} {...props}  />
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
};