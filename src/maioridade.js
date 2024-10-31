const maioridade = function(idade)
{
    if (parseInt(idade) <= 0)
        {
            return 'Idade inválida, tente novamente';
        }
    else if (idade < 18)
        {
            return 'Menor de idade';
        }
    else 
        {
            return 'Maior de idade'
        }
}