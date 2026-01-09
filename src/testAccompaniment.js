import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testAccompaniment() {
    console.log('🔍 Fetching accompaniment_types...\n');

    try {
        const { data, error } = await supabase
            .from('accompainment_types')
            .select('*')
            .eq('is_enabled', true)
            .order('id');
        
        if (error) {
            console.error('❌ Error:', error);
        } else {
            console.log('✅ Accompaniment Types:', JSON.stringify(data, null, 2));
        }
    } catch (error) {
        console.error('❌ Unexpected error:', error);
    }
}

testAccompaniment();
