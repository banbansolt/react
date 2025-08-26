import React from "react";
import Book from "./Book";

function Library() {
    return(
        <div>
            <Book name="처음 만난 리액트 2편" totalPage={300}/>
            <Book name="처음 만난 Next.js" totalPage={250}/>
            <Book name="처음 만난 AWS" totalPage={320}/>
        </div>
    );
}

export default Library;