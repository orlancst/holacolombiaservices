import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Languages = () => {
    const { t } = useTranslation();

    const scheduledLanguages = [
        { flag: '🇧🇷', name: t('languages.portuguese') },
        { flag: '🇫🇷', name: t('languages.french') },
        { flag: '🇩🇪', name: t('languages.german') },
        { flag: '🇨🇳', name: t('languages.chinese') },
        { flag: '🤟', name: t('languages.signLanguage') },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/40 to-primary/10 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            {t('languages.title')}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {t('languages.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Primary Language */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            {t('languages.primaryTitle')}
                        </h2>
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-12 border-2 border-primary-darker">
                            <span className="text-6xl mb-4 block">🇺🇸</span>
                            <h3 className="text-3xl font-bold text-gray-800 mb-3">English</h3>
                            <p className="text-gray-700 text-lg">
                                {t('languages.primaryText')}
                            </p>
                            <div className="mt-6 inline-flex items-center px-4 py-2 bg-white/50 rounded-full text-green-700 font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                Available Now
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scheduled Languages */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            {t('languages.scheduledTitle')}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {t('languages.scheduledText')}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                        {scheduledLanguages.map((lang, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                            >
                                <span className="text-4xl mb-3 block">{lang.flag}</span>
                                <p className="font-medium text-gray-800 text-sm">{lang.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
                            <div className="flex items-start space-x-4">
                                <span className="text-4xl">⚠️</span>
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-800 mb-3">
                                        {t('languages.noticeTitle')}
                                    </h3>
                                    <p className="text-yellow-700">
                                        {t('languages.noticeText')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">{t('home.ctaTitle')}</h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-gray-800 font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300"
                    >
                        {t('common.contactUs')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Languages;
