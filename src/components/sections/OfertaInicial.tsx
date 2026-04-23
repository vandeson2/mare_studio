'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { ofertaInicial } from "@/data/oferta-inicial"

export default function OfertaInicial(){
    return (
        <section
            aria-labelledby="oferta-inicial-heading"
            className="bg-brand-cream"
            style={{
                paddingTop: 'clamp(5rem, 10vw, 8rem)',
                paddingBottom: 'clamp(5rem, 10vw, 8rem)'
            }}
        >
            <div
                className="max-w-content mx-auto"
                style={{
                    paddingTop: 'clamp(2rem, 6vw, 6rem)',
                    paddingBottom: 'clamp(2rem, 6vw, 6rem)',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8}}
                    className="mb-10"
                >
                    <p
                        className="font-sans uppercase text-brand-smoke/45 text-[0.6rem] tracking-[0.25em] mb-4"
                    >
                        {ofertaInicial.eyebrow}
                    </p>
                    <h2
                        id="oferta-inicial-heading"
                        className="font-serif font-light text-brand-smoke tracking-[-0.02em]"
                        style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                        lineHeight: 1,
                        }}
                        >
                            {ofertaInicial.title}
                            <br />
                            <span className="text-brand-smoke/45">{ofertaInicial.highlight}</span>
                        </h2>
                </motion.div>
                
                <div className="grid md:grid-cols-[1fr_0.9fr] gap-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true}}
                        transition={{ duration: 0.9}}
                        className="border border-brand-smoke/10 bg-brand-sand"
                        style={{ padding: 'clamp(1.5rem, 2.5vw, 2rem)' }}
                    >
                        <h3 className="font-serif font-light text-brand-smoke text-[1.1rem] mb-3">
                        {ofertaInicial.introTitle}
                        </h3>

                        <p className="font-sans text-brand-smoke/70 text-[0.8rem] leading-[1.7] mb-6 max-w-[38ch]">
                        {ofertaInicial.introText}
                        </p>

                        {/* Lista */}
                        <div className="border-t border-brand-smoke/10">
                        {ofertaInicial.items.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between border-b border-brand-smoke/10 py-2.5"
                            >
                            <span className="text-[0.78rem] text-brand-smoke/70">
                                {item.label}
                            </span>

                            <span className="text-[0.85rem] font-serif text-brand-smoke">
                                {item.value}
                            </span>
                            </div>
                        ))}
                        </div>

                        {/* Precio */}
                        {ofertaInicial.priceNote && (
                            <p className="mt-5 font-serif text-brand-smoke text-[1rem]">
                                {ofertaInicial.priceNote}
                            </p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true}}
                        transition={{ delay: 0.05, duration: 0.9}}
                        className="flex flex-col justify-between"
                    >
                        <div>
                        <p className="font-sans uppercase text-brand-smoke/45 text-[0.6rem] tracking-[0.22em] mb-4">
                            {ofertaInicial.audienceLabel}
                        </p>

                        <div className="space-y-3">
                            {ofertaInicial.audience.map((text) => (
                            <p
                                key={text}
                                className="text-[0.82rem] text-brand-smoke/70 leading-[1.7] max-w-[32ch]"
                            >
                                {text}
                            </p>
                            ))}
                        </div>
                        </div>

                        <div className="mt-8">
                            <Link
                                href={ofertaInicial.ctaHref}
                                className="inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.22em] text-brand-smoke/65 hover:text-brand-smoke transition-colors"
                            >
                                <span className="w-8 h-9x bg-brand-smoke/25" aria-hidden="true" />
                                {ofertaInicial.ctaLabel}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}