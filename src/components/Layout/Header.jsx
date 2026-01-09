import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import logo from '../../assets/holacolombialogo.png';

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', label: t('nav.home') },
        { path: '/about', label: t('nav.about') },
        { path: '/services', label: t('nav.services') },
        { path: '/spanish-classes', label: t('nav.spanishClasses') },
        { path: '/languages', label: t('nav.languages') },
        { path: '/carnival', label: t('nav.carnival') },
        { path: '/tourism', label: t('nav.tourism') },
        { path: '/request-service', label: t('nav.contact') },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src={logo}
                            alt="Hola Colombia Services"
                            className="h-8 lg:h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)
                                    ? 'bg-primary text-gray-800'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Language Switcher & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <LanguageSwitcher />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.path)
                                        ? 'bg-primary text-gray-800'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
