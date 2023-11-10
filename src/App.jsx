import MyComponent from "./components/MyComponent"
import MyButton from "./components/MyButton"
import MeuContador from "./MeuContador"
import MyList from "./components/MyList"
import MyListSideEffects from "./components/MyListSideEffects"
import FindAPI from "./components/FindAPI"

export default function App() {
  return (
    <div>

      <h1>Olá Mundo, React</h1>
      <MyComponent />
      <MyButton conteudo='Me clique' />
      <MyButton conteudo='Depois Aqui' />
      <MyButton conteudo='E por fim aqui' />
      <hr />
      <div className="container">
        <MeuContador />
      </div>
      <hr />
      <MyList />
      <hr />
      <MyListSideEffects />
      <hr />
      <FindAPI />
    </div>
  )
}