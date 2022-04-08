
let notas,

    numMax = Number.NEGATIVE_INFINITY,
    numMin = Number.POSITIVE_INFINITY,
 
    alumDes = [],
    sumaDes = 0,
    contDes = 0,
    promeDes  ,
 
    alumApr = [],
    sumaApr = 0,
    contApr = 0,
    promeApr,

    alumPro = [],
    sumaPro = 0,
    contPro = 0 ,
    promePro ;

do{

    notas = parseInt(prompt('Ingrese las notas de la comisión'));

if (notas < 4){

    alumDes.push(notas);  
    sumaDes+= notas;
    contDes++;


} else if(notas >= 4 &&  notas <= 6) {
  
    alumApr.push(notas);
    sumaApr+= notas;
    contApr++;


} else if ( notas >= 7){
    
    alumPro.push(notas);
    sumaPro+= notas;
    contPro++;


} if(notas > numMax){
     
    numMax = notas;


} if(notas < numMin){
   
    numMin = notas;
}

}while (confirm('Desea ingresar más notas'));

    promeDes = sumaDes / contDes;
    promeApr = sumaApr / contApr;
    promePro = sumaPro / contPro;


 
    alert(`Las notas de los alumnos DESAPROBAODS son: ${alumDes}`);
    alert(`Las notas de los alumnos APROBADOS son: ${alumApr}`);
    alert(`Las notas de los alumnos PROMOCIONADOS son: ${alumPro}`);
    alert(`La cantidad de alumnos desaprobados es: ${contDes}, y el promedio de las notas de los alumnos desaprobados es ${promeDes}`);
    alert(`La cantidad de alumnos aprobados es: ${contApr}, y el promedio de las notas de los alumnos aprobados es ${promeApr}`);
    alert(`La cantidad de alumnos promocionados es: ${contPro} y el promedio de las notas de los alumnos promocionados es ${promePro}`); 
    alert(`La mayor nota ingresada  es ${numMax}`);
    alert(`La mayor nota ingresada  es ${numMin}`);