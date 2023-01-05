import React from "react";

const Home = (props) => {
    console.log(props)
    return (
        <div className="homeContainer">
            <h1 className="title">Aphrodite, Venus & Helen</h1>
            <p className="welcome">Welcome to the world of beauty and spa.</p>
            <div className="preview">
                <img className="prevImg" src="/pic4.jpeg"></img>
                <img className="prevImg" src="/pic3.jpeg"></img>
                <img className="prevImg" src="/pic6.jpeg"></img>
            </div>
        </div>
    )
}

export default Home