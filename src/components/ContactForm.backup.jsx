import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        // Personal Information
        fullname: '',
        nationality: '',
        countryCode: '',
        email: '',
        whatsapp_number: '',

        // Service Information
        main_service: '', // Will be ID from service_types

        // Accompaniment - array of selected IDs
        accompaniment_types: [], // Array of accompaniment type IDs
        accompaniment_other: '',

        // Language & Date
        service_language_id: '', // Will be ID from service_languages
        service_date: '',
        service_time: '', // Temporary for form, will combine with date
        service_duration_id: '', // Will be ID from service_duration_types

        // Spanish Classes (all booleans)
        spanish_survival: false,
        spanish_daily: false,
        spanish_conversational: false,
        spanish_class_modality: '', // 1 for in-person, 2 for online

        // Additional & Consent
        additional_message: '',
        accept_data_policy: false,
        accept_contact: false,
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [countries, setCountries] = useState([]);
    const [accompanimentTypes, setAccompanimentTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch countries from API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://countriesnow.space/api/v0.1/countries/codes');
                const result = await response.json();
                if (result.error === false && result.data) {
                    // Sort countries alphabetically by name
                    const sortedCountries = result.data.sort((a, b) =>
                        a.name.localeCompare(b.name)
                    );
                    setCountries(sortedCountries);
                }
            } catch (error) {
                console.error('Error fetching countries:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    // Fetch accompaniment types from Supabase
    useEffect(() => {
        const fetchAccompanimentTypes = async () => {
            try {
                const { data, error } = await supabase
                    .from('accompainment_types')
                    .select('*')
                    .eq('is_enabled', true)
                    .order('id');

                if (error) {
                    console.error('Error fetching accompaniment types:', error);
                } else {
                    setAccompanimentTypes(data || []);
                }
            } catch (error) {
                console.error('Error fetching accompaniment types:', error);
            }
        };
        fetchAccompanimentTypes();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            // Handle accompaniment_types array
            if (name === 'accompaniment_types') {
                const typeId = parseInt(value);
                const currentTypes = formData.accompaniment_types || [];
                if (checked) {
                    setFormData({ ...formData, accompaniment_types: [...currentTypes, typeId] });
                } else {
                    setFormData({ ...formData, accompaniment_types: currentTypes.filter(id => id !== typeId) });
                }
            } else {
                setFormData({ ...formData, [name]: checked });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }

        // Clear error when field is updated
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const handleNationalityChange = (e) => {
        const selectedCountry = e.target.value;
        const country = countries.find(c => c.name === selectedCountry);

        setFormData({
            ...formData,
            nationality: selectedCountry,
            countryCode: country ? country.dial_code : formData.countryCode
        });

        if (errors.nationality) {
            setErrors({ ...errors, nationality: null });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullname) newErrors.fullname = true;
        if (!formData.email) newErrors.email = true;
        if (!formData.whatsapp_number) newErrors.whatsapp_number = true;
        if (!formData.main_service) newErrors.main_service = true;
        if (!formData.service_language_id) newErrors.service_language_id = true;
        if (!formData.service_date) newErrors.service_date = true;
        if (!formData.accept_data_policy) newErrors.accept_data_policy = true;
        if (!formData.accept_contact) newErrors.accept_contact = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Prepare data for submission
            const submissionData = {
                ...formData,
                // Combine country code with whatsapp number
                whatsapp_number: `${formData.countryCode}${formData.whatsapp_number}`.replace(/\s+/g, ''),
                // Combine date and time into timestamp
                service_date: formData.service_time
                    ? `${formData.service_date}T${formData.service_time}:00`
                    : `${formData.service_date}T12:00:00`,
            };

            // Remove temporary fields
            delete submissionData.countryCode;
            delete submissionData.service_time;

            console.log('Form submitted:', submissionData);
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
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleInputChange}
                            className={inputClasses('fullname')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>{t('form.nationality')}</label>
                        <select
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleNationalityChange}
                            className={inputClasses('nationality')}
                            disabled={loading}
                        >
                            <option value="">{loading ? 'Loading countries...' : 'Select your country'}</option>
                            {countries.map((country) => (
                                <option key={country.code} value={country.name}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
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
                        <div className="flex gap-2">
                            <select
                                name="countryCode"
                                value={formData.countryCode}
                                onChange={handleInputChange}
                                className={`px-4 py-3 rounded-xl border ${errors.whatsapp_number ? 'border-red-400 bg-red-50' : 'border-gray-200'
                                    } focus:border-primary-darker focus:ring-2 focus:ring-primary/20 outline-none transition-all w-32`}
                                disabled={loading}
                            >
                                <option value="">Code</option>
                                {countries.map((country) => (
                                    <option key={country.code} value={country.dial_code}>
                                        {country.dial_code} {country.code}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                name="whatsapp_number"
                                value={formData.whatsapp_number}
                                onChange={handleInputChange}
                                placeholder="1234567890"
                                className={`flex-1 px-4 py-3 rounded-xl border ${errors.whatsapp_number ? 'border-red-400 bg-red-50' : 'border-gray-200'
                                    } focus:border-primary-darker focus:ring-2 focus:ring-primary/20 outline-none transition-all`}
                            />
                        </div>
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
                        name="main_service"
                        value={formData.main_service}
                        onChange={handleInputChange}
                        className={inputClasses('main_service')}
                    >
                        <option value="">{t('form.selectService')}</option>
                        <option value="1">{t('form.interpretation')}</option>
                        <option value="2">{t('form.spanishClasses')}</option>
                    </select>
                </div>
            </div>

            {/* Section 3: Service Details (conditional) */}
            {formData.main_service === '1' && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        {t('form.section3')}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{t('form.selectAccompaniment')}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                            <input
                                type="checkbox"
                                name="accompaniment_medical"
                                checked={formData.accompaniment_medical}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-primary-darker rounded border-gray-300 focus:ring-primary"
                            />
                            <span className="text-gray-700">{t('form.medical')}</span>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                            <input
                                type="checkbox"
                                name="accompaniment_banking"
                                checked={formData.accompaniment_banking}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-primary-darker rounded border-gray-300 focus:ring-primary"
                            />
                            <span className="text-gray-700">{t('form.banking')}</span>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                            <input
                                type="checkbox"
                                name="accompaniment_legal"
                                checked={formData.accompaniment_legal}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-primary-darker rounded border-gray-300 focus:ring-primary"
                            />
                            <span className="text-gray-700">{t('form.legal')}</span>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                            <input
                                type="checkbox"
                                name="accompaniment_tourism"
                                checked={formData.accompaniment_tourism}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-primary-darker rounded border-gray-300 focus:ring-primary"
                            />
                            <span className="text-gray-700">{t('form.touristic')}</span>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                            <input
                                type="checkbox"
                                name="accompaniment_carnival"
                                checked={formData.accompaniment_carnival}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-primary-darker rounded border-gray-300 focus:ring-primary"
                            />
                            <span className="text-gray-700">{t('form.carnival')}</span>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                            <input
                                type="checkbox"
                                name="accompaniment_hotels_shopping"
                                checked={formData.accompaniment_hotels_shopping}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-primary-darker rounded border-gray-300 focus:ring-primary"
                            />
                            <span className="text-gray-700">{t('form.hotels')}</span>
                        </label>
                        <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                            <input
                                type="checkbox"
                                name="accompaniment_personal"
                                checked={formData.accompaniment_personal}
                                onChange={handleInputChange}
                                className="w-5 h-5 text-primary-darker rounded border-gray-300 focus:ring-primary"
                            />
                            <span className="text-gray-700">{t('form.personalInterp')}</span>
                        </label>
                    </div>
                    <div className="mt-4">
                        <label className={labelClasses}>{t('form.other')}</label>
                        <input
                            type="text"
                            name="accompaniment_other"
                            value={formData.accompaniment_other}
                            onChange={handleInputChange}
                            placeholder={t('form.otherSpecify')}
                            className={inputClasses('accompaniment_other')}
                        />
                    </div>
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
                        name="service_language_id"
                        value={formData.service_language_id}
                        onChange={handleInputChange}
                        className={inputClasses('service_language_id')}
                    >
                        <option value="">{t('form.selectLanguage')}</option>
                        <option value="1">{t('form.english')}</option>
                        <option value="2">{t('form.portuguese')}</option>
                        <option value="3">{t('form.french')}</option>
                        <option value="4">{t('form.german')}</option>
                        <option value="5">{t('form.chinese')}</option>
                        <option value="6">{t('form.signLanguage')}</option>
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
                            name="service_date"
                            value={formData.service_date}
                            onChange={handleInputChange}
                            className={inputClasses('service_date')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>{t('form.approximateTime')}</label>
                        <input
                            type="time"
                            name="service_time"
                            value={formData.service_time}
                            onChange={handleInputChange}
                            className={inputClasses('service_time')}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>{t('form.estimatedDuration')}</label>
                        <select
                            name="service_duration_id"
                            value={formData.service_duration_id}
                            onChange={handleInputChange}
                            className={inputClasses('service_duration_id')}
                        >
                            <option value="">{t('form.selectDuration')}</option>
                            <option value="1">{t('form.duration1')}</option>
                            <option value="2">{t('form.durationHalf')}</option>
                            <option value="3">{t('form.durationFull')}</option>
                            <option value="4">{t('form.durationUnsure')}</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Section 6: Spanish Classes (conditional) */}
            {formData.main_service === '2' && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                        <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                        {t('form.section7')}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-3">{t('form.classType')}</p>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="spanish_survival"
                                        checked={formData.spanish_survival}
                                        onChange={handleInputChange}
                                        className="w-5 h-5 text-primary-darker rounded border-gray-300"
                                    />
                                    <span className="text-gray-700">{t('form.survival')}</span>
                                </label>
                                <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="spanish_daily"
                                        checked={formData.spanish_daily}
                                        onChange={handleInputChange}
                                        className="w-5 h-5 text-primary-darker rounded border-gray-300"
                                    />
                                    <span className="text-gray-700">{t('form.dailyLife')}</span>
                                </label>
                                <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="spanish_conversational"
                                        checked={formData.spanish_conversational}
                                        onChange={handleInputChange}
                                        className="w-5 h-5 text-primary-darker rounded border-gray-300"
                                    />
                                    <span className="text-gray-700">{t('form.conversational')}</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-3">{t('form.modality')}</p>
                            <div className="space-y-2">
                                <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="spanish_class_modality"
                                        value="1"
                                        checked={formData.spanish_class_modality === '1'}
                                        onChange={handleInputChange}
                                        className="w-5 h-5 text-primary-darker border-gray-300"
                                    />
                                    <span className="text-gray-700">{t('form.inPerson')}</span>
                                </label>
                                <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="spanish_class_modality"
                                        value="2"
                                        checked={formData.spanish_class_modality === '2'}
                                        onChange={handleInputChange}
                                        className="w-5 h-5 text-primary-darker border-gray-300"
                                    />
                                    <span className="text-gray-700">{t('form.online')}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Section 7: Additional Message */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                    {t('form.section8')}
                </h3>
                <div>
                    <label className={labelClasses}>{t('form.additionalInfo')}</label>
                    <textarea
                        name="additional_message"
                        value={formData.additional_message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder={t('form.additionalPlaceholder')}
                        className={inputClasses('additional_message')}
                    ></textarea>
                </div>
            </div>

            {/* Section 8: Policies & Consent */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                    {t('form.section9')}
                </h3>
                <div className="space-y-4">
                    <label className={`flex items-start space-x-3 p-4 rounded-lg cursor-pointer transition-colors ${errors.accept_data_policy ? 'bg-red-50 border border-red-200' : 'bg-gray-50 hover:bg-gray-100'}`}>
                        <input
                            type="checkbox"
                            name="accept_data_policy"
                            checked={formData.accept_data_policy}
                            onChange={handleInputChange}
                            className="w-5 h-5 mt-0.5 text-primary-darker rounded border-gray-300"
                        />
                        <span className="text-gray-700">
                            {t('form.dataPolicy')} <span className="text-red-500">*</span>
                        </span>
                    </label>
                    <label className={`flex items-start space-x-3 p-4 rounded-lg cursor-pointer transition-colors ${errors.accept_contact ? 'bg-red-50 border border-red-200' : 'bg-gray-50 hover:bg-gray-100'}`}>
                        <input
                            type="checkbox"
                            name="accept_contact"
                            checked={formData.accept_contact}
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
                disabled={!formData.accept_data_policy || !formData.accept_contact}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${formData.accept_data_policy && formData.accept_contact
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
