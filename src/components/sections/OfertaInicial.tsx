'use client'
import { motion } from "framer-motion"
import { ofertaInicial } from "@/data/oferta-inicial"
import Button from "../ui/Button"

export default function OfertaInicial(){
    return (
        <section
            id='asesoria'
            aria-labelledby="oferta-inicial-heading"
            className="bg-[#F0EBE4]"
            style={{
                paddingTop: 'clamp(4.5rem, 8vw, 7rem)',
                paddingBottom: 'clamp(5rem, 9vw, 8rem)'
            }}
        >
            <div
                className="max-w-content mx-auto"
                style={{
                    paddingLeft: 'clamp(2rem, 6vw, 6rem)',
                    paddingRight: 'clamp(2rem, 6vw, 6rem)',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin:'-80px' }}
                    transition={{ duration: 0.95, ease: [0.19, 1, 0.22, 1]}}
                    className="mb-14 md:mb-16"
                >
                    <p
                        className="font-sans uppercase text-brand-smoke/45 text-[0.62rem] tracking-[0.32em] mb-5"
                    >
                        {ofertaInicial.eyebrow}
                    </p>
                    <h2
                        id="oferta-inicial-heading"
                        className="font-serif font-light text-brand-smoke tracking-[-0.035em]"
                        style={{
                        fontSize: 'clamp(2.4rem, 4.6vw, 5rem)',
                        lineHeight: 0.95,
                        }}
                        >
                            {ofertaInicial.title}
                            <br />
                            <span className="text-brand-smoke/32">{ofertaInicial.highlight}</span>
                        </h2>
                </motion.div>
                
                <div className="grid  gap-10 md:grid-cols-[1.1fr_0.75fr] md:gap-16 xl:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px'}}
                        transition={{ duration: 0.95, ease: [0.19, 1, 0.22, 1]}}
                        className="border border-brand-smoke/10 bg-brand-sand/70  shadow-[0_24px_70px_rgba(47,42,40,0.06)]"
                        style={{ padding: 'clamp(2rem, 3vw, 3rem)' }}
                    >
                        <h3 className="font-serif font-light text-brand-smoke text-[1.35rem] mb-5">
                        {ofertaInicial.introTitle}
                        </h3>

                        <p className="font-sans text-brand-smoke/68 text-[0.9rem] leading-[1.85] mb-9 max-w-[42ch]">
                        {ofertaInicial.introText}
                        </p>

                        {/* Lista */}
                        <div className="border-t border-brand-smoke/10">
                        {ofertaInicial.items.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center justify-between  gap-8 border-b border-brand-smoke/10 py-4"
                            >
                            <span className="font-sans text-[0.84rem] text-brand-smoke/68">
                                {item.label}
                            </span>

                            <span className="shrink-0 font-serif text-[0.98rem] text-brand-smoke/90">
                                {item.value}
                            </span>
                            </div>
                        ))}
                        </div>

                        {/* Precio */}
                        {ofertaInicial.priceNote && (
                            <p className="mt-8 font-serif font-semibold text-brand-smoke text-[1.6rem]">
                                {ofertaInicial.priceNote}
                            </p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px'}}
                        transition={{delay: 0.08, duration: 0.95, ease: [0.19, 1, 0.22, 1]}}
                        className="flex flex-col justify-between md:pt-2"
                    >
                        <div>
                        <p className="font-sans uppercase text-brand-smoke/45 text-[0.62rem] tracking-[0.32em] mb-6">
                            {ofertaInicial.audienceLabel}
                        </p>

                        <div className="border-t border-brand-smoke/10">
                            {ofertaInicial.audience.map((text) => (
                            <p
                                key={text}
                                className="border-b border-brand-smoke/10 text-[0.92rem] text-brand-smoke/68 leading-[1.85] max-w-[36ch]"
                            >
                                {text}
                            </p>
                            ))}
                        </div>
                        </div>

                        <div className="mt-10">
                            <Button 
                                variant="dark"
                                href={ofertaInicial.ctaHref}> 
                                {ofertaInicial.ctaLabel}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}