const myLists = [
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' },

]
export default function MyList() {

    return (
        <div>
            <h1>Listas no React</h1>
            {myLists.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>

                )
            })}
        </div>
    )
}