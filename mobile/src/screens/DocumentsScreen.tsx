import { Text, View } from "react-native";

import { documentGroups, images } from "../data/purePath";
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
    <ScreenScroll className="bg-pure-paper">
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

        <View className="gap-[18px]">
          {documentGroups.map((group) => (
            <Card key={group.title} className="gap-4">
              <Text className="font-serif text-[26px] font-bold leading-8 text-pure-green">
                {group.title}
              </Text>
              <BulletList items={group.items} />
            </Card>
          ))}
        </View>
      </Section>
    </ScreenScroll>
  );
}
