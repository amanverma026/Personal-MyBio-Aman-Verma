import picture from './amanverma.jpg'
import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className='main-home-cont'>
            <h1 className='Name-heading'>Aman Verma</h1>
            <div className='cont2-home'>
                <p className='cont2-p2-home'>Seeking a challenging position in a reputable organization to expand and utilize my learning, skills and knowledge. Possess excellent communication skills and have an eye for detail. Flexible to work in any environment as required.
                </p>
            </div>
            <div className='cont3-pic-home'>
                <img src={picture} className="picture-cont" alt="logo" />
                <div className='cont4-main-votes'>
                    <p className=''><a className="a-cont4-votes" href="./"> 6,873 tweets all time</a></p>
                    <p className=''><a className="a-cont4-votes" href="./">5,278 stars onthis repo</a></p>
                    <p className=''><a className="a-cont4-votes" href="./"> 1,609,099 blog views all time</a></p>
                </div>
            </div>
            <div>Expert in developing Responsive & Interactive websites|Expert in CSS3, HTML5, Bootstrap,React js|Very good knowledge of AMP, JavaScript, and JQuer.</div>
            <div className='follow-cont5-home'>
                <div className="div-follow-cont5"><Link className="a-div-follow-cont5" target={'_blank'} to={"https://www.linkedin.com/in/aman-verma-401158237"}>&#10149; Linkedin</Link></div>
                <div className="div-follow-cont5"><Link className="a-div-follow-cont5" target={'_blank'} to={"https://www.vermajiaman02@gmail.com"}>&#10149; Email</Link></div>
                <div className="div-follow-cont5"><Link className="a-div-follow-cont5" target={'_blank'} to={"https://github.com/amanverma026"}>&#10149; Github</Link></div>
            </div>
        </div>
    );
}
export default Home;
