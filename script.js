const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)


function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0,-5) /*Valor (data)*/
  const dayExists = nlwSetup.dayExists(today) /*Vai verificar se o "valor" existe*/

  if (dayExists) {  /* Se for falso não da continuidade nessa função abaixo*/
    alert("Dia já incluso 🚫")
    return /* Para */
  }
  alert('Adicionado com sucesso ✅')
  nlwSetup.addDay(today) /*True or false*/
}
function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
