// Procurar o botao
document.querySelector("#add-time")
// Clciar no botao
.addEventListener('click', cloneField)

// Duplicar campos
function cloneField() {
    
    // Selecionar campo
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })
    
    // Onde duplicar
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}