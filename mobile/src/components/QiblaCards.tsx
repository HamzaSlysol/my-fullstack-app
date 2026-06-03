import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { ImageSourcePropType } from "react-native";

import type { Hotel } from "../api/hotels";
import type { PackageItem } from "../data/qibla";
import { colors, fonts, shadow } from "../theme";
import { BulletList, Card, PrimaryButton } from "./ui";

type SimpleItem = {
  title: string;
  description: string;
  marker: string;
};

export function Marker({
  value,
  inverse,
  large,
}: {
  value: string;
  inverse?: boolean;
  large?: boolean;
}) {
  return (
    <View
      style={[
        styles.marker,
        inverse && styles.markerInverse,
        large && styles.markerLarge,
      ]}
    >
      <Text
        style={[
          styles.markerText,
          inverse && styles.markerTextInverse,
          large && styles.markerTextLarge,
        ]}
      >
        {value}
      </Text>
    </View>
  );
}

export function BenefitRow({
  item,
  inverse,
}: {
  item: SimpleItem;
  inverse?: boolean;
}) {
  return (
    <View style={styles.benefitRow}>
      <Marker value={item.marker} inverse={inverse} />
      <View style={styles.benefitCopy}>
        <Text style={[styles.benefitTitle, inverse && styles.inverseText]}>
          {item.title}
        </Text>
        <Text style={[styles.benefitBody, inverse && styles.inverseBody]}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

export function ValueRow({ item }: { item: SimpleItem }) {
  return (
    <View style={styles.valueRow}>
      <Marker value={item.marker} />
      <View style={styles.benefitCopy}>
        <Text style={styles.benefitTitle}>{item.title}</Text>
        <Text style={styles.benefitBody}>{item.description}</Text>
      </View>
    </View>
  );
}

export function ServiceCard({
  item,
  onDetails,
}: {
  item: SimpleItem & { items: string[] };
  onDetails: () => void;
}) {
  return (
    <Card style={styles.serviceCard}>
      <Marker value={item.marker} large />
      <Text style={styles.serviceTitle}>{item.title}</Text>
      <Text style={styles.serviceBody}>{item.description}</Text>
      <View style={styles.divider} />
      <BulletList items={item.items} />
      <PrimaryButton label="See Details" onPress={onDetails} style={styles.cardButton} />
    </Card>
  );
}

export function ProcessCard({ item }: { item: SimpleItem }) {
  return (
    <Card style={styles.processCard}>
      <View style={styles.processMarker}>
        <Text style={styles.processMarkerText}>{item.marker}</Text>
      </View>
      <Text style={styles.processTitle}>{item.title}</Text>
      <Text style={styles.processBody}>{item.description}</Text>
    </Card>
  );
}

export function PackageCard({
  item,
  onDetails,
}: {
  item: PackageItem;
  onDetails: () => void;
}) {
  return (
    <View style={[styles.packageCard, shadow]}>
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={styles.packageBg}
        imageStyle={styles.packageImage}
      >
        <View style={styles.packageOverlay} />
        <View style={styles.packageContent}>
          <View style={styles.badgeWrap}>
            {item.badges.map((badge) => (
              <View key={badge} style={styles.badge}>
                <Text style={styles.badgeText}>{badge}</Text>
              </View>
            ))}
          </View>

          <View style={styles.packageBottom}>
            <Text style={styles.packageDates}>{item.dates}</Text>
            <Text style={styles.packageTitle}>{item.title}</Text>
            <Text style={styles.packageBody}>{item.description}</Text>
            <BulletList items={item.highlights} inverse />

            <View style={styles.priceRow}>
              <Text style={styles.startFrom}>Start from</Text>
              <Text style={styles.price}>
                {item.price}
                <Text style={styles.perPerson}> /person</Text>
              </Text>
            </View>

            <PrimaryButton label="See Details" onPress={onDetails} variant="white" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export function OfferCard({
  title,
  discount,
  description,
  image,
  onPress,
}: {
  title: string;
  discount: string;
  description: string;
  image: ImageSourcePropType;
  onPress: () => void;
}) {
  return (
    <Card style={styles.offerCard}>
      <Image
        alt={title}
        source={image}
        resizeMode="cover"
        style={styles.offerImage}
      />
      <Text style={styles.offerTitle}>{title}</Text>
      <Text style={styles.offerDiscount}>{discount}</Text>
      <Text style={styles.offerBody}>{description}</Text>
      <PrimaryButton label="Get Offer" onPress={onPress} variant="white" />
    </Card>
  );
}

export function HotelTile({ item }: { item: Hotel }) {
  return (
    <Card style={styles.hotelTile}>
      {item.imageUrl ? (
        <Image
          alt={item.name}
          source={{ uri: item.imageUrl }}
          resizeMode="cover"
          style={styles.hotelImage}
        />
      ) : (
        <View style={styles.hotelImageFallback}>
          <Text style={styles.hotelImageInitial}>{item.name.slice(0, 1)}</Text>
        </View>
      )}

      <View style={styles.hotelContent}>
        <View style={styles.hotelTopRow}>
          <Text style={styles.hotelCity}>{item.displayCity}</Text>
          <Text style={styles.hotelRating}>{item.rating}</Text>
        </View>
        <Text style={styles.hotelName}>{item.name}</Text>
        <Text style={styles.hotelDistance}>
          {item.distanceLabel} from {item.nearestLandmark}
        </Text>
        <Text style={styles.hotelReview}>{item.reviewSummary}</Text>
      </View>

      <View style={styles.hotelFooter}>
        <Text style={styles.hotelReviewCount}>
          {item.reviewCount.toLocaleString()} reviews
        </Text>
        {item.priceFrom ? (
          <Text style={styles.hotelPrice}>From {item.priceFrom}</Text>
        ) : null}
      </View>
    </Card>
  );
}

export function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: ImageSourcePropType;
}) {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={[styles.teamCard, shadow]}
      imageStyle={styles.teamImage}
    >
      <View style={styles.teamOverlay} />
      <View style={styles.teamTextWrap}>
        <Text style={styles.teamName}>{name}</Text>
        <Text style={styles.teamRole}>{role}</Text>
      </View>
    </ImageBackground>
  );
}

export function LinkLikeButton({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.linkButton, pressed && styles.pressed]}
    >
      <Text style={styles.linkButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  marker: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: colors.green,
    borderWidth: 3,
    borderColor: colors.gold,
    alignItems: "center",
    justifyContent: "center",
  },
  markerInverse: {
    backgroundColor: colors.white,
  },
  markerLarge: {
    width: 72,
    height: 72,
    alignSelf: "center",
  },
  markerText: {
    color: colors.goldSoft,
    fontWeight: "900",
    fontSize: 13,
  },
  markerTextInverse: {
    color: colors.green,
  },
  markerTextLarge: {
    fontSize: 18,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: colors.gold,
  },
  benefitCopy: {
    flex: 1,
    gap: 6,
  },
  benefitTitle: {
    fontFamily: fonts.heading,
    fontSize: 23,
    lineHeight: 29,
    fontWeight: "700",
    color: colors.green,
  },
  benefitBody: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },
  inverseText: {
    color: colors.white,
  },
  inverseBody: {
    color: "rgba(255,255,255,0.86)",
  },
  serviceCard: {
    gap: 16,
    alignItems: "stretch",
  },
  serviceTitle: {
    fontFamily: fonts.heading,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "700",
    color: colors.green,
    textAlign: "center",
  },
  serviceBody: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
    textAlign: "center",
  },
  divider: {
    height: 1,
    backgroundColor: colors.gold,
    opacity: 0.8,
  },
  cardButton: {
    marginTop: 8,
  },
  processCard: {
    alignItems: "center",
    gap: 14,
  },
  processMarker: {
    width: 116,
    height: 116,
    borderRadius: 999,
    borderWidth: 5,
    borderColor: colors.gold,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  processMarkerText: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 34,
    fontWeight: "700",
  },
  processTitle: {
    fontFamily: fonts.heading,
    fontSize: 25,
    lineHeight: 31,
    fontWeight: "700",
    color: colors.green,
    textAlign: "center",
  },
  processBody: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
    textAlign: "center",
  },
  packageCard: {
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#d99a32",
    backgroundColor: colors.green,
  },
  packageBg: {
    minHeight: 500,
  },
  packageImage: {
    borderRadius: 6,
  },
  packageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(6,69,51,0.64)",
  },
  packageContent: {
    flex: 1,
    minHeight: 500,
    padding: 18,
    justifyContent: "space-between",
  },
  badgeWrap: {
    alignItems: "flex-end",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: 8,
  },
  badge: {
    borderRadius: 999,
    backgroundColor: colors.gold,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: "900",
  },
  packageBottom: {
    gap: 12,
  },
  packageDates: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 12,
    fontWeight: "900",
  },
  packageTitle: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "700",
  },
  packageBody: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 15,
    lineHeight: 22,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 12,
  },
  startFrom: {
    color: "rgba(255,255,255,0.84)",
    fontSize: 12,
    fontWeight: "800",
  },
  price: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 34,
    lineHeight: 38,
    fontWeight: "700",
  },
  perPerson: {
    fontSize: 12,
    fontWeight: "800",
    color: "rgba(255,255,255,0.84)",
  },
  offerCard: {
    backgroundColor: colors.green,
    borderColor: "#d99a32",
    gap: 12,
  },
  offerImage: {
    width: "100%",
    height: 150,
    borderRadius: 6,
    backgroundColor: colors.greenDark,
  },
  offerTitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 12,
    fontWeight: "900",
  },
  offerDiscount: {
    color: colors.goldSoft,
    fontFamily: fonts.heading,
    fontSize: 29,
    lineHeight: 34,
    fontWeight: "700",
  },
  offerBody: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
    lineHeight: 21,
  },
  hotelTile: {
    width: 280,
    minHeight: 340,
    backgroundColor: colors.white,
    gap: 14,
  },
  hotelImage: {
    width: "100%",
    height: 128,
    borderRadius: 6,
    backgroundColor: colors.softBg,
  },
  hotelImageFallback: {
    height: 128,
    borderRadius: 6,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  hotelImageInitial: {
    color: colors.goldSoft,
    fontFamily: fonts.heading,
    fontSize: 48,
    fontWeight: "700",
  },
  hotelContent: {
    gap: 9,
  },
  hotelTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  hotelCity: {
    flexShrink: 1,
    color: colors.green,
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  hotelRating: {
    minWidth: 42,
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: colors.gold,
    paddingHorizontal: 9,
    paddingVertical: 5,
    color: colors.white,
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
  },
  hotelName: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "700",
  },
  hotelDistance: {
    color: colors.green,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "800",
  },
  hotelReview: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
  },
  hotelFooter: {
    marginTop: "auto",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#d9e3df",
    gap: 7,
  },
  hotelReviewCount: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: "800",
  },
  hotelPrice: {
    color: colors.green,
    fontFamily: fonts.heading,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: "700",
  },
  teamCard: {
    minHeight: 250,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.gold,
    justifyContent: "flex-end",
  },
  teamImage: {
    borderRadius: 6,
  },
  teamOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(7,95,66,0.38)",
  },
  teamTextWrap: {
    padding: 18,
    backgroundColor: "rgba(7,95,66,0.82)",
    alignItems: "center",
  },
  teamName: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 22,
    fontWeight: "700",
  },
  teamRole: {
    color: "rgba(255,255,255,0.84)",
    marginTop: 4,
    fontSize: 11,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  linkButton: {
    minHeight: 44,
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  linkButtonText: {
    color: colors.green,
    fontSize: 14,
    fontWeight: "900",
  },
  pressed: {
    opacity: 0.72,
  },
});
