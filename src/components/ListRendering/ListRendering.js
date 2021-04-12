import React from 'react'
import Person from './Person';

function ListRendering() {
    let names = ['Aishwarya', 'Sanu', 'Sakshi', 'Ankita', 'Ritika'];
    const renderNames = names.map((name, index) => {
        return <p key={index}>My name is {name} present at {index}</p>
    });

    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Aishwarya',
    //         age: 23,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 2,
    //         name: 'Sakshi',
    //         age: 23,
    //         skill: 'Java'
    //     },
    //     {
    //         id: 3,
    //         name: 'Ankita',
    //         age: 22,
    //         skill: 'React'
    //     },
    //     {
    //         id: 4,
    //         name: 'Ritika',
    //         age: 24,
    //         skill: 'Javascript'
    //     },
    // ]

    // const personData = persons.map((person) => {
    //     return <Person person={person} key={person.id} />
    // })

    return (
        <div>
            {/* {personData} */}
            {renderNames}
        </div>
    )
}

export default ListRendering
