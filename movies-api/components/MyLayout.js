//This code defines a React functional component called "Layout" which is used as a layout wrapper around other components.
//It imports two components: "Head" from the "next/head" module and "Navbar" from a local file.
//The component renders a "Head" component with a title, a "Navbar" component, and a "mainDiv" component that has some CSS styles applied to it through a JSX style tag.
//The "mainDiv" component wraps around the "props.children" property which will render any children passed to the component.
//Finally, the component is exported as a default export.

import Head from "next/head";
import Navbar from "./Navbar";

const Layout = (props) => (
    <div>
        <Head>
            <title>Star Wars</title>
        </Head>
        <Navbar />
        <div className='mainDiv'>
            <div className='displayItems'>{props.children}</div>
        </div>

        <style jsx>
            {`
				.displayItems {
					padding-top: 8rem;
					text-align: center;
					font-family: "Neucha", -apple-system, system-ui, BlinkMacSystemFont,
						"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
				}
				.mainDiv {
					-webkit-background-size: cover;
					-moz-background-size: cover;
					-o-background-size: cover;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
					width: 100vw;
					height: 100vh;
				}
			`}
        </style>
    </div>
);

export default Layout;