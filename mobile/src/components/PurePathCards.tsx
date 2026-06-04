import {
  Image,
  ImageBackground,
  Linking,
  Pressable,
  Text,
  View,
} from "react-native";
import type { ImageSourcePropType } from "react-native";

import type { Flight } from "../api/flights";
import type { Hotel } from "../api/hotels";
import type { Restaurant } from "../api/restaurants";
import type { PackageItem } from "../data/purePath";
import { cn } from "../utils/cn";
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
  const markerSizeClass = large
    ? "h-[72px] w-[72px] self-center"
    : "h-[52px] w-[52px]";
  const markerBgClass = inverse ? "bg-pure-white" : "bg-pure-green";
  const markerTextColorClass = inverse
    ? "text-pure-green"
    : "text-pure-goldSoft";

  return (
    <View
      className={cn(
        "items-center justify-center rounded-lg border-[3px] border-pure-gold",
        markerSizeClass,
        markerBgClass,
      )}
    >
      <Text
        className={cn(
          "text-[13px] font-black",
          markerTextColorClass,
          large && "text-lg",
        )}
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
  const titleColorClass = inverse ? "text-pure-white" : "text-pure-green";
  const bodyColorClass = inverse ? "text-white/80" : "text-pure-muted";

  return (
    <View className="flex-row items-start gap-3.5">
      <Marker value={item.marker} inverse={inverse} />
      <View className="flex-1 gap-1.5">
        <Text
          className={cn(
            "font-serif text-[20px] font-bold leading-[29px]",
            titleColorClass,
          )}
        >
          {item.title}
        </Text>
        <Text className={cn("text-[15px] leading-[22px]", bodyColorClass)}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

export function ValueRow({ item }: { item: SimpleItem }) {
  return (
    <View className="flex-row items-start gap-3.5 border-b border-pure-gold pb-[22px]">
      <Marker value={item.marker} />
      <View className="flex-1 gap-1.5">
        <Text className="font-serif text-[20px] font-bold leading-[29px] text-pure-green">
          {item.title}
        </Text>
        <Text className="text-[15px] leading-[22px] text-pure-muted">
          {item.description}
        </Text>
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
    <Card className="items-stretch gap-4">
      <Text className="text-center font-serif text-[24px] font-bold leading-9 text-pure-green">
        {item.title}
      </Text>
      <Text className="text-center text-[14px] leading-5.5 text-pure-muted">
        {item.description}
      </Text>
      <View className="h-px bg-pure-gold opacity-80" />
      <BulletList items={item.items} />
      <PrimaryButton label="See Details" onPress={onDetails} className="mt-2" />
    </Card>
  );
}

export function ProcessCard({
  item,
  onPress,
}: {
  item: SimpleItem;
  onPress?: () => void;
}) {
  const content = (
    <Card className="items-center gap-3.5">
      <View className="size-29 items-center justify-center rounded-full border-[3px] border-pure-gold bg-pure-green">
        <Text className="font-serif text-[18px] p-2 font-bold text-pure-white">
          {item.marker}
        </Text>
      </View>
      <Text className="text-center font-serif text-[20px] font-bold leading-7.75 text-pure-green">
        {item.title}
      </Text>
      <Text className="text-center text-[15px] leading-[22px] text-pure-muted">
        {item.description}
      </Text>
    </Card>
  );

  if (!onPress) {
    return content;
  }

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className="active:opacity-70"
    >
      {content}
    </Pressable>
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
    <View className="overflow-hidden rounded-lg border-2 border-[#d99a32] bg-pure-green shadow-lg shadow-pure-greenDeep/20 elevation-md">
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        className="min-h-[500px]"
        imageClassName="rounded-md"
      >
        <View className="absolute inset-0 bg-pure-greenDeep/60" />
        <View className="flex-1 justify-between p-4">
          <View className="flex-row flex-wrap items-end justify-end gap-2">
            {item.badges.map((badge) => (
              <View
                key={badge}
                className="rounded-full bg-pure-gold px-2.5 py-1.5"
              >
                <Text className="text-[11px] font-black text-pure-white">
                  {badge}
                </Text>
              </View>
            ))}
          </View>

          <View className="gap-3">
            <Text className="text-xs font-black text-white/90">
              {item.dates}
            </Text>
            <Text className="font-serif text-[22px] font-bold leading-7 text-pure-white">
              {item.title}
            </Text>
            <Text className="text-[15px] leading-5 text-white/90">
              {item.description}
            </Text>
            <BulletList items={item.highlights} inverse />

            <View className="flex-row items-end justify-between gap-3">
              <Text className="text-xs font-extrabold text-white/80">
                Start from
              </Text>
              <Text className="font-serif text-[22px] font-bold leading-6 text-pure-white">
                {item.price}
                <Text className="text-xs font-extrabold text-white/80">
                  {" "}
                  /person
                </Text>
              </Text>
            </View>

            <PrimaryButton
              label="See Details"
              onPress={onDetails}
              variant="white"
            />
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
    <Card tone="green" borderTone="gold" className="gap-3">
      <View className="h-[160px] w-full overflow-hidden rounded-md bg-pure-greenDark">
        <Image
          alt={title}
          source={image}
          resizeMode="cover"
          className="absolute inset-0 h-full w-full"
        />
      </View>

      <Text className="text-xs font-black text-white/90">{title}</Text>

      <Text className="font-serif text-[18px] font-bold leading-8 text-pure-goldSoft">
        {discount}
      </Text>

      <Text className="text-sm leading-5 text-white/90">{description}</Text>

      <PrimaryButton label="Get Offer" onPress={onPress} variant="white" />
    </Card>
  );
}

export function HotelTile({ item }: { item: Hotel }) {
  const link = item.link;
  const content = (
    <Card tone="white" className="min-h-[340px] w-[280px] gap-3.5">
      {item.imageUrl ? (
        <Image
          alt={item.name}
          source={{ uri: item.imageUrl }}
          resizeMode="cover"
          className="h-32 w-full rounded-md bg-pure-softBg"
        />
      ) : (
        <View className="h-32 items-center justify-center rounded-md bg-pure-green">
          <Text className="font-serif text-2xl font-bold text-pure-goldSoft">
            {item.name.slice(0, 1)}
          </Text>
        </View>
      )}

      <View className="gap-[9px]">
        <View className="flex-row items-center justify-between gap-2.5">
          <Text className="shrink text-xs font-black uppercase text-pure-green">
            {item.displayCity}
          </Text>
          <Text className="min-w-[42px] overflow-hidden rounded-full bg-pure-gold px-[9px] py-[5px] text-center text-xs font-black text-pure-white">
            {item.rating}
          </Text>
        </View>
        <Text className="font-serif text-xl font-bold leading-[30px] text-pure-heading">
          {item.name}
        </Text>
        <Text className="text-sm font-extrabold leading-5 text-pure-green">
          {item.distanceLabel} from {item.nearestLandmark}
        </Text>
        <Text className="text-sm leading-[21px] text-pure-muted">
          {item.reviewSummary}
        </Text>
      </View>

      <View className="mt-auto gap-[7px] border-t border-[#d9e3df] pt-3">
        <Text className="text-[13px] font-extrabold text-pure-ink">
          {item.reviewCount.toLocaleString()} reviews
        </Text>
        {item.priceFrom ? (
          <Text className="font-serif text-[16px] font-bold leading-6 text-pure-green">
            From {item.priceFrom}
          </Text>
        ) : null}
      </View>
    </Card>
  );

  if (!link) {
    return content;
  }

  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => {
        void Linking.openURL(link);
      }}
      className="active:opacity-70"
    >
      {content}
    </Pressable>
  );
}

