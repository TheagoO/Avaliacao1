$.ajax({
    type: "get",
    url: "bin/produtos.xml",
    success: function (response) {
        $(response).find("produto").each(function(){
            $("#produtos").append(`<div class="produto">
                <img src="${$(this).find("imagem").text()}" class="img-produto">
                <h1 class="nome">${$(this).find("nome").text()}</h1>
                <p class="tipo">${$(this).find("tipo").text()}</p>                     
                <p class="descricao">${$(this).find("descricao").text()}</p>
                <div class="rdp">
                    <p class="total">Total: </p>
                    <p>${$(this).find("valor").text()}</p>
                </div>
            </div>`);
        })
    },
    error: function (response){
        alert("Erro ao ler xml" + response);
    }
});

