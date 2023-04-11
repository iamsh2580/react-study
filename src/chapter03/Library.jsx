import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="백설공주" numOfPage={300}/>
            <Book name="신데렐라" numOfPage={400}/>
            <Book name="인어공주" numOfPage={500}/>
        </div>
    );
}

export default Library;