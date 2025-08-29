import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Axivora Edge Tech</h1>
                <p>Your partner in digital transformation.</p>
            </header>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>At Axivora Edge Technologies, we specialize in DevOps, software development, and data analysis.</p>
                </section>
                <section>
                    <h2>Our Services</h2>
                    <ul>
                        <li>DevOps Solutions</li>
                        <li>Custom Software Development</li>
                        <li>Data Analysis and Insights</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Axivora Edge Technologies. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;