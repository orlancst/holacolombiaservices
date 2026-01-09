import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Tourism = () => {
    const { t } = useTranslation();

    const barranquillaAttractions = [
        { icon: '🌊', name: t('tourism.malecon'), desc: t('tourism.maleconDesc') },
        { icon: '🦁', name: t('tourism.zoo'), desc: t('tourism.zooDesc') },
        { icon: '🏛️', name: t('tourism.museo'), desc: t('tourism.museoDesc') },
        { icon: '💃', name: t('tourism.shakira'), desc: t('tourism.shakiraDesc') },
        { icon: '🦈', name: t('tourism.aleta'), desc: t('tourism.aletaDesc') },
        { icon: '🌍', name: t('tourism.ventana'), desc: t('tourism.ventanaDesc') },
    ];

    const atlanticAttractions = [
        { icon: '🏖️', name: t('tourism.puertoTitle'), desc: t('tourism.puertoDesc') },
        { icon: '🚂', name: t('tourism.muelle'), desc: t('tourism.muelleDesc') },
        { icon: '🌅', name: t('tourism.bocas'), desc: t('tourism.bocasDesc') },
        { icon: '🐦', name: t('tourism.cienagaMagdalena'), desc: t('tourism.cienagaMagdalenaDesc') },
        { icon: '🦩', name: t('tourism.cienagaMallorquin'), desc: t('tourism.cienagaMallorquinDesc') },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/40 to-primary/10 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            {t('tourism.title')}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {t('tourism.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Barranquilla Attractions */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-primary-darker rounded-full mr-3"></span>
                        {t('tourism.barranquillaTitle')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {barranquillaAttractions.map((attraction, index) => (
                            <div
                                key={index}
                                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <img
                                    src={`https://placehold.co/400x250/c3e3fd/1f2937/png?text=${encodeURIComponent(attraction.name)}`}
                                    alt={attraction.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-6">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <span className="text-2xl">{attraction.icon}</span>
                                        <h3 className="font-semibold text-gray-800">{attraction.name}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">{attraction.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Atlantic Attractions */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                        <span className="w-2 h-8 bg-primary-darker rounded-full mr-3"></span>
                        {t('tourism.atlanticTitle')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {atlanticAttractions.map((attraction, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                <img
                                    src={`https://placehold.co/400x250/c3e3fd/1f2937/png?text=${encodeURIComponent(attraction.name)}`}
                                    alt={attraction.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-6">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <span className="text-2xl">{attraction.icon}</span>
                                        <h3 className="font-semibold text-gray-800">{attraction.name}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">{attraction.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center">
                            <span className="text-6xl mb-4 block">🗺️</span>
                            <p className="text-gray-500">Map Placeholder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-6">{t('tourism.ctaTitle')}</h2>
                    <Link
                        to="/request-service"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-gray-800 font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300"
                    >
                        {t('tourism.ctaButton')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Tourism;
