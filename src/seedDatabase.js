import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seedDatabase() {
    console.log('🌱 Seeding database with reference data...\n');

    try {
        // 1. Service Types
        console.log('📝 Inserting service_types...');
        const { data: serviceTypes, error: serviceTypesError } = await supabase
            .from('service_types')
            .upsert([
                { id: 1, name_en: 'Interpretation & Accompaniment', name_es: 'Interpretación y Acompañamiento', name_pt: 'Interpretação e Acompanhamento' },
                { id: 2, name_en: 'Spanish Classes', name_es: 'Clases de Español', name_pt: 'Aulas de Espanhol' }
            ], { onConflict: 'id' })
            .select();
        
        if (serviceTypesError) {
            console.error('❌ Error:', serviceTypesError);
        } else {
            console.log('✅ Inserted:', serviceTypes);
        }

        // 2. Service Languages
        console.log('\n📝 Inserting service_languages...');
        const { data: languages, error: languagesError } = await supabase
            .from('service_languages')
            .upsert([
                { id: 1, lang_en: 'English', lang_es: 'Inglés', lang_pt: 'Inglês' },
                { id: 2, lang_en: 'Portuguese', lang_es: 'Portugués', lang_pt: 'Português' },
                { id: 3, lang_en: 'French', lang_es: 'Francés', lang_pt: 'Francês' },
                { id: 4, lang_en: 'German', lang_es: 'Alemán', lang_pt: 'Alemão' },
                { id: 5, lang_en: 'Chinese', lang_es: 'Chino', lang_pt: 'Chinês' },
                { id: 6, lang_en: 'Sign Language', lang_es: 'Lenguaje de Señas', lang_pt: 'Linguagem de Sinais' }
            ], { onConflict: 'id' })
            .select();
        
        if (languagesError) {
            console.error('❌ Error:', languagesError);
        } else {
            console.log('✅ Inserted:', languages);
        }

        // 3. Service Duration Types
        console.log('\n📝 Inserting service_duration_types...');
        const { data: durations, error: durationsError } = await supabase
            .from('service_duration_types')
            .upsert([
                { id: 1, duration_en: '1-2 hours', duration_es: '1-2 horas', duration_pt: '1-2 horas' },
                { id: 2, duration_en: 'Half day', duration_es: 'Medio día', duration_pt: 'Meio dia' },
                { id: 3, duration_en: 'Full day', duration_es: 'Día completo', duration_pt: 'Dia inteiro' },
                { id: 4, duration_en: 'Not sure', duration_es: 'No estoy seguro', duration_pt: 'Não tenho certeza' }
            ], { onConflict: 'id' })
            .select();
        
        if (durationsError) {
            console.error('❌ Error:', durationsError);
        } else {
            console.log('✅ Inserted:', durations);
        }

        // 4. Service Request Statuses
        console.log('\n📝 Inserting service_req_statuses...');
        const { data: statuses, error: statusesError } = await supabase
            .from('service_req_statuses')
            .upsert([
                { id: 1, status_en: 'Pending', status_es: 'Pendiente', status_pt: 'Pendente' },
                { id: 2, status_en: 'Confirmed', status_es: 'Confirmado', status_pt: 'Confirmado' },
                { id: 3, status_en: 'Completed', status_es: 'Completado', status_pt: 'Concluído' },
                { id: 4, status_en: 'Cancelled', status_es: 'Cancelado', status_pt: 'Cancelado' }
            ], { onConflict: 'id' })
            .select();
        
        if (statusesError) {
            console.error('❌ Error:', statusesError);
        } else {
            console.log('✅ Inserted:', statuses);
        }

        console.log('\n✅ Database seeding completed!');
    } catch (error) {
        console.error('❌ Unexpected error:', error);
    }
}

seedDatabase();
