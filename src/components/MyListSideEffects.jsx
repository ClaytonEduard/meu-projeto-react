import { useEffect, useState } from "react"

const myLists = [
    { id: '1', value: 'Fruta' },
    { id: '2', value: 'Legume' },
    { id: '3', value: 'Carne' },

]

export default function MyListSideEffects() {

    // estados 
    const [products, setProducts] = useState(myLists)
    const [find, setFind] = useState('')

    // efeito para atualizar a lista usando um huk
    useEffect(() => {
        if (find) {

            const newList = myLists.filter((item) => {
                return item.value.toLowerCase().includes(find.toLowerCase())
            })
            setProducts(newList)
        } else {
            setProducts(myLists)
        }
    }, [find])


    return (
        <div>
            <h1>Efeitos Colaterais</h1>
            <input type="text"
                value={find}
                onChange={(e) => setFind(e.target.value)}

                placeholder="pesquise aqui" ></input>
            {products.map((item) => {
                return (
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>

                )
            })}
        </div>
    )
}