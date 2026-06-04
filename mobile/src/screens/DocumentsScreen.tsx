import { StyleSheet, Text, View } from "react-native";

import { documentGroups, images } from "../data/purePath";
import { colors, fonts } from "../theme";
import {
  BulletList,
  Card,
  PageHero,
  ScreenScroll,
  Section,
  SectionHeading,
} from "../components/ui";

export function DocumentsScreen() {
  return (
    <ScreenScroll backgroundColor={colors.paper}>
      <PageHero
        image={images.hero}
        title="Documents"
        body="Review the documents required for Umrah and Hajj travel with Pure Path."
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="Documents"
          title="Documents Required for Umrah and Hajj"
          body="Keep your paperwork ready before booking so visa processing and travel approval can move smoothly."
          center
        />

        <View style={styles.documentStack}>
          {documentGroups.map((group) => (
            <Card key={group.title} style={styles.documentCard}>
              <Text style={styles.documentTitle}>{group.title}</Text>
              <BulletList items={group.items} />
            </Card>
          ))}
        </View>
      </Section>
    </ScreenScroll>
  );
}

const styles = StyleSheet.create({
  documentStack: {
    gap: 18,
  },
  documentCard: {
    gap: 16,
  },
  documentTitle: {
    color: colors.green,
    fontFamily: fonts.heading,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "700",
  },
});
