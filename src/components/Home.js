import picture from './amanverma.jpg'
import './Home.css';
function Home() {
    return (
        <div className='main-home-cont'>
            <h1 className='Name-heading'>Aman Verma</h1>
            <div className='cont2-home'>
                <p className='cont2-p2-home'>Hey, I'm Lee. I'm the VP of Developer Experience at Vercel where my team helps developers build a faster web.</p>
            </div>
            <div className='cont3-pic-home'>
                <img src={picture} className="picture-cont" alt="logo" />
                <div className='cont4-main-votes'>
                    <p className=''><a className="a-cont4-votes" href="./"> 6,873 tweets all time</a></p>
                    <p className=''><a className="a-cont4-votes" href="./">5,278 stars onthis repo</a></p>
                    <p className=''><a className="a-cont4-votes" href="./"> 1,609,099 blog views all time</a></p>
                </div>
            </div>
            <div>I'm a Next.js contributor and help lead our open-source communities. I'm passionate about frontend development and have created courses on React, Next.js, and web development. I'm an advisor and investor in early stage startups.</div>
            <div className='follow-cont5-home'>
                <div className="div-follow-cont5"><a className="a-div-follow-cont5" href="./">--&gt; follow me on twitter</a></div>
                <div className="div-follow-cont5"><a className="a-div-follow-cont5" href="./">--&gt; get email update</a></div>
            </div>
        </div>
    );
}
export default Home;
