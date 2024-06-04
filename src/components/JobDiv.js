export default function JobDiv (props){
    let name = props.name;
    let link = props.link;

    return(
        <div id="testing" className="rounded-lg bg-gray-400 text-white w-full h-16 p-2 underline m-4">
            <a href={link}>{name}</a>
        </div>
    )
}