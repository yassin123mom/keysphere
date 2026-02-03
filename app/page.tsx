import Link from "next/link";
import { Shield, Zap, Layers, Cpu, Cloud, DollarSign, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col font-poppins bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-protest-strike font-semibold cursor-pointer">KEYSPHERE</h1>
          </Link>
        </div>
        <nav className="flex gap-6 font-bold items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <Link href={"/waitinglist"} className="font-bold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
            Join the waitinglist
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center mt-20 px-6 text-center">
        <h1 className="font-protest-strike text-5xl md:text-6xl font-bold leading-tight">
          One API. All providers. No SDKs. No secrets.
        </h1>
        <p className="text-lg md:text-xl mt-4 font-semibold max-w-xl">
          Call OpenAI, Claude, Stripe, Resend, and more — just pass JSON.
        </p>
        <Link href={"/waitinglist"} className="bg-white text-black px-6 py-3 rounded-full mt-6 hover:bg-gray-200 transition">
          Start Building
        </Link>
      </main>

      {/* Features Section */}
      <section className="flex flex-col items-center justify-center mt-32 px-6">
        <h2 className="text-3xl font-bold mb-12">Why Keysphere?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl">
          <div className="flex flex-col items-center">
            <Shield className="w-16 h-16 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p>API keys never leave your server. Full security for front-end or mobile apps.</p>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-16 h-16 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Simple</h3>
            <p>Call multiple providers using a single JSON request. No SDKs needed.</p>
          </div>
          <div className="flex flex-col items-center">
            <Layers className="w-16 h-16 mb-4 text-white" />
            <h3 className="text-xl font-semibold mb-2">Unified</h3>
            <p>Connect OpenAI, Claude, Stripe, Resend, and more under one API.</p>
          </div>
        </div>
      </section>

      {/* Supported Providers Section */}
      <section className="flex flex-col items-center justify-center mt-32 px-6">
        <h2 className="text-3xl font-bold mb-12">Supported Providers</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center">
            
            <span>OpenAI</span>
          </div>
          <div className="flex flex-col items-center">
            
            <span>Claude</span>
          </div>
          <div className="flex flex-col items-center">
            
            <span>Stripe</span>
          </div>
          <div className="flex flex-col items-center">
            
            <span>Resend</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
<section className="flex flex-col items-center justify-center mt-32 px-6 text-center">
  <h2 className="text-3xl font-bold mb-12">How It Works</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl">
    {/* Step 1 */}
    <div className="flex flex-col items-center">
      <Cpu className="w-16 h-16 mb-4 text-white" />
      <h3 className="text-xl font-semibold mb-2">Connect Your Providers</h3>
      <p className="text-gray-300">
        Paste your API keys for OpenAI, Claude, Stripe, Resend, and more into your secure Keysphere dashboard.
      </p>
    </div>

    {/* Step 2 */}
    <div className="flex flex-col items-center">
      <Zap className="w-16 h-16 mb-4 text-white" />
      <h3 className="text-xl font-semibold mb-2">Call APIs with JSON</h3>
      <p className="text-gray-300">
        Send a simple JSON request from your app or front-end. No SDKs, no secrets exposed.
      </p>
    </div>

    {/* Step 3 */}
    <div className="flex flex-col items-center">
      <Layers className="w-16 h-16 mb-4 text-white" />
      <h3 className="text-xl font-semibold mb-2">Receive Unified Responses</h3>
      <p className="text-gray-300">
        Keysphere handles the provider calls and returns a clean response, so your app gets what it needs instantly.
      </p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center mt-32 py-12 border-t border-gray-700">
        <p className="mb-4">&copy; {new Date().getFullYear()} Keysphere. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </footer>
    </div>
  );
}
