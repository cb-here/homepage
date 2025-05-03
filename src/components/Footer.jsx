const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 md:gap-20">
                    <div className="lg:w-1/4">
                        <img 
                            src="https://res.cloudinary.com/da3yl4ysb/image/upload/v1742903364/green_logo_764eb09342.png" 
                            alt="Company logo" 
                            className="w-32 md:w-40 mb-4 md:mb-6"
                        />
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            We are the leading real estate and marketplace dedicated to affordable land deals.
                        </p>
                    </div>

                    <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 md:mb-4">Company</h3>
                            <ul className="space-y-2 md:space-y-3">
                                {['Home', 'Properties', 'About Us', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href="/" 
                                            className="text-gray-600 font-semibold hover:text-green-500 transition-colors text-sm hover:underline  md:text-base"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 md:mb-4">Support</h3>
                            <ul className="space-y-2 md:space-y-3">
                                {['Contact', 'Terms & Policy', 'Privacy', 'Cookies'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href="/" 
                                            className="text-gray-600 font-semibold hover:text-green-500 transition-colors text-sm hover:underline  md:text-base"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 md:mb-4">Country</h3>
                            <ul className="space-y-2 md:space-y-3">
                                {['India', 'USA'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href="/" 
                                            className="text-gray-600 font-semibold hover:text-green-500 transition-colors text-sm hover:underline  md:text-base"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 md:mb-4">State</h3>
                            <ul className="space-y-2 md:space-y-3">
                                {['Texas', 'UP', 'CA', 'NM'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href="/" 
                                            className="text-gray-600 font-semibold hover:text-green-500 transition-colors text-sm hover:underline  md:text-base"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 md:mb-4">Zip Code</h3>
                            <ul className="space-y-2 md:space-y-3">
                                {['10101', '10102', '10103', '10104', '10105', '10106', '10107'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href="/" 
                                            className="text-gray-600 hover:text-green-500 transition-colors text-sm hover:underline font-semibold md:text-base"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
                        {[
                            { name: 'Instagram', url: 'https://instagram.com' },
                            { name: 'Facebook', url: 'https://facebook.com' },
                            { name: 'YouTube', url: 'https://youtube.com' },
                            { name: 'LinkedIn', url: 'https://linkedin.com' }
                        ].map((social) => (
                            <a 
                                key={social.name}
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-green-500 transition-colors px-3 py-1 text-sm md:text-base bg-green-100 rounded-2xl"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;