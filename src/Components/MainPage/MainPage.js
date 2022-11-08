import React, { useState } from 'react'
import { MainContainer, Form, Input, Botao} from './styles'

function MainPage() {
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

const onChangeNome = (event) => {
  setNome(event.target.value)
}
const onChangeIdade = (event) => {
  setIdade(event.target.value)
}
const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const imprimir = () => {
  const user = {
    nome: nome,
    idade: idade,
    email: email
  }
  console.log(user)
  setNome("")
  setIdade("")
  setEmail("")
}

// console.log(`o nome é  ${nome}, a idade é ${idade} e o email é ${email}`)

return (

  <MainContainer>
    <h2>Formulário de inscrição</h2>
    <Form>
      <label>
        Nome:
        <Input onChange={onChangeNome} value={nome} />
      </label>
      <label>
        Idade:
        <Input onChange={onChangeIdade} value={idade} />
      </label>
      <label>
        E-mail:
        <Input onChange={onChangeEmail} value={email} />
      </label>
      <Botao onClick={imprimir}>Enviar dados</Botao>
    </Form>
  </MainContainer>
)
}

export default MainPage


// import React, { useState } from 'react'
// import { MainContainer, Form, Input, Botao } from './styles'

// function MainPage() {
//   const [nome, setNome] = useState("")
//   const [idade, setIdade] = useState("")
//   const [email, setEmail] = useState("")


//   const imprimir =()=>{
//     const  [user, setUser]= useState= {
//       nome: nome,
//       idade: idade,
//       email: email}

//     setNome('')
//     setIdade('')
//     setEmail('')

//     console.log(user)
//   }
// }
// const onChangeNome = (event) => {
//   setNome(event.target.value)
// }
// const onChangeIdade = (event) => {
//   setIdade(event.target.value)
// }
// const onChangeEmail = (event) => {
//   setEmail(event.target.value)
// }

// console.log(`o nome é ${nome}, a idade é ${idade}, e o email é ${email}`);

// return (
//   <MainContainer>
//     <h2>Formulário de inscrição</h2>
//     <Form>
//       <label>
//         Nome:
//         <Input onChange={onChangeNome} />
//       </label>
//       <label>
//         Idade:
//         <Input onChange={onChangeIdade} />
//       </label>
//       <label>
//         E-mail:
//         <Input onChange={onChangeEmail} />
//       </label>
//       <Botao onClick={imprimir()}>Enviar dados</Botao>
//     </Form>
//   </MainContainer>
// )


// export default MainPage