import { useState } from "react"


export function useForm (initialState){
    const [form, setForm] = useState(initialState)
  // notação de colchete para acessar valores em objeto //

  const onChangeForm = (event) =>{
    const{name, value} = event.target
    setForm({...form, [name]:value})
  }
    return {form, onChangeForm}
}