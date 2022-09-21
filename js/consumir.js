const urlApex="https://gb70158269d26b6-dmjbbddc3g24.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/car/car"

function peticionGet(){
    $.ajax
    ({
        url: urlApex,
        type: 'GET',
        dataType: 'json',

        success: function(data)
        {
            let cantidadR = data.count
            let registros = data.items
            console.log(data)
            console.log(cantidadR)
            console.log(registros)
            for(i=0; i<cantidadR; i++)
            {
                console.log("ID: " + registros[i].id)
                console.log("BRAND: " + registros[i].brand)
                console.log("MODEL: " + registros[i].model)
                console.log("CATEGORY: " + registros[i].category_id)
            }
        },
        error: function(){},
        complete: function(){},
    });

}

function peticionPost(IDe, BRANDe, MODELe, CATEGORYe)
{
    const dataSend = {
        id: IDe,
        brand: BRANDe,
        model: MODELe,
        category_id: CATEGORYe,
    }
    const json = JSON.stringify(dataSend);
    console.log(dataSend);

    $.ajax
    ({
        method: 'POST',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function(response)
        {
            if (response.status == 555){
                alert("Registro Ya existe")
            }else if(response.status == 201){
                alert("Registro almacenado con Exito")
            }
            console.log(response.status)
        }
    });
    console.log(json);
}

function peticionPut(IDe, BRANDe, MODELe, CATEGORYe)
{
    const dataSend = {
        id: IDe,
        brand: BRANDe,
        model: MODELe,
        category_id: CATEGORYe,
    }
    const json = JSON.stringify(dataSend);
    console.log(dataSend);

    $.ajax
    ({
        method: 'PUT',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function(response)
        {
            if (response.status == 201){
                alert("Registro Modificado Exitosamente")
            }
            console.log(response.status)
        }
    });
    console.log(json);
}

function peticionDelete(IDe)
{
    const dataSend = {
        id: IDe,
    }
    const json = JSON.stringify(dataSend);
    console.log(dataSend);

    $.ajax
    ({
        method: 'DELETE',
        url: urlApex,
        data: json,
        contentType: "application/json",
        complete: function(response)
        {
            if (response.status == 204){
                alert("Registro Eliminado Exitosamente")
            }
            console.log(response.status)
        }
    });
    console.log(json);
}


