import { ImageBackground, Text, View } from "react-native";

import {
  benefits,
  features,
  images,
  processSteps,
  servicesChecklist,
} from "../data/purePath";
import type { ScreenProps } from "../types";
import {
  BenefitRow,
  ProcessCard,
  ServiceCard,
} from "../components/PurePathCards";
import {
  FeatureGrid,
  ImageCard,
  PrimaryButton,
  ScreenScroll,
  Section,
  SectionHeading,
} from "../components/ui";

const talbiyah =
  "\u0644\u064e\u0628\u064e\u0651\u064a\u0652\u0643\u064e \u0671\u0644\u0644\u064e\u0651\u0670\u0647\u064f\u0645\u064e\u0651 \u0644\u064e\u0628\u064e\u0651\u064a\u0652\u0643\u064e";

export function HomeScreen({ onNavigate }: ScreenProps) {
  return (
    <ScreenScroll className="bg-pure-softBg">
      <ImageBackground
        source={images.hero}
        resizeMode="cover"
        className="min-h-[620px] justify-center"
      >
        <View className="absolute inset-0 bg-white/70" />
        <View className="items-center gap-[22px] px-5 py-11">
          <Text className="rounded-full bg-white/90 px-[18px] py-2.5 text-center text-base font-bold text-pure-heading">
            {talbiyah}
          </Text>
          <Text className="text-center font-serif text-3xl font-bold leading-[30px] text-pure-heading">
            Begin Your Sacred Journey with Peace of Mind
          </Text>
          <Text className="text-center text-base leading-[27px] text-pure-muted">
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
        <View className="gap-5">
          <SectionHeading
            eyebrow="About Us"
            title="Guiding Pilgrims with Honesty and Experience"
            inverse
          />
          <Text className="text-[17px] leading-[27px] text-pure-white">
            For over a decade, we have supported thousands of pilgrims on their
            journey to the Holy Lands. Our team provides transparent guidance,
            reliable arrangements, and heartfelt service rooted in integrity.
          </Text>
          <Text className="text-[17px] leading-[27px] text-pure-white">
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
        <View className="gap-6">
          {benefits.map((benefit) => (
            <BenefitRow key={benefit.title} item={benefit} />
          ))}
        </View>
        <ImageCard image={images.why} tall />
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
        <View className="gap-3">
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
