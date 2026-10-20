var cl=console.log;
 


//InnerHtml//


//1//
let info1= document.getElementById('info1')
cl(info1);
let x = info1.innerHTML;
cl(x);
//we can change using this 
info1.innerHTML=`<em>I love web development</em>`;


//2//
let info2 = document.getElementById("info2");
let y=info2.innerHTML;
cl(y);
info2.innerHTML = `<strong>I Love JavaScript</strong>`;

//3//
let info3 = document.getElementById("info3");
let a=info3.innerHTML;
cl(a);
info3.innerHTML = `<em>Welcome to Web Development</em>`;

//4//
let info4 = document.getElementById("info4");
let b=info4.innerHTML
cl(b);
info4.innerHTML = `<h2>Welcome to DOM</h2>`;

//5//
let info5 = document.getElementById("info5");
let c=info5.innerHTML
cl(c);
info5.innerHTML = `<u>Learn JavaScript</u>`;

//6//
let info6 = document.getElementById("info6");

info6.innerHTML = `
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
`;
//7//
let info7 = document.getElementById("info7");

info7.innerHTML =
    '<a href="https://www.google.com">Visit Google</a>';


//8//
let info8 = document.getElementById("info8");
info8.innerHTML = "<button>Click Me</button>";

//9//
let info9 = document.getElementById("info9");

info9.innerHTML = `
    <h3>My Skills</h3>
    <p>HTML and CSS</p>
`;

//10//
let info10 = document.getElementById("info10");
info10.innerHTML=`<strong>I Love angular</strong>`


//InnerText

//  1
        let info01 = document.getElementById("info01");
        cl(info01.innerText);


        // 2
        let info02 = document.getElementById("info02");
        cl(info02.innerText);


        // Ex 3: Change existing text
        let info03 = document.getElementById("info03");
        info03.innerText = `I am learning JavaScript`;
        cl(info03.innerText);


        // Ex4
        let info04 = document.getElementById("info04");
        cl(info04.innerText);


        // Ex 5: Replace text
        let info05 = document.getElementById("info05");
        info05.innerText = `Welcome to Web Development`;
        cl(info05.innerText);


        // Ex 6: Get text from multiple paragraphs
        let info06 = document.getElementById("info06");
        cl(info06.innerText);


        // Ex 7: Set HTML-like text
        let info07 = document.getElementById("info07");
        info07.innerText = `<i>Hello JavaScript</i>`;
        cl(info07.innerText);


        // Ex 8: Change content inside div
        let info08 = document.getElementById("info08");
        info08.innerText = `My Course is MCA`;
        cl(info08.innerText);

        //Ex 9

        let info09 = document.getElementById("info09");
        info09.innerText = `<strong>Hello All of you</strong>`;
        cl(info09.innerText);
