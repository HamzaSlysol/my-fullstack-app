import { Linking, Pressable, Text, View } from "react-native";

import type { Navigate, RouteName } from "../types";

type FooterRouteLink = {
  label: string;
  route: RouteName;
};

type FooterActionLink = {
  label: string;
  href: string;
};

const quickLinks: FooterRouteLink[] = [
  { label: "Home", route: "home" },
  { label: "About Us", route: "about" },
  { label: "Packages", route: "packages" },
  { label: "Services", route: "services" },
  { label: "Documents", route: "documents" },
  { label: "Chat", route: "chat" },
];

const careLinks: FooterRouteLink[] = [
  { label: "Umrah Packages", route: "packages" },
  { label: "Hajj Programs", route: "packages" },
  { label: "Documentation", route: "documents" },
  { label: "Pilgrim Guidance", route: "services" },
];

const supportLinks: FooterActionLink[] = [
  { label: "Call Support", href: "tel:+923001234567" },
  { label: "Email Us", href: "mailto:support@purepath.com" },
  { label: "WhatsApp", href: "https://wa.me/923001234567" },
];

export function MobileFooter({ onNavigate }: { onNavigate: Navigate }) {
  return (
    <View className="border-t border-pure-gold bg-pure-green px-5 py-9">
      <View>
        <Text className="font-serif text-[30px] font-bold leading-9 text-pure-white">
          Pure Path
        </Text>
        <Text className="mt-4 text-[15px] leading-6 text-pure-white">
          We support Hajj and Umrah pilgrims with package guidance, documents,
          travel arrangements, and practical care before every sacred journey.
        </Text>

        <View className="mt-6 flex-row flex-wrap gap-3">
          <Pressable
            accessibilityRole="button"
            onPress={() => onNavigate("packages")}
            className="min-h-[48px] flex-1 items-center justify-center rounded-full border border-pure-gold px-5 active:opacity-80"
          >
            <Text className="text-sm font-extrabold text-pure-white">
              View Packages
            </Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              void Linking.openURL("tel:+923001234567");
            }}
            className="min-h-[48px] flex-1 items-center justify-center rounded-full border border-pure-gold px-5 active:opacity-80"
          >
            <Text className="text-sm font-extrabold text-pure-white">
              Call Support
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="mt-9 gap-7">
        <FooterRouteColumn
          title="Quick Links"
          links={quickLinks}
          onNavigate={onNavigate}
        />
        <FooterRouteColumn
          title="Pilgrimage Care"
          links={careLinks}
          onNavigate={onNavigate}
        />
        <FooterActionColumn title="Support" links={supportLinks} />
      </View>

      <View className="mt-8 border-t border-pure-gold pt-5">
        <Text className="text-sm leading-6 text-pure-white">
          Pure Path. All rights reserved.
        </Text>
        <Text className="text-sm leading-6 text-pure-white">
          Guided travel for Hajj and Umrah pilgrims.
        </Text>
      </View>
    </View>
  );
}

function FooterRouteColumn({
  title,
  links,
  onNavigate,
}: {
  title: string;
  links: FooterRouteLink[];
  onNavigate: Navigate;
}) {
  return (
    <View>
      <Text className="text-xs font-black uppercase leading-4 tracking-normal text-pure-white">
        {title}
      </Text>
      <View className="mt-4 flex-row flex-wrap gap-2.5">
        {links.map((link) => (
          <Pressable
            key={`${title}-${link.label}`}
            accessibilityRole="button"
            onPress={() => onNavigate(link.route)}
            className="min-h-[38px] rounded-full border border-pure-gold px-4 active:opacity-80"
          >
            <Text className="py-2 text-sm font-bold text-pure-white">
              {link.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function FooterActionColumn({
  title,
  links,
}: {
  title: string;
  links: FooterActionLink[];
}) {
  return (
    <View>
      <Text className="text-xs font-black uppercase leading-4 tracking-normal text-pure-white">
        {title}
      </Text>
      <View className="mt-4 flex-row flex-wrap gap-2.5">
        {links.map((link) => (
          <Pressable
            key={`${title}-${link.label}`}
            accessibilityRole="button"
            onPress={() => {
              void Linking.openURL(link.href);
            }}
            className="min-h-[38px] rounded-full border border-pure-gold px-4 active:opacity-80"
          >
            <Text className="py-2 text-sm font-bold text-pure-white">
              {link.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
