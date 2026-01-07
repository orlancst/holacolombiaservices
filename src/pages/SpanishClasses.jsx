import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SpanishClasses = () => {
    const { t } = useTranslation();

    const classes = [
        {
            icon: '🆘',
            title: t('spanishClasses.survivalTitle'),
            desc: t('spanishClasses.survivalDesc'),
            topics: ['Markets', 'Transportation', 'Restaurants', 'Emergencies'],
        },
        {
            icon: '🏠',
            title: t('spanishClasses.dailyTitle'),
            desc: t('spanishClasses.dailyDesc'),
            topics: ['Daily routines', 'Shopping', 'Social interactions', 'Services'],
        },
        {
            icon: '💬',
            title: t('spanishClasses.conversationalTitle'),
            desc: t('spanishClasses.conversationalDesc'),
            topics: ['Natural conversations', 'Cultural topics', 'Fluency practice', 'Idiomatic expressions'],
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/40 to-primary/10 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            {t('spanishClasses.title')}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {t('spanishClasses.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Class Types */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {classes.map((classItem, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <span className="text-5xl mb-6 block">{classItem.icon}</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{classItem.title}</h3>
                                <p className="text-gray-600 mb-6">{classItem.desc}</p>
                                <div className="space-y-2">
                                    {classItem.topics.map((topic, i) => (
                                        <div key={i} className="flex items-center text-sm text-gray-500">
                                            <svg className="w-4 h-4 mr-2 text-primary-darker" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {topic}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modalities */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        {t('spanishClasses.modalityTitle')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">👨‍🏫</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {t('spanishClasses.inPerson')}
                            </h3>
                            <p className="text-gray-600">
                                {t('spanishClasses.inPersonDesc')}
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {t('spanishClasses.online')}
                            </h3>
                            <p className="text-gray-600">
                                {t('spanishClasses.onlineDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <img
                            src="https://placehold.co/600x400/c3e3fd/1f2937/png?text=Spanish+Class"
                            alt="Spanish Class"
                            className="rounded-2xl shadow-xl"
                        />
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                {t('spanishClasses.ctaTitle')}
                            </h2>
                            <p className="text-gray-600 mb-8">
                                {t('spanishClasses.survivalDesc')}
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300"
                            >
                                {t('spanishClasses.ctaButton')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpanishClasses;
