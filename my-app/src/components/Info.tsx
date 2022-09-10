import React from 'react';

export const Info = (props: {text: string, all_card: boolean}) => {

    if(props.all_card){
        return (
            <div>
                <p>{props.text}</p>
            </div>
        )
    }
    else{
        return (
            <div>
                <p>{props.text}</p>
            </div>
        )
    }

}