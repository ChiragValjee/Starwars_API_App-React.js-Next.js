//This is a React component that renders a page with information about a Star Wars movie.
//It imports several modules, including a custom layout component, a data fetching library, and a component for creating links.
//The component receives a "data" object as a prop, which contains information about a specific movie.
//It uses this data to display the movie's title, release date, director, producer, and opening crawl.
//It also includes a button that links back to the homepage of the website.
//The "getInitialProps" method is used to fetch the data for the movie using the URL passed in through the context.
//Finally, the component defines some CSS styles using the "styled-jsx" library.

import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import Link from "next/link";

const InfoPage = ({ data }) => {
    return (
        <Layout>
            <div className='landingPG'>
                <h1 className='welcomeHeading'>{data.title}</h1>
                <br />
                <ul className='moreInfo'>
                    <li>Episode: {data.episode_id}</li>
                    <li>Release Date: {data.release_date}</li>
                    <li>Director: {data.director}</li>
                    <li>Producer: {data.producer}</li>
                </ul>
                <br />
                <p className=' container movieDescription'>{data.opening_crawl}</p>
            </div>
            <div>
                <div className='buttonImage'>
                    <Link href='/'>
                            <img src='/death_star.png' alt='' />
                    </Link>
                </div>
            </div>
            <style jsx>{`
				.welcomeHeading {
					font-weight: bolder;
					font-size: 72px;
					text-shadow: 6px 1px #fff;
				}
				.movieTitle {
					font-weight: 600;
					font-size: 30px;
				}
				.movieDescription {
					text-align: center;
					font-size: 27px;
					width: 950px;
				}
				ul {
					list-style-type: none;
					font-size: 28px;
				}
				.backButton img {
					height: 64px;
				}
				.buttonImage:hover {
					-webkit-transform: scaleX(-1);
					transform: scaleX(-1);
				}
			`}</style>
        </Layout>
    );
};

InfoPage.getInitialProps = async function (context) {
    const { id } = context.query;
    const newID = id.replace("http://", "");
    const res = await fetch(`${newID}`);
    const data = await res.json();
    return { data };
};

export default InfoPage;