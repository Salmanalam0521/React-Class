import React from 'react'
import Person from './Person'
function NameList() {
    const names=['Salman','Murali','Arvind','Salman']
    const persons=[
        {
            id:1,
            name:'Salman',
            age:22,
            skill:'Java'
        },
        {
            id:2,
            name:'Murali',
            age:22,
            skill:'Oracle'
        },
        {
            id:3,
            name:'Arvind',
            age:22,
            skill:'Python'
        },
        {
            id:4,
            name:'Tarun',
            age:22,
            skill:'C#.Net'
        }
    ]
    const namesList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
    return (
        <div>{namesList}</div>
    )
}

export default NameList
