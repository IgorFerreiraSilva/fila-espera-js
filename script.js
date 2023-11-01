/*

Escreva um programa em javascript para simular uma fila de espera em um consultório médico
O programa deve iniciar mostrando na tela um menu interativo contento a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome:(ex: 1 - Matheuis ,2 - Marcos)
O menu também deve permitir escolher entre as opções de "Novo paciente"m para adicionar um novo paciente ao fim da fila (Pedindo o nome do paciente), "Consultar paciente", 

que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e "Sair", 
O programa só deve ser encerrado ao escoolher opção de "SAIR", caso contrário deve voltar ao menu

*/

let fila = []
let opcao = ""

do{
    let pacientes = ""

    for(let i = 0; i< fila.length; i++){
        pacientes += (i + 1) + "  - " + fila[i] +"\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes + "\nEsclha uma acão:\n1. Novo paciente\n2. Consultar pacientes\n3. Sair"
    )

    switch(opcao){
        case "1":
            const novoPaciente = prompt("Qual o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if(fila.length > 0){
                alert(pacienteConsultado + " foi removido da fila")
            }else{
                alert("Não há pacientes na fila!")
            }
            break
        case "3":
            alert("Encerramento...")
            break
        default:
            alert("Opção inválida!")
    }

}while(opcao !== "3"){

}