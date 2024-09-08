var conststudents=[{
    Name:"Name:Alice Johnson",
    profileImage:"https://randomuser.me/api/portraits/women/1.jpg",
    Qualification:"Qualification:Bachelor of Science",
    Age:"Age:22",
    BirthDate:"BirthDate:2002-03-15"
},
{
    Name:"Name:Bob Smith",
    profileImage:"https://randomuser.me/api/portraits/men/2.jpg",
    Qualification:"Qualification:Master of Arts",
    Age:"Age:24",
    BirthDate:"BirthDate:2000-07-09"
},
{
    Name:"Name:Charlie Brown",
    profileImage:"https://randomuser.me/api/portraits/men/3.jpg",
    Qualification:"Qualification:Bachelor of Engineering",
    Age:"Age:23",
    BirthDate:"BirthDate:2001-11-19"
},
{
    Name:"Name:Daisy Miller",
    profileImage:"https://randomuser.me/api/portraits/women/4.jpg",
    Qualification:"Qualification:Doctor of Medicine",
    Age:"Age:27",
    BirthDate:"BirthDate:1997-05-30"
},
{
    Name:"Name:Ethan Wilson",
    profileImage:"https://randomuser.me/api/portraits/men/5.jpg",
    Qualification:"Qualification:Bachelor of Commerce",
    Age:"Age:21",
    BirthDate:"BirthDate:2003-09-12"
},
{
    Name:"Name:Fiona Clarke",
    profileImage:"https://randomuser.me/api/portraits/women/6.jpg",
    Qualification:"Qualification:Bachelor of Science",
    Age:"Age:20",
    BirthDate:"BirthDate:2004-01-22"
},
{
    Name:"Name:George Lewis",
    profileImage:"https://randomuser.me/api/portraits/men/7.jpg",
    Qualification:"Qualification:Master of Arts",
    Age:"Age:23",
    BirthDate:"BirthDate:2001-08-16"
},
{
    Name:"Name:Hannah Scott",
    profileImage:"https://randomuser.me/api/portraits/women/8.jpg",
    Qualification:"Qualification:Bachelor of Engineering",
    Age:"Age:25",
    BirthDate:"BirthDate:1990-11-02"
}
]

conststudents.forEach(serve =>{

var container = document.getElementById("info");
// container.appendChild(box);

var box = document.createElement("div");
box.className = "box";
// console.log(box);


var upperbox = document.createElement("div");
upperbox.className = "upperbox";
// console.log(upperbox);


var lowerbox = document.createElement("div");
lowerbox.className = "lowerbox";
// console.log(lowerbox);


box.appendChild(upperbox);
box.appendChild(lowerbox);
container.appendChild(box);


var image = document.createElement("img");
image.src=serve.profileImage;


var nameHeading = document.createElement("h1");
nameHeading.textContent = serve.Name;
// console.log(nameHeading);

var QualificationName = document.createElement("h2");
QualificationName.textContent = serve.Qualification;


var AgeDetails = document.createElement("h3");
AgeDetails.textContent = serve.Age;


var Bdate = document.createElement("h4");
Bdate.textContent = serve.BirthDate;

upperbox.appendChild(image);
lowerbox.appendChild(nameHeading);
lowerbox.appendChild(QualificationName);
lowerbox.appendChild(AgeDetails);
lowerbox.appendChild(Bdate);

})

// var container = document.getElementById("info");
// // container.appendChild(box);

// var box = document.createElement("div");
// box.className = "box";
// console.log(box);


// var upperbox = document.createElement("div");
// upperbox.className = "upperbox";
// // console.log(upperbox);


// var lowerbox = document.createElement("div");
// lowerbox.className = "lowerbox";
// // console.log(lowerbox);

// box.appendChild(upperbox);
// box.appendChild(lowerbox);
// container.appendChild(box);

// var nameHeading = document.createElement("h1");
// nameHeading.textContent = conststudents.Name;
// // console.log(nameHeading);

// var QualificationName = document.createElement("h2");
// QualificationName.textContent = conststudents.Qualification;


// var AgeDetails = document.createElement("h3");
// AgeDetails.textContent = conststudents.Age;


// var Bdate = document.createElement("h4");
// Bdate.textContent = conststudents.BirthDate;

// lowerbox.appendChild(nameHeading);
// lowerbox.appendChild(QualificationName);
// lowerbox.appendChild(AgeDetails);
// lowerbox.appendChild(Bdate);