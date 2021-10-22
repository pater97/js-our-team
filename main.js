//CONSEGNA 
/*
Descizione
Il nostro compito é quello di rappresentare, utilizzando la struttura dati piú appropriata, una lista di membri di un team.
Ciascun membro del team avrá come caratteristica name, role, image
*/
//inserire in un array i mebri del team e in un object i loro valori

const teamMember = [
    {
        name:`Fabio`,
        role:`ceo`,
        image:`(https://picsum.photos/images`
    },
    {
        name:`Tiziano`,
        role:`cto`,
        image:`(https://picsum.photos/images`
    },
    {
        name:`Fabiola`,
        role:`cfo`,
        image:`(https://picsum.photos/images`
    },
    {
        name:`Chiara`,
        role:`HR manager`,
        image:`(https://picsum.photos/images`
    },{
        name:`Marilena`,
        role:`cmo`,
        image:`(https://picsum.photos/images`
    }
]
console.log(teamMember);

for(let i = 0; i < teamMember.length;i++){
    const member = teamMember[i]
    for(const key in member){
        console.log(member[key]);
    }
    console.log(`_____________`);
}