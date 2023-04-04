//This is a React functional component that renders a Navbar with a link to the Home page using Next.js's Link component.
//The Navbar is styled using Bootstrap classes and also has custom CSS styles for positioning and font.
//The component is exported as a default export for use in other modules.

import Link from "next/link";

const Navbar = () => (
    <nav className='navbar navbar-expand navbar-dark bg-dark mb-4'>
        <div className='container'>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link href='/'>
                            <h4 className='nav-link'>Home</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <style jsx>
            {`
				nav {
					position: fixed;
					width: 100%;
					z-index: 9999;
					font-family: "Neucha", -apple-system, system-ui, BlinkMacSystemFont,
						"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
				}
			`}
        </style>
    </nav>
);

export default Navbar;