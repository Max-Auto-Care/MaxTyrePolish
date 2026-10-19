"use client";

import { useState } from "react";
import { trackMetaEvent } from "./MetaPixel";

const CHECKOUT_URL = "https://maxautocare.orderonline.id/max-tyre-polish";
const SHOPEE_URL = "https://shopee.co.id/product/136980590/28734579509/";

const RED = "#dc2626";
const ORIGINAL_PRICE = 30000;
const PROMO_PRICE = 19000;

function formatPrice(price: number) {
  return `Rp${price.toLocaleString("id-ID")}`;
}

function OrderButton({
  platform = "orderonline",
  className = "",
  children,
}: {
  platform?: "orderonline" | "shopee";
  className?: string;
  children?: React.ReactNode;
}) {
  const isShopee = platform === "shopee";

  function handleOrder() {
    const url = isShopee ? SHOPEE_URL : CHECKOUT_URL;

    if (!url || url.startsWith("GANTI_DENGAN")) {
      alert("Silakan masukkan link checkout produk terlebih dahulu.");
      return;
    }

    if (!isShopee) {
      trackMetaEvent("InitiateCheckout", {
        content_name: "MAX Auto Care Tyre Polish",
        currency: "IDR",
        value: PROMO_PRICE,
      });
    }

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      onClick={handleOrder}
      className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 ${
        isShopee
          ? "bg-[#EE4D2D] text-white hover:bg-[#D94326]"
          : "bg-[#dc2626] text-white hover:bg-[#b91c1c]"
      } ${className}`}
    >
      {children ?? (isShopee ? "CHECKOUT SHOPEE" : "ORDER SEKARANG")}
      <span aria-hidden="true">↗</span>
    </button>
  );
}

const benefits = [
  {
    number: "01",
    title: "Perawatan Ban",
    description:
      "Bantu merawat tampilan ban agar terlihat lebih bersih dan terawat.",
    image: "/1.png",
  },
  {
    number: "02",
    title: "Praktis Digunakan",
    description:
      "Pilihan praktis untuk perawatan tampilan ban kendaraan sehari-hari.",
    image: "2.png",
  },
  {
    number: "03",
    title: "Perawatan Rutin",
    description:
      "Lengkapi rutinitas perawatan kendaraan dengan Tyre Polish MAX Auto Care.",
    image: "3.png",
  },
];

const steps = [
  "Pastikan permukaan ban bersih sebelum penggunaan.",
  "Gunakan produk sesuai petunjuk pada label kemasan.",
  "Aplikasikan secara merata pada area yang dianjurkan di label.",
];

const faqs = [
  {
    question: "Tyre Polish digunakan untuk apa?",
    answer:
      "Tyre Polish merupakan produk perawatan tampilan ban kendaraan. Ikuti petunjuk pada label untuk mengetahui cara penggunaan yang sesuai.",
  },
  {
    question: "Bagaimana cara menggunakannya?",
    answer:
      "Pastikan permukaan ban bersih, lalu gunakan produk sesuai petunjuk pada kemasan. Hindari area yang tidak dianjurkan pada label.",
  },
  {
    question: "Berapa harga promonya?",
    answer:
      "Harga promo Tyre Polish MAX Auto Care adalah Rp19.000 dari harga normal Rp30.000.",
  },
  {
    question: "Bagaimana cara memesan?",
    answer:
      "Klik Order Sekarang untuk menuju halaman checkout atau Checkout Shopee untuk berbelanja melalui Shopee.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] pb-24 text-white md:pb-0">
      {/* NAVBAR */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#home" className="font-black tracking-tight">
            MAX <span className="text-red-500">AUTO CARE</span>
          </a>

          <a
            href="#promo"
            className="rounded-full border border-red-500/50 px-4 py-2 text-xs font-bold text-red-400 transition hover:bg-red-600 hover:text-white"
          >
            LIHAT PROMO
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(220,38,38,0.16),transparent_55%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-bold tracking-widest text-red-400">
                TYRE CARE SERIES
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Rawat Tampilan Ban.
              <br />
              <span className="text-red-500">Mobil Lebih Terawat.</span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-zinc-400 sm:text-lg">
              Tyre Polish MAX Auto Care untuk melengkapi rutinitas perawatan ban
              kendaraan. Praktis untuk perawatan tampilan mobil sehari-hari.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-2 text-green-400">
                ✓ Bisa Bayar COD
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <OrderButton className="sm:flex-1">ORDER SEKARANG</OrderButton>

              <OrderButton platform="shopee" className="sm:flex-1">
                CHECKOUT DI SHOPEE
              </OrderButton>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400 sm:text-sm">
              <span>✓ Perawatan ban</span>
              <span>✓ Praktis digunakan</span>
              <span>✓ Pemesanan online</span>
            </div>
          </div>

          {/* PRODUCT IMAGE */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-10 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-[#201111] to-[#0B0B0B] p-5 shadow-2xl shadow-black/50 sm:p-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.25em] text-red-400">
                  MAX AUTO CARE
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-zinc-400">
                  TYRE CARE
                </span>
              </div>

              <img
                src="/banner.png"
                alt="MAX Auto Care Tyre Polish"
                className="aspect-[4/3] w-full object-contain drop-shadow-2xl"
              />

              <div className="mt-4 border-t border-white/10 pt-5">
                <p className="text-2xl font-black">
                  TYRE <span className="text-red-500">POLISH</span>
                </p>

                <p className="mt-2 text-sm text-zinc-400">
                  Perawatan tampilan ban kendaraan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="bg-red-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-5 py-7 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="text-xs font-extrabold tracking-[0.25em] text-red-100">
              PROMO MAX AUTO CARE
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Rawat Ban, Harga Lebih Hemat.
            </h2>
          </div>

          <OrderButton className="bg-black text-white hover:bg-zinc-800 sm:max-w-xs">
            PESAN SEKARANG
          </OrderButton>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-red-500">
              TYRE CARE
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Perawatan Ban Lebih Praktis
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Kenali Tyre Polish MAX Auto Care untuk membantu perawatan tampilan
              ban kendaraan sehari-hari.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-red-500/50"
              >
                <span className="text-sm font-black text-red-500">
                  {benefit.number}
                </span>
                <img
                  src={benefit.image}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-contain transition duration-300 group-hover:scale-[1.03]"
                />

                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="bg-[#111111] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-red-500">
              SIMPLE CARE
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Perawatan yang Dimulai dari Hal Sederhana
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Gunakan Tyre Polish sesuai petunjuk pada label agar penggunaan
              produk sesuai dengan rekomendasi.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-xl border border-white/10 bg-black/30 p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 font-black text-white">
                  {index + 1}
                </span>

                <p className="text-sm leading-7 text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PROMO */}
      <section id="promo" className="scroll-mt-6 px-5 py-16 sm:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-br from-[#211010] to-[#0D0D0D] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

          <div className="relative grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-red-400">
                MAX AUTO CARE
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Saatnya Rawat Ban Mobilmu!
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Dapatkan Tyre Polish MAX Auto Care dengan harga promo. Pilih
                metode pemesanan yang paling nyaman untuk kamu.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
              <p className="text-center text-sm text-zinc-400">MAX AUTO CARE</p>

              <h3 className="mt-2 text-center text-2xl font-black">
                Tyre Polish
              </h3>

              <p className="mt-4 text-center text-sm text-zinc-400 line-through">
                {formatPrice(ORIGINAL_PRICE)}
              </p>

              <p className="mt-1 text-center text-4xl font-black text-red-500 sm:text-5xl">
                {formatPrice(PROMO_PRICE)}
              </p>

              <p className="mt-2 text-center text-sm font-semibold text-red-300">
                Hemat {formatPrice(ORIGINAL_PRICE - PROMO_PRICE)}
              </p>

              <p className="mt-4 text-center text-sm leading-6 text-zinc-400">
                Harga promo Tyre Polish MAX Auto Care.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <OrderButton>ORDER SEKARANG</OrderButton>

                <OrderButton platform="shopee">CHECKOUT DI SHOPEE</OrderButton>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-zinc-500">
                Detail pembayaran dan pengiriman mengikuti halaman checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4F4F4] px-5 py-16 text-zinc-900 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.25em] text-red-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black">Ada Pertanyaan?</h2>
          </div>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
              >
                <button
                  type="button"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                >
                  <span>{faq.question}</span>

                  <span className="text-xl text-red-600">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="px-5 pb-5 text-sm leading-7 text-zinc-600">
                    {faq.answer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black">
            MAX <span className="text-red-500">AUTO CARE</span>
          </p>

          <p className="text-xs text-zinc-500">
            © 2026 MAX Auto Care. All rights reserved.
          </p>
        </div>
      </footer>

      {/* STICKY CTA MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#080808]/95 p-3 backdrop-blur-lg md:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="shrink-0">
            <p className="text-xs text-zinc-400">Harga promo</p>
            <p className="text-lg font-black text-red-500">
              {formatPrice(PROMO_PRICE)}
            </p>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-2 gap-2">
            <OrderButton className="px-2 py-3 text-[10px]">
              ORDER SEKARANG
            </OrderButton>

            <OrderButton platform="shopee" className="px-2 py-3 text-[10px]">
              BELI DI SHOPEE
            </OrderButton>
          </div>
        </div>
      </div>
    </main>
  );
}
