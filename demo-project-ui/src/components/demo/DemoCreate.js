import {useState} from "react";

export function DemoCreatePage(props) {
    // const [name, setName] = useState("")
    // const [number, setNumber] = useState("")
    // const [demoType, setDemoType] = useState("");
    // const [error, setError] = useState(false);
    //
    // const clear = () => {
    //     setName("")
    //     setNumber("")
    //     setDemoType("")
    // }
    //
    // const applyResult = (result) => {
    //     if (result.ok) {
    //         clear();
    //     }
    //     else {
    //         result.text().then(text => {
    //             const response = JSON.parse(text);
    //             setError(response.message)
    //         }).catch(error => {
    //             setError("Something bad happened: ", error);
    //         });
    //     }
    // }
    //
    // const createDemo = () => {
    //     setError(false);
    //     if (!name) {
    //         setError("Please complete the name");
    //     } else {
    //         fetch('/api/v1/demos/create-demo', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 headline,
    //                 text
    //             })
    //         }).then(applyResult)
    //     }
    // }

    return (
        <div>
            {/*<h1>New Entry</h1>*/}
            {/*<div>*/}
            {/*    <label htmlFor="headline">Headline </label>*/}
            {/*    <input*/}
            {/*        required*/}
            {/*        className={error ? 'error' : ''}*/}
            {/*        id="headline"*/}
            {/*        variant="outlined"*/}
            {/*        value={headline}*/}
            {/*        onChange={*/}
            {/*            (e) => setHeadline(e.target.value)*/}
            {/*        } />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <label htmlFor="text">Text </label>*/}
            {/*    <textarea*/}
            {/*        id="text"*/}
            {/*        value={text}*/}
            {/*        onChange={*/}
            {/*            (e) => setText(e.target.value)*/}
            {/*        } />*/}
            {/*</div>*/}
            {/*{error && <div className="errorText">{error}</div>}*/}
            {/*<div>*/}
            {/*    <button onClick={createBlog}>Create</button>*/}
            {/*</div>*/}
        </div>
    )
}