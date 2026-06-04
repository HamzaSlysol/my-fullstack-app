import { StyleSheet, View } from "react-native";

import { benefits, images, services } from "../data/qibla";
import { colors } from "../theme";
import type { ScreenProps } from "../types";
import { BenefitRow, ServiceCard } from "../components/QiblaCards";
import {
  ImageCard,
  PageHero,
  ScreenScroll,
  Section,
  SectionHeading,
} from "../components/ui";

export function ServicesScreen({ onNavigate }: ScreenProps) {
  return (
    <ScreenScroll backgroundColor={colors.paper}>
      <PageHero
        image={images.hero}
        title="Services"
        body="Qibla provides comprehensive services designed to support pilgrims throughout their sacred journey."
      />

      <Section tone="paper">
        <ImageCard image={images.why} tall />
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Where Comfort, Guidance, and Spiritual Care Come Together"
          body="From preparation to your return home, our services prioritize safety, clarity, and genuine care. These key benefits help ensure that every pilgrim feels supported at every moment of the journey."
        />
        <View style={styles.listStack}>
          {benefits.map((benefit) => (
            <BenefitRow key={benefit.title} item={benefit} />
          ))}
        </View>
      </Section>

      <Section tone="green">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything You Need for a Safe & Seamless Pilgrimage"
          body="From travel logistics to spiritual guidance, our services are designed to ensure your journey remains comfortable, meaningful, and stress-free."
          inverse
          center
        />
        <View style={styles.cardStack}>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              item={service}
              onDetails={() => onNavigate(service.detailsRoute ?? "packages")}
            />
          ))}
        </View>
      </Section>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  listStack: {
    gap: 24,
  },
  cardStack: {
    gap: 18,
  },
});
