// -----------------------------RESUME DATA IN JSON FORMAT--------------------------

const resume={
    name:"Arshadh Ahamed",
    age:20,
    email:"arshadhahamed777@gmail.com",
    contact:9126771845,
    location: {
        address: "no 6 Vallabha Agarharam Street",
        postalCode: 600005,
        city: "Chennai",
        state: "TamilNadu",
        country: "India"
      },
      education: {
        institution: " Madras University",
        couse: "Bsc Computer Science",
        area: "Royapettah",
        Startyear: "2020",
        Endyear: "2023",
        score: "8.0",
        sidecourse: 
          "Full Stack Web Development"
        
      },
}

// --------------------------------Iterating over all For loops-----------------------------------
// For Loop
var resumeKeys=Object.keys(resume)
for(i=0;i<resumeKeys.length;i++){
  console.log(resumeKeys[i],resume[resumeKeys[i]],)
}

// For in
for(obj in resume){
    console.log(obj, resume[obj])
} 


// For of
var resumeKeys=Object.keys(resume)
for(k of resumeKeys){
console.log(resume[k])
    
}

// For each
var resumeKeys=Object.keys(resume)
resumeKeys.forEach((val,ind,arr)=>{
    console.log(resume[val])
})