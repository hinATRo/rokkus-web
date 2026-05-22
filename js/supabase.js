// js/supabase.js
// ─────────────────────────────────────────
// KONFIGURASI SUPABASE — jangan share file ini!
// ─────────────────────────────────────────

const SUPABASE_URL = 'https://wmqtngznenqaajuxdqwa.supabase.co/rest/v1/'
const SUPABASE_ANON_KEY = 'sb_publishable_1b2VY4us3xjYBWLHy8zV7A_2JH3Rfmr'

// Init client
const { createClient } = supabase
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function testKoneksi() {
  const { data, error } = await db
    .from('products')
    .select('*')
    .limit(3)

  if (error) {
    console.log('❌ Gagal:', error.message)
  } else {
    console.log('✅ Berhasil! Data:', data)
  }
}

testKoneksi()