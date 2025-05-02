"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CreditCard,
  Zap,
  Wallet,
  ChevronRight,
  Star,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
                  Raba
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Testimonials
              </Link>
            </nav>
            <div className="flex items-center">
              <Link
                href="#"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full hover:from-yellow-400 hover:to-yellow-500 shadow-sm transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Finance, Simplified with Crypto
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Buy airtime, pay utilities, and transact with stablecoins — all in one place.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full hover:from-yellow-400 hover:to-yellow-500 shadow-md transition-colors w-full sm:w-auto"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 relative max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Raba DeFi App Dashboard"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Crypto Finance Illustration"
                width={400}
                height={400}
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full py-2 px-6 shadow-lg border border-gray-100 md:col-span-2">
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
                <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                <span>Trusted by 10,000+ users worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Modern Finance</h2>
            <p className="text-xl text-gray-600">
              Experience the future of financial transactions with our comprehensive suite of services.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={item}
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Buy Airtime Illustration"
                  width={100}
                  height={100}
                  className="h-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Buy Airtime with Crypto</h3>
              <p className="text-gray-600">
                Purchase mobile airtime and data bundles using your favorite cryptocurrencies instantly.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={item}
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Pay Bills Illustration"
                  width={100}
                  height={100}
                  className="h-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pay Utility Bills</h3>
              <p className="text-gray-600">
                Settle electricity, water, and other utility bills seamlessly with cryptocurrency.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={item}
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Wallet className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="mb-4 flex justify-center">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Multiple Stablecoins Illustration"
                  width={100}
                  height={100}
                  className="h-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Stablecoins</h3>
              <p className="text-gray-600">
                Support for various stablecoins including USDT, USDC, and more for stable transactions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Raba Works</h2>
            <p className="text-xl text-gray-600">Get started in minutes with our simple three-step process.</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-yellow-200"></div>

              <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {/* Step 1 */}
                <motion.div className="relative text-center" variants={item}>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="mb-4 flex justify-center">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Create Account Illustration"
                      width={120}
                      height={120}
                      className="h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Create an Account</h3>
                  <p className="text-gray-600">Sign up and complete a simple verification process to get started.</p>
                </motion.div>

                {/* Step 2 */}
                <motion.div className="relative text-center" variants={item}>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="mb-4 flex justify-center">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Deposit Crypto Illustration"
                      width={120}
                      height={120}
                      className="h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Deposit Crypto</h3>
                  <p className="text-gray-600">Add your preferred stablecoins to your Raba wallet securely.</p>
                </motion.div>

                {/* Step 3 */}
                <motion.div className="relative text-center" variants={item}>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="mb-4 flex justify-center">
                    <Image
                      src="/placeholder.svg?height=120&width=120"
                      alt="Start Transacting Illustration"
                      width={120}
                      height={120}
                      className="h-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Start Transacting</h3>
                  <p className="text-gray-600">Pay bills, buy airtime, or send money instantly with low fees.</p>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full hover:from-yellow-400 hover:to-yellow-500 shadow-md transition-colors"
              >
                Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied users who have simplified their financial lives with Raba.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Testimonial 1 */}
            <motion.div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100" variants={item}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Raba has completely transformed how I handle my monthly bills. The process is seamless and I love being
                able to use my crypto holdings."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Crypto Enthusiast</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100" variants={item}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As someone who travels frequently, being able to top up my phone with crypto from anywhere in the world
                is a game-changer."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Digital Nomad</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100" variants={item}>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The multi-stablecoin support is fantastic. I can use whatever coins I have on hand without worrying
                about conversion fees."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-medium text-gray-900">Alex Rodriguez</h4>
                  <p className="text-sm text-gray-500">DeFi Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl p-8 sm:p-12 shadow-sm border border-yellow-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Simplify Your Finances?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already enjoying the benefits of crypto-powered bill payments and
                transactions.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full hover:from-yellow-400 hover:to-yellow-500 shadow-md transition-colors"
              >
                Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-base text-gray-500 hover:text-gray-900 transition-colors">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300 mr-2">
                  Raba
                </span>
                <span className="text-gray-500">© {new Date().getFullYear()} All rights reserved.</span>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
