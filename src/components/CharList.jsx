import CharacterCard from "./Charactercard";
import data from "../assets/data.json";

const CharList =({data})=>{
return (
    <div>
{data.map((char, index) =>{
return(
    <CharacterCard key={index}{...data} />
)


})}

    </div>
)


}

export default CharList