import React from "react";
import Book from "./Book";

const books = [
    {
        title: "다시 깊게 익히는 인사이드 리액트",
        author: "윤재원",
        coverImage: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791194383376.jpg"
    },
    {
        title: "그림으로 쉽게 배우는 HTML+CSS+자바스크립트",
        author: "임지영",
        coverImage: "https://image.yes24.com/goods/152847458/XL"
    },
    {
        title: "밑바닥부터 시작하는 웹 브라우저",
        author: "파벨 판체카",
        coverImage: "https://image.yes24.com/goods/153499985/XL"
    }
];

function BookList() {
    return(
        <div className={"bookListWrapper"}>
            {
                books.map((book)=>{
                    return(
                        <Book
                            title={book.title}
                            author={book.author}
                            coverImage={book.coverImage}
                        />
                    )
                })
            }
        </div>
    );
}

export default BookList;