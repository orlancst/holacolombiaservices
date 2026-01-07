import { useTranslation } from 'react-i18next';
import WhyHireInterpreter from '../components/WhyHireInterpreter';

const About = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/40 to-primary/10 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            {t('about.title')}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {t('about.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {t('about.description')}
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {t('about.missionTitle')}
                                        </h3>
                                        <p className="text-gray-600">
                                            {t('about.missionText')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">❤️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {t('about.approachTitle')}
                                        </h3>
                                        <p className="text-gray-600">
                                            {t('about.approachText')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://placehold.co/600x400/c3e3fd/1f2937/png?text=Our+Team"
                                alt="Our Team"
                                className="rounded-2xl shadow-xl"
                            />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            {t('about.teamTitle')}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t('about.teamText')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center">
                                <img
                                    src={`https://placehold.co/200x200/c3e3fd/1f2937/png?text=Team+${i}`}
                                    alt={`Team member ${i}`}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="font-semibold text-gray-800 mb-1">Team Member {i}</h3>
                                <p className="text-sm text-gray-500">Interpreter</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Hire Section */}
            <WhyHireInterpreter />
        </div>
    );
};

export default About;
