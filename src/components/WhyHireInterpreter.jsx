import { useTranslation } from 'react-i18next';

const WhyHireInterpreter = () => {
    const { t } = useTranslation();

    const benefits = [
        { icon: '🛡️', text: t('whyHire.avoid') },
        { icon: '⚠️', text: t('whyHire.reduce') },
        { icon: '💬', text: t('whyHire.facilitate') },
        { icon: '🔒', text: t('whyHire.security') },
        { icon: '⭐', text: t('whyHire.improve') },
    ];

    return (
        <section className="bg-gradient-to-br from-primary/30 to-primary/10 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
                    {t('whyHire.title')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <span className="text-3xl mb-3 block">{benefit.icon}</span>
                            <p className="text-gray-700 text-sm font-medium">{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHireInterpreter;
