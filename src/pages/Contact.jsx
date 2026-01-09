import { useTranslation } from 'react-i18next';
import { Mail, Facebook, Instagram, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div>
            {/* Hero Section - More Prominent */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full mb-6">
                            <span className="text-primary font-semibold text-sm">✨ {t('contact.badge')}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {t('contact.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            {t('contact.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center space-x-2 text-primary">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white">{t('contact.feature1')}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-primary">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-white">{t('contact.feature2')}</span>
                            </div>
                        </div>
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
                                <div className="mb-6">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Mail className="w-4 h-4 text-primary-darker" />
                                        <p className="text-sm font-semibold text-gray-700">{t('contact.email')}</p>
                                    </div>
                                    <a
                                        href="mailto:hola.colombiaservices@gmail.com"
                                        className="text-gray-800 hover:text-primary-darker transition-colors break-all ml-6"
                                    >
                                        hola.colombiaservices@gmail.com
                                    </a>
                                </div>

                                {/* Facebook */}
                                <div className="mb-6">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Facebook className="w-4 h-4 text-primary-darker" />
                                        <p className="text-sm font-semibold text-gray-700">{t('contact.facebook')}</p>
                                    </div>
                                    <p className="text-gray-800 ml-6">
                                        Hola Colombia Services
                                        <span className="text-gray-400 text-sm ml-2">{t('contact.facebookStatus')}</span>
                                    </p>
                                </div>

                                {/* Instagram */}
                                <div className="mb-8">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Instagram className="w-4 h-4 text-primary-darker" />
                                        <p className="text-sm font-semibold text-gray-700">{t('contact.instagram')}</p>
                                    </div>
                                    <p className="text-gray-800 ml-6">
                                        @holacolombiaservices
                                        <span className="text-gray-400 text-sm ml-2">{t('contact.instagramStatus')}</span>
                                    </p>
                                </div>

                                {/* Location */}
                                <div className="pt-6 border-t border-gray-100">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <MapPin className="w-4 h-4 text-primary-darker" />
                                        <p className="text-sm font-semibold text-gray-700">Location</p>
                                    </div>
                                    <p className="text-gray-800 ml-6">
                                        Barranquilla, Colombia
                                    </p>
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
