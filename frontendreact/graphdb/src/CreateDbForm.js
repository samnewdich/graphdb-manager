import React, {useState} from 'react';
import $, { data } from 'jquery';
function Createdbform(){
    const [repoUrl, setRepoUrl] = useState('');
    const [namespace, setNamespace] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [output, setOutput] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {repo:{repoUrl}};
        //const data = {repoUrl, namespace, username, password};
        $.ajax({
            method:"GET",
            url:"http://127.0.0.1:8000/createdb/",
            data:JSON.stringify(data),
            contentType:"application/json",
            //Cache:false,
            success:function(response){
                setOutput(JSON.parse(response));
            },
        });
    };

    return(
        <div align='center'>
        <form onSubmit={handleSubmit}>
            <label>Repository URL: <input type='text' value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} /></label>
            <br/><hr/><br/>
            <label>Namespace: <input type='text' value={namespace} onChange={(e) => setNamespace(e.target.value)} /></label>
            <br/><hr/><br/>
            <label>Username: <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} /></label>
            <br/><hr/><br/>
            <label>Password: <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} /></label>
            <br/><hr/><br/>
            <button type='submit'>Create Database</button>
            <p>Database Created: {output}</p>
        </form>
        </div>
    );
}

export default Createdbform;