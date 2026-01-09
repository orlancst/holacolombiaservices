import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ServiceCard from '../components/ServiceCard';
import WhyHireInterpreter from '../components/WhyHireInterpreter';

const Home = () => {
    const { t } = useTranslation();

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'sign', name: 'Sign Language', flag: '🤟' },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary via-primary/80 to-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-400 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                                {t('hero.title')}
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                                {t('hero.subtitle')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/request-service"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {t('hero.cta')}
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md"
                                >
                                    {t('hero.learnMore')}
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img
                                src="https://placehold.co/600x400/c3e3fd/1f2937/png?text=Barranquilla"
                                alt="Barranquilla"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        {t('home.welcomeTitle')}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {t('home.welcomeText')}
                    </p>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        {t('home.featuredServices')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <ServiceCard
                            icon="🏥"
                            title={t('home.medicalTitle')}
                            description={t('home.medicalDesc')}
                            featured={true}
                            linkTo="/services"
                        />
                        <ServiceCard
                            icon="📘"
                            title={t('home.spanishTitle')}
                            description={t('home.spanishDesc')}
                            featured={true}
                            linkTo="/spanish-classes"
                        />
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            to="/services"
                            className="inline-flex items-center text-primary-darker hover:text-primary-dark font-semibold transition-colors"
                        >
                            {t('home.allServices')}
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Hire Section */}
            <WhyHireInterpreter />

            {/* Languages Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        {t('home.languagesTitle')}
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        {t('home.languagesText')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {languages.map((lang) => (
                            <div
                                key={lang.code}
                                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full"
                            >
                                <span className="text-xl">{lang.flag}</span>
                                <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('home.ctaTitle')}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('home.ctaText')}
                    </p>
                    <Link
                        to="/request-service"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-gray-800 font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg"
                    >
                        {t('home.ctaButton')}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
