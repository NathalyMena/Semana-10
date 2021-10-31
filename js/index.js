const IdCandidato = document.getElementById('IdCandidato'); //input
const Nombre = document.getElementById('Nombre'); //input
const Registrar = document.getElementById('Registrar'); //boton
const IdUsuario = document.getElementById('IdUsuario'); //input
const Votar = document.getElementById('Votar'); //boton
const Candidatos = document.getElementById('Candidatos'); //boton
const Votaciones = document.getElementById('Votaciones'); //boton

const database = firebase.database();


registrarBoton = () => {

    let i = IdCandidato.value;
    let n = Nombre.value;
    
    let registroUsuario ={
        IdCandidato: i,
        Nombre: n,
    };

    console.log(registroUsuario);

    alert('candidato registrado');

    database.ref('users').push().set(registroUsuario); 

    }

    votarBoton = () => { 
   let idChequada = IdCandidato.value;
   let votarCandidato = {
       idVotoCandidato:Math.random(),
       id:idChequada
   }

   let votos;
   database.ref('IdCandidato').on('value',function (data){
   data.forEach(
       function (votosCandidatos) {
           let  numeroVotos= votosCandidatos.val();
           let  id= numeroVotos.id;

           if ( id === idChequada) {
           v =voto.v;
           }
       }
   )
   });
}
  
    CandidatosBoton = () => { 

        let candidatosRegistrados = [];
        database.ref('users').on('value',function(data){
            data.forEach(
                function(users){
                    let definicion = users.val();
                    candidatosRegistrados.push(definicion.IdCandidato+" "+definicion.Nombre+"");
                }
            )
        })
        alert(candidatosRegistrados);
    }
    

    VotacionesBoton = () => { 
        let numeroVotaciones;

        database.ref('users').on('value',function (data){
            data.forEach(
                function(A){
                   let valor = A.val();
                   let key = A.key;
                   let  nombreCandidato= valor.Nombre;
                   database.ref('users').child(key).child('votosVotacion').on('value',function(cantidadVotaciones){                           
                   });   
                }
            )
            alert(votacionesPercentage)  
        })
    }

    database.ref('users').on('value', function(data){
                data.forEach (
            function(user){
            let = id = user.key;
            let = IdCandidatos = user.val();
            let = nombreCandidato = user.val();
            console.log(id);
            console.log(IdCandidatos.IdCandidato);
            console.log(nombreCandidato.Nombre);
            }
        );
    } );


Registrar.addEventListener('click', registrarBoton);
Votar.addEventListener('click', votarBoton);
Candidatos.addEventListener('click', CandidatosBoton);
Votaciones.addEventListener('click', VotacionesBoton);