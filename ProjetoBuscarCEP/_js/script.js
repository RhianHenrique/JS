function buscarCEP() {
    let cep = document.getElementById("cep").value;

    cep = cep.replace(/\D/g, '');

    if(cep.length !== 8) {
        alert("Por favor, insira um CEP valido com 8 digitos.");
        return;
    }

    var url = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(url)

        .then(response => response.json())

        .then(data => {
            if (data.erro){
                document.getElementById("resultado").innerHTML = "CEP nao encontrado";
            } else {
                var resultado = `
                <p><strong>CEP;</strong> ${data.cep}</p>
                <p><strong>Logradouro;</strong> ${data.logradouro}</p>
                <p><strong>Bairro;</strong> ${data.bairro}</p>
                <p><strong>Localidade;</strong> ${data.localidade}/${data.uf}</p>
                <p><pre> ` + JSON.stringify(data, null, 2) + `</pre></p>`;

                document.getElementById("resultado").innerHTML = resultado;
            }
        })
            .catch(error => console.error("Erro ao buscar CEP: ", error));
}