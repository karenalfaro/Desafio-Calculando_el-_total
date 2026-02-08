precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

CantidadSpan = document.querySelector (".cantidad");

TotalSpan = document.querySelector ("#valor-total");

totalPagar = Number(CantidadSpan.innerHTML)* precio; 
TotalSpan.innerHTML = totalPagar