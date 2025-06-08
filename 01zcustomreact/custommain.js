function customrender(obj,container){
    const element=document.createElement(obj.type);
    element.innerHTML=obj.children;
    //element.setAttribute('href',obj.props.href);
    //element.setAttribute('target',obj.props.target);
    
    for(const prop in obj.props){
        if(prop=='children')continue;
        element.setAttribute(prop,obj.props[prop]);
    }
    container.appendChild(element);
}
//like div ,p etc the tag goes in function APP ,how reacgt see..
const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"CLICK ME"
}


//like root selection in main.js
const mainContainer=document.getElementById("root");


//The app function...
customrender(reactElement,mainContainer);