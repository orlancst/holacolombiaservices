import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WhyHireInterpreter from '../components/WhyHireInterpreter';

const Services = () => {
    const { t } = useTranslation();

    const featuredServices = [
        { icon: '🏥', title: t('services.medicalTitle'), desc: t('services.medicalDesc') },
    ];

    const institutionalServices = [
        { icon: '🏦', title: t('services.bankingTitle'), desc: t('services.bankingDesc') },
        { icon: '⚖️', title: t('services.legalTitle'), desc: t('services.legalDesc') },
        { icon: '🏥', title: t('services.medicalTitle'), desc: t('services.medicalDesc') },
    ];

    const translationServices = [
        { icon: '📧', title: t('services.emailTitle'), desc: t('services.emailDesc') },
        { icon: '💬', title: t('services.whatsappTitle'), desc: t('services.whatsappDesc') },
        { icon: '📝', title: t('services.lettersTitle'), desc: t('services.lettersDesc') },
    ];

    const dailyServices = [
        { icon: '🏨', title: t('services.hotelsTitle'), desc: t('services.hotelsDesc') },
        { icon: '🍽️', title: t('services.restaurantsTitle'), desc: t('services.restaurantsDesc') },
        { icon: '🛍️', title: t('services.shoppingTitle'), desc: t('services.shoppingDesc') },
        { icon: '🔧', title: t('services.basicTitle'), desc: t('services.basicDesc') },
    ];

    const personalServices = [
        { icon: '💑', title: t('services.couplesTitle'), desc: t('services.couplesDesc') },
        { icon: '🎉', title: t('services.eventsTitle'), desc: t('services.eventsDesc') },
        { icon: '🎭', title: t('services.carnivalTitle'), desc: t('services.carnivalDesc') },
    ];

    const ServiceGrid = ({ services, cols = 3 }) => (
        <div className={`grid md:grid-cols-2 lg:grid-cols-${cols} gap-6`}>
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                    <span className="text-3xl mb-4 block">{service.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/40 to-primary/10 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            {t('services.title')}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {t('services.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-primary-darker rounded-full mr-3"></span>
                        {t('services.featured')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 border-2 border-primary-darker">
                            <span className="text-4xl mb-4 block">🏥</span>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('services.medicalTitle')}</h3>
                            <p className="text-gray-700 mb-4">{t('services.medicalDesc')}</p>
                            <Link
                                to="/request-service"
                                className="inline-flex items-center text-gray-800 font-semibold hover:underline"
                            >
                                {t('common.contactUs')}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 border-2 border-primary-darker">
                            <span className="text-4xl mb-4 block">📘</span>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{t('spanishClasses.title')}</h3>
                            <p className="text-gray-700 mb-4">{t('home.spanishDesc')}</p>
                            <Link
                                to="/spanish-classes"
                                className="inline-flex items-center text-gray-800 font-semibold hover:underline"
                            >
                                {t('common.learnMore')}
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Institutional Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-primary-darker rounded-full mr-3"></span>
                        {t('services.institutional')}
                    </h2>
                    <ServiceGrid services={institutionalServices} />
                </div>
            </section>

            {/* Non-Legal Translation */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-primary-darker rounded-full mr-3"></span>
                        {t('services.nonLegal')}
                    </h2>
                    <ServiceGrid services={translationServices} />
                    <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                        <p className="text-yellow-800 text-sm flex items-center">
                            <span className="text-lg mr-2">⚠️</span>
                            {t('services.noteLegal')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Daily Accompaniment */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-primary-darker rounded-full mr-3"></span>
                        {t('services.daily')}
                    </h2>
                    <ServiceGrid services={dailyServices} cols={4} />
                </div>
            </section>

            {/* Personal Interpretation */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-primary-darker rounded-full mr-3"></span>
                        {t('services.personal')}
                    </h2>
                    <ServiceGrid services={personalServices} />
                </div>
            </section>

            {/* Why Hire Section */}
            <WhyHireInterpreter />

            {/* CTA */}
            <section className="py-16 bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">{t('home.ctaTitle')}</h2>
                    <Link
                        to="/request-service"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-gray-800 font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300"
                    >
                        {t('common.contactUs')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
