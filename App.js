import React from "react";

export default function MagicMomentsNI() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src="/images/magic-moments-logo.jpg" alt="Magic Moments NI Logo" className="h-10" />
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-rose-600">Services</a>
            <a href="#pricing" className="hover:text-rose-600">Pricing</a>
            <a href="#faq" className="hover:text-rose-600">FAQ</a>
            <a href="#contact" className="hover:text-rose-600">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-rose-500 text-white px-4 py-2 shadow hover:bg-rose-600 transition">
            Get a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-white"/>
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Unforgettable Wedding Extras,
              <span className="block text-rose-600">Made Simple.</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Based in Newtownards & Belfast, we bring the wow-factor to Northern Ireland weddings with our
              Love Story Display, Cash Grabber and Video/Audio Guestbook Phone.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#services" className="rounded-full bg-rose-500 text-white px-5 py-3 shadow hover:bg-rose-600">Explore Services</a>
              <a href="#pricing" className="rounded-full border border-neutral-300 px-5 py-3 hover:border-rose-500 hover:text-rose-600">See Pricing</a>
            </div>
            <div className="mt-6 text-sm text-neutral-500">
              📍 Serving all of Northern Ireland · ☎️ 07873 215 883 · ✉️ jsmyth583@gmail.com
            </div>
          </div>

          {/* Hero mock visual */}
          <div className="relative">
            <img 
              src="/images/screen-mockup.jpg" 
              alt="Love Story Display with garland, lights, and black cover"
              className="rounded-3xl border border-neutral-200 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Services</h2>
          <p className="mt-3 text-neutral-600 max-w-3xl">
            Pick one show-stopper or bundle them together. We deliver, style, and collect — so you can relax and enjoy the day.
          </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Love Story Display */}
          <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition p-6">
            <div className="text-sm uppercase tracking-widest text-rose-600 font-semibold">Signature</div>
            <h3 className="mt-1 text-2xl font-bold">The Love Story Display</h3>
            <img 
              src="/images/screen-mockup.jpg" 
              alt="Wedding Love Story Display with garland and lights"
              className="mt-3 rounded-lg border border-neutral-200 shadow"
            />
            <p className="mt-4 text-neutral-600">A beautifully styled 55″ screen showcasing your photos and captions — from first date to “I do”. We design a full video slideshow including your first date, holidays, engagement party and more. 12-hour hire with custom design templates. <span className="font-semibold text-rose-600">From £600</span></p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5">
              <li>1080×1920 vertical slideshow area</li>
              <li>Romantic styling (garland + candles)</li>
              <li>Delivery, setup & collection included</li>
            </ul>
          </article>

          {/* Cash Grabber */}
          <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition p-6">
            <div className="text-sm uppercase tracking-widest text-purple-600 font-semibold">Crowd-Pleaser</div>
            <h3 className="mt-1 text-2xl font-bold">Cash Grabber – Wedding Edition</h3>
            <img 
              src="/images/cash-grabber1.jpg" 
              alt="Wedding Cash Grabber inflatable entertainment"
              className="mt-3 rounded-lg border border-neutral-200 shadow"
            />
            <p className="mt-4 text-neutral-600">High-energy reception entertainment. Tokens, tickets or prize notes whirl around — guests step in and try their luck! <span className="font-semibold text-purple-600">From £400</span></p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5">
              <li>Staffed for safety & fairness</li>
              <li>Custom branded tokens available</li>
              <li>Perfect during drinks or after dinner</li>
            </ul>
          </article>

          {/* Video/Audio Phone */}
          <article className="rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition p-6">
            <div className="text-sm uppercase tracking-widest text-pink-600 font-semibold">Keepsake</div>
            <h3 className="mt-1 text-2xl font-bold">Video/Audio Guestbook Phone</h3>
            <img 
              src="/images/video-guestbook.jpg" 
              alt="Wedding Video/Audio Guestbook retro phone"
              className="mt-3 rounded-lg border border-neutral-200 shadow"
            />
            <p className="mt-4 text-neutral-600">Guests pick up the handset and leave heartfelt (or hilarious) messages. Delivered as a video highlights reel or audio bundle. <span className="font-semibold text-pink-600">From £500</span></p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5">
              <li>Retro phone aesthetic</li>
              <li>Video + audio, or audio-only options</li>
              <li>Edited montage delivered after the day</li>
            </ul>
          </article>
        </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Pricing</h2>
          <p className="mt-3 text-neutral-600">Simple, all-in pricing. Travel within ~45 mins included. Extras and custom requests are welcome.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Individual Services</h3>
              <ul className="mt-4 space-y-2 text-neutral-700 text-sm list-disc pl-5">
                <li>Love Story Display – <span className="font-semibold">£600</span></li>
                <li>Cash Grabber – <span className="font-semibold">£400</span></li>
                <li>Video/Audio Guestbook Phone – <span className="font-semibold">£500</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-300 bg-rose-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Bundle Package</h3>
              <div className="text-4xl font-extrabold mt-2">£1,200</div>
              <p className="mt-2 text-sm text-neutral-700">Includes Screen + Cash Grabber + Video Guestbook · Best Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-bold">How long is the screen hire?</h3>
              <p className="mt-2 text-neutral-600">Up to 12 hours — from morning setup through the reception. We collect the same night.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-bold">Do you help make the slideshow?</h3>
              <p className="mt-2 text-neutral-600">Yes. Send photos + a few captions — we design the layout and theme including sections such as your first date, holidays, and engagement party. You approve before the big day.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-bold">Where do you cover?</h3>
              <p className="mt-2 text-neutral-600">Based in Newtownards; we cover all of Northern Ireland. Travel ~45 mins included as standard.</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-bold">What power do you need?</h3>
              <p className="mt-2 text-neutral-600">Standard mains for the screen and Cash Grabber. We bring extension leads and keep cables tidy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Check Your Date</h2>
          <p className="mt-3 text-neutral-600">Tell us your venue and what you’re interested in — we’ll confirm availability and lock a quote.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <form className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
              <div className="grid grid-cols-1 gap-4">
                <input className="w-full rounded-lg border border-neutral-300 px-4 py-3" placeholder="Your name" />
                <input className="w-full rounded-lg border border-neutral-300 px-4 py-3" placeholder="Email" />
                <input className="w-full rounded-lg border border-neutral-300 px-4 py-3" placeholder="Phone" />
                <input className="w-full rounded-lg border border-neutral-300 px-4 py-3" placeholder="Wedding date & venue" />
                <textarea className="w-full rounded-lg border border-neutral-300 px-4 py-3" rows={4} placeholder="Tell us what you’d like (Screen, Cash Grabber, Video/Audio Phone)…" />
                <button className="rounded-lg bg-rose-500 text-white px-5 py-3 font-semibold hover:bg-rose-600">Send Enquiry</button>
              </div>
            </form>

            <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
              <div className="text-sm text-neutral-600">Prefer WhatsApp or a quick call?</div>
              <div className="mt-2 text-2xl font-extrabold">07873 215 883</div>
              <div className="mt-1">jsmyth583@gmail.com</div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <a href="#" className="rounded-xl border border-neutral-200 px-4 py-3 hover:border-rose-500">Instagram</a>
                <a href="#" className="rounded-xl border border-neutral-200 px-4 py-3 hover:border-rose-500">Facebook</a>
              </div>
              <div className="mt-6 text-sm text-neutral-500">Business address: 172 Bangor Road, Newtownards, BT23 7PH</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-500 flex flex-col items-center gap-3">
        <img src="/images/magic-moments-logo.jpg" alt="Magic Moments NI Logo" className="h-12" />
        <div>© {new Date().getFullYear()} Magic Moments NI · All rights reserved.</div>
      </footer>
    </div>
  );
}
