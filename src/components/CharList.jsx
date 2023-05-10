import CharacterCard from "./Charactercard";


const CharList =({data})=>{
return (
    <div>
{data.map((char, index) =>{
return(
    <CharacterCard key={index}{...char} />
)


})}

    </div>
)


}

export default CharList