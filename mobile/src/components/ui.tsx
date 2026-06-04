import { forwardRef, type ReactNode } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

import { colors, fonts, shadow } from "../theme";
import type { Navigate, RouteName } from "../types";

type ScreenScrollProps = {
  children: ReactNode;
  backgroundColor?: string;
};

export const ScreenScroll = forwardRef<ScrollView, ScreenScrollProps>(
  function ScreenScroll({ children, backgroundColor = colors.softBg }, ref) {
    return (
      <ScrollView
        ref={ref}
        style={[styles.screen, { backgroundColor }]}
        contentContainerStyle={styles.screenContent}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    );
  },
);

type ButtonProps = {
  label: string;
  onPress: () => void;
  variant?: "green" | "white" | "outline";
  style?: StyleProp<ViewStyle>;
};

export function PrimaryButton({
  label,
  onPress,
  variant = "green",
  style,
}: ButtonProps) {
  const isWhite = variant === "white";
  const isOutline = variant === "outline";

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isWhite && styles.buttonWhite,
        isOutline && styles.buttonOutline,
        pressed && styles.buttonPressed,
        style,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          isWhite && styles.buttonTextGreen,
          isOutline && styles.buttonTextGreen,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

type SectionProps = {
  children: ReactNode;
  tone?: "paper" | "green" | "white" | "soft";
  compact?: boolean;
};

export function Section({ children, tone = "paper", compact }: SectionProps) {
  return (
    <View
      style={[
        styles.section,
        compact && styles.sectionCompact,
        tone === "green" && styles.sectionGreen,
        tone === "white" && styles.sectionWhite,
        tone === "soft" && styles.sectionSoft,
      ]}
    >
      {children}
    </View>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  inverse?: boolean;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  inverse,
  center,
}: SectionHeadingProps) {
  return (
    <View style={[styles.headingWrap, center && styles.center]}>
      <Text style={[styles.eyebrow, inverse && styles.eyebrowInverse]}>
        {eyebrow}
      </Text>
      <Text style={[styles.sectionTitle, inverse && styles.inverseText]}>
        {title}
      </Text>
      {body ? (
        <Text
          style={[
            styles.sectionBody,
            inverse && styles.inverseBody,
            center && styles.centerText,
          ]}
        >
          {body}
        </Text>
      ) : null}
    </View>
  );
}

type PageHeroProps = {
  title: string;
  body: string;
  image: ImageSourcePropType;
};

export function PageHero({ title, body, image }: PageHeroProps) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.pageHero}>
      <View style={styles.heroWash} />
      <View style={styles.pageHeroContent}>
        <Text style={styles.pageHeroTitle}>{title}</Text>
        <Text style={styles.pageHeroBody}>{body}</Text>
      </View>
    </ImageBackground>
  );
}

type ImageCardProps = {
  image: ImageSourcePropType;
  caption?: string;
  tall?: boolean;
};

export function ImageCard({ image, caption, tall }: ImageCardProps) {
  return (
    <View style={[styles.imageFrame, shadow]}>
      <Image
        alt={caption ?? ""}
        source={image}
        resizeMode="cover"
        style={[styles.imageCard, tall && styles.imageCardTall]}
      />
      {caption ? (
        <View style={styles.captionBar}>
          <Text style={styles.captionText}>{caption}</Text>
        </View>
      ) : null}
    </View>
  );
}

