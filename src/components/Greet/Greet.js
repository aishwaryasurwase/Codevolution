// const greet = (props) => <h1>Welcome {props.name}</h1> 
// export default greet;
export const Greet = (props) => {
    return (
        <div><p>{props.name} want to go {props.location}</p>
            <p>{props.children}</p></div>)
}