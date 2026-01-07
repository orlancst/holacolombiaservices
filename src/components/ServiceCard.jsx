import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ icon, title, description, featured = false, linkTo = '/contact' }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${featured
                    ? 'bg-gradient-to-br from-primary to-primary-dark border-2 border-primary-darker'
                    : 'bg-white border border-gray-100 shadow-sm'
                }`}
        >
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className={`text-lg font-semibold mb-2 ${featured ? 'text-gray-800' : 'text-gray-800'}`}>
                {title}
            </h3>
            <p className={`text-sm mb-4 ${featured ? 'text-gray-700' : 'text-gray-600'}`}>
                {description}
            </p>
            <Link
                to={linkTo}
                className={`inline-flex items-center text-sm font-medium transition-colors ${featured
                        ? 'text-gray-800 hover:text-gray-900'
                        : 'text-primary-darker hover:text-primary-dark'
                    }`}
            >
                {t('common.learnMore')}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </div>
    );
};

export default ServiceCard;
