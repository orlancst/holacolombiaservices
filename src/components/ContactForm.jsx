import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        fullName: '',
        nationality: '',
        email: '',
        whatsapp: '',
        serviceType: '',
        accompaniment: [],
        otherService: '',
        language: '',
        desiredDate: '',
        approximateTime: '',
        duration: '',
        city: '',
        specificLocation: '',
        classType: [],
        modality: [],
        additionalInfo: '',
        dataPolicy: false,
        contactConsent: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name === 'dataPolicy' || name === 'contactConsent') {
                setFormData({ ...formData, [name]: checked });
            } else {
                const currentValues = formData[name] || [];
                if (checked) {
                    setFormData({ ...formData, [name]: [...currentValues, value] });
                } else {
                    setFormData({ ...formData, [name]: currentValues.filter((v) => v !== value) });
                }
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
        // Clear error when field is updated
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = true;
        if (!formData.email) newErrors.email = true;
        if (!formData.whatsapp) newErrors.whatsapp = true;
        if (!formData.serviceType) newErrors.serviceType = true;
        if (!formData.language) newErrors.language = true;
        if (!formData.desiredDate) newErrors.desiredDate = true;
        if (!formData.city) newErrors.city = true;
        if (!formData.dataPolicy) newErrors.dataPolicy = true;
        if (!formData.contactConsent) newErrors.contactConsent = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <span className="text-5xl mb-4 block">✅</span>
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                    {t('contact.successTitle')}
                </h3>
                <p className="text-green-700">{t('contact.successMessage')}</p>
            </div>
        );
    }

    const inputClasses = (fieldName) =>
        `w-full px-4 py-3 rounded-xl border ${errors[fieldName] ? 'border-red-400 bg-red-50' : 'border-gray-200'
        } focus:border-primary-darker focus:ring-2 focus:ring-primary/20 outline-none transition-all`;

    const labelClasses = 'block text-sm font-medium text-gray-700 mb-2';

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Personal Information */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    {t('form.section1')}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>
                            {t('form.fullName')} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={inputClasses('fullName')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>{t('form.nationality')}</label>
                        <input
                            type="text"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            className={inputClasses('nationality')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>
                            {t('form.email')} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={inputClasses('email')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>
                            {t('form.whatsapp')} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            className={inputClasses('whatsapp')}
                        />
                    </div>
                </div>
            </div>

            {/* Section 2: Service Type */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    {t('form.section2')}
                </h3>
                <div>
                    <label className={labelClasses}>
                        {t('form.serviceType')} <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className={inputClasses('serviceType')}
                    >
                        <option value="">{t('form.selectService')}</option>
                        <option value="interpretation">{t('form.interpretation')}</option>
                        <option value="spanishClasses">{t('form.spanishClasses')}</option>
                    </select>
                </div>
            </div>

            {/* Section 3: Service Details (conditional) */}
            {formData.serviceType === 'interpretation' && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        {t('form.section3')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{t('form.selectAccompaniment')}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { value: 'medical', label: t('form.medical') },
                            { value: 'banking', label: t('form.banking') },
                            { value: 'legal', label: t('form.legal') },
                            { value: 'touristic', label: t('form.touristic') },
                            { value: 'carnival', label: t('form.carnival') },
                            { value: 'hotels', label: t('form.hotels') },
                            { value: 'personalInterp', label: t('form.personalInterp') },
                            { value: 'other', label: t('form.other') },
                        ].map((option) => (
                            <label key={option.value} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                                <input
                                    type="checkbox"
                                    name="accompaniment"
                                    value={option.value}
                                    checked={formData.accompaniment.includes(option.value)}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 text-primary-darker rounded border-gray-300 focus:ring-primary"
                                />
                                <span className="text-gray-700">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    {formData.accompaniment.includes('other') && (
                        <div className="mt-4">
                            <label className={labelClasses}>{t('form.otherSpecify')}</label>
                            <input
                                type="text"
                                name="otherService"
                                value={formData.otherService}
                                onChange={handleInputChange}
                                className={inputClasses('otherService')}
                            />
                        </div>
                    )}
                </div>
            )}

            {/* Section 4: Language */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    {t('form.section4')}
                </h3>
                <div>
                    <label className={labelClasses}>
                        {t('form.requiredLanguage')} <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        className={inputClasses('language')}
                    >
                        <option value="">{t('form.selectLanguage')}</option>
                        <option value="english">{t('form.english')}</option>
                        <option value="portuguese">{t('form.portuguese')}</option>
                        <option value="french">{t('form.french')}</option>
                        <option value="german">{t('form.german')}</option>
                        <option value="chinese">{t('form.chinese')}</option>
                        <option value="signLanguage">{t('form.signLanguage')}</option>
                    </select>
                    <p className="mt-3 text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg">
                        ⚠️ {t('form.languageNote')}
                    </p>
                </div>
            </div>

            {/* Section 5: Date & Duration */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                    {t('form.section5')}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <label className={labelClasses}>
                            {t('form.desiredDate')} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            name="desiredDate"
                            value={formData.desiredDate}
                            onChange={handleInputChange}
                            className={inputClasses('desiredDate')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>{t('form.approximateTime')}</label>
                        <input
                            type="time"
                            name="approximateTime"
                            value={formData.approximateTime}
                            onChange={handleInputChange}
                            className={inputClasses('approximateTime')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>{t('form.estimatedDuration')}</label>
                        <select
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                            className={inputClasses('duration')}
                        >
                            <option value="">{t('form.selectDuration')}</option>
                            <option value="1-2">{t('form.duration1')}</option>
                            <option value="half">{t('form.durationHalf')}</option>
                            <option value="full">{t('form.durationFull')}</option>
                            <option value="unsure">{t('form.durationUnsure')}</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 6: Location */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                    {t('form.section6')}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>
                            {t('form.city')} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className={inputClasses('city')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>{t('form.specificLocation')}</label>
                        <input
                            type="text"
                            name="specificLocation"
                            value={formData.specificLocation}
                            onChange={handleInputChange}
                            className={inputClasses('specificLocation')}
                        />
                    </div>
                </div>
            </div>

            {/* Section 7: Spanish Classes (conditional) */}
            {formData.serviceType === 'spanishClasses' && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                        {t('form.section7')}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-3">{t('form.classType')}</p>
                            <div className="space-y-2">
                                {[
                                    { value: 'survival', label: t('form.survival') },
                                    { value: 'dailyLife', label: t('form.dailyLife') },
                                    { value: 'conversational', label: t('form.conversational') },
                                ].map((option) => (
                                    <label key={option.value} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="classType"
                                            value={option.value}
                                            checked={formData.classType.includes(option.value)}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-primary-darker rounded border-gray-300"
                                        />
                                        <span className="text-gray-700">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-3">{t('form.modality')}</p>
                            <div className="space-y-2">
                                {[
                                    { value: 'inPerson', label: t('form.inPerson') },
                                    { value: 'online', label: t('form.online') },
                                ].map((option) => (
                                    <label key={option.value} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="modality"
                                            value={option.value}
                                            checked={formData.modality.includes(option.value)}
                                            onChange={handleInputChange}
                                            className="w-5 h-5 text-primary-darker rounded border-gray-300"
                                        />
                                        <span className="text-gray-700">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Section 8: Additional Message */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                    {t('form.section8')}
                </h3>
                <div>
                    <label className={labelClasses}>{t('form.additionalInfo')}</label>
                    <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder={t('form.additionalPlaceholder')}
                        className={inputClasses('additionalInfo')}
                    ></textarea>
                </div>
            </div>

            {/* Section 9: Policies & Consent */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                    {t('form.section9')}
                </h3>
                <div className="space-y-4">
                    <label className={`flex items-start space-x-3 p-4 rounded-lg cursor-pointer transition-colors ${errors.dataPolicy ? 'bg-red-50 border border-red-200' : 'bg-gray-50 hover:bg-gray-100'}`}>
                        <input
                            type="checkbox"
                            name="dataPolicy"
                            checked={formData.dataPolicy}
                            onChange={handleInputChange}
                            className="w-5 h-5 mt-0.5 text-primary-darker rounded border-gray-300"
                        />
                        <span className="text-gray-700">
                            {t('form.dataPolicy')} <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <label className={`flex items-start space-x-3 p-4 rounded-lg cursor-pointer transition-colors ${errors.contactConsent ? 'bg-red-50 border border-red-200' : 'bg-gray-50 hover:bg-gray-100'}`}>
                        <input
                            type="checkbox"
                            name="contactConsent"
                            checked={formData.contactConsent}
                            onChange={handleInputChange}
                            className="w-5 h-5 mt-0.5 text-primary-darker rounded border-gray-300"
                        />
                        <span className="text-gray-700">
                            {t('form.contactConsent')} <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <p className="text-sm text-gray-500 italic">{t('form.dataNotice')}</p>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={!formData.dataPolicy || !formData.contactConsent}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${formData.dataPolicy && formData.contactConsent
                        ? 'bg-gray-800 text-white hover:bg-gray-900 shadow-lg hover:shadow-xl'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
            >
                👉 {t('form.submit')}
            </button>
        </form>
    );
};

export default ContactForm;
