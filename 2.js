const prompt = require("prompt-sync")();
const tasks  = [
    {
        id : 1 , description : "apprendre javaScript" , isDone: false 
    },
     {
        id : 2 , description : "apprendre C++" , isDone: true
    },
];
let complet =[]
let en_attendant =[] ;

console.log(`=== To-Do List simple === `);
while(true) {
    console.log("\n === To-Do List === ") ;
    console.log("1. Afficher les tâches");
    console.log("2. Ajouter une tâche");
    console.log("3. Rechercher une tâche");
    console.log("4. Modifier une tâche ");
    console.log("5. Supprimer une tâche");
    console.log("6. Marquer une tâche comme terminée (mark as done)");
    console.log("7.Afficher tâches terminées / en attente");
    console.log("0. Quitter");
 const choice = prompt("choisissiez un numero : ");
if (choice === `1`) {
    console.log("\n === vos taches ===");
    if(tasks.length === 0){
        console.log("il n'y a pas de mission .");
    } else{
         for (let i = 0 ; i < tasks.length ; i++) 
            
         
         console.log(tasks[i]) ;
        }
    }
        
    
        else if (choice === `7`) {
for (let i = 0 ; i < tasks.length ; i++) {
           if (tasks[i].isDone === true) {
            complet.push(tasks[i])
           }
             en_attendant.push(tasks[i]) }
        

    console.log(`taches complet `);
    if (complet.length!=0){
        for (let i = 0 ; i < complet.length ; i++){
            console.log(complet[i])
        }
    }

    else {
        console.log("rien a afficher ")
    }
console.log("taches en en attendant")
if (en_attendant.length!=0) {
    for (let i = 0 ; i < en_attendant.length ; i++){
        console.log(en_attendant[i])
    }
}
        
else {
    console.log("rein a afficher");
}
        }
else if (choice === `2`) {
    const newDescription = prompt ("Nouvelle description de mission : ");
    const newTask = {description : newDescription ,isDone : false };
    tasks.push(newTask) ;
     console.log("la tache a ete ajoutee") ;
}
 else if (choice === '3') {
        const searchTerm = prompt("mot de recherche: ").toLowerCase(); 
        const foundTasks = tasks.filter((task)=> task.description.includes(searchTerm))[0]
       console.log(foundTasks);
      
    }
else if (choice === `6`){
    const taskNumber = prompt("la tache a ete accomplie");
    const index = +taskNumber - 1 ;
    if (index >= 0 && index < tasks.length ) {

tasks[index].isDone = true ;
console.log("la tache a ete fixee"); 
}
else {
    console.log("le numero que vous avez saisi est incorrect" );
}
}

else if (choice === `4`) {
    const taskNumber = prompt("le numero de la tache que vous souhaitez modifier : ");
    const index = +taskNumber - 1;
    if (index>=0 && index<tasks.length){
            const newDescription = prompt(`  new description : `);
            if (newDescription) { 
                tasks[index].description = newDescription;
                console.log("okey ");
            }
    } else {
            console.log("le numero que vous avez saisi est incorrect");
        }
        }



else if ( choice === `5` ){
    const taskNumber = prompt("le numero important que vous souhaitez supprimer : ");
    const index = +taskNumber - 1 ;
    if (index >= 0 && index < tasks.length){
        tasks.splice (index , 1);
        console.log("la tache a ete supprimee ");
    }
    else {
        console.log ("le numero que vous avez saisi est incorrect" );
    }
}
else if (choice === `0`){
    console.log("Au revoir")
    break;
}
else{
    console.log("la selection n'est pas disponible , veuillez reessayer");
}
}