export function RestaurantTile({ item }: { item: Restaurant }) {
  const link = item.link;
  const content = (
    <Card tone="white" className="min-h-[340px] w-[280px] gap-3.5">
      {item.imageUrl ? (
        <Image
          alt={item.name}
          source={{ uri: item.imageUrl }}
          resizeMode="cover"
          className="h-32 w-full rounded-md bg-pure-softBg"
        />
      ) : (
        <View className="h-32 items-center justify-center rounded-md bg-pure-green">
          <Text className="font-serif text-5xl font-bold text-pure-goldSoft">
            {item.name.slice(0, 1)}
          </Text>
        </View>
      )}

      <View className="gap-[9px]">
        <View className="flex-row items-center justify-between gap-2.5">
          <Text className="shrink text-xs font-black uppercase text-pure-green">
            {item.displayCity}
          </Text>
          <Text className="min-w-[42px] overflow-hidden rounded-full bg-pure-gold px-[9px] py-[5px] text-center text-xs font-black text-pure-white">
            {item.rating}
          </Text>
        </View>
        <Text className="self-start overflow-hidden rounded-full bg-pure-gold px-2.5 py-[5px] text-[11px] font-black text-pure-white">
          {item.category}
        </Text>
        <Text className="font-serif text-lg font-bold leading-[30px] text-pure-heading">
          {item.name}
        </Text>
        <Text className="text-sm font-extrabold leading-5 text-pure-green">
          {item.distanceLabel} from {item.nearestLandmark}
        </Text>
        <Text className="text-[13px] font-bold leading-[19px] text-pure-ink">
          {item.address}
        </Text>
        <Text className="text-sm leading-[21px] text-pure-muted">
          {item.reviewSummary}
        </Text>
      </View>

      <View className="mt-auto gap-[7px] border-t border-[#d9e3df] pt-3">
        <Text className="text-[13px] font-extrabold text-pure-ink">
          {item.reviewCount.toLocaleString()} reviews
        </Text>
        {link ? (
          <Text className="font-serif text-[14px] font-bold leading-6 text-pure-green">
            Open details
          </Text>
        ) : null}
      </View>
    </Card>
  );

  if (!link) {
    return content;
  }

  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => {
        void Linking.openURL(link);
      }}
      className="active:opacity-70"
    >
      {content}
    </Pressable>
  );
}

