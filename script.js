const btnStart=document.querySelector(".start")
const btnNext =document.querySelector(".next")
const yangdisembunyikan= document.querySelectorAll(".hide")
const btnChoice=document.querySelectorAll(".choice")
const tanya =document.getElementById("Question")
const Container=document.querySelector(".quizcontainer")
let pilihanHuman


const Question =[
    {
        Question:"mayonaise terbuat dari?",
        Choice:[
            {pilihan:"Susu",status:false},
            {pilihan:"minyak",status:true},
            {pilihan:"wijen",status:false},
            {pilihan:"kedelai",status:false}            
        ]
        
        
    },
    {
        Question:"Wortel banyak mengandung?",
        Choice:[
            {pilihan:"Vitamin B",status:false},
            {pilihan:"Vitamin A",status:true},
            {pilihan:"Vitamin C",status:false},
            {pilihan:"karbohidrat",status:false}            
        ]
        
        
    },
    {
        Question:"Sebutkan produk indonesia dibawah ini?",
        Choice:[
            {pilihan:"TOYOYA",status:false},
            {pilihan:"Indomie",status:true},
            {pilihan:"Mixie",status:false},
            {pilihan:"Pizza Hut",status:false}            
        ]
        
        
    },
    {
        Question:"Bagian pada kendaraan bermotor yang digunakan sebagai pembuangan gas disebut?",
        Choice:[
            {pilihan:"Spion",status:false},
            {pilihan:"Knalpot",status:true},
            {pilihan:"Roda",status:false},
            {pilihan:"Rem",status:false}            
        ]
        
        
    },
    {
        Question:"Negara terluas keempat di dunia adalah?",
        Choice:[
            {pilihan:"Indonesia",status:false},
            {pilihan:"Amerika",status:true},
            {pilihan:"Australia",status:false},
            {pilihan:"India",status:false}            
        ]
        
        
    },
    {
        Question:"Sebutkan produk indonesia dibawah ini? kecuali",
        Choice:[
            {pilihan:"SilverQuin",status:false},
            {pilihan:"Grab",status:true},
            {pilihan:"JCO",status:false},
            {pilihan:"Indomie",status:false}            
        ]
        
        
    }
]
// SHUFFLE BUAT Question
    var Noberapa=0
    function shuffle(){
        // buat array isinya 1-4
        const nums=[]
            for(let i =0 ; i<Question.length;i++){
            nums.push(i)
            }
        // BUAT RANDOM NUMBER
            Quest = [],
            i = nums.length,
            j = 0;
        
        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            Quest.push(nums[j]);
            nums.splice(j,1);
        }
        return Quest
    }
shuffle()
let point = 100/Question.length
let nilai = 0

// button start mulai 
btnStart.addEventListener("click",function(){

    sembunyikan()
    daftarChoice()
    updateUI(Noberapa,Quest,Choices)

    // memilih pilihan terus mengubah menjadi kuning 
    btnChoice.forEach(e => {
        e.addEventListener("click",function(){
            btnChoice.forEach(e=>e.classList.remove("dipilih"))
            this.classList.add("dipilih")
            pilihanHuman=this
            btnNext.classList.remove("hide")

            return pilihanHuman
        })

    });
})


// ketika next di tekan

btnNext.addEventListener("click",function(){
    Noberapa++
    pemeriksaanBenar(pilihanHuman)
    btnNext.classList.add("hide")
    btnChoice.forEach(button => {
        button.classList.remove("dipilih")
    });
    daftarChoice()
    if(Noberapa == Question.length){
        tampilkanNilai(nilai)
        return
    }
    updateUI(Noberapa,Quest,Choices)
    
})


// function yang dipakai 

    // funtion untuk menyebunyikan start dan membuka hide dari Quis container
function sembunyikan(){
    btnStart.classList.add("hide")
    yangdisembunyikan.forEach(e => {
        e.classList.remove("hide") 
        btnNext.classList.add("hide")
    });
    
}


// mengupdate ui untuk soal dan choice dari quis
function updateUI(nomor,Quest,Choices){
    tanya.innerHTML=Question[Quest[nomor]].Question
    for(let i =0; i<Question[Quest[nomor]].Choice.length;i++){
        btnChoice[i].innerHTML=Question[Quest[nomor]].Choice[Choices[i]].pilihan
        btnChoice[i].dataset.status=Question[Quest[nomor]].Choice[Choices[i]].status
        const objectpilihan = Question[Quest[nomor]].Choice[Choices[i]]
    }
}


// SHUFFLE BUAT CHOICE
function daftarChoice(){
    // buat array isinya 1-4
    const nums=[]
        for(let i =0 ; i<btnChoice.length;i++){
        nums.push(i)
        }
    // BUAT RANDOM NUMBER
        Choices = [],
        i = nums.length,
        j = 0;
    
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        Choices.push(nums[j]);
        nums.splice(j,1);
    }
    return Choices
}


function pemeriksaanBenar(data){
    if(data.dataset.status=="true"){
        nilai +=point
    }
    else{
    }
    
}
function tampilkanNilai(nilai){
    btnChoice.forEach(tombol => {
        tombol.classList.add("hide")
    });
    tanya.innerHTML=`Nilai kamu adalah`
    const showNilai=document.createElement("h1")
    const isiNilai =document.createTextNode(Math.floor(nilai))
    showNilai.appendChild(isiNilai)

    showNilai.classList.add("nilai")
    Container.appendChild(showNilai)
    

}

    // angka min max yang kita mau
    // Math.floor(Math.random() * (max - min + 1) + min)

    // membuat array random tanpa sama 
    // var nums = [1,2,3,4,5,6,7,8,9,10],
    //     ranNums = [],
    //     i = nums.length,
    //     j = 0;
    
    // while (i--) {
    //     j = Math.floor(Math.random() * (i+1));
    //     ranNums.push(nums[j]);
    //     nums.splice(j,1);
    // }
    // console.log(ranNums)