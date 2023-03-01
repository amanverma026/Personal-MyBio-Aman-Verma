import './About.css'
function About(){
    return(
        <div className='main-home-cont'>
            <h1 className='Name-heading'>About Me</h1>
            <p>Hey, I'm Lee. Most folks know me as leerob online.</p>
            <p className='bottom-p2-about'>I'm currently the VP of Developer Experience at Vercel, where I lead our Developer Relations and Documentation teams. I focus on educating and growing the Vercel and Next.js communities</p>
            <div className='top-div1-main-about'>
                <div className='top-div1-inner-about'>I'm passionate about many creative pursuits, including music, photography, videography, and of course, coding. This combination of interests is what ultimately led me to my current role in building developer communities.</div>
                <div className='top-div1-inner-about'>I love building for the web. From something as simple as a single HTML file – all the way to large Next.js applications. The web is incredible. Anyone can become a developer, writer, or creator – and no one has to ask for permission. You can just build.</div>          
                <div className='top-div1-inner-about'>Outside of Vercel, I angel invest in developer tools companies and advise early-stage startups. I also do Developer Relations consulting work, helping companies take their DevRel function from 0 to 1, or provide guidance on growing communities, content creation, and developer marketing.</div>
            </div>
        </div>
    );
}
export default About;