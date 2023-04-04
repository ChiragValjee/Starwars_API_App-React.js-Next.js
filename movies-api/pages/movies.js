//This code defines a React functional component called "Movies" that fetches movie data from the Star Wars API and displays it on the webpage using Next.js.
//It imports the Link component from Next.js, the fetch function from isomorphic-unfetch, and the Layout component from a local file called "MyLayout.js".
//The component renders a div with a title and some introductory text, followed by a list of movies fetched from the API.
//Each movie title is a link that, when clicked, leads to a page with more detailed information about the movie.
//The styling for the component is defined using inline CSS.
//The function "getInitialProps" is used to fetch the movie data during server-side rendering.

import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";

const Movies = ({ data }) => {
    return (
        <Layout>
            <div className='landingPG'>
                <h1 className='welcomeHeading'>Star Wars Movie Info</h1>
                <br />
                <h3 className='infoHeading'>
                    Use the APP to learn or expand your knowldege of all thing Star Wars
                    Movie Related
                </h3>
                <br />
                <h4 className='infoSection'>
                    You can view items relating to the movies listed below
                </h4>
                <br />
                <ul>
                    {data.results.map((result) => (
                        <li key={result.episode_id}>
                            <Link
                                as={`/info/${result.title.replace(/\s+/g, "-").toLowerCase()}`}
                                href={`/info/?id=http://${result.url}`}
                            >
                                <h2>{result.title}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
				.welcomeHeading {
					font-weight: bolder;
					font-size: 72px;
					text-shadow: 6px 1px #fff;
				}
				.infoHeading {
					font-weight: 600;
				}
				.infoSection {
				}
				ul {
					list-style-type: none;
					font-size: 28px;
					display: inline;
				}
			`}</style>
        </Layout>
    );
};

Movies.getInitialProps = async function () {
    const res = await fetch(`https://swapi.dev/api/films/`);
    const data = await res.json();
    return {
        data,
    };
};

export default Movies;