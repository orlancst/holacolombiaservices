import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/40 to-primary/10 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            {t('contact.title')}
                        </h1>
                        <p className="text-xl text-gray-600">
                            {t('contact.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-24">
                                <h2 className="text-xl font-bold text-gray-800 mb-6">
                                    {t('contact.infoTitle')}
                                </h2>

                                {/* Email */}
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">📧</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{t('contact.email')}</p>
                                        <a
                                            href="mailto:hola.colombiaservices@gmail.com"
                                            className="text-gray-800 font-medium hover:text-primary-darker transition-colors break-all"
                                        >
                                            hola.colombiaservices@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Facebook */}
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">📘</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{t('contact.facebook')}</p>
                                        <p className="text-gray-800 font-medium">
                                            Hola Colombia Services
                                            <span className="text-gray-400 text-sm ml-2">{t('contact.facebookStatus')}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Instagram */}
                                <div className="flex items-start space-x-4 mb-8">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">📷</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{t('contact.instagram')}</p>
                                        <p className="text-gray-800 font-medium">
                                            @holacolombiaservices
                                            <span className="text-gray-400 text-sm ml-2">{t('contact.instagramStatus')}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="pt-6 border-t border-gray-100">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl">📍</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Location</p>
                                            <p className="text-gray-800 font-medium">
                                                Barranquilla, Colombia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                    {t('contact.formTitle')}
                                </h2>
                                <p className="text-gray-600 mb-2">{t('contact.formIntro')}</p>
                                <div className="inline-flex items-center px-4 py-2 bg-yellow-50 text-yellow-800 rounded-lg text-sm">
                                    <span className="mr-2">⚠️</span>
                                    {t('contact.formNote')}
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
