import { useState } from "react";

export default function Content(){
  const[Id,setId]=useState("")
  const[Nom,setNom]=useState("")
  const[Note,setNote]=useState("")
  const[Etudiant,setEtudiant]=useState(
    [ {Id:1 ,Nom:"Yahya",Note:16},
      {Id:2,Nom:"Siham",Note:15},
      {Id:3,Nom:"Omar",Note:9},
      {Id:4,Nom:"Zakaria",Note:19}
    ]
  )

function ajouter(){
setEtudiant([...Etudiant,{Id:Id,Nom:Nom,Note:Note}])
}
function remplir(data){
  setId(data.Id)
  setNom(data.Nom)
  setNote(data.Note)
}
function modifier() {
  setEtudiant(
    Etudiant.map(function (item) {
      if (item.Id == Id) {
        return { Id: item.Id, Nom: Nom, Note: Note };
      }
      return item;
    })
  );
  setId("");
  setNom("");
  setNote("");
}
function supprimer() {
  setEtudiant(Etudiant.filter((item) => item.Id != Id));
  reset();
}
    
  return (
    <main className="flex-1 p-8">
      <h2 className="text-3xl font-bold">
        Liste des étudiants
      </h2>

      <div className="mt-6 grid grid-cols-3 gap-5">
        {Etudiant.map(function (item) {
          return (
            <div
              key={item.Id}
              className="rounded-xl bg-white p-5 shadow"
              onClick={()=>remplir(item)}
            >
              <h3 className="text-lg font-bold">
                {item.Nom}
              </h3>

              <p
                className={`mt-2 ${
                  item.Note >= 10
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                Note : {item.Note}/20
              </p>
             
            </div>
          );
        })}
      </div>
      <div className="flex" >
        <input 
        type="number"
         value={Id}
        onChange={(e)=>setId(e.target.value)}
         placeholder="ID"
         className="rounded border p-2 m-4"
        />
        <input 
        type="text"
         value={Nom}
         onChange={(e)=>setNom(e.target.value)}
         placeholder="NOM"
         className="rounded border p-2 m-4"
        />
        <input 
        type="number"
         value={Note}
         onChange={(e)=>setNote(e.target.value)}
         placeholder="NOTE"
         className="rounded border p-2 m-4"
        />
        <button 
        onClick={()=>ajouter()}
        className=" text-black bg-purple-600 hover:bg-bleu-600 m-2">
            Ajouter
        </button>
        <button 
        onClick={()=>modifier()}
        className=" text-black bg-purple-600 hover:bg-bleu-600:">
           modifier
        </button>
        <button
  onClick={supprimer}
  className="text-black bg-purple-600 hover:bg-bleu-600 m-2"
>
  Supprimer
</button>

      </div>
    </main>
  );
}
