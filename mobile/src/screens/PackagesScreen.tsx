import { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { images, pilgrimagePackages, sacredOffers } from "../data/qibla";
import { colors } from "../theme";
import type { ScreenProps } from "../types";
import { LinkLikeButton, OfferCard, PackageCard } from "../components/QiblaCards";
import {
  PageHero,
  ScreenScroll,
  Section,
  SectionHeading,
} from "../components/ui";

export function PackagesScreen({ onNavigate }: ScreenProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [offersY, setOffersY] = useState(0);

  function scrollToOffers() {
    if (!offersY) {
      return;
    }

    scrollRef.current?.scrollTo({
      y: Math.max(offersY - 12, 0),
      animated: true,
    });
  }

  return (
    <ScreenScroll ref={scrollRef} backgroundColor={colors.softBg}>
      <PageHero
        image={images.hero}
        title="Packages"
        body="Discover flexible Hajj and Umrah packages tailored to your needs. Qibla supports every step of your pilgrimage with care and expertise."
      />

      <Section tone="soft" compact>
        <View style={styles.packageStack}>
          {pilgrimagePackages.map((item) => (
            <PackageCard
              key={item.slug}
              item={item}
              onDetails={scrollToOffers}
            />
          ))}
        </View>
      </Section>

      <View onLayout={(event) => setOffersY(event.nativeEvent.layout.y)}>
        <Section tone="white">
          <SectionHeading
            eyebrow="Special Savings"
            title="Limited Time Sacred Journey Offers"
            body="Enjoy trusted services, premium accommodations, and valuable savings for a spiritually fulfilling experience."
          />
          <LinkLikeButton
            label="View All Offers ->"
            onPress={() => onNavigate("home")}
          />
          <View style={styles.offerStack}>
            {sacredOffers.map((offer) => (
              <OfferCard
                key={offer.title}
                title={offer.title}
                discount={offer.discount}
                description={offer.description}
                image={offer.image}
                onPress={() => onNavigate("home")}
              />
            ))}
          </View>
        </Section>
      </View>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  packageStack: {
    gap: 18,
  },
  offerStack: {
    gap: 16,
  },
});
