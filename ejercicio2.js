var conversor = {
    convertir: (medida, unidadMedida, unidadConvertir, tipo) => {
        if (unidadMedida == "m") {
            let resultado = (medida * 100);
            console.log("Tipo de medida: " + tipo + "\n" + medida + "m" + " -> " + resultado + "cm");
        }
        if (unidadMedida == "km") {
            let resultado = (medida * 1000);
            console.log("Tipo de medida: " + tipo + "\n" + medida + "km" + " -> " + resultado + "m");
        }
        if (unidadMedida == "ft") {
            let resultado = (medida * 0.3048);
            console.log("Tipo de medida: " + tipo + "\n" + medida + "ft" + " -> " + resultado + "m");
        }

        if (unidadMedida == "C") {
            let resultado = ((9 / 5) * (medida)) + 32;
            console.log("Tipo de medida: " + tipo + "\n" + medida + "°C" + " -> " + resultado + "°F");
        }
        if (unidadMedida == "K" && unidadConvertir == "F") {
            let resultado = (((9) * (medida - 273.15)) / 5) + 32;
            console.log("Tipo de medida: " + tipo + "\n" + medida + "°K" + " -> " + resultado + "°F");
        }
        if (unidadMedida == "K" && unidadConvertir == "C") {
            let resultado = medida - 273.15;
            console.log("Tipo de medida: " + tipo + "\n" + medida + "°K" + " -> " + resultado + "°C");
        }
    }
};

conversor.convertir(0.5, "m", "cm", "L");
conversor.convertir(1, "km", "m", "L");
conversor.convertir(10, "ft", "m", "L");

conversor.convertir(15, "C", "F", "T");
conversor.convertir(30, "K", "F", "T");
conversor.convertir(45, "K", "C", "T");