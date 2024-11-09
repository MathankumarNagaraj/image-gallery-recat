
import one from "../assets/images/image.png"
import two from "../assets/images/image copy.png"
import three from "../assets/images/image copy 2.png"
import nine from "../assets/images/image copy 3.png"
import five from "../assets/images/image copy 4.png"
import six from "../assets/images/image copy 5.png"
import seven from "../assets/images/image copy 6.png"
import eight from "../assets/images/image copy 8.png"
import  four from "../assets/images/cheeta.jpg"
import  ten from "../assets/images/giraffe.jpg"




function Container() {
    return (
        <div>

            <div className="container">

                <div className="image__container">
                    <img src={one} alt=" Lion "></img>
                    <h2>Lion</h2>
                </div>

                <div className="image__container">
                    <img src={two} alt=" Tiger "></img>
                    <h2>Tiger</h2>
                </div>

                <div className="image__container">
                    <img src={three} alt=" Elephant "></img>
                    <h2>Elephant</h2>
                </div>

                <div className="image__container">
                    <img src={nine} alt=" Wolf "></img>
                    <h2>Wolf</h2>
                </div>

                <div className="image__container">
                    <img src={five} alt="Cat"></img>
                    <h2>Cat</h2>
                </div>

                <div className="image__container">
                    <img src={six} alt=" Dog"></img>
                    <h2>Dog</h2>
                </div>

                <div className="image__container">
                    <img src={seven} alt=" Rabit"></img>
                    <h2>Rabit</h2>
                </div>

                <div className="image__container">
                    <img src={eight} alt=" Cow "></img>
                    <h2>Cow</h2>
                </div>

                <div className="image__container">
                    <img src={four} alt=" cheeta "></img>
                    <h2>cheeta</h2>
                </div>

                <div className="image__container">
                    <img src={ten} alt="Giraffe"></img>
                    <h2>Giraffe</h2>
                </div>

            </div>




        </div>
    )
}


export default Container
