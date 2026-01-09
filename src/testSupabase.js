import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
    console.log('🔍 Testing Supabase connection...\n');

    try {
        // Test 1: Service Types
        console.log('📋 Fetching service_types...');
        const { data: serviceTypes, error: serviceTypesError } = await supabase
            .from('service_types')
            .select('*');
        
        if (serviceTypesError) {
            console.error('❌ Error fetching service_types:', serviceTypesError);
        } else {
            console.log('✅ Service Types:', serviceTypes);
        }

        // Test 2: Service Languages
        console.log('\n📋 Fetching service_languages...');
        const { data: languages, error: languagesError } = await supabase
            .from('service_languages')
            .select('*');
        
        if (languagesError) {
            console.error('❌ Error fetching service_languages:', languagesError);
        } else {
            console.log('✅ Service Languages:', languages);
        }

        // Test 3: Service Duration Types
        console.log('\n📋 Fetching service_duration_types...');
        const { data: durations, error: durationsError } = await supabase
            .from('service_duration_types')
            .select('*');
        
        if (durationsError) {
            console.error('❌ Error fetching service_duration_types:', durationsError);
        } else {
            console.log('✅ Service Duration Types:', durations);
        }

        // Test 4: Service Request Statuses
        console.log('\n📋 Fetching service_req_statuses...');
        const { data: statuses, error: statusesError } = await supabase
            .from('service_req_statuses')
            .select('*');
        
        if (statusesError) {
            console.error('❌ Error fetching service_req_statuses:', statusesError);
        } else {
            console.log('✅ Service Request Statuses:', statuses);
        }

        console.log('\n✅ Connection test completed!');
    } catch (error) {
        console.error('❌ Unexpected error:', error);
    }
}

testConnection();
