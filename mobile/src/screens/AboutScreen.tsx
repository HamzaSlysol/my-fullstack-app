import { StyleSheet, Text, View } from "react-native";

import { images, team, values } from "../data/qibla";
import { colors } from "../theme";
import type { ScreenProps } from "../types";
import { TeamCard, ValueRow } from "../components/QiblaCards";
import {
  ContactSupportBlock,
  ImageCard,
  PageHero,
  PrimaryButton,
  ScreenScroll,
  Section,
  SectionHeading,
} from "../components/ui";

export function AboutScreen({ onNavigate }: ScreenProps) {
  return (
    <ScreenScroll backgroundColor={colors.paper}>
      <PageHero
        image={images.hero}
        title="About"
        body="Qibla assists pilgrims in fulfilling their sacred obligations smoothly. We combine organization, guidance, and spiritual care."
      />

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
          <View style={styles.actionWrap}>
            <PrimaryButton
              label="Learn More"
              onPress={() => onNavigate("packages")}
              variant="white"
            />
            <ContactSupportBlock />
          </View>
        </View>
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Our Value"
          title="Values Guiding Every Sacred Journey"
          body="Qibla is founded on values that honor faith, trust, and responsibility. We serve pilgrims with devotion and accountability."
        />
        <PrimaryButton label="Learn More" onPress={() => onNavigate("packages")} />
        <ImageCard image={images.hero} caption="Qibla, Since 2002" tall />
        <View style={styles.valuesStack}>
          {values.map((value) => (
            <ValueRow key={value.title} item={value} />
          ))}
        </View>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Our Team"
          title="Dedicated Team Serving Sacred Journeys"
          body="Every member is committed to guiding pilgrims with care and sincerity. We work together to ensure a calm and meaningful journey."
          center
        />
        <View style={styles.teamStack}>
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={images.why}
            />
          ))}
        </View>
      </Section>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
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
  valuesStack: {
    gap: 22,
  },
  teamStack: {
    gap: 16,
  },
});
