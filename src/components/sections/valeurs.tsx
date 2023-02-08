import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Card, { ICardProps } from "@/components/library/card";
import Carousel, { ICarouselProps } from "@/components/library/carousel";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.div`
    background: ${(props) => props.theme.backgroundColor};
    height: 100%;
    display: flex;
    align-content: center;
`;

const cardContent: ICardProps[] = [
    {
        title: "Rapidité et simplicité",
        content: [
            "Nous nous engageons à simplifier votre transformation digitale en fournissant des solutions rapides, faciles à utiliser et qui vous donneront confiance dans le processus. Nous sommes là pour vous aider à chaque étape du chemin pour vous assurer une expérience sans stress.",
        ],
    },
    {
        title: "Relation de confiance",
        content: [
            "Nous sommes basés en Suisse et hébergeons nos serveurs et données en Suisse, ce qui garantit une protection de la sécurité et des données fiable. Nous établissons des relations de confiance à long terme avec nos clients pour garantir leur satisfaction à chaque étape.",
        ],
    },
    {
        title: "Technologies solides et modernes",
        content: [
            "Nous utilisons les meilleures technologies pour fournir des fonctionnalités incroyables et une viabilité à long terme de nos solutions. Les technologies que nous utilisons sont largement utilisées et maintenues, ce qui signifie que si vous engagez un autre développeur, il sera facile de trouver quelqu'un pour travailler sur votre site.",
        ],
    },
    {
        title: "Nous fournissons le code au client",
        content: [
            "Nous croyons en la transparence et la collaboration, c'est pourquoi nous fournissons toujours le code source de vos projets à nos clients, ce qui leur permet de disposer d'une solution totalement personnalisée et d'engager un développeur pour étendre leur site sans avoir à payer une nouvelle fois.",
        ],
    },
    {
        title: "Prix attractif",
        content: [
            "Nous offrons des solutions économiques sans compromettre la qualité, les performances ou la sécurité. Obtenez le site Web moderne et professionnel dont votre entreprise a besoin à un prix abordable, avec des projets de site Web à partir de 500.-",
        ],
    },
];

const Valeurs: React.FC = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const el = carouselRef.current;
        /*gsap.fromTo(
            el,
            { opacity: 0 },
            { 
                opacity: 1, 
                duration: 5, 
                scrollTrigger: { 
                    trigger: el,
                    start: "top center"
                }
            }
        );*/
    }, []);

    return (
        <Section>
            <div ref={carouselRef}>
                <Carousel>
                    {cardContent.map((cc) => {
                        return <Card key={cc.title} {...cc} />;
                    })}
                </Carousel>
            </div>
        </Section>
    );
};
export default Valeurs;