export function Card({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return <View style={[styles.card, shadow, style]}>{children}</View>;
}

export function BulletList({
  items,
  inverse,
}: {
  items: string[];
  inverse?: boolean;
}) {
  return (
    <View style={styles.bulletList}>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <View
            style={[styles.bulletDot, inverse && styles.bulletDotInverse]}
          />
          <Text
            style={[styles.bulletText, inverse && styles.bulletTextInverse]}
          >
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

export function FeatureGrid({ items }: { items: string[] }) {
  return (
    <View style={styles.featureGrid}>
      {items.map((item) => (
        <View key={item} style={styles.featurePill}>
          <View style={styles.featureDot} />
          <Text style={styles.featureText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export function ScreenActionRow({
  onNavigate,
  route,
  label,
  secondaryLabel,
  secondaryRoute,
}: {
  onNavigate: Navigate;
  route: RouteName;
  label: string;
  secondaryLabel?: string;
  secondaryRoute?: RouteName;
}) {
  return (
    <View style={styles.actionRow}>
      <PrimaryButton label={label} onPress={() => onNavigate(route)} />
      {secondaryLabel && secondaryRoute ? (
        <PrimaryButton
          label={secondaryLabel}
          onPress={() => onNavigate(secondaryRoute)}
          variant="outline"
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    paddingBottom: 28,
  },
  button: {
    minHeight: 52,
    borderRadius: 999,
    backgroundColor: colors.green,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.green,
  },
  buttonWhite: {
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderColor: colors.green,
  },
  buttonPressed: {
    opacity: 0.82,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "800",
  },
  buttonTextGreen: {
    color: colors.green,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 46,
    backgroundColor: colors.paper,
    gap: 28,
  },
  sectionCompact: {
    paddingVertical: 34,
  },
  sectionGreen: {
    backgroundColor: colors.green,
  },
  sectionWhite: {
    backgroundColor: colors.white,
  },
  sectionSoft: {
    backgroundColor: colors.softBg,
  },
  headingWrap: {
    gap: 12,
  },
  center: {
    alignItems: "center",
  },
  centerText: {
    textAlign: "center",
  },
  eyebrow: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0,
    fontWeight: "900",
    textTransform: "uppercase",
    color: colors.green,
  },
  eyebrowInverse: {
    color: colors.goldSoft,
  },
  sectionTitle: {
    fontFamily: fonts.heading,
    fontSize: 38,
    lineHeight: 44,
    fontWeight: "700",
    color: colors.heading,
  },
  sectionBody: {
    fontSize: 16,
    lineHeight: 25,
    color: colors.muted,
  },
  inverseText: {
    color: colors.white,
  },
  inverseBody: {
    color: "rgba(255,255,255,0.88)",
  },
  pageHero: {
    minHeight: 260,
    justifyContent: "center",
    overflow: "hidden",
  },
  heroWash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.76)",
  },
  pageHeroContent: {
    paddingHorizontal: 22,
    paddingVertical: 42,
    alignItems: "center",
  },
  pageHeroTitle: {
    fontFamily: fonts.heading,
    fontSize: 48,
    lineHeight: 54,
    fontWeight: "700",
    color: colors.heading,
    textAlign: "center",
  },
  pageHeroBody: {
    marginTop: 14,
    maxWidth: 520,
    fontSize: 16,
    lineHeight: 24,
    color: colors.muted,
    textAlign: "center",
  },
  imageFrame: {
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.gold,
    backgroundColor: colors.green,
  },
  imageCard: {
    width: "100%",
    height: 360,
  },
  imageCardTall: {
    height: 460,
  },
  captionBar: {
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.72)",
    alignItems: "flex-end",
  },
  captionText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "800",
    fontFamily: fonts.heading,
  },
  card: {
    borderRadius: 8,
    backgroundColor: colors.cream,
    borderWidth: 1,
    borderColor: "#d9e3df",
    padding: 20,
  },
  bulletList: {
    gap: 12,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  bulletDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.gold,
    marginTop: 6,
  },
  bulletDotInverse: {
    backgroundColor: colors.white,
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "700",
    color: colors.ink,
  },
  bulletTextInverse: {
    color: colors.white,
  },
  partnerWrap: {
    marginTop: 32,
    width: "100%",
    gap: 14,
  },
  partnerLabel: {
    color: "#243a47",
    fontSize: 15,
    fontWeight: "600",
  },
  partnerGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  partnerItem: {
    width: "47%",
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  partnerMark: {
    width: 34,
    height: 34,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  partnerMarkInner: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  partnerName: {
    flex: 1,
    color: "#303044",
    fontSize: 15,
    fontWeight: "900",
  },
  featureGrid: {
    gap: 12,
  },
  featurePill: {
    minHeight: 58,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d9e3df",
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  featureDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.gold,
  },
  featureText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "800",
    color: colors.ink,
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 14,
  },
  avatarStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 12,
    fontWeight: "900",
  },
  trustedText: {
    color: colors.heading,
    fontSize: 17,
    fontWeight: "900",
  },
  supportBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  supportIcon: {
    width: 58,
    height: 58,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  supportIconText: {
    color: colors.white,
    fontWeight: "900",
    fontSize: 18,
  },
  supportLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "800",
  },
  supportPhone: {
    color: colors.white,
    fontSize: 24,
    lineHeight: 30,
    fontFamily: fonts.heading,
    fontWeight: "700",
  },
  actionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
