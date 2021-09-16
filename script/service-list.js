$.ajax({
    type: "get",
    url: "bin/servicos.xml",
    success: function (response) {
        $(response).find("servico").each(function(){
            $("#tabela").append(`
            <tr>
                <td class="col-servico">${$(this).find("nome").text()}</td>
                <td class="col-valor"><p class="total">Valor: </p>${$(this).find("valor").text()}</td>
            </tr>
            `);
        })
    },
    error: function (response){
        alert("Erro ao ler xml" + response);
    }
});