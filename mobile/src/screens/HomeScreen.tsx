import { ImageBackground, StyleSheet, Text, View } from "react-native";

import {
  benefits,
  features,
  images,
  landingPackageCards,
  processSteps,
  servicesChecklist,
} from "../data/qibla";
import { colors, fonts } from "../theme";
import type { ScreenProps } from "../types";
import { BenefitRow, ProcessCard, ServiceCard } from "../components/QiblaCards";
import {
  FeatureGrid,
  ImageCard,
  PrimaryButton,
  ScreenScroll,
  Section,
  SectionHeading,
} from "../components/ui";

export function HomeScreen({ onNavigate }: ScreenProps) {
  return (
    <ScreenScroll backgroundColor={colors.softBg}>
      <ImageBackground
        source={images.hero}
        resizeMode="cover"
        style={styles.hero}
      >
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <Text style={styles.arabicPill}>لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ</Text>
          <Text style={styles.heroTitle}>
            Begin Your Sacred Journey with Peace of Mind
          </Text>
          <Text style={styles.heroBody}>
            Experience a seamless and spiritually enriching pilgrimage with
            expert guidance, premium accommodations, and fully transparent
            arrangements.
          </Text>

          <PrimaryButton
            label="View Packages"
            onPress={() => onNavigate("packages")}
          />
        </View>
      </ImageBackground>

      <Section tone="green">
        <ImageCard image={images.about} tall />
        <View style={styles.sectionStack}>
          <SectionHeading
            eyebrow="About Us"
            title="Guiding Pilgrims with Honesty and Experience"
            inverse
          />
          <Text style={styles.greenParagraph}>
            For over a decade, we have supported thousands of pilgrims on their
            journey to the Holy Lands. Our team provides transparent guidance,
            reliable arrangements, and heartfelt service rooted in integrity.
          </Text>
          <Text style={styles.greenParagraph}>
            Whether you are traveling alone or with family, we ensure you feel
            prepared, safe, and fully supported throughout the experience.
          </Text>
        </View>
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Where Comfort, Guidance, and Spiritual Care Come Together"
          body="From preparation to your return home, our services prioritise safety, clarity, and genuine care. These key benefits help ensure that every pilgrim feels supported at every moment of the journey."
        />
        <View style={styles.listStack}>
          {benefits.map((benefit) => (
            <BenefitRow key={benefit.title} item={benefit} />
          ))}
        </View>
        <ImageCard image={images.why} tall />
      </Section>

      <Section tone="green">
        <SectionHeading
          eyebrow="Packages"
          title="Complete care for your sacred travel plans"
          body="Every arrangement is planned to make your pilgrimage comfortable, meaningful, and stress-free."
          inverse
          center
        />
        <View style={styles.cardStack}>
          {landingPackageCards.map((card) => (
            <ServiceCard
              key={card.title}
              item={card}
              onDetails={() => onNavigate(card.detailsRoute ?? "packages")}
            />
          ))}
        </View>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Services"
          title="Every step arranged before you depart"
        />
        <FeatureGrid items={servicesChecklist} />
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Features"
          title="Support that stays close to the journey"
        />
        <FeatureGrid items={features} />
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Our Process"
          title="A Simple Process for a Smooth Pilgrimage"
          body="We take care of the details so you can focus on your worship, every step is designed to be simple, guided, and worry-free."
          center
        />
        <View style={styles.cardStack}>
          {processSteps.map((step) => (
            <ProcessCard
              key={step.title}
              item={step}
              onPress={
                step.detailsRoute
                  ? () => onNavigate(step.detailsRoute ?? "home")
                  : undefined
              }
            />
          ))}
        </View>
      </Section>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  hero: {
    minHeight: 620,
    justifyContent: "center",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.72)",
  },
  heroContent: {
    paddingHorizontal: 20,
    paddingVertical: 44,
    alignItems: "center",
    gap: 22,
  },
  arabicPill: {
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.88)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    color: colors.heading,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  heroTitle: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 44,
    lineHeight: 50,
    fontWeight: "700",
    textAlign: "center",
  },
  heroBody: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 27,
    textAlign: "center",
  },
  sectionStack: {
    gap: 20,
  },
  greenParagraph: {
    color: colors.white,
    fontSize: 17,
    lineHeight: 27,
  },
  actionWrap: {
    gap: 22,
  },
  listStack: {
    gap: 24,
  },
  cardStack: {
    gap: 18,
  },
});
