import React, { useState } from 'react';
import Header from '../layout/header/Header';
import Main from '../main/Main';
import Footer from '../layout/footer/Footer';

const Home = () => {
    const [nameOfTab, setNameOfTab] = useState("Data & Technology");
    const [nameOfClass, setNameOfClass] = useState("first-circle");
    const [nameOfFooterTab, setNameOfFooterTab] = useState("Solutions");
    // State For Header Part
    const [firstCircleColor, setFirstCircleColor] = useState({ backgroundColor: "#00D1B4" });
    const [secondCircleColor, setSecondCircleColor] = useState({ backgroundColor: "#b8bdc1" });
    const [thirdCircleColor, setThirdCircleColor] = useState({ backgroundColor: "#b8bdc1" });
    const [fourthCircleColor, setFourthCircleColor] = useState({ backgroundColor: "#b8bdc1" });
    // State For Footer Part
    const [firstFooterTextColor, setFirstFooterTextColor] = useState({ color: "gray" });
    const [secondFooterTextColor, setSecondFooterTextColor] = useState({ color: "#000" });
    const [thirdFooterTextColor, setThirdFooterTextColor] = useState({ color: "#000" });
    const [fourthFooterTextColor, setFourthFooterTextColor] = useState({ color: "#000" });

    const handleMainContent = (e) => {
        if (e.target.className === "first-circle" || e.target.className === "second-circle" || e.target.className === "third-circle" || e.target.className === "fourth-circle") {
            setNameOfClass(e.target.className);
            setNameOfTab(e.target.innerText);
            setNameOfFooterTab(e.target.innerText);

            if (e.target.className === "first-circle") {
                // For Header Text Part
                setFirstCircleColor({ backgroundColor: "#00D1B4" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setFirstCircleColor({ backgroundColor: "#00D1B4" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setFirstFooterTextColor({ color: "gray" });
                setSecondFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.className === "second-circle") {
                // For Header Text Part
                setSecondCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setSecondCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setSecondFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.className === "third-circle") {
                // For Header Text Part
                setThirdCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setThirdCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setThirdFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setSecondFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.className === "fourth-circle") {
                // For Header Text Part
                setFourthCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setFourthCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setFourthFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setSecondFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
            }
        } else if (e.target.innerText === "Data & Technology" || e.target.innerText === "Accounting & Finance" || e.target.innerText === "Ecommerce" || e.target.innerText === "Modern Web App") {
            setNameOfTab(e.target.innerText);
            setNameOfClass(e.target.className);
            setNameOfFooterTab(e.target.innerText);

            if (e.target.innerText === "Data & Technology") {
                // For Header Text Part
                setFirstCircleColor({ backgroundColor: "#00D1B4" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setFirstCircleColor({ backgroundColor: "#00D1B4" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setFirstFooterTextColor({ color: "gray" });
                setSecondFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.innerText === "Accounting & Finance") {
                // For Header Text Part
                setSecondCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setSecondCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setSecondFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.innerText === "Ecommerce") {
                // For Header Text Part
                setThirdCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setThirdCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setThirdFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setSecondFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.innerText === "Modern Web App") {
                // For Header Text Part
                setFourthCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setFourthCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setFourthFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setSecondFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
            }
        } else if (e.target.innerText === "Solutions" || e.target.innerText === "Services" || e.target.innerText === "Consulting" || e.target.innerText === "Training") {
            setNameOfFooterTab(e.target.innerText);
            setNameOfTab(e.target.innerText);
            setNameOfClass(e.target.className);

            if (e.target.innerText === "Solutions") {
                // For Header Text Part
                setFirstCircleColor({ backgroundColor: "#00D1B4" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setFirstCircleColor({ backgroundColor: "#00D1B4" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setFirstFooterTextColor({ color: "gray" });
                setSecondFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.innerText === "Services") {
                // For Header Text Part
                setSecondCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setSecondCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setSecondFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.innerText === "Consulting") {
                // For Header Text Part
                setThirdCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setThirdCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setFourthCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setThirdFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setSecondFooterTextColor({ color: "#000" });
                setFourthFooterTextColor({ color: "#000" });
            } else if (e.target.innerText === "Training") {
                // For Header Text Part
                setFourthCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });

                // For Header Circle Part
                setFourthCircleColor({ backgroundColor: "#00D1B4" });
                setFirstCircleColor({ backgroundColor: "#b8bdc1" });
                setSecondCircleColor({ backgroundColor: "#b8bdc1" });
                setThirdCircleColor({ backgroundColor: "#b8bdc1" });

                // For Footer Part
                setFourthFooterTextColor({ color: "gray" });
                setFirstFooterTextColor({ color: "#000" });
                setSecondFooterTextColor({ color: "#000" });
                setThirdFooterTextColor({ color: "#000" });
            }
        }
    }

    return (
        <div id="home">
            <div className="container">
                <Header
                    handleMainContent={handleMainContent}
                    firstCircleColor={firstCircleColor}
                    secondCircleColor={secondCircleColor}
                    thirdCircleColor={thirdCircleColor}
                    fourthCircleColor={fourthCircleColor}
                />

                <Main
                    nameOfTab={nameOfTab}
                    nameOfClass={nameOfClass}
                    nameOfFooterTab={nameOfFooterTab}
                />

                <Footer
                    handleMainContent={handleMainContent}
                    firstFooterTextColor={firstFooterTextColor}
                    secondFooterTextColor={secondFooterTextColor}
                    thirdFooterTextColor={thirdFooterTextColor}
                    fourthFooterTextColor={fourthFooterTextColor}
                />
            </div>
        </div>
    );
}

export default Home;
