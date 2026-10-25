var cl=console.log;


//single selection Methods:

//1//
let heading1=document.getElementById('heading1');
cl(heading1);

heading1.style.textAlign='center'
heading1.style.backgroundColor='yellow'
heading1.style.borderRadius='80px 20px 80px 20px'
heading1.style.padding='10px'
heading1.style.color='grey'


let heading2=document.getElementById('heading2');
cl(heading2);

heading2.style.textAlign='center'
heading2.style.backgroundColor='lightblue'
heading2.style.borderRadius='80px 20px 80px 20px'
heading2.style.padding='10px'
heading2.style.color='grey'


let paragraph=document.querySelector('p')

cl(paragraph)

paragraph.style.backgroundColor='pink';
paragraph.style.padding='15px';
paragraph.style.borderRadius='10px'
paragraph.style.borderRadius='60px 5px 60px 5px'
paragraph.style.fontWeight='bold'

//if we want to select list then in queryselector that only selects the first occurancy for ex its select js only 

let list=document.querySelector('.list-group-item')
cl(list)

//if we want to select specific li for ex node then...we use nth child selector

let list01=document.querySelector('li:nth-child(4)')
cl(list01); 

//first list 2nd li
let list1=document.querySelector('#skills li:nth-child(2)')
cl(list1)

//second list 3rd li
let list2=document.querySelector('#hobbie li:nth-child(3)')
cl(list2);

//if i want to add classes on it 

list2.classList.add("bg-success")
list1.classList.add("bg-primary")

//multiple selection methods: multiple document object

//1)
// document.getElementsByClassName(css:class) >> HTMLcollection (multiple doc obj)


let lists=document.getElementsByClassName('list-group-item') //HTMLCollection
cl(lists);

//Array
let arrLi=[...document.getElementsByClassName('list-group-item') ]//Array
cl(arrLi);

let arrLi1=Array.from(document.getElementsByClassName('list-group-item')) //Array
cl(arrLi1);

//if we want to add class on that 

for(let i=0;i<lists.length;i++){
    lists[i].classList.add('text-dark')
}

//
let list02=document.getElementsByTagName('li')
cl(list02);

let list03=[...document.getElementsByTagName('li')];
cl(list03);

let list04=Array.from(document.getElementsByTagName('li'))
cl(list04);

list04.forEach((para=>{
    para.classList.add('bg-info')
    para.classList.add('font-italic')
    para.classList.add('text-center')
    para.classList.add('border-dark')
    para.classList.add('font-weight-bold')
}))

