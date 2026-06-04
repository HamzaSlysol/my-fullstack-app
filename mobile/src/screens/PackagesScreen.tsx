import { useEffect, useMemo, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { getFlights, type Flight } from "../api/flights";
import { getHotels, type Hotel, type HotelCity } from "../api/hotels";
import {
  getRestaurants,
  type Restaurant,
  type RestaurantCity,
} from "../api/restaurants";
import { images, pilgrimagePackages, sacredOffers } from "../data/purePath";
import type { ScreenProps } from "../types";
import {
  FlightTile,
  HotelTile,
  LinkLikeButton,
  OfferCard,
  PackageCard,
  RestaurantTile,
} from "../components/PurePathCards";
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

const RESTAURANT_CITY_ORDER: RestaurantCity[] = ["makkah", "madinah"];
const RESTAURANT_CITY_LABELS: Record<RestaurantCity, string> = {
  makkah: "Makkah",
  madinah: "Madinah",
};

export function PackagesScreen({ onNavigate }: ScreenProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [offersY, setOffersY] = useState(0);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isHotelsLoading, setIsHotelsLoading] = useState(true);
  const [hotelError, setHotelError] = useState<string | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isRestaurantsLoading, setIsRestaurantsLoading] = useState(true);
  const [restaurantError, setRestaurantError] = useState<string | null>(null);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isFlightsLoading, setIsFlightsLoading] = useState(true);
  const [flightError, setFlightError] = useState<string | null>(null);

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

  useEffect(() => {
    let isMounted = true;

    getRestaurants()
      .then((nextRestaurants) => {
        if (isMounted) {
          setRestaurants(nextRestaurants);
        }
      })
      .catch(() => {
        if (isMounted) {
          setRestaurantError("Restaurant listings are unavailable right now.");
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsRestaurantsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    getFlights()
      .then((nextFlights) => {
        if (isMounted) {
          setFlights(nextFlights);
        }
      })
      .catch(() => {
        if (isMounted) {
          setFlightError("Flight listings are unavailable right now.");
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsFlightsLoading(false);
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

  const restaurantGroups = useMemo(() => {
    return RESTAURANT_CITY_ORDER.map((city) => ({
      city,
      title:
        restaurants.find((restaurant) => restaurant.city === city)
          ?.displayCity ?? RESTAURANT_CITY_LABELS[city],
      restaurants: restaurants.filter((restaurant) => restaurant.city === city),
    })).filter((group) => group.restaurants.length > 0);
  }, [restaurants]);

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
    <ScreenScroll ref={scrollRef} className="bg-pure-softBg">
      <PageHero
        image={images.hero}
        title="Packages"
        body="Discover flexible Hajj and Umrah packages tailored to your needs. Pure Path supports every step of your pilgrimage with care and expertise."
      />

      <Section tone="soft" compact>
        <View className="gap-[18px]">
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
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            Loading hotels...
          </Text>
        ) : hotelError ? (
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            {hotelError}
          </Text>
        ) : hotelGroups.length > 0 ? (
          <View className="gap-7">
            {hotelGroups.map((group) => (
              <View key={group.city} className="gap-3.5">
                <Text className="text-lg font-black leading-6 text-pure-green">
                  {group.title}
                </Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToInterval={296}
                  decelerationRate="fast"
                  contentContainerClassName="gap-4 pr-5"
                >
                  {group.hotels.map((hotel) => (
                    <HotelTile key={hotel.id} item={hotel} />
                  ))}
                </ScrollView>
              </View>
            ))}
          </View>
        ) : (
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            Hotel options are coming soon.
          </Text>
        )}
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Nearby Dining"
          title="Restaurants Near the Holy Mosques"
          body="Browse nearby restaurant options in Makkah and Madinah with distance, category, rating, and review details."
        />

        {isRestaurantsLoading ? (
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            Loading restaurants...
          </Text>
        ) : restaurantError ? (
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            {restaurantError}
          </Text>
        ) : restaurantGroups.length > 0 ? (
          <View className="gap-7">
            {restaurantGroups.map((group) => (
              <View key={group.city} className="gap-3.5">
                <Text className="text-lg font-black leading-6 text-pure-green">
                  {group.title}
                </Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  snapToInterval={296}
                  decelerationRate="fast"
                  contentContainerClassName="gap-4 pr-5"
                >
                  {group.restaurants.map((restaurant) => (
                    <RestaurantTile key={restaurant.id} item={restaurant} />
                  ))}
                </ScrollView>
              </View>
            ))}
          </View>
        ) : (
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            Restaurant options are coming soon.
          </Text>
        )}
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Flight Options"
          title="Flights Ready for Your Journey"
          body="Browse active flight options with schedules, seats, fares, and direct booking links."
        />

        {isFlightsLoading ? (
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            Loading flights...
          </Text>
        ) : flightError ? (
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            {flightError}
          </Text>
        ) : flights.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={296}
            decelerationRate="fast"
            contentContainerClassName="gap-4 pr-5"
          >
            {flights.map((flight) => (
              <FlightTile key={flight.id} item={flight} />
            ))}
          </ScrollView>
        ) : (
          <Text className="text-[15px] leading-[22px] text-pure-muted">
            Flight options are coming soon.
          </Text>
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
          <View className="gap-4">
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
