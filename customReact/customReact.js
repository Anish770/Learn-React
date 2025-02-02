// function customRender(reactElement,container) {
//     const domEle=document.createElement(reactElement.type)
//     domEle.innerHTML=reactElement.children
//     domEle.setAttribute('href',reactElement.props.href)
//     domEle.setAttribute('target',reactElement.props.target)
//     container.appendChild(domEle)
// }
function customRender(reactElement,container) {
    const domEle=document.createElement(reactElement.type)
    domEle.innerHTML=reactElement.children
    for (const prop in reactElement.props)
        {
            if(prop==='children') continue;
            domEle.setAttribute(prop,reactElement.props[prop])
        }
    container.appendChild(domEle)
}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank"
    },
    children:'Click me to visit Google'

}
const mainContainer=document.getElementById('root')
customRender(reactElement,mainContainer)