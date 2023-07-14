import React from "react";

const date = new Date().getFullYear();

export default function Footer(){
    return <div className="footer">
        <p>Copyright ⓒ {date}</p>
    </div>
}