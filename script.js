function Check()
{
    var variable = parseInt(document.getElementById("Nomber").value);

    if (variable > 100 && variable < 250)
    {
        document.getElementById("Conclusion").innerHTML = "<br>Число " + variable + " удовлетворяет условию";
    }
    else
    {
        document.getElementById("Conclusion").innerHTML = "<br>Число " + variable + " не удовлетворяет условию" + "<br>Введите другое число";
    }
}