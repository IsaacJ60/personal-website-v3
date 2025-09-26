import React, { useEffect, useState } from "react";
import SnowEffect from "./portfolio/SnowEffect";
import YouTubeEmbed from "../components/portfolio/YoutubeEmbed";
import ImageCarousel from "./slideshows/ImageCarousel";
import TextPressure from "./ui/TextPressure";
import AnimatedContent from "./ui/Animated";
import FadeContent from "./ui/Faded";
import Aurora from "./ui/Aurora";

const interpolateColor = (start: any, end: any, progress: number) => {
    const r = Math.round(start.r + (end.r - start.r) * progress);
    const g = Math.round(start.g + (end.g - start.g) * progress);
    const b = Math.round(start.b + (end.b - start.b) * progress);
    return { r, g, b };
};

const Portfolio = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const endColors = {
        bg: { r: 13, g: 16, b: 29 }, //rgb(5, 13, 26)
        primary: { r: 100, g: 181, b: 246 }, // #64B5F6
        secondary: { r: 144, g: 202, b: 249 }, // #90CAF9
        border: { r: 17, g: 34, b: 64 }, // #112240
    };

    const startColors = {
        bg: { r: 25, g: 10, b: 0 }, //rgb(27, 10, 0)
        primary: { r: 224, g: 130, b: 54 }, //rgb(196, 114, 47)
        secondary: { r: 253, g: 186, b: 116 }, //rgb(218, 155, 93)
        border: { r: 76, g: 29, b: 0 }, // #4C1D00
    };

    const currentColors = {
        bg: interpolateColor(startColors.bg, endColors.bg, scrollProgress),
        primary: interpolateColor(startColors.primary, endColors.primary, scrollProgress),
        secondary: interpolateColor(startColors.secondary, endColors.secondary, scrollProgress),
        border: interpolateColor(startColors.border, endColors.border, scrollProgress),
    };

    return (
        <div
            className="min-h-screen relative transition-colors duration-300 overflow-x-hidden"
            style={{
                backgroundColor: `rgb(${currentColors.bg.r}, ${currentColors.bg.g}, ${currentColors.bg.b})`,
            }}
        >
            <Aurora
                colorStops={["#ff6229", "#ffd194", "#ed2626"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />
            <SnowEffect />

            <div className="absolute top-6 left-4 z-50">
                <a
                    href="/"
                    className="px-4 py-2 bg-opacity-50 hover:bg-opacity-75 bg-black text-white rounded-lg shadow-xl transition-colors"
                >
                    Back to Home
                </a>

            </div>

            <div className="relative p-10">
                <div className="relative h-40 sm:h-52 md:h-64 lg:h-72 xl:h-96">
                    <TextPressure
                        text="Creations!"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={36}
                    />
                </div>

                {/* Grid Layout for Free Media Placement */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example Media Tile */}
                    {/* <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={true}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0}
                        delay={0.3}
                    >
                        <div className="relative group">
                            <YouTubeEmbed videoId="pQwKSsAAS0A" title="Creative Demo Reel" />
                            <p className="absolute text-white text-sm bg-black/60 px-2 py-1 rounded">
                                First try at a one minute short film :D
                            </p>
                        </div>
                    </AnimatedContent> */}

                    <div className="relative p-6 border rounded-2xl backdrop-blur-md shadow-xl transition-all duration-300"
                        style={{
                            borderColor: `rgb(${currentColors.border.r}, ${currentColors.border.g}, ${currentColors.border.b})`,
                            color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
                        }}
                    >
                        <h2 className="text-2xl font-semibold mb-2">What's this?</h2>
                        <p className="text-base leading-relaxed">
                            A small collection of my favourite creative works. It contains photos, videos, writing, and more.
                            <br />
                            <br />
                            There's no real theme, just a showcase of my interests and hobbies. If you're visiting, feel free to take a look!
                        </p>
                    </div>


                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.2}
                        animateOpacity
                        scale={1.1}
                        threshold={0}
                        delay={0.3}
                    >
                        <ImageCarousel images={[
                            "/images/toronto.webp",
                            "/images/toronto2.webp",
                            "/images/toronto3.webp",
                            "/images/toronto4.webp",
                            "/images/toronto5.webp",
                            "/images/toronto6.webp",
                        ]} caption="Toronto" colors={currentColors} delay={3000} />
                    </AnimatedContent>

                    <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                        <ImageCarousel images={[
                            "/images/windsor2.webp",
                            "/images/waterloo1.webp",
                            "/images/waterloo2.webp",
                        ]} caption="Windsor & Waterloo" colors={currentColors} delay={5000} />
                    </FadeContent>

                    <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="flex space-x-4 relative p-6 border rounded-2xl backdrop-blur-md shadow-xl transition-all duration-300"
                            style={{
                                borderColor: `rgb(${currentColors.border.r}, ${currentColors.border.g}, ${currentColors.border.b})`,
                                color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
                            }}
                        >
                            <div>
                                <h2 className="text-2xl font-semibold mb-2">Favourite Tools</h2>
                                <p className="text-base leading-relaxed">
                                    After Effects has been my go-to for video editing, since I usually stick to shorter videos.
                                    <br />
                                    <br />
                                    For photos, I use Lightroom. Currently experimenting with darktable!
                                </p>
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-center w-24 md:w-48">
                                <img src="/images/aftereffects.webp" alt="After Effects Logo" className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto" />
                                <img src="/images/darktable.webp" alt="Lightroom Logo" className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto" />
                            </div>
                        </div>
                    </FadeContent>

                    <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="relative group">
                            <YouTubeEmbed videoId="nG5V65JCGkw" title="Recent AMV" />
                            <p className="absolute bottom-10 text-white text-sm bg-black/60 px-2 py-1 rounded">
                                AMV!
                            </p>
                        </div>
                    </FadeContent>

                    <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="relative group">
                            <YouTubeEmbed videoId="3rFp4DdBk8g" title="Mograph Style" />
                            <p className="absolute bottom-10 text-white text-sm bg-black/60 px-2 py-1 rounded">
                                Mograph Style
                            </p>
                        </div>
                    </FadeContent>

                    {/* <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                        <ImageCarousel images={[
                            "/images/china3.webp",
                            "/images/china4.webp",
                            "/images/windsor1.webp",
                            "/images/london1.webp",
                            "/images/pfps1.webp",
                            "/images/watch1.webp",
                            "/images/transformers1.webp",
                        ]} caption="Me!" colors={currentColors} delay={5000} />
                    </FadeContent> */}

                    <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="relative p-6 border rounded-2xl backdrop-blur-md shadow-xl transition-all duration-300"
                            style={{
                                borderColor: `rgb(${currentColors.border.r}, ${currentColors.border.g}, ${currentColors.border.b})`,
                                color: `rgb(${currentColors.primary.r}, ${currentColors.primary.g}, ${currentColors.primary.b})`,
                            }}
                        >
                            <h2 className="text-2xl font-semibold mb-2">Excerpt: <a href="https://medium.com/@tinytalesisaac/the-judge-44b93c75ae90" target="_blank" rel="noopener noreferrer"><u>The Judge</u></a></h2>
                            <p className="text-base leading-relaxed">
                                The spell of silence returned.
                                Accompanying it was a final, triumphant gust of wind.
                                It violently shook the light in the sphere, whipping Vainilton’s blue brush out of
                                his hand. Richard jolted upwards. A gaping hole of nothing was seen on the wall of
                                the spherical atmosphere which contained them.

                                <br />
                                <br />
                                Read more at <a href="https://medium.com/@tinytalesisaac/the-judge-44b93c75ae90" target="_blank" rel="noopener noreferrer"><u>TinyTales by Isaac</u></a>.
                            </p>
                        </div>
                    </FadeContent>

                    <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                        <div className="relative group">
                            <YouTubeEmbed videoId="u1PldgtGiRs" title="Valorant Edit!" />
                            <p className="absolute text-white text-sm bg-black/60 px-2 py-1 rounded">
                                Omen Edit!
                            </p>
                        </div>
                    </FadeContent>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
