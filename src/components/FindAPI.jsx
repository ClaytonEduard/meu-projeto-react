import { useEffect, useState } from "react"

// const tasks = [
//     { id: '1', title: 'minha primeira tarefa' },
//     { id: '2', title: 'minha segunda tarefa' },
//     { id: '3', title: 'minha terceira tarefa' },
//     { id: '4', title: 'minha quarta tarefa' },
// ]
export default function FindAPI() {

    const [tasks, setTasks] = useState([])



    // busca os dados da api
    useEffect(() => {
        async function findData() {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resultFinal = await result.json()
            return resultFinal
        }

        findData().then(res => setTasks(res))

    }, [])


    return (
        <div>
            <h1>Buscando dado API</h1>
            <ol>

                {tasks.map((tasks) => {
                    return (
                        <div>
                            <li key={tasks.id}>{tasks.title} - {tasks.completed ? <span>💯</span> : ''}</li>

                        </div>
                    )
                })}
            </ol>
        </div>
    )


}