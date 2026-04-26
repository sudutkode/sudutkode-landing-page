<script setup lang="ts">
import { usePageNav } from '@/composables/usePageNav'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-vue-next'

defineProps<{
  productId: string
}>()

const { navigate } = usePageNav()

const goBack = () => {
  navigate(null)
}

const getProductName = (productId: string) => {
  const products: Record<string, string> = {
    "atur-keuangan": 'Atur Keuangan',
  }
  return products[productId] || productId
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Header with back button -->
    <div class="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div class="container mx-auto px-4 md:px-6 py-4">
        <Button variant="ghost" size="sm" @click="goBack" class="gap-2 text-neutral-400 hover:text-foreground">
          <ArrowLeft class="w-4 h-4" />
          Back to Products
        </Button>
      </div>
    </div>

    <!-- Content -->
    <main class="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div class="max-w-3xl mx-auto space-y-12">
        <!-- Indonesian Version -->
        <article class="prose prose-invert max-w-none space-y-6">
          <div class="mb-8 pb-8 border-b border-border">
            <p class="text-sm text-neutral-400 mb-6">Bahasa Indonesia</p>
            <h1 class="text-3xl md:text-4xl font-semibold mb-4">
              Kebijakan Privasi {{ getProductName(productId) }}
            </h1>
            <p class="text-neutral-400">
              <strong>Berlaku sejak:</strong> 2026
              <br />
              <strong>Terakhir diperbarui:</strong> 2026
            </p>
          </div>

          <div class="space-y-8">
            <section>
              <p class="text-base leading-relaxed text-neutral-400">
                Kebijakan Privasi ini menjelaskan bagaimana <strong>{{ getProductName(productId) }}</strong>, yang
                dikembangkan oleh <strong>SudutKode</strong> ("kami", "pengembang"), mengumpulkan, menggunakan, dan
                melindungi informasi Anda saat menggunakan aplikasi {{ getProductName(productId) }} ("Aplikasi").
              </p>
              <p class="text-base leading-relaxed text-neutral-400">
                Dengan menggunakan Aplikasi, Anda menyetujui ketentuan dalam Kebijakan Privasi ini.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">1. Pengembang Aplikasi</h2>
              <div class="space-y-2 text-neutral-400">
                <p><strong>Nama:</strong> SudutKode</p>
                <p><strong>Email:</strong> <span class="text-amber-600">sudutkode@gmail.com</span></p>
                <p><strong>Website:</strong> <span class="text-amber-600">https://sudutkode.web.app</span></p>
              </div>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">2. Data yang Kami Kumpulkan</h2>
              <div class="space-y-4 text-neutral-400">
                <div>
                  <h3 class="font-medium text-foreground mb-2">a. Data Akun</h3>
                  <ul class="list-disc list-inside space-y-1 text-sm">
                    <li>Kode unik (hash) dari alamat email Google Anda — email asli tidak disimpan</li>
                    <li>Nama tampilan yang Anda atur dalam Aplikasi</li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-medium text-foreground mb-2">b. Data Keuangan</h3>
                  <ul class="list-disc list-inside space-y-1 text-sm">
                    <li>Data transaksi yang Anda input secara manual (nominal, kategori, tanggal, catatan)</li>
                    <li>Data transaksi yang terdeteksi dari notifikasi perbankan (nominal, nama aplikasi sumber, waktu)
                    </li>
                    <li>Nama dan saldo dompet yang Anda daftarkan</li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-medium text-foreground mb-2">c. Data Notifikasi</h3>
                  <ul class="list-disc list-inside space-y-1 text-sm">
                    <li>
                      Atur Keuangan membaca notifikasi dari aplikasi m-banking dan e-wallet yang Anda pilih untuk
                      mendeteksi
                      transaksi secara otomatis
                    </li>
                    <li>Kami <strong>tidak</strong> membaca notifikasi dari aplikasi lain (WhatsApp, SMS, email, dll.)
                    </li>
                    <li>
                      Kami <strong>tidak</strong> menyimpan teks notifikasi mentah — hanya data transaksi yang berhasil
                      diekstrak
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-medium text-foreground mb-2">d. Data Teknis</h3>
                  <ul class="list-disc list-inside space-y-1 text-sm">
                    <li>Versi aplikasi dan sistem operasi (untuk keperluan debug)</li>
                    <li>ID anonim perangkat (untuk sinkronisasi data antar sesi)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">3. Tujuan Penggunaan Data</h2>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr class="bg-card/50">
                      <th class="border border-border px-4 py-2 text-left font-medium">Data</th>
                      <th class="border border-border px-4 py-2 text-left font-medium">Tujuan</th>
                    </tr>
                  </thead>
                  <tbody class="text-neutral-400">
                    <tr>
                      <td class="border border-border px-4 py-2">Kode unik akun</td>
                      <td class="border border-border px-4 py-2">Mengidentifikasi akun Anda secara anonim</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2">Data transaksi</td>
                      <td class="border border-border px-4 py-2">Menampilkan riwayat, laporan, dan grafik keuangan</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2">Data notifikasi</td>
                      <td class="border border-border px-4 py-2">Mencatat transaksi secara otomatis</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2">Data teknis</td>
                      <td class="border border-border px-4 py-2">Memastikan aplikasi berjalan dengan benar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-sm text-neutral-400 pt-4">
                Kami <strong>tidak</strong> menggunakan data Anda untuk iklan, profiling, atau tujuan komersial lainnya.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">4. Penyimpanan dan Keamanan Data</h2>
              <ul class="list-disc list-inside space-y-2 text-sm text-neutral-400">
                <li>Semua data disimpan di server kami dengan enkripsi</li>
                <li>Data hanya dapat diakses melalui akun Google yang terhubung</li>
                <li>Email asli Anda tidak pernah disimpan dalam bentuk teks biasa (pseudonymization)</li>
                <li><strong>Kami tidak menjual</strong> data Anda kepada pihak ketiga mana pun</li>
                <li><strong>Kami tidak membagikan</strong> data Anda kepada pihak ketiga, kecuali diwajibkan oleh hukum
                </li>
              </ul>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">5. Retensi Data</h2>
              <ul class="list-disc list-inside space-y-2 text-sm text-neutral-400">
                <li>Data aktif disimpan selama akun Anda aktif</li>
                <li>Setelah akun dihapus, seluruh data akan dihapus permanen dari server kami<strong>segera / secara
                    langsung</strong></li>
                <li>Data anonim yang digunakan untuk keperluan statistik internal tidak dapat ditelusuri ke identitas
                  Anda</li>
              </ul>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">6. Hak Pengguna</h2>
              <p class="text-sm text-neutral-400 mb-3">Anda memiliki hak untuk:</p>
              <ul class="list-disc list-inside space-y-2 text-sm text-neutral-400">
                <li><strong>Mengakses</strong> data yang kami simpan tentang Anda</li>
                <li><strong>Mengoreksi</strong> data yang tidak akurat</li>
                <li><strong>Menghapus</strong> akun dan seluruh data melalui menu Pengaturan → Keluar / Hapus Akun</li>
                <li><strong>Menarik persetujuan</strong> atas akses notifikasi kapan saja melalui Pengaturan perangkat
                </li>
                <li><strong>Mengajukan pertanyaan</strong> terkait data Anda melalui email di atas</li>
              </ul>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">7. Layanan Pihak Ketiga</h2>
              <p class="text-sm text-neutral-400 mb-3">
                Aplikasi menggunakan layanan pihak ketiga berikut yang memiliki kebijakan privasi masing-masing:
              </p>
              <ul class="space-y-2 text-sm text-neutral-400">
                <li>
                  <strong>Google Sign-In</strong> — untuk autentikasi akun
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                    class="text-blue-500 hover:text-blue-400 inline-flex items-center gap-1">(kebijakan privasi Google
                    <span class="text-xs">↗</span>)</a>
                </li>
                <li>
                  <strong>Expo / EAS</strong> — platform pengembangan aplikasi
                  <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer"
                    class="text-blue-500 hover:text-blue-400 inline-flex items-center gap-1">(kebijakan privasi Expo
                    <span class="text-xs">↗</span>)</a>
                </li>
              </ul>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">8. Kebijakan Anak-Anak</h2>
              <p class="text-sm text-neutral-400">
                Aplikasi {{ getProductName(productId) }} <strong>tidak ditujukan</strong> untuk pengguna di bawah usia
                13 tahun. Kami tidak secara sadar mengumpulkan data dari anak-anak. Secara praktis, penggunaan Atur
                Keuangan
                memerlukan akses ke rekening m-banking atau e-wallet aktif, yang umumnya hanya dapat dimiliki oleh
                pengguna berusia 17 tahun ke atas sesuai ketentuan perbankan di Indonesia.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">9. Perubahan Kebijakan Privasi</h2>
              <p class="text-sm text-neutral-400">
                Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan signifikan akan diberitahukan
                melalui notifikasi di dalam Aplikasi atau melalui email. Penggunaan Aplikasi setelah perubahan dianggap
                sebagai persetujuan terhadap kebijakan yang diperbarui.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">10. Kontak</h2>
              <p class="text-sm text-neutral-400 mb-3">
                Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami:
              </p>
              <div class="space-y-2 text-sm text-neutral-400">
                <p><strong>Email:</strong> <span class="text-amber-600">sudutkode@gmail.com</span></p>
                <p><strong>Website:</strong> <span class="text-amber-600">https://sudutkode.web.app</span></p>
              </div>
            </section>
          </div>
        </article>

        <!-- Divider -->
        <div class="py-8 border-y border-border">
          <p class="text-sm text-neutral-400 text-center">—</p>
        </div>

        <!-- English Version -->
        <article class="prose prose-invert max-w-none space-y-6">
          <div class="mb-8">
            <p class="text-sm text-neutral-400 mb-6">English</p>
            <h1 class="text-3xl md:text-4xl font-semibold mb-4">
              Privacy Policy for {{ getProductName(productId) }}
            </h1>
            <p class="text-neutral-400">
              <strong>Effective date:</strong> 2026
              <br />
              <strong>Last updated:</strong> 2026
            </p>
          </div>

          <div class="space-y-8">
            <section>
              <p class="text-base leading-relaxed text-neutral-400">
                This Privacy Policy explains how <strong>{{ getProductName(productId) }}</strong>, developed by
                <strong>SudutKode</strong> ("we", "developer"), collects, uses, and protects your information when you
                use the {{ getProductName(productId) }} application ("App").
              </p>
              <p class="text-base leading-relaxed text-neutral-400">
                By using the App, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">1. Developer Information</h2>
              <div class="space-y-2 text-neutral-400">
                <p><strong>Name:</strong> SudutKode</p>
                <p><strong>Email:</strong> <span class="text-amber-600">sudutkode@gmail.com</span></p>
                <p><strong>Website:</strong> <span class="text-amber-600">https://sudutkode.web.app</span></p>
              </div>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">2. Data We Collect</h2>
              <div class="space-y-4 text-neutral-400">
                <div>
                  <h3 class="font-medium text-foreground mb-2">a. Account Data</h3>
                  <ul class="list-disc list-inside space-y-1 text-sm">
                    <li>
                      A unique code (hash) derived from your Google email address — your actual email is never stored
                    </li>
                    <li>Display name you set within the App</li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-medium text-foreground mb-2">b. Financial Data</h3>
                  <ul class="list-disc list-inside space-y-1 text-sm">
                    <li>Transaction data you input manually (amount, category, date, notes)</li>
                    <li>Transaction data detected from banking notifications (amount, source app name, time)</li>
                    <li>Wallet names and balances you register</li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-medium text-foreground mb-2">c. Notification Data</h3>
                  <ul class="list-disc list-inside space-y-1 text-sm">
                    <li>
                      Atur Keuangan reads notifications from m-banking and e-wallet apps you select, to automatically
                      detect
                      transactions
                    </li>
                    <li>We do <strong>not</strong> read notifications from other apps (WhatsApp, SMS, email, etc.)</li>
                    <li>
                      We do <strong>not</strong> store raw notification text — only successfully extracted transaction
                      data
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="font-medium text-foreground mb-2">d. Technical Data</h3>
                  <ul class="list-disc list-inside space-y-1 text-sm">
                    <li>App version and operating system (for debugging purposes)</li>
                    <li>Anonymous device ID (for session data synchronization)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">3. Purpose of Data Use</h2>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr class="bg-card/50">
                      <th class="border border-border px-4 py-2 text-left font-medium">Data</th>
                      <th class="border border-border px-4 py-2 text-left font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody class="text-neutral-400">
                    <tr>
                      <td class="border border-border px-4 py-2">Account code</td>
                      <td class="border border-border px-4 py-2">Anonymously identify your account</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2">Transaction data</td>
                      <td class="border border-border px-4 py-2">Display history, reports, and financial charts</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2">Notification data</td>
                      <td class="border border-border px-4 py-2">Automatically record transactions</td>
                    </tr>
                    <tr>
                      <td class="border border-border px-4 py-2">Technical data</td>
                      <td class="border border-border px-4 py-2">Ensure the app functions correctly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-sm text-neutral-400 pt-4">
                We do <strong>not</strong> use your data for advertising, profiling, or any other commercial purpose.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">4. Data Storage and Security</h2>
              <ul class="list-disc list-inside space-y-2 text-sm text-neutral-400">
                <li>All data is stored on our servers with encryption</li>
                <li>Data is only accessible through your connected Google account</li>
                <li>Your actual email is never stored in plain text (pseudonymization)</li>
                <li><strong>We do not sell</strong> your data to any third party</li>
                <li><strong>We do not share</strong> your data with third parties, unless required by law</li>
              </ul>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">5. Data Retention</h2>
              <ul class="list-disc list-inside space-y-2 text-sm text-neutral-400">
                <li>Active data is stored as long as your account is active</li>
                <li>
                  After account deletion, all data will be permanently deleted from our servers
                  <strong>immediately</strong>
                </li>
                <li>Anonymous data used for internal statistics cannot be traced back to your identity</li>
              </ul>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">6. Your Rights</h2>
              <p class="text-sm text-neutral-400 mb-3">You have the right to:</p>
              <ul class="list-disc list-inside space-y-2 text-sm text-neutral-400">
                <li><strong>Access</strong> the data we store about you</li>
                <li><strong>Correct</strong> inaccurate data</li>
                <li><strong>Delete</strong> your account and all data via Settings → Logout / Delete Account</li>
                <li><strong>Withdraw consent</strong> for notification access at any time via device Settings</li>
                <li><strong>Ask questions</strong> about your data by contacting us via email above</li>
              </ul>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">7. Third-Party Services</h2>
              <p class="text-sm text-neutral-400 mb-3">
                The App uses the following third-party services, each with their own privacy policies:
              </p>
              <ul class="space-y-2 text-sm text-neutral-400">
                <li>
                  <strong>Google Sign-In</strong> — for account authentication
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                    class="text-blue-500 hover:text-blue-400 inline-flex items-center gap-1">(Google Privacy Policy
                    <span class="text-xs">↗</span>)</a>
                </li>
                <li>
                  <strong>Expo / EAS</strong> — app development platform
                  <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer"
                    class="text-blue-500 hover:text-blue-400 inline-flex items-center gap-1">(Expo Privacy Policy
                    <span class="text-xs">↗</span>)</a>
                </li>
              </ul>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">8. Children's Policy</h2>
              <p class="text-sm text-neutral-400">
                The {{ getProductName(productId) }} App is <strong>not intended</strong> for users under the age of 13.
                We do not knowingly collect data from children. In practice, using Atur Keuangan requires access to an
                active
                m-banking account or e-wallet, which in Indonesia is generally only available to users aged 17 and above
                in accordance with local banking regulations.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">9. Changes to This Privacy Policy</h2>
              <p class="text-sm text-neutral-400">
                We may update this Privacy Policy at any time. Significant changes will be communicated via in-app
                notification or email. Continued use of the App after changes constitutes acceptance of the updated
                policy.
              </p>
            </section>

            <section class="space-y-4">
              <h2 class="text-xl font-semibold">10. Contact</h2>
              <p class="text-sm text-neutral-400 mb-3">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div class="space-y-2 text-sm text-neutral-400">
                <p><strong>Email:</strong> <span class="text-amber-600">sudutkode@gmail.com</span></p>
                <p><strong>Website:</strong> <span class="text-amber-600">https://sudutkode.web.app</span></p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>
