import React from "react";
import Book from "./Book";

function Library(props) {
    return(
        <div>
            <Book name="처음 만난 리액트 2판" totalPage={300}/>
            <Book name="처음 만난 Next.js" totalPage={250}/>
            <Book name="처음 만난 AWS" totalPage={330}/>
        </div>
    );
}

export default Library;