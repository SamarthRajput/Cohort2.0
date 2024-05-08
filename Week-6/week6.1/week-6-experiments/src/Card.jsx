//Real wrapper
function Card(){
    return <div>
    <CardWrapper>
        Hi there
    </CardWrapper>
    <CardWrapper>
        <TextComponent/>
    </CardWrapper>
    </div>
}
//CardWrapper needs to accept some react component as an input and then render the react component here inside some extra style (background,boxshadow etc)
//CardWrapper accept children as an input and just going to render all of those childrens as such inside a div 
function CardWrapper({children}){
    //Create a div which has a border (hint: he way to create a border is border:"2px solid black";)
    //and inside the div renders the prop
    return <div style={{border:"2px solid black", padding: 20}}>
           {children}
        </div>
}

function TextComponent(){
    return <div>
        Hi there from TextComponent
    </div>
}

export default Card