// let div1 = document.querySelector('.one');
// let div2 = document.querySelector('.two');
// div1.setAttribute('title','one');
// div1.textContent='one'
// div2.setAttribute('title','two');
// div2.textContent = ""
// let created_content= document.createTextNode("two 2");
// div2.appendChild(created_content);
// console.log(div1 , div2);
// ///////////////////////////////////////////////////////////////////////////
// console.log("=".repeat(60));

// let imgs = document.querySelectorAll('img');
// imgs.forEach(function(ele){
//     if(ele.hasAttribute('alt')===true)
//     {
//         ele.setAttribute('alt','old')
//     }
//     else{
//         ele.setAttribute('alt','new-elzero')
//     }
// })
/////////////////////////////////////////////////////////////////////////////
console.log("=".repeat(60));
document.body.style.cssText='margin: 0px;  padding: 0px; box-sizing: border-box; background-color:black;'
let form = document.querySelector('form');
form.style.cssText= 'margin:80px auto;\
padding:20px ;\
display:flex; \
flex-direction: column;'
let input1= document.querySelector('input[type=number]');
input1.style.cssText='background-color:#ddd; border:none; padding:15px; margin-bottom:10px;border-radius: 5px;'
let input2= document.querySelector('input[type=text]');
input2.style.cssText='background-color:#ddd; border:none; padding:15px; margin-bottom:10px;border-radius: 5px;'
let select = document.querySelector('[name=type]');
select.style.cssText='background-color:#ddd; border:none; padding:15px; margin-bottom:10px;border-radius: 5px;'
let submit = document.querySelector('input[type=submit]');
submit.style.cssText='background-color:#00695c; cursor:pointer; color:white ; padding:15px;font-size:16px; border:none;border-radius: 5px;'
let res = document.querySelector('.results');
res.style.cssText='display:grid ; grid-template-columns: repeat(auto-fill,minmax(200px,1fr));gap:20px; padding:0px 10px 0px 10px;'
submit.onclick=function(e){
    res.innerHTML = ""
    e.preventDefault();
        for(let i=1; i<=input1.value; i++)
        {
            let creation_type = document.createElement(select.value);
            creation_type.className = 'box';
            creation_type.setAttribute('title','Element');
            creation_type.setAttribute('id',`id-${i}`)
            creation_type.style.cssText='background-color:rgb(255 44 0 / 96%);; padding:20px; text-align:center ; font-size:18px ; color:white; text-transform: capitalize;  border-radius: 5px;'
            let creation_text = document.createTextNode(input2.value);
            creation_type.appendChild(creation_text);
            res.appendChild(creation_type);
            document.body.append(res);
        }
}
let btn = document.querySelector('button');
btn.style.cssText='\
position:fixed;\
bottom:20px;\
right:5px;\
background-color:blue;\
padding:5px 7px;\
cursor:pointer;\
color:white;\
border:none;\
font-size:18px;\
box-shadow: 0px 1px 11px 3px white;\
width:30px;\
height:30px;\
border-radius:50%'
document.onscroll=function(){
    if(window.scrollY >= 200)
    {
    btn.style.display='block';
    }
    else{
        btn.style.display='none'
    }
}
btn.onclick=()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth',
    })
}