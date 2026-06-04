import { Text, View } from "react-native";

import { images, team, values } from "../data/purePath";
import type { ScreenProps } from "../types";
import { TeamCard, ValueRow } from "../components/PurePathCards";
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
    <ScreenScroll className="bg-pure-paper">
      <PageHero
        image={images.hero}
        title="About"
        body="Pure Path assists pilgrims in fulfilling their sacred obligations smoothly. We combine organization, guidance, and spiritual care."
      />

      <Section tone="green">
        <ImageCard image={images.about} tall />
        <View className="gap-5">
          <SectionHeading
            eyebrow="About Us"
            title="Guiding Pilgrims with Honesty and Experience"
            inverse
          />
          <Text className="text-[17px] leading-6.75 text-pure-white">
            For over a decade, we have supported thousands of pilgrims on their
            journey to the Holy Lands. Our team provides transparent guidance,
            reliable arrangements, and heartfelt service rooted in integrity.
          </Text>
          <Text className="text-[17px] leading-[27px] text-pure-white">
            Whether you are traveling alone or with family, we ensure you feel
            prepared, safe, and fully supported throughout the experience.
          </Text>
          <View className="gap-[22px]">
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
          body="Pure Path is founded on values that honor faith, trust, and responsibility. We serve pilgrims with devotion and accountability."
        />
        <PrimaryButton
          label="Learn More"
          onPress={() => onNavigate("packages")}
        />
        <ImageCard image={images.hero} caption="Pure Path, Since 2002" tall />
        <View className="gap-[22px]">
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
        <View className="gap-4">
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
