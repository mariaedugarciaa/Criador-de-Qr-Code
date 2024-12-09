// quando a gente preenche faz aparecer o cara ali , com a imagem gerada, baseada no texto que a gente digitou
const container=document.querySelector(".container")
const qrCodeBtn=document.querySelector("#qr-form button")
const qrCodeInput=document.querySelector("#qr-form input")
const qrCodeImg=document.querySelector("#qr-code img")
//Eventos


// Gerar QrCode
// :quando ele clicar no qrcode button , ele vai addicionar um evento que vai ser de click

function generateQrCode(){
    // 1 selecionar o valor do nosso input,assim pego o valor do input
    const qrCodeInputValue=qrCodeInput.value;
    // mas qr fazer uma pequena validação
    if(!qrCodeInputValue)return
    // vou pegar o texto e escrever enquanto gera o codigo no botao gerando codigo
    qrCodeBtn.innerText="Gerando código"

    // vou alterra o atributo src baseado no api
    qrCodeImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`
// so dispara o evento e mostrar o active quando a imagem carregar
    qrCodeImg.addEventListener("load",()=>{
        container.classList.add("active")
        qrCodeBtn.innerText="Código criado"

    })
    


}
qrCodeBtn.addEventListener("click",()=>{
    generateQrCode()
    // crio uma função que vai fazer td acontecer, crio ela para separar responsabilidades,no click executo a função
    //  separo o evento das funcionalidades do sistema, e vou ter outro evento que vai ser pressionar enter que vai ativar isso tambem


})
// adicionar o evento a partir do enter
qrCodeInput.addEventListener("keydown",(e)=>{
    // aqui eu tenho que saber se é o enter que vai ser precionado,vejo se o código daa tela é igual a enter
    if(e.code==="Enter"){
        generateQrCode()
    }

})

//Limpar area do qr code, vou pegar o input dnv, e vou fazer um novo evento nele,keyup detecta cada mudança naquele input
// eu apago e volto ele ao normal

qrCodeInput.addEventListener("keyup",()=>{
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText="Gerar QrCode"
    }
})