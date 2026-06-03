import { useEffect, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { getHotels, type Hotel, type HotelCity } from "../api/hotels";
import { images, pilgrimagePackages, sacredOffers } from "../data/qibla";
import { colors } from "../theme";
import type { ScreenProps } from "../types";
import {
  HotelTile,
  LinkLikeButton,
  OfferCard,
  PackageCard,
} from "../components/QiblaCards";
import {
  PageHero,
  ScreenScroll,
  Section,
  SectionHeading,
} from "../components/ui";

const HOTEL_CITY_ORDER: HotelCity[] = ["makkah", "madinah"];
const HOTEL_CITY_LABELS: Record<HotelCity, string> = {
  makkah: "Makkah",
  madinah: "Madinah",
};

export function PackagesScreen({ onNavigate }: ScreenProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [offersY, setOffersY] = useState(0);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isHotelsLoading, setIsHotelsLoading] = useState(true);
  const [hotelError, setHotelError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    getHotels()
      .then((nextHotels) => {
        if (isMounted) {
          setHotels(nextHotels);
        }
      })
      .catch(() => {
        if (isMounted) {
          setHotelError("Hotel listings are unavailable right now.");
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsHotelsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const hotelGroups = useMemo(() => {
    return HOTEL_CITY_ORDER.map((city) => ({
      city,
      title:
        hotels.find((hotel) => hotel.city === city)?.displayCity ??
        HOTEL_CITY_LABELS[city],
      hotels: hotels.filter((hotel) => hotel.city === city),
    })).filter((group) => group.hotels.length > 0);
  }, [hotels]);

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

      <Section tone="paper">
        <SectionHeading
          eyebrow="Hotel Stays"
          title="Hotels Close to the Holy Mosques"
          body="Browse live accommodation options in Makkah and Madinah with distance and review details."
        />

        {isHotelsLoading ? (
          <Text style={styles.hotelStatus}>Loading hotels...</Text>
        ) : hotelError ? (
          <Text style={styles.hotelStatus}>{hotelError}</Text>
        ) : hotelGroups.length > 0 ? (
          <View style={styles.hotelGroupStack}>
            {hotelGroups.map((group) => (
              <View key={group.city} style={styles.hotelGroup}>
                <Text style={styles.hotelCityTitle}>{group.title}</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToInterval={296}
                  decelerationRate="fast"
                  contentContainerStyle={styles.hotelCarousel}
                >
                  {group.hotels.map((hotel) => (
                    <HotelTile key={hotel.id} item={hotel} />
                  ))}
                </ScrollView>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.hotelStatus}>Hotel options are coming soon.</Text>
        )}
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
  hotelGroupStack: {
    gap: 28,
  },
  hotelGroup: {
    gap: 14,
  },
  hotelCityTitle: {
    color: colors.green,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "900",
  },
  hotelCarousel: {
    gap: 16,
    paddingRight: 20,
  },
  hotelStatus: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
});
