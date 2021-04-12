import React from 'react'

function Person(props) {
    return (
        <div>
            I am {props.person.name}. I am {props.person.age} years old. Skils I have {props.person.skill}
        </div>
    )
}

export default Person
