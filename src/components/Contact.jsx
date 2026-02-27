import { useForm, ValidationError } from "@formspree/react";
import ElectricBorder from "./ElectricBorder";
import SectionHeader from "./SectionHeader";
import CardGlare from "./CardGlare";

const Contact = () => {
  const [state, handleSubmit] = useForm("xayzqpno");

  if (state.succeeded) {
    return (
      <section className="w-full py-20 text-white relative overflow-hidden" aria-label="Kontak">
        <div className="km-container text-center">
          <SectionHeader
            titlePrefix="Terima"
            titleHighlight="kasih!"
            highlightClassName="text-sky-400"
            description="Pesan Anda sudah terkirim. Saya akan membalas secepatnya."
          />
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="w-full text-center py-20 text-white relative overflow-hidden scroll-mt-28"
      aria-label="Kontak"
    >
      <div className="km-container text-center">
        <SectionHeader
          titlePrefix="Hubungi"
          titleHighlight="Saya"
          highlightClassName="text-sky-400"
          description="Punya ide proyek atau pertanyaan? Kirim pesan melalui formulir di bawah."
        />
      </div>
      <div className="km-container">
        <CardGlare roundedClass="rounded-2xl">
          <form
            onSubmit={handleSubmit}
            className="w-full rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-1 text-white/80"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/20 outline-none px-4 py-3 text-white"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-1 text-white/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/20 outline-none px-4 py-3 text-white"
                  placeholder="email@domain.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="subject"
                className="block text-sm mb-1 text-white/80"
              >
                Subjek
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/20 outline-none px-4 py-3 text-white"
                placeholder="Judul pesan"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-sm mb-1 text-white/80"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-white/20 outline-none px-4 py-3 text-white"
                placeholder="Ceritakan kebutuhan atau pertanyaan Anda"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-sm text-white/70">
                Balasan akan dikirim ke email yang Anda masukkan.
              </div>
              <div className="flex gap-3">
                <ElectricBorder color="#3b82f6" speed={1} chaos={0.1} style={{ borderRadius: 12 }}>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 disabled:opacity-60"
                  >
                    {state.submitting ? "Mengirim..." : "Kirim Pesan"}
                  </button>
                </ElectricBorder>
                <ElectricBorder color="#10b981" speed={1} chaos={0.1} style={{ borderRadius: 12 }}>
                  <a
                    href="mailto:khoyum28@gmail.com?subject=Kontak%20Portfolio&body=Halo%2C%20saya%20ingin%20berdiskusi%20tentang%20proyek."
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    Email
                  </a>
                </ElectricBorder>
              </div>
            </div>
          </form>
        </CardGlare>
      </div>
    </section>
  );
};

export default Contact;
