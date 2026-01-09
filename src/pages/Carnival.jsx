import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WhyHireInterpreter from '../components/WhyHireInterpreter';

const Carnival = () => {
    const { t } = useTranslation();

    const events = [
        {
            name: t('carnival.guacherna'),
            date: t('carnival.guachernaDate'),
            desc: t('carnival.guachernaDesc'),
            emoji: '🌙',
        },
        {
            name: t('carnival.guachernaGay'),
            date: t('carnival.guachernaGayDate'),
            desc: t('carnival.guachernaGayDesc'),
            emoji: '🏳️‍🌈',
        },
        {
            name: t('carnival.kidsCarnaval'),
            date: t('carnival.kidsCarnavalDate'),
            desc: t('carnival.kidsCarnavalDesc'),
            emoji: '👶',
        },
        {
            name: t('carnival.officialWeek'),
            date: t('carnival.officialWeekDate'),
            desc: t('carnival.officialWeekDesc'),
            emoji: '🎭',
        },
    ];

    const services = [
        { icon: '🎭', title: t('carnival.culturalGuide'), desc: t('carnival.culturalGuideDesc') },
        { icon: '🗣️', title: t('carnival.interpretation'), desc: t('carnival.interpretationDesc') },
        { icon: '📅', title: t('carnival.dailyInfo'), desc: t('carnival.dailyInfoDesc') },
        { icon: '📚', title: t('carnival.history'), desc: t('carnival.historyDesc') },
        { icon: '🚗', title: t('carnival.transport'), desc: t('carnival.transportDesc') },
        { icon: '🛡️', title: t('carnival.security'), desc: t('carnival.securityDesc') },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-yellow-400 via-red-400 to-purple-500 py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center text-white">
                        <span className="text-6xl mb-6 block">🎭</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                            {t('carnival.title')}
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                            {t('carnival.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {t('carnival.intro')}
                            </p>
                        </div>
                        <img
                            src="https://placehold.co/600x400/fbbf24/1f2937/png?text=Carnival"
                            alt="Carnival of Barranquilla"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Events Schedule */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        {t('carnival.eventsTitle')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <span className="text-4xl mb-4 block">{event.emoji}</span>
                                <h3 className="font-bold text-gray-800 mb-1">{event.name}</h3>
                                <p className="text-primary-darker font-medium text-sm mb-3">{event.date}</p>
                                <p className="text-gray-600 text-sm">{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carnival Services */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                        {t('carnival.servicesTitle')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 border border-primary/30"
                            >
                                <span className="text-3xl mb-4 block">{service.icon}</span>
                                <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Hire Section */}
            <WhyHireInterpreter />

            {/* Gallery Placeholder */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <img
                                key={i}
                                src={`https://placehold.co/300x300/c3e3fd/1f2937/png?text=Carnival+${i}`}
                                alt={`Carnival ${i}`}
                                className="rounded-xl w-full aspect-square object-cover"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-yellow-500 to-red-500 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">{t('carnival.ctaTitle')}</h2>
                    <Link
                        to="/request-service"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
                    >
                        {t('carnival.ctaButton')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Carnival;
