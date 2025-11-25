const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lbmrwhufxymdmuamjwor.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey) {
  console.error('SUPABASE_KEY is not defined in environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Test connection
supabase.from('leads').select('count', { count: 'exact', head: true })
  .then(() => {
    console.log('Supabase connected successfully');
  })
  .catch(err => {
    console.error('Supabase connection failed:', err.message);
  });

module.exports = supabase;