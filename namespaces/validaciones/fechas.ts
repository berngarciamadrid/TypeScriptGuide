namespace Validaciones {

    // Con la palabra export se pueden utilizar fuera
    // del namespace
    export function validarFecha ( fecha: Date ) :boolean {
        if ( isNaN( fecha.valueOf())) {
            return false;
        }
        return true;
    }

}