export function FlightTile({ item }: { item: Flight }) {
  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => {
        void Linking.openURL(item.bookingLink);
      }}
      className="active:opacity-70"
    >
      <Card tone="white" className="min-h-[300px] w-[280px] gap-[18px]">
        <View className="flex-row items-start justify-between gap-3.5">
          <View className="flex-1 gap-[5px]">
            <Text className="text-[11px] font-black uppercase text-pure-green">
              Airline
            </Text>
            <Text className="font-serif text-lg font-bold leading-[30px] text-pure-heading">
              {item.airline}
            </Text>
          </View>
          <Text className="min-w-[42px] overflow-hidden rounded-full bg-pure-gold px-[9px] py-[5px] text-center text-xs font-black text-pure-white">
            {item.rating}
          </Text>
        </View>

        <View className="flex-row items-start gap-2.5">
          <View className="flex-1 gap-1.5">
            <Text className="text-[15px] font-black leading-5 text-pure-green">
              {item.departureCity}
            </Text>
            <Text className="text-[13px] leading-[19px] text-pure-muted">
              {item.departureLabel}
            </Text>
          </View>
          <Text className="text-lg font-black leading-6 text-pure-gold">
            {"->"}
          </Text>
          <View className="flex-1 gap-1.5">
            <Text className="text-[12px] font-black leading-5 text-pure-green">
              {item.arrivalCity}
            </Text>
            <Text className="text-[12px] leading-[19px] text-pure-muted">
              {item.arrivalLabel}
            </Text>
          </View>
        </View>

        <View className="flex-row flex-wrap gap-2">
          <Text className="overflow-hidden rounded-full bg-pure-softBg px-2.5 py-1.5 text-xs font-black text-pure-green">
            {item.durationLabel}
          </Text>
          <Text className="overflow-hidden rounded-full bg-pure-softBg px-2.5 py-1.5 text-xs font-black text-pure-green">
            {item.seatsAvailable.toLocaleString()} seats
          </Text>
        </View>

        <View className="mt-auto gap-[7px] border-t border-[#d9e3df] pt-3">
          <Text className="text-[13px] font-extrabold text-pure-ink">From</Text>
          <Text className="font-serif text-[14px] font-bold leading-6 text-pure-green">
            {item.fareLabel}
          </Text>
        </View>
      </Card>
    </Pressable>
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
      className="min-h-[250px] justify-end overflow-hidden rounded-lg border-2 border-pure-gold shadow-lg shadow-pure-greenDeep/20 elevation-md"
      imageClassName="rounded-md"
    >
      <View className="absolute inset-0 bg-pure-green/40" />
      <View className="items-center bg-pure-green/80 p-[18px]">
        <Text className="font-serif text-[22px] font-bold text-pure-white">
          {name}
        </Text>
        <Text className="mt-1 text-[11px] font-black uppercase text-white/80">
          {role}
        </Text>
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
      className="min-h-11 self-start justify-center active:opacity-70"
    >
      <Text className="text-sm font-black text-pure-green">{label}</Text>
    </Pressable>
  );
}